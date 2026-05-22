import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialization of Google GenAI SDK to avoid crash on startup
let aiClient: GoogleGenAI | null = null;
function getGenAI() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY" && key !== "") {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

// Full Vietnamese consultation fallback report in case Gemini key is not configured or fails
function getStaticConsultation(name: string, company: string, position: string, industry: string, scores: any, totalScore: number) {
  const level = totalScore <= 35 ? "Sơ khai (Khởi đầu)" : totalScore <= 60 ? "Khởi động (Tìm hiểu)" : totalScore <= 85 ? "Sẵn sàng hạn chế (Tối ưu hóa)" : "Sẵn sàng toàn diện (Dẫn đầu)";
  
  // Find lowest score category to pivot analysis
  const categories = [
    { key: "strategy", name: "Nhận thức & Chiến lược", score: scores.strategy },
    { key: "data", name: "Dữ liệu & Hạ tầng", score: scores.data },
    { key: "people", name: "Nhân sự & Văn hóa", score: scores.people },
    { key: "process", name: "Công nghệ & Quy trình", score: scores.process }
  ];
  categories.sort((a, b) => a.score - b.score);
  const weakest = categories[0];

  return `### BÁO CÁO PHÂN TÍCH CHUYÊN SÂU (BẢN CHUẨN)
*Được lập bởi Chuyên gia Nguyễn Vũ Huy Hoàng dành riêng cho đại diện doanh nghiệp.*

Chào anh/chị **${name}** (với vai trò **${position}** tại **${company}** thuộc lĩnh vực **${industry}**),

Cảm ơn anh/chị đã hoàn thành bài Đánh giá Sẵn sàng AI dành cho SME. Dựa trên số liệu khảo sát, doanh nghiệp của anh/chị đạt **${totalScore}/100 điểm**, được xếp vào cấp độ: **${level}**.

#### 1. Nhận định tổng quan từ Chuyên gia:
Với số điểm này, **${company}** đang ở giai đoạn cần tái định hình quy trình số để tích hợp AI. Điểm nghẽn lớn nhất của doanh nghiệp nằm ở mảng **${weakest.name}** (chỉ đạt ${weakest.score}/25 điểm). Nếu không nhanh chóng cải thiện bộ phận này, việc áp dụng các công cụ AI thông minh sẽ gặp tình trạng "đầu tư loãng", nhân sự không mặn mà hoặc dữ liệu bị tắc nghẽn, không tạo ra giá trị kinh tế thực tế.

#### 2. Phân tích chi tiết các mảng vận hành:
* **Nhận thức & Chiến lược (${scores.strategy}/25đ):** ${scores.strategy >= 18 ? "Lãnh đạo đã có tư duy cởi mở và cam kết đồng hành, đây là bệ phóng hoàn hảo." : "Ban điều hành cần nâng cao nhận thức thực chiến về AI, tránh coi AI là một chi phí IT đơn giản mà phải coi là một công cụ đòn bẩy chiến lược dài hạn."}
* **Dữ liệu & Hạ tầng (${scores.data}/25đ):** ${scores.data >= 18 ? "Hạ tầng dữ liệu khá tốt, sẵn sàng cho việc nạp dữ liệu sạch vào các mô hình AI Agent." : "Dữ liệu nội bộ còn rời rạc và thô sơ. Doanh nghiệp cần bắt đầu quy hoạch, làm sạch dữ liệu và đưa chúng lên các nền tảng lưu trữ đám mây bảo mật."}
* **Nhân sự & Văn hóa (${scores.people}/25đ):** ${scores.people >= 18 ? "Nhân viên giàu tư duy đổi mới và chủ động học tập các công cụ prompt thông minh." : "Nhân sự đang có xu hướng e dè trước công nghệ mới hoặc thiếu kỹ năng viết prompt. Cần thúc đẩy văn hóa 'đồng hành cùng AI' thay vì e lo sợ bị thay thế định đoạt."}
* **Công nghệ & Quy trình (${scores.process}/25đ):** ${scores.process >= 18 ? "Đã số hóa quy trình cơ bản, tự động hóa tương đối tốt." : "Các quy trình làm việc còn nặng tính thủ công, chồng chèo nhiều cấp phê duyệt tĩnh. Cần ưu tiên tự động hóa các tác vụ lặp đi lặp lại trước khi nhúng AI sâu rộng."}

#### 3. Bộ 3 hành động thực chiến đề xuất cho doanh nghiệp ${company}:
1. **Quy hoạch và Chuyển đổi Kỹ năng làm việc (Upskilling) ngay lập tức**: Tổ chức 1 khóa đào tạo cơ bản về Generative AI (các mô hình ngôn ngữ lớn như ChatGPT, Gemini) cho toàn bộ nhân viên các phòng ban Marketing, Sales, và Vận hành. Huấn luyện họ phương pháp thiết kế câu lệnh câu hỏi (Prompt Engineering) để cắt giảm 30%-50% thời gian soạn thảo tài liệu, chăm sóc khách hàng cơ bản.
2. **Khởi động dự án thí điểm (AI Pilot Project) với ngân sách cực nhỏ**: Không đầu tư hàng trăm triệu ngay lập tức. Hãy chọn đúng 1 quy trình mất thời gian nhất (ví dụ: viết bài truyền thông mạng xã hội hoặc trả lời câu hỏi FAQ của khách hàng cũ) rồi ứng dụng giải pháp AI miễn phí hoặc chi phí thấp để đo lường hiệu quả trong vòng 30 ngày.
3. **Chuẩn hóa quy trình ghi chép dữ liệu số**: Chuyển các sổ sách, file excel cá nhân rải rác lên hệ thống quản lý cơ sở dữ liệu chung trực tuyến (Google Drive chuyên môn hóa hoặc ERP cỡ nhỏ) để hình thành "tài sản tri thức số" của doanh nghiệp, chuẩn bị nguồn thức ăn giá trị cho AI xử lý sau này.

---
**Lời nhắn gửi từ Chuyên gia Nguyễn Vũ Huy Hoàng:**
*“AI không thay thế doanh nghiệp của bạn, nhưng những doanh nghiệp ứng dụng AI tốt sẽ thay thế những doanh nghiệp đứng ngoài cuộc. SME có lợi thế về sự linh hoạt và ra quyết định cực nhanh. Đừng đợi đến khi có hàng tỷ đồng, hãy đi từ những bước đi tinh gọn nhất ngày hôm nay!”*`;
}

// Core consultation API endpoint
app.post("/api/analyze", async (req, res) => {
  try {
    const { name, company, position, email, industry, scores, totalScore, qaSummary } = req.body;

    if (!name || !company || !position || !scores) {
      return res.status(400).json({ error: "Thiếu dữ liệu đầu vào bắt buộc." });
    }

    const ai = getGenAI();
    let analysisText = "";

    if (ai) {
      const prompt = `Bạn là Chuyên gia Nguyễn Vũ Huy Hoàng, một nhà đào tạo AI cho doanh nghiệp và lãnh đạo hàng đầu tại Việt Nam.
Vai trò xã hội chính thức của bạn là:
- Phó Viện trưởng Viện đào tạo & chuyển giao công nghệ
- Phó Viện trưởng Viện Khoa học công nghệ khởi nghiệp sáng tạo
- Giám đốc chương trình AI & Chuyển đổi số Viện đào tạo doanh nghiệp ACC
- Điện thoại liên hệ: 0949.124.620

Hãy viết một bản Báo cáo đánh giá mức độ sẵn sàng đón nhận và triển khai AI vô cùng sâu sắc, thiết thực, sang trọng và tràn đầy động lực thúc đẩy cho doanh nghiệp sau đây:
- Người tham gia khảo sát: ${name}
- Chức vụ: ${position}
- Tên công ty/doanh nghiệp: ${company}
- Lĩnh vực hoạt động (ngành): ${industry || "SME Việt Nam"}
- Email liên hệ: ${email}

Kết quả điểm số chi tiết của doanh nghiệp (Thang điểm chuẩn hóa tối đa 25 điểm cho mỗi nhóm, tổng cộng 100 điểm):
1. Nhận thức & Chiến lược: ${scores.strategy}/25 điểm
2. Dữ liệu & Hạ tầng: ${scores.data}/25 điểm
3. Nguồn nhân lực & Văn hóa: ${scores.people}/25 điểm
4. Ứng dụng công nghệ & Quy trình: ${scores.process}/25 điểm
- Tổng điểm Sẵn sàng AI chung: ${totalScore}/100 điểm

Hãy soạn thảo bản báo cáo tư vấn này bằng văn phong trang trọng, uy tín, phản ánh tầm vóc của một Viện trưởng và Chuyên gia cấp cao, hướng dẫn bằng cả trái tim và trí tuệ thực nghiệp.
Báo cáo của bạn phải bao gồm các phần chính sau và được định dạng Markdown chuẩn, đẹp mắt:

1. LỜI GIAO TIẾP & CHÚC MỪNG ĐẦU TIÊN: Chào anh/chị ${name} với tư cách là ${position} của ${company} nhiệt thành, công nhận sự chủ động tiên phong của họ khi thực hiện bài đánh giá này trong bối cảnh làn sóng AI đang bùng nổ vũ bão hiện nay.
2. PHÂN TÍCH THỂ TRẠNG VÀ ĐIỂM NGHẼN KỸ THUẬT: Chỉ rõ trạng thái sẵn sàng của họ tương ứng với tổng điểm ${totalScore}/100. Hãy phân tích chuyên sâu nhóm điểm số thấp nhất để chỉ ra điểm nghẽn thực sự tại ${company} đang nằm ở đâu và tại sao nó kìm hãm doanh nghiệp ứng dụng AI thành công.
3. BA (03) ĐỀ XUẤT HÀNH ĐỘNG THỰC CHIẾN (CHỈ VÀO VẤN ĐỀ NÓNG): Đưa ra 3 giải pháp cực kỳ thực tế, "may đo" phù hợp cho doanh nghiệp SME, có thể hành động ngay dựa trên nguồn ngân sách hạn chế nhưng tối ưu hóa hiệu suất tối đa. Tránh các từ ngữ hàn lâm chung chung như "nên nghiên cứu", hãy chỉ rõ "cần làm gì, bắt đầu từ ai".
4. THÔNG ĐIỆP ĐỘNG LỰC: Lời gửi gắm và động viên quý giá từ Chuyên gia Nguyễn Vũ Huy Hoàng gửi đến doanh nghiệp Việt.

Hãy viết bản tư vấn chi tiết, dài khoảng 600 - 900 từ, hành văn rõ ràng, lưu loát, không viết tắt, không có các ký tự kỹ thuật thừa thãi.`;

      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: prompt,
          config: {
            temperature: 0.8,
          },
        });
        analysisText = response.text || "";
      } catch (geminiError: any) {
        console.error("Gemini API call failed, reverting to high-quality fallback:", geminiError);
        analysisText = getStaticConsultation(name, company, position, industry || "SME Việt Nam", scores, totalScore);
      }
    } else {
      // Gemini API key is not configured yet, use our incredibly rich Vietnamese static consultation generator
      analysisText = getStaticConsultation(name, company, position, industry || "SME Việt Nam", scores, totalScore);
    }

    res.json({
      success: true,
      score: totalScore,
      level: totalScore <= 35 ? "Sơ khai" : totalScore <= 60 ? "Khởi động" : totalScore <= 85 ? "Sẵn sàng hạn chế" : "Sẵn sàng toàn diện",
      analysis: analysisText
    });
  } catch (error: any) {
    console.error("Analysis endpoint error:", error);
    res.status(500).json({ error: "Có lỗi xảy ra khi xử lý phân tích dữ liệu trên máy chủ." });
  }
});

// Serve frontend assets & start listener inside non-blocking async initializer
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server listening on http://0.0.0.0:${PORT} under NODE_ENV=${process.env.NODE_ENV}`);
  });
}

startServer();
