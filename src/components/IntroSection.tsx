import React, { useState } from "react";
import { TRANSLATIONS, Lang } from "../translations";
import { 
  ArrowRight, 
  BrainCircuit, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Target, 
  HelpCircle, 
  XOctagon, 
  Zap, 
  ShieldAlert,
  Database,
  Briefcase,
  Layers,
  ChevronDown
} from "lucide-react";
import { motion } from "motion/react";

interface IntroSectionProps {
  onStart: () => void;
  lang: Lang;
}

const ADDITIONAL_CONTENT = {
  vi: {
    mythsTitle: "Sự Thật vs Lầm Tưởng Khi SME Áp Dụng AI",
    mythsSub: "XÓA BỎ RÀO CẢN TƯ DUY",
    myth1: "AI rất đắt đỏ, chỉ dành cho tập đoàn nghìn tỷ.",
    fact1: "Thực tế: Các phần mềm đỉnh cao như ChatGPT Plus, Claude Pro hay Canva AI chỉ có giá khoảng 20 USD/tháng nhưng giải phóng 200-300% năng lực làm việc của nhân viên.",
    myth2: "Phải có kỹ sư CNTT trình độ cao mới thiết kế được hệ thống.",
    fact2: "Thực tế: Sự ra đời của nền tảng No-code/Low-code và Prompt Engineering cho phép bất cứ quản lý bán hàng hay HR nào cũng xây dựng được Chatbot tư vấn sau 4 tiếng tìm hiểu.",
    myth3: "AI sẽ thay thế và cướp mất công việc của con người hoàn toàn.",
    fact3: "Thực tế: AI không thay thế con người trực tiếp. Những nhân sự biết dùng AI thành thạo đột phá hiệu suất sẽ thay thế những người dậm chân tại chỗ.",
    
    pillarsTitle: "Khám Phá Sâu 4 Trọng Tâm Chuyển Dịch",
    pillarsSub: "MÔ HÌNH TRƯỞNG THÀNH TRÍ TUỆ NHÂN TẠO",
    pillarsDesc: "Mỗi trục năng lực đóng vai trò như một bánh răng hoàn hảo. Việc lệch một trục cột sẽ tạo ra lực cản lớn làm thất thoát chi phí chuyển đổi số của doanh nghiệp.",

    strategyCardTitle: "1. Nhận Thức & Chiến Lược",
    strategyCardDesc: "Định vị vị thế công nghệ dài hạn, sự cam kết vững vàng của Ban giám đốc, và tinh thần phân nguồn bài bản ngân sách chiến lược.",
    dataCardTitle: "2. Dữ Liệu & Hạ Tầng",
    dataCardDesc: "Xác thực cấu trúc thông tin số hóa đám mây, các điểm nút kết nối phần mềm CRM/ERP và độ sạch sẵn sàng nạp cho mô hình thông minh.",
    peopleCardTitle: "3. Nhân Sự & Văn Hóa",
    peopleCardDesc: "Kỹ năng lập Prompt thực tế, mức độ tích hợp chatbot vào tác vụ hằng ngày và nhịp bồi dưỡng, nâng bước tư duy số nội bộ.",
    processCardTitle: "4. Ứng Dụng & Quy Trình",
    processCardDesc: "Tối ưu hóa các chuỗi tác vụ bán hàng tự động, làm dữ liệu truyền thông, kịch bản hành động tự cải tiến không tốn sức.",

    ctaBoxTitle: "Bạn Muốn Định Vị Trạng Thái Công Nghệ Doanh Nghiệp?",
    ctaBoxDesc: "Bấm nút bắt đầu để thực hiện ngay bài test. Cam kết bảo mật tuyệt đối thông tin dữ liệu của SME.",
    stats1Num: "+340",
    stats1Label: "SME Đã Thử Nghiệm",
    stats2Num: "16",
    stats2Label: "Chỉ Số Kiểm Chứng",
    stats3Num: "100%",
    stats3Label: "Phân Tích Độc Quyền",

    faqHeader: "Một Số Câu Hỏi Thường Gặp",
    faqQ1: "Bài test này mất bao lâu để hoàn thành?",
    faqA1: "Mất trung bình khoảng 5 đến 7 phút. Nhấn chọn phương án sát thực tế nhất với hiện trạng tại doanh nghiệp hôm nay.",
    faqQ2: "Doanh nghiệp siêu nhỏ (Micro-SME) có áp dụng được mô hình này không?",
    faqA2: "Cực kỳ nên áp dụng! Doanh nghiệp càng nhỏ càng dễ thiết lập cấu trúc AI thích ứng, giúp bứt phá doanh số nhanh chóng mà không gặp trở ngại cồng kềnh như tập đoàn.",
    faqQ3: "Kết quả bài test cung cấp cho tôi những gì?",
    faqA3: "Bạn nhận trực quan hóa radar năng lực 4 trục, phân loại cấp độ sẵn sàng kèm bảng đề xuất hành động cụ thể từ Chuyên gia Nguyễn Vũ Huy Hoàng."
  },
  en: {
    mythsTitle: "AI Myths vs Reality for SMEs",
    mythsSub: "BREAKING COGNITIVE BARRIERS",
    myth1: "AI is too expensive & serves only multi-billion conglomerates.",
    fact1: "Reality: Groundbreaking suites like ChatGPT Plus, Claude Pro, or Canva cost around only $20/month but unlock 2x-3x employee bandwidth easily.",
    myth2: "We need expert software engineers on-deck to deploy anything.",
    fact2: "Reality: No-code apps & simple prompt commands allow business generalists, HR leaders, or sales managers to design active chatbots in hours.",
    myth3: "AI will completely steal and take away human careers tomorrow.",
    fact3: "Reality: AI does not displace humans directly. Generative-empowered personnel who leverage AI will replace those who refuse to innovate.",

    pillarsTitle: "The Four Dynamic Dimensions of AI Success",
    pillarsSub: "AI MATURITY ARCHITECTURE",
    pillarsDesc: "Each of the pillars serves as a crucial cog. Lagging in a single dimension creates substantial friction, stalling digital transition efficiency.",

    strategyCardTitle: "1. Strategy & Vision",
    strategyCardDesc: "Assesses long-term executive support, structured investment allocation, and alignment of tech initiatives with business goals.",
    dataCardTitle: "2. Data & Infrastructure",
    dataCardDesc: "Measures cloud database standardisation, seamless API integrations of Core CRM/ERPs, and accuracy of proprietary pipeline information.",
    peopleCardTitle: "3. People & Culture",
    peopleCardDesc: "Tracks active prompt familiarity, team openness towards tech shifts, and organized internal upskilling schedules.",
    processCardTitle: "4. Processes & Tools",
    processCardDesc: "Evaluates standard flow automation, dynamic asset generation pipelines, and predictive analytics tools.",

    ctaBoxTitle: "Ready to Plot Your Organization's AI Position?",
    ctaBoxDesc: "Start the fast diagnostic to fetch your custom capability radar. Absolutely no personal details required.",
    stats1Num: "+340",
    stats1Label: "SMEs Audited",
    stats2Num: "16",
    stats2Label: "KPIs Assessed",
    stats3Num: "100%",
    stats3Label: "Actionable Intelligence",

    faqHeader: "Frequently Asked Questions",
    faqQ1: "How long does the audit take?",
    faqA1: "Typically around 5 to 7 minutes. Select the choice that represents your business state objectively.",
    faqQ2: "Can micro-enterprises or solos benefit from this framework?",
    faqA2: "Absolutely! Compact teams possess extreme agility, enabling zero-friction AI integration backbones compared to rigid corporate structures.",
    faqQ3: "What do I get upon completion?",
    faqA3: "You fetch a visual 4-axis performance radar, an eligibility level rating, and direct, curated advice authenticated by Nguyen Vu Huy Hoang."
  }
};

export default function IntroSection({ onStart, lang }: IntroSectionProps) {
  const t = TRANSLATIONS[lang];
  const ac = ADDITIONAL_CONTENT[lang];

  // Simple state for local FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="intro-section" 
      className="space-y-16"
    >
      {/* Hero Banner Section */}
      <motion.div 
        variants={itemVariants}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl p-6 sm:p-12 md:p-16 text-white"
      >
        <div className="absolute inset-0 z-0 opacity-15 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            alt="Futuristic Digital Tech Network"
            className="w-full h-full object-cover filter brightness-50 contrast-125"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Ambient light glow effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl z-0 pointer-events-none animate-pulse" style={{ animationDuration: "6s" }}></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-indigo-600/10 rounded-full filter blur-3xl z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 text-cyan-400 border border-cyan-500/25 px-4 py-1.5 rounded-full text-xxs sm:text-xs font-mono uppercase tracking-widest font-bold">
            <BrainCircuit className="h-4 w-4 animate-spin shrink-0 text-cyan-400" style={{ animationDuration: "8s" }} />
            <span>{t.introSub}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-300 to-indigo-400">
              {t.introHeader}
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
            {t.introDesc}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onStart}
              className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 via-indigo-555 to-cyan-500 hover:from-indigo-550 hover:to-cyan-400 text-white font-bold uppercase tracking-widest text-xs px-8 py-4.5 rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:shadow-cyan-500/20 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
            >
              <Zap className="h-4.5 w-4.5 text-amber-400 fill-amber-400 animate-bounce" />
              <span>{t.btnStartTest}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="flex items-center justify-center space-x-2 text-xxs sm:text-xs text-slate-450 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>{t.usersJoinedStat}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Numerical Quick Stats Dashboard Bar */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl"
      >
        <div className="text-center md:border-r border-slate-200 dark:border-slate-800 p-4">
          <p className="text-3xl sm:text-4xl font-black font-display text-indigo-600 dark:text-cyan-400">{ac.stats1Num}</p>
          <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">{ac.stats1Label}</p>
        </div>
        <div className="text-center md:border-r border-slate-200 dark:border-slate-800 p-4">
          <p className="text-3xl sm:text-4xl font-black font-display text-cyan-600 dark:text-teal-400">{ac.stats2Num}</p>
          <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">{ac.stats2Label}</p>
        </div>
        <div className="text-center p-4">
          <p className="text-3xl sm:text-4xl font-black font-display text-emerald-600 dark:text-emerald-400">{ac.stats3Num}</p>
          <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">{ac.stats3Label}</p>
        </div>
      </motion.div>

      {/* Grid of Context & Problem */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left column: Context */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className="lg:col-span-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="space-y-4">
            <div className="inline-flex bg-red-500/10 text-rose-500 dark:text-rose-400 p-3 rounded-xl border border-red-500/20 dark:border-red-500/25">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              {t.contextHeader}
            </h2>
            <div className="space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              <p>{t.contextDesc1}</p>
              <p>{t.contextDesc2}</p>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-6 bg-slate-50/60 dark:bg-slate-950/40 p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
            <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 block mb-1 uppercase tracking-wide">{t.strategicTip}</span>
            <p className="text-xs text-slate-600 dark:text-slate-400 italic">
              &ldquo;{t.strategicTipVal}&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Right column: Why Take the Test */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -4 }}
          className="lg:col-span-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="space-y-4">
            <div className="inline-flex bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 p-3 rounded-xl border border-indigo-500/20 dark:border-indigo-500/25">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              {t.whyHeader}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm font-medium">
              {t.whyIntro}
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                <CheckCircle2 className="h-4.5 w-4.5 text-cyan-500 dark:text-cyan-45 * text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>{t.whyReason1}</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                <CheckCircle2 className="h-4.5 w-4.5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>{t.whyReason2}</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                <CheckCircle2 className="h-4.5 w-4.5 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>{t.whyReason3}</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                <CheckCircle2 className="h-4.5 w-4.5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>{t.whyReason4}</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-4 flex items-center space-x-3 text-slate-500 dark:text-slate-400 text-xs">
            <Users className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
            <span>{t.usersJoinedStat}</span>
          </div>
        </motion.div>
      </div>

      {/* Section 1: Facts vs Myths for SMEs */}
      <motion.div variants={itemVariants} className="space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 bg-rose-500/10 text-rose-500 border border-rose-500/20 px-3 py-1 rounded-full text-xxs font-mono uppercase tracking-wider font-bold">
            <ShieldAlert className="h-3 w-3" />
            <span>{ac.mythsSub}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            {ac.mythsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50/50 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-850 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-indigo-500/30 transition-all">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-rose-500 font-bold text-sm">
                <XOctagon className="h-4.5 w-4.5" />
                <span>LIE 1</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-extrabold font-sans leading-snug">
                {ac.myth1}
              </p>
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl text-xs text-slate-650 dark:text-slate-300 leading-relaxed">
              <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">FACT ✅</p>
              {ac.fact1}
            </div>
          </div>

          <div className="bg-slate-50/50 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-850 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-indigo-500/30 transition-all">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-rose-500 font-bold text-sm">
                <XOctagon className="h-4.5 w-4.5" />
                <span>LIE 2</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-extrabold font-sans leading-snug">
                {ac.myth2}
              </p>
            </div>
            <div className="bg-emerald-500/5 border border-emerald-555/20 bg-emerald-505/5 border-emerald-500/20 p-4 rounded-xl text-xs text-slate-650 dark:text-slate-300 leading-relaxed">
              <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">FACT ✅</p>
              {ac.fact2}
            </div>
          </div>

          <div className="bg-slate-50/50 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-850 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-indigo-500/30 transition-all">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-rose-500 font-bold text-sm">
                <XOctagon className="h-4.5 w-4.5" />
                <span>LIE 3</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-extrabold font-sans leading-snug">
                {ac.myth3}
              </p>
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl text-xs text-slate-650 dark:text-slate-300 leading-relaxed">
              <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">FACT ✅</p>
              {ac.fact3}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 2: Deep Dive Into Core Pillars with Premium Layout & Graphics */}
      <motion.div variants={itemVariants} className="space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-1.5 bg-cyan-500/10 text-cyan-500 border border-cyan-500/25 px-3 py-1 rounded-full text-xxs font-mono uppercase tracking-wider font-bold">
            <Layers className="h-3 w-3" />
            <span>{ac.pillarsSub}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-white tracking-tight">
            {ac.pillarsTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {ac.pillarsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 bg-slate-100 dark:bg-slate-950 relative min-h-32">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" 
                alt="Strategy Vision" 
                className="w-full h-full object-cover filter brightness-90 grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-purple-600 text-white font-bold text-xxs px-2 py-1 rounded-lg shadow-sm">STRATEGY</div>
            </div>
            <div className="p-6 flex-1 space-y-2">
              <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white flex items-center space-x-2">
                <BrainCircuit className="h-5 w-5 text-purple-500" />
                <span>{ac.strategyCardTitle}</span>
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {ac.strategyCardDesc}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 bg-slate-100 dark:bg-slate-950 relative min-h-32">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" 
                alt="Data Automation" 
                className="w-full h-full object-cover filter brightness-90 grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-cyan-600 text-white font-bold text-xxs px-2 py-1 rounded-lg shadow-sm">DATA</div>
            </div>
            <div className="p-6 flex-1 space-y-2">
              <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white flex items-center space-x-2">
                <Database className="h-5 w-5 text-cyan-500" />
                <span>{ac.dataCardTitle}</span>
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {ac.dataCardDesc}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 bg-slate-100 dark:bg-slate-950 relative min-h-32">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" 
                alt="People Culture" 
                className="w-full h-full object-cover filter brightness-90 grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-emerald-600 text-white font-bold text-xxs px-2 py-1 rounded-lg shadow-sm">PEOPLE</div>
            </div>
            <div className="p-6 flex-1 space-y-2">
              <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white flex items-center space-x-2">
                <Users className="h-5 w-5 text-emerald-500" />
                <span>{ac.peopleCardTitle}</span>
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {ac.peopleCardDesc}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 bg-slate-100 dark:bg-slate-950 relative min-h-32">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" 
                alt="Process Automation" 
                className="w-full h-full object-cover filter brightness-90 grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-amber-600 text-white font-bold text-xxs px-2 py-1 rounded-lg shadow-sm">PROCESS</div>
            </div>
            <div className="p-6 flex-1 space-y-2">
              <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-amber-500" />
                <span>{ac.processCardTitle}</span>
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {ac.processCardDesc}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Structured Roadmap Journey / Steps info */}
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xs">
        <h3 className="text-md sm:text-lg font-bold text-slate-950 dark:text-white text-center uppercase tracking-widest font-mono">
          {t.roadmapHeader}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="flex flex-col items-center text-center space-y-3 bg-slate-50 dark:bg-slate-950/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-900 shadow-2xs">
            <div className="h-10 w-10 bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold rounded-full font-mono text-sm">
              1
            </div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{t.roadmapStep1Title}</h4>
            <p className="text-slate-550 dark:text-slate-400 text-xs leading-relaxed">
              {t.roadmapStep1Desc}
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 bg-slate-50 dark:bg-slate-950/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-900 shadow-2xs">
            <div className="h-10 w-10 bg-cyan-500/10 border border-cyan-500/30 text-cyan-650 dark:text-cyan-400 flex items-center justify-center font-bold rounded-full font-mono text-sm">
              2
            </div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{t.roadmapStep2Title}</h4>
            <p className="text-slate-550 dark:text-slate-400 text-xs leading-relaxed">
              {t.roadmapStep2Desc}
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 bg-slate-50 dark:bg-slate-950/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-900 shadow-2xs">
            <div className="h-10 w-10 bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold rounded-full font-mono text-sm">
              3
            </div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{t.roadmapStep3Title}</h4>
            <p className="text-slate-550 dark:text-slate-400 text-xs leading-relaxed">
              {t.roadmapStep3Desc}
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 bg-indigo-50/40 dark:bg-indigo-900/10 p-5 rounded-2xl border border-indigo-200/50 dark:border-cyan-400/20 shadow-2xs">
            <div className="h-10 w-10 bg-cyan-500/20 border border-cyan-400/40 text-cyan-600 dark:text-cyan-300 flex items-center justify-center font-bold rounded-full font-mono text-sm">
              4
            </div>
            <h4 className="font-extrabold text-indigo-600 dark:text-cyan-350 text-sm">{t.roadmapStep4Title}</h4>
            <p className="text-slate-550 dark:text-slate-400 text-xs leading-relaxed">
              {t.roadmapStep4Desc}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Accordion List for SME FAQs */}
      <motion.div variants={itemVariants} className="space-y-6 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-black font-display text-center text-slate-900 dark:text-white">
          {ac.faqHeader}
        </h3>

        <div className="space-y-3">
          {[
            { q: ac.faqQ1, a: ac.faqA1 },
            { q: ac.faqQ2, a: ac.faqA2 },
            { q: ac.faqQ3, a: ac.faqA3 }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 dark:text-white text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <HelpCircle className="h-4 w-4 text-cyan-500" />
                  <span>{item.q}</span>
                </span>
                <ChevronDown className={`h-4.5 w-4.5 text-slate-450 transition-transform duration-200 ${openFaq === idx ? "rotate-180 text-cyan-500" : ""}`} />
              </button>
              {openFaq === idx && (
                <div className="p-5 pt-0 border-t border-slate-250 border-slate-100 dark:border-slate-800/60 text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed bg-slate-50/50 dark:bg-slate-950/20">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lowermost Bottom CTA Segment with Overlapping Ambient Lights */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 to-indigo-950 border border-slate-800 p-8 sm:p-12 text-center text-white"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full filter blur-3xl z-0 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-xl mx-auto space-y-6">
          <h3 className="text-xl sm:text-3xl font-black font-display text-white">
            {ac.ctaBoxTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {ac.ctaBoxDesc}
          </p>
          <div className="pt-2">
            <button
              onClick={onStart}
              className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold uppercase tracking-widest text-xs px-10 py-5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{t.btnStartTest}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
