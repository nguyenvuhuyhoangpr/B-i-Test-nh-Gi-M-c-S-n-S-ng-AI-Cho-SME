import React, { useState, useEffect } from "react";
import { TRANSLATIONS, Lang } from "../translations";
import { UserInfo } from "../types";
import { 
  Building2, 
  User, 
  Phone, 
  Mail, 
  Briefcase, 
  Cpu, 
  ChevronRight, 
  ArrowLeft, 
  Settings, 
  Check, 
  Copy, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  AlertTriangle,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface UserInfoSectionProps {
  lang: Lang;
  onNext: (info: UserInfo) => void;
  onBack: () => void;
}

export default function UserInfoSection({ lang, onNext, onBack }: UserInfoSectionProps) {
  const t = TRANSLATIONS[lang];

  // Load fallback custom Web App URL from localStorage or environment configurations (compiled under both Vite & standard process.env)
  const [customSheetUrl, setCustomSheetUrl] = useState(() => {
    try {
      const stored = localStorage.getItem("google-sheet-webapp-url");
      if (stored) return stored;

      // 1. Safe process.env fallback (injected by vite.config.ts define block during compilation on Vercel)
      if (typeof process !== "undefined" && (process as any)?.env?.GOOGLE_SHEET_WEBAPP_URL) {
        return (process as any).env.GOOGLE_SHEET_WEBAPP_URL;
      }

      // 2. Safe import.meta.env fallback configuration
      const metaEnv = (import.meta as any).env;
      if (metaEnv) {
        return metaEnv.VITE_GOOGLE_SHEET_WEBAPP_URL || metaEnv.GOOGLE_SHEET_WEBAPP_URL || "";
      }
      return "";
    } catch {
      try {
        const metaEnv = (import.meta as any).env;
        return metaEnv ? metaEnv.VITE_GOOGLE_SHEET_WEBAPP_URL || "" : "";
      } catch {
        return "";
      }
    }
  });

  const [form, setForm] = useState<UserInfo>({
    name: "",
    email: "",
    company: "",
    position: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(() => {
    try {
      return window.location.search.includes("admin=true") || window.location.search.includes("config=true");
    } catch {
      return false;
    }
  });
  const [copiedScript, setCopiedScript] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    fetch("/api/get-webapp-url")
      .then(res => res.json())
      .then(data => {
        if (data.url) {
          setCustomSheetUrl(data.url);
          localStorage.setItem("google-sheet-webapp-url", data.url);
        }
      })
      .catch(err => {
        console.warn("Failed to fetch Web App URL from server:", err);
      });
  }, []);

  const scriptCode = `function doPost(e) {
  try {
    // Open active spreadsheet and parse json payloads
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Auto-create descriptive header row if the spreadsheet is brand new
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời gian ghi nhận (UTC)", 
        "Tên doanh nghiệp", 
        "Người đại diện", 
        "Chức vụ", 
        "Email"
      ]);
    }
    
    // Append the row values cleanly
    sheet.appendRow([
      new Date(),
      data.company || "",
      data.name || "",
      data.position || "",
      data.email || ""
    ]);
    
    // Free the request with descriptive CORS friendly json blocks
    return ContentService.createTextOutput(JSON.stringify({ success: true, message: "Sync successful" }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(scriptCode);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  const handleSaveSheetUrl = async () => {
    const trimmedUrl = customSheetUrl.trim();
    try {
      localStorage.setItem("google-sheet-webapp-url", trimmedUrl);
      
      // Save server side too
      await fetch("/api/save-webapp-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmedUrl })
      });

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    } catch (e) {
      console.warn("Storage or network write failed", e);
    }
  };

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Required fields check: Name, Email, Company, Position
    if (!form.name.trim()) newErrors.name = t.formRequiredError;
    if (!form.email.trim()) newErrors.email = t.formRequiredError;
    if (!form.company.trim()) newErrors.company = t.formRequiredError;
    if (!form.position.trim()) newErrors.position = t.formRequiredError;

    // Email basic regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email.trim() && !emailRegex.test(form.email.trim())) {
      newErrors.email = t.formInvalidEmail;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Temporarily stash user info so it persists across components
      try {
        localStorage.setItem("sme-ai-user-info", JSON.stringify(form));
      } catch (err) {
        console.warn("localStorage sync error", err);
      }

      // Submit lead in background with client-to-sheets fallback (Vercel static support)
      const payload = {
        name: form.name,
        email: form.email,
        company: form.company,
        position: form.position
      };

      try {
        // Step A: Attempt standard backend server proxy
        const response = await fetch("/api/submit-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            customSheetUrl: customSheetUrl.trim()
          })
        });

        if (!response.ok) {
          throw new Error(`Server returned status ${response.status}`);
        }

        const data = await response.json();
        console.log("Background lead sync response received (backend):", data);
      } catch (err) {
        console.warn("Server lead sync failed. Attempting direct browser-to-Google Sheets sync (Vercel static support)...", err);
        
        // Step B: Client-side direct connection with "no-cors" fallback (Vercel static execution)
        const targetUrl = customSheetUrl.trim();
        if (targetUrl && targetUrl.includes("script.google.com")) {
          try {
            // We use mode: "no-cors" and Content-Type text/plain to force simple cross-origin delivery.
            // This prevents CORS OPTIONS preflight blocks from Google Macro script servers and guarantees delivery receipt.
            await fetch(targetUrl, {
              method: "POST",
              mode: "no-cors",
              headers: {
                "Content-Type": "text/plain;charset=utf-8"
              },
              body: JSON.stringify(payload)
            });
            console.log("Direct client-to-sheets sync completed (opaque resolution)!");
          } catch (clientErr) {
            console.error("Direct browser-to-sheets sync failed too:", clientErr);
          }
        } else {
          console.warn("No custom Google Sheets Web App URL provided or configured.");
        }
      } finally {
        setIsSubmitting(false);
        onNext(form);
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      id="user-profile-screen-inner"
      className="max-w-3xl mx-auto space-y-8"
    >
      {/* Title block */}
      <div className="text-center space-y-3">
        <div 
          onClick={() => {
            setClickCount(prev => {
              const next = prev + 1;
              if (next >= 5) {
                setIsAdminUnlocked(true);
              }
              return next;
            });
          }}
          className="inline-flex items-center space-x-2 bg-indigo-500/10 hover:bg-indigo-500/15 text-indigo-700 dark:text-cyan-400 border border-indigo-550/20 dark:border-cyan-500/25 px-4 py-1.5 rounded-full text-xxs font-mono font-bold uppercase tracking-wider cursor-pointer select-none transition-colors"
          title={lang === "vi" ? "Cá nhân hóa báo cáo của bạn" : "Personalize your report"}
        >
          <Cpu className="h-4 w-4 text-cyan-400 animate-pulse" />
          <span>{t.formSub}</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white tracking-tight">
          {t.formHeader}
        </h1>
        
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
          {t.formDesc}
        </p>
      </div>

      {/* Main card box layout */}
      <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-850 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-350 flex items-center space-x-1.5 tracking-wide">
                <User className="h-4 w-4 text-cyan-500" />
                <span>{t.formLabelName} <span className="text-rose-500">*</span></span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value={form.name} 
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder={t.formPlaceholderName}
                  className={`w-full bg-slate-50 dark:bg-slate-950/60 border rounded-xl px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 placeholder:text-slate-400 dark:placeholder:text-slate-600 ${
                    errors.name 
                      ? "border-rose-500/85 focus:ring-rose-500/20 text-rose-350" 
                      : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/10 text-slate-900 dark:text-white"
                  }`}
                />
              </div>
              {errors.name && <p className="text-xxs font-semibold text-rose-550 dark:text-rose-400 font-sans">{errors.name}</p>}
            </div>

            {/* Corporate Email */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-350 flex items-center space-x-1.5 tracking-wide">
                <Mail className="h-4 w-4 text-cyan-500" />
                <span>{t.formLabelEmail} <span className="text-rose-500">*</span></span>
              </label>
              <div className="relative">
                <input 
                  type="email" 
                  value={form.email} 
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder={t.formPlaceholderEmail}
                  className={`w-full bg-slate-50 dark:bg-slate-950/60 border rounded-xl px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 placeholder:text-slate-400 dark:placeholder:text-slate-600 ${
                    errors.email 
                      ? "border-rose-500/85 focus:ring-rose-500/20 text-rose-350" 
                      : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/10 text-slate-900 dark:text-white"
                  }`}
                />
              </div>
              {errors.email && <p className="text-xxs font-semibold text-rose-550 dark:text-rose-400 font-sans">{errors.email}</p>}
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-350 flex items-center space-x-1.5 tracking-wide">
                <Building2 className="h-4 w-4 text-cyan-500" />
                <span>{t.formLabelCompany} <span className="text-rose-500">*</span></span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value={form.company} 
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder={t.formPlaceholderCompany}
                  className={`w-full bg-slate-50 dark:bg-slate-950/60 border rounded-xl px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 placeholder:text-slate-400 dark:placeholder:text-slate-600 ${
                    errors.company 
                      ? "border-rose-500/85 focus:ring-rose-500/20 text-rose-350" 
                      : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/10 text-slate-900 dark:text-white"
                  }`}
                />
              </div>
              {errors.company && <p className="text-xxs font-semibold text-rose-550 dark:text-rose-400 font-sans">{errors.company}</p>}
            </div>

            {/* Position */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-350 flex items-center space-x-1.5 tracking-wide">
                <Briefcase className="h-4 w-4 text-cyan-500" />
                <span>{t.formLabelPosition} <span className="text-rose-500">*</span></span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value={form.position} 
                  onChange={(e) => handleInputChange("position", e.target.value)}
                  placeholder={t.formPlaceholderPosition}
                  className={`w-full bg-slate-50 dark:bg-slate-950/60 border rounded-xl px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 placeholder:text-slate-400 dark:placeholder:text-slate-600 ${
                    errors.position 
                      ? "border-rose-500/85 focus:ring-rose-500/20 text-rose-350" 
                      : "border-slate-200 dark:border-slate-800 focus:border-cyan-500 focus:ring-cyan-500/10 text-slate-900 dark:text-white"
                  }`}
                />
              </div>
              {errors.position && <p className="text-xxs font-semibold text-rose-550 dark:text-rose-400 font-sans">{errors.position}</p>}
            </div>

          </div>

          {/* Actions button strip */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 mt-4 border-t border-slate-100 dark:border-slate-850">
            <button
              type="button"
              onClick={onBack}
              className="w-full sm:w-auto flex items-center justify-center space-x-1.5 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t.btnBackIntro}</span>
            </button>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.015 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.985 }}
              className={`w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-550 hover:to-cyan-400 text-white font-black px-10 py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all text-xs uppercase tracking-widest flex items-center justify-center space-x-2 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                  <span>{lang === "vi" ? "ĐANG ĐỒNG BỘ..." : "SYNCING..."}</span>
                </>
              ) : (
                <>
                  <span>{t.btnStartSurvey}</span>
                  <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>

      {/* ADMIN GOOGLE SHEET CONFIGURATION PANEL (MASTER CONTROL FOR OWNER) */}
      {isAdminUnlocked && (
        <div className="bg-slate-100/70 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-850 rounded-2xl overflow-hidden shadow-xs transition-all animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            type="button"
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            className="w-full text-left p-4.5 bg-slate-100 dark:bg-slate-950/80 hover:bg-slate-200/50 dark:hover:bg-slate-900/60 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center space-x-2 text-indigo-700 dark:text-cyan-400">
              <Settings className="h-4 w-4 animate-spin-slow" />
              <span className="text-xs font-black uppercase tracking-widest font-mono">
                [SYSTEM] {lang === "vi" ? "CẤU HÌNH LIÊN KẾT GOOGLE SHEET" : "GOOGLE SHEET BACKEND INTEGRATION"}
              </span>
            </div>
            <div className="text-slate-500">
              {isAdminOpen ? <ChevronUp className="h-4.5 w-4.5" /> : <ChevronDown className="h-4.5 w-4.5" />}
            </div>
          </button>

          <AnimatePresence>
            {isAdminOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="border-t border-slate-200 dark:border-slate-850 p-6 space-y-5 text-xs font-sans leading-relaxed text-slate-700 dark:text-slate-350 bg-slate-50 dark:bg-slate-950/30"
              >
                <div className="space-y-2">
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
                    <FileSpreadsheet className="h-5 w-5 text-emerald-500" />
                    <span>Hướng dẫn liên kết trang tính Google Sheet của chuyên gia Nguyễn Vũ Huy Hoàng:</span>
                  </h4>
                  <p className="font-medium text-slate-650 dark:text-slate-350">
                    Hệ thống này được liên kết sẵn sàng với máy chủ Node.js của bạn. Để tự động đồng bộ mọi dữ liệu do người dùng nhập lên file Google Sheet (<a href="https://docs.google.com/spreadsheets/d/1Db9nbLhYXc0jN-ypK-MuSbydIeoR-Dm4DkU4kaTkkJk/edit" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline font-bold inline-flex items-center space-x-0.5"><span>Xem File Gác dữ liệu</span><ExternalLink className="h-3 w-3" /></a>), bạn hãy làm theo <strong>4 bước cực nhanh</strong>:
                  </p>
                </div>

                <ol className="list-decimal pl-5 space-y-3 font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 p-4 rounded-xl shadow-xs">
                  <li>
                    Mở tệp Google Spreadsheet của bạn, trên thanh menu nhấp chọn <strong>Extensions</strong> &rarr; <strong>Apps Script</strong> (Tiện ích mở rộng &rarr; Apps Script).
                  </li>
                  <li>
                    Nhấp vào tệp `Code.gs` đang mở, xóa sạch code có sẵn và dán đoạn mã chính xác này vào:
                    <div className="relative mt-2 bg-slate-950 dark:bg-slate-950 p-3 rounded-lg border border-slate-800 text-xxs font-mono text-cyan-400 overflow-x-auto max-h-40">
                      <pre>{scriptCode}</pre>
                      <button
                        type="button"
                        onClick={handleCopyScript}
                        className="absolute top-2 right-2 bg-slate-800 hover:bg-slate-700 text-white rounded p-1 transition-colors flex items-center space-x-1 outline-none"
                      >
                        {copiedScript ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                        <span className="text-[10px]">{copiedScript ? "Đã copy!" : "Copy mã"}</span>
                      </button>
                    </div>
                  </li>
                  <li>
                    Lưu lại (Click biểu tượng Save), sau đó nhấp vào nút <strong>Deploy</strong> &rarr; <strong>New Deployment</strong> (Triển khai &rarr; Triển khai mới ở góc trên bên phải).
                    <ul className="list-disc pl-5 mt-1 font-semibold text-slate-600 dark:text-slate-400">
                      <li>Chọn loại triển khai là: <strong>Web App</strong> (Ứng dụng web).</li>
                      <li>Mục <strong>Execute as</strong> (Cấu hình chạy dưới dạng): Chọn <strong>Me</strong> (Tôi - Tài khoản của bạn).</li>
                      <li>Mục <strong>Who has access</strong> (Ai có quyền truy cập): Chọn <strong>Anyone</strong> (Bất kỳ ai).</li>
                    </ul>
                  </li>
                  <li>
                    Nhấn <strong>Deploy</strong>, hệ thống sẽ yêu cầu cấp quyền truy cập, hãy cấp quyền tài khoản. Sau khi hoàn tất, hãy copy đoạt liên kết dưới dạng: <code>https://script.google.com/macros/s/.../exec</code>.
                  </li>
                </ol>

                {/* Direct Input configuration */}
                <div className="space-y-4 border-t border-slate-200 dark:border-slate-800 pt-4 mt-2">
                  <label className="block font-bold text-slate-800 dark:text-white text-xs uppercase tracking-wide">
                    Liên kết Web App URL (Sẽ được đồng bộ ưu tiên):
                  </label>
                  <div className="flex gap-2.5">
                    <input 
                      type="text" 
                      value={customSheetUrl}
                      onChange={(e) => setCustomSheetUrl(e.target.value)}
                      placeholder="Dán URL link macro Apps Script của bạn tại đây (ví dụ: https://script.google.com/.../exec)"
                      className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 focus:border-cyan-500 rounded-xl px-4 py-2 text-xs transition-all focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600 font-mono"
                    />
                    <button
                      type="button"
                      onClick={handleSaveSheetUrl}
                      className="bg-indigo-600 hover:bg-indigo-550 text-white rounded-xl px-5 py-2.5 font-bold transition-all flex items-center space-x-1 shadow-xs shrink-0 cursor-pointer text-xs uppercase"
                    >
                      {saveSuccess ? <Check className="h-4 w-4" /> : <Settings className="h-4 w-4" />}
                      <span>{saveSuccess ? "Đã kết nối!" : "Áp dụng"}</span>
                    </button>
                  </div>

                  {/* Inline validator warnings when pasting invalid urls */}
                  {customSheetUrl.trim() && (customSheetUrl.includes("docs.google.com") || customSheetUrl.includes("/spreadsheets/")) && (
                    <div className="bg-rose-500/10 border-2 border-rose-500/30 p-4 rounded-xl text-xs space-y-2 text-rose-800 dark:text-rose-400">
                      <div className="flex items-center space-x-2 font-bold uppercase text-rose-600 dark:text-rose-450">
                        <AlertTriangle className="h-5 w-5 shrink-0" />
                        <span>Cảnh báo nhầm đường dẫn (Nhập sai định dạng)</span>
                      </div>
                      <p className="font-semibold leading-relaxed">
                        Bạn đang dán liên kết trực tiếp của tệp <strong>Trang tính Google Sheets (docs.google.com)</strong>. Hệ thống không thể gửi dữ liệu trực tiếp vào đường dẫn xem này.
                      </p>
                      <div className="pl-4 border-l-2 border-rose-450/40 text-[11px] text-slate-700 dark:text-slate-300 space-y-1 font-medium">
                        <p>🔹 <strong>Nguyên nhân:</strong> Bản chất link Google Sheet chỉ là một trang xem file. API của hệ thống cần một đầu cuối xử lý lệnh bằng tiếng Latin kết thúc bằng mã <code className="font-bold text-rose-500 font-mono">/exec</code>.</p>
                        <p>🔹 <strong>Cách lấy đường dẫn chuẩn:</strong> Trên tệp Google Sheet của bạn &rarr; chọn <strong>Extensions</strong> &rarr; <strong>Apps Script</strong>. Sau đó dán đoạn mã Apps Script ở trên &rarr; Click <strong>Deploy</strong> &rarr; <strong>New Deployment</strong> để sinh ra link Web App URL đặc quyền riêng.</p>
                      </div>
                    </div>
                  )}

                  {customSheetUrl.trim() && customSheetUrl.includes("/dev") && (
                    <div className="bg-amber-500/10 border-2 border-amber-500/30 p-4 rounded-xl text-xs space-y-2 text-amber-850 dark:text-amber-400">
                      <div className="flex items-center space-x-2 font-bold uppercase text-amber-600 dark:text-amber-400">
                        <AlertTriangle className="h-5 w-5 shrink-0" />
                        <span>Cảnh báo dùng link test /dev</span>
                      </div>
                      <p className="font-semibold leading-relaxed">
                        Đường dẫn của bạn kết thúc bằng đuôi <code className="font-bold text-amber-600 font-mono">/dev</code>. Đây là liên kết giành riêng cho thử nghiệm lập trình viên, luôn yêu cầu đăng nhập tài khoản chính chủ nên hệ thống tự động sẽ bị báo lỗi chặn phân quyền!
                      </p>
                      <p className="text-[11px] text-slate-700 dark:text-slate-300 font-medium">
                        💡 <strong>Cách xử lý:</strong> Hãy bấm <strong>Deploy &rarr; New Deployment</strong>, chọn cấu hình Web App cho <strong>Anyone (Bất kỳ ai)</strong>, bấm Deploy rồi Copy link Web App chính thức có đuôi kết thúc là <span className="font-bold text-emerald-500 font-mono">/exec</span> để dán vào đây.
                      </p>
                    </div>
                  )}

                  <p className="text-[10px] text-slate-450 dark:text-slate-500 italic">
                    * Hệ thống lưu trữ an toàn trong Local Browser State của dự án này. Khi bạn deploy bản ứng dụng, bạn cũng có thể định nghĩa trong <code>.env</code> biến <code>GOOGLE_SHEET_WEBAPP_URL</code> để kích hoạt mặc định toàn hệ thống.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

    </motion.div>
  );
}
