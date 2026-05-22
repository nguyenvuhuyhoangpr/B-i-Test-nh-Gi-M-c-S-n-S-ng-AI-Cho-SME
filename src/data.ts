import { Question, CategoryInfo } from "./types";

export const CATEGORIES: CategoryInfo[] = [
  {
    key: "strategy",
    name: "Nhận thức & Chiến lược",
    description: "Khả năng tư duy chiến thuật, mức độ ưu tiên của ban lãnh đạo và định hướng phát triển AI dài hạn."
  },
  {
    key: "data",
    name: "Dữ liệu & Hạ tầng",
    description: "Khả năng quản trị, chuẩn hóa, phân tích dữ liệu số và mức độ vững chắc của nền tảng CNTT."
  },
  {
    key: "people",
    name: "Nguồn nhân lực & Văn hóa",
    description: "Thái độ, mức độ quen thuộc công nghệ của nhân viên và các hoạt động huấn luyện, đào tạo nội bộ."
  },
  {
    key: "process",
    name: "Ứng dụng & Quy trình",
    description: "Mức độ tự động hóa các hoạt động Marketing, vận hành và khả năng tự cải tiến đổi mới bằng giải pháp AI."
  }
];

export const INDUSTRIES_LIST: string[] = [
  "Thương mại bán lẻ / E-commerce",
  "Sản xuất / Chế biến chế tạo",
  "Dịch vụ khách hàng / Du lịch / F&B",
  "Công nghệ thông tin / Phần mềm",
  "Tài chính / Kế toán / Ngân hàng",
  "Y tế / Giáo dục / Đào tạo",
  "Xây dựng / Bất động sản",
  "Logistics / Vận chuyển / Chuỗi cung ứng",
  "Nông nghiệp / Lâm nghiệp / Thủy sản",
  "Khác (SME đa ngành)"
];

export const QUESTIONS: Question[] = [
  // --- STRATEGY (1 - 4) ---
  {
    id: 1,
    category: "strategy",
    text: "Ban lãnh đạo doanh nghiệp đang cam kết và có hiểu biết thế nào về định hướng phát triển AI?",
    options: [
      { value: "A", text: "Chưa thật sự quan tâm, hoặc chưa biết bắt đầu từ đâu.", score: 1 },
      { value: "B", text: "Đã quan sát đối thủ và muốn thử nghiệm nhưng chưa có kế hoạch cụ thể.", score: 2 },
      { value: "C", text: "Đã có định hướng áp dụng AI vào một số bộ phận kinh doanh cụ thể.", score: 3 },
      { value: "D", text: "Đã ban hành mục tiêu chiến lược và lộ trình tích hợp AI gắn liền chỉ số KPI.", score: 4 }
    ]
  },
  {
    id: 2,
    category: "strategy",
    text: "Ngân sách hàng năm của doanh nghiệp dành riêng cho bài toán chuyển đổi số và thử nghiệm AI?",
    options: [
      { value: "A", text: "Hoàn toàn không có khoản ngân sách riêng cho hạng mục này.", score: 1 },
      { value: "B", text: "Có ngân sách CNTT vận hành cơ bản nhưng không có ngân sách riêng cho phát triển AI.", score: 2 },
      { value: "C", text: "Sẵn sàng trích ngân sách thử nghiệm cho các dự án nhỏ nếu chứng minh được hiệu quả.", score: 3 },
      { value: "D", text: "Đã phân bổ nguồn lực và ngân sách chiến lược dài hạn cho cả AI, kỹ thuật và đào tạo.", score: 4 }
    ]
  },
  {
    id: 3,
    category: "strategy",
    text: "Áp lực cạnh tranh và nhu cầu bắt kịp làn sóng AI trong ngành của bạn hiện đang như thế nào?",
    options: [
      { value: "A", text: "Hầu như chưa cảm thấy áp lực nào lớn, thị trường hiện tại đang ổn định.", score: 1 },
      { value: "B", text: "Đã nghe bàn luận nhiều nhưng chưa thấy doanh nghiệp thiết thực nào trong vùng áp dụng.", score: 2 },
      { value: "C", text: "Các đối thủ trực tiếp đã bắt đầu ứng dụng AI, chúng tôi bắt buộc phải hành động để giữ vững thị phần.", score: 3 },
      { value: "D", text: "Đối thủ bứt phá dữ dội bằng trí tuệ nhân tạo; chúng tôi muốn chuyển mình để dẫn dắt, bứt phá đi đầu.", score: 4 }
    ]
  },
  {
    id: 4,
    category: "strategy",
    text: "Mức độ ưu tiên của việc ứng dụng AI trợ lực vào kế hoạch tối ưu chi phí và bứt phá doanh thu trong 12 tháng tới?",
    options: [
      { value: "A", text: "Rất thấp, việc sinh tồn và duy trì mô hình hiện tại là sự ưu tiên hàng đầu.", score: 1 },
      { value: "B", text: "Mức trung bình, chỉ cân nhắc khi các phần mềm AI đã sẵn sàng đóng gói hết rủi ro.", score: 2 },
      { value: "C", text: "Mức độ cao, là một trong 3 trụ cột phát triển đột phá quan trọng nhất của công ty.", score: 3 },
      { value: "D", text: "Cực kỳ cấp bách, là gốc rễ quyết định sự thay đổi biên lợi nhuận kinh doanh.", score: 4 }
    ]
  },

  // --- DATA (5 - 8) ---
  {
    id: 5,
    category: "data",
    text: "Hiện trạng số hóa dữ liệu nội bộ và hồ sơ vận hành của doanh nghiệp đang ở mức độ nào?",
    options: [
      { value: "A", text: "Chủ yếu viết tay, sổ sách giấy tờ hoặc Excel phân tán rải rác cá nhân.", score: 1 },
      { value: "B", text: "Đã ứng dụng một số ứng dụng chuyên biệt (CRM, kế toán...) nhưng dữ liệu bị phân mảnh, chưa kết nối.", score: 2 },
      { value: "C", text: "Toàn bộ dữ liệu vận hành lõi đã đưa lên đám mây trực tuyến tập trung, liên thông giữa các bên.", score: 3 },
      { value: "D", text: "Hệ thống dữ liệu chuẩn hóa cực tốt, cập nhật trực tiếp (real-time) thông qua các cổng API thông suốt.", score: 4 }
    ]
  },
  {
    id: 6,
    category: "data",
    text: "Mức độ sạch, chính xác và đồng bộ hóa của thông tin, dữ liệu khách hàng trong doanh nghiệp?",
    options: [
      { value: "A", text: "Dữ liệu thường bị trùng lặp, sai lệch lớn, không có quy trình lọc sạch lỗi.", score: 1 },
      { value: "B", text: "Được lưu trữ chung nhưng việc làm sạch và chuẩn hóa dữ liệu chỉ làm thủ công khi cần.", score: 2 },
      { value: "C", text: "Có công cụ phân loại, làm sạch dữ liệu định kỳ cho các phòng ban kinh doanh chính.", score: 3 },
      { value: "D", text: "Quy trình quản trị tự động, dữ liệu luôn được định dạng sạch, bảo mật đa lớp và sẵn sàng nạp cho AI.", score: 4 }
    ]
  },
  {
    id: 7,
    category: "data",
    text: "Doanh nghiệp khai thác lịch sử số liệu để ra quyết định hoặc dự báo xu hướng thị trường ở mức nào?",
    options: [
      { value: "A", text: "Hầu như dựa hoàn toàn vào kinh nghiệm trực giác cá nhân của chủ doanh nghiệp.", score: 1 },
      { value: "B", text: "Chỉ tổng hợp số liệu tính toán thô cuối năm hoặc báo cáo tĩnh khi họp định kỳ.", score: 2 },
      { value: "C", text: " Thường xuyên phân tích báo cáo trực quan sinh động (Dashboard) để phân bổ định hướng nội bộ.", score: 3 },
      { value: "D", text: "Áp dụng các phân tích mô hình dự đoán nâng cao để vạch chiến lược dự toán kinh doanh.", score: 4 }
    ]
  },
  {
    id: 8,
    category: "data",
    text: "Mức hạ tầng công nghệ và việc sử dụng các dịch vụ đám mây (Cloud computing) của doanh nghiệp?",
    options: [
      { value: "A", text: "Lỗi thời, máy tính cấu hình cũ, đường truyền văn phòng thường xuyên chập chờn.", score: 1 },
      { value: "B", text: "Mức độ đủ dùng cho tác vụ cơ bản, chưa có bất kỳ hạ tầng lưu trữ đám mây chung nào.", score: 2 },
      { value: "C", text: "Đã sử dụng các công cụ đám mây làm việc cộng tác lớn (Google Workspace, Office 365, v.v.).", score: 3 },
      { value: "D", text: "Hệ thống Cloud hiện đại tinh gọn, quản trị phân quyền tối cao, tích hợp mượt mà các API SAAS.", score: 4 }
    ]
  },

  // --- PEOPLE & CULTURE (9 - 12) ---
  {
    id: 9,
    category: "people",
    text: "Nhân viên trong doanh nghiệp đang hiểu biết và ứng dụng các trợ lý ảo AI (ChatGPT, Claude, Gemini, Canva...) thế nào?",
    options: [
      { value: "A", text: "Hầu như chưa ai nghe tới hoặc chưa biết thao tác sử dụng phục vụ công việc.", score: 1 },
      { value: "B", text: "Chỉ có một số ít nhân viên tự tìm tòi sử dụng một cách rời rạc làm việc riêng tư lẻ.", score: 2 },
      { value: "C", text: "Rất nhiều phòng ban đã ứng dụng cơ bản vào soạn email, biên dịch, tìm kiếm và lên ý tưởng chung.", score: 3 },
      { value: "D", text: "Nhân sự làm chủ prompt tối ưu cấu trúc, sử dụng AI hàng ngày như một người trợ lý đồng hành đắc lực.", score: 4 }
    ]
  },
  {
    id: 10,
    category: "people",
    text: "Doanh nghiệp đã tổ chức đào tạo hoặc huấn luyện bài bản về chuyển đổi tư duy số và ứng dụng AI chưa?",
    options: [
      { value: "A", text: "Chưa từng tổ chức bất kỳ lớp học hay buổi hội thảo chuyên môn nào về chủ đề này.", score: 1 },
      { value: "B", text: "Khuyến khích nhân viên tự học tự bổ sung, chưa có ngân sách tổ chức nội bộ.", score: 2 },
      { value: "C", text: "Đã cho nhân sự nòng cốt tham gia một vài khóa học ngắn hạn hoặc seminar tổng quan.", score: 3 },
      { value: "D", text: "Có lộ trình đào tạo kỹ năng số & tư duy Prompt chuyên môn định kỳ với chuyên gia uy tín ngoài ngành.", score: 4 }
    ]
  },
  {
    id: 11,
    category: "people",
    text: "Thái độ, tâm lý đón nhận và phản ứng của nguồn nhân lực khi công ty có định hướng dịch chuyển công nghệ mới?",
    options: [
      { value: "A", text: "Lo âu sợ mất vị trí, áp lực học mới, e dè chuyển dịch và phản kháng ngầm.", score: 1 },
      { value: "B", text: "Thờ ơ trung lập, chỉ làm theo chỉ đạo ép buộc từ lãnh đạo chứ không hào hứng học hỏi.", score: 2 },
      { value: "C", text: "Ngoan ngoãn, tò mò và sẵn sàng dấn thân trải nghiệm nếu được doanh nghiệp bảo trợ đào tạo.", score: 3 },
      { value: "D", text: "Chủ động đề xuất dấn thân học hỏi sáng kiến đổi mới, tự tìm giải pháp số nâng cấp năng suất.", score: 4 }
    ]
  },
  {
    id: 12,
    category: "people",
    text: "Hiện trạng đội ngũ CNTT/Chuyển đổi số nội bộ hoặc các cố vấn ngoài đồng hành cùng doanh nghiệp?",
    options: [
      { value: "A", text: "Không có ai chuyên trách, cũng hoàn toàn không thể tìm kiếm sự giúp đỡ từ ngoài.", score: 1 },
      { value: "B", text: "Có nhân viên IT hỗ trợ phần cứng máy tính thông dụng, không có kiến thức quản trị hay AI.", score: 2 },
      { value: "C", text: "Hợp tác thường niên với một vài nhà cung cấp phần mềm hoặc đối tác công nghệ gia công phần mềm.", score: 3 },
      { value: "D", text: "Có phòng ban chuyển đổi số nội bộ xuất sắc hoặc mạng lưới liên kết với chuyên gia AI chiến lược.", score: 4 }
    ]
  },

  // --- PROCESSES (13 - 16) ---
  {
    id: 13,
    category: "process",
    text: "Tính chất của các quy trình làm việc thường ngày tại doanh nghiệp có đặc thù thế nào?",
    options: [
      { value: "A", text: "Cực kỳ thủ công, lặp lại vất vả, xử lý chứng từ giấy tờ tốn kém nhiều thì giờ.", score: 1 },
      { value: "B", text: "Đã có nhóm trao đổi chung chat nhưng việc phê duyệt trung gian vẫn làm thủ công nhiều cửa.", score: 2 },
      { value: "C", text: "Các luồng xử lý lõi (Sales, Chăm sóc KH, Kế toán) đều được quản trị tập trung mượt mà trên phần mềm.", score: 3 },
      { value: "D", text: "Luồng công việc tự động hóa cực mạch lạc (Workplace Automation), sẵn sàng tích hợp thẳng AI Agent.", score: 4 }
    ]
  },
  {
    id: 14,
    category: "process",
    text: "Mức độ thử nghiệm hoặc triển khai thực tế ứng dụng AI vào các khâu kinh doanh, vận hành hay tiếp thị?",
    options: [
      { value: "A", text: "Hoàn toàn chưa ứng dụng một hình thức tự động hóa hay AI nào dù là đơn giản.", score: 1 },
      { value: "B", text: "Từng thử nghiệm chatbot fanpage tự động hoặc viết vài bài giới thiệu social sơ sài.", score: 2 },
      { value: "C", text: "Sử dụng thường xuyên cho việc xây dựng nội dung, làm ảnh quảng cáo, hoặc tư vấn kịch bản Sales.", score: 3 },
      { value: "D", text: "Đã nhúng API AI hoặc hệ thống thông minh lõi trực tiếp hỗ trợ tạo ra giá trị sản phẩm độc quyền.", score: 4 }
    ]
  },
  {
    id: 15,
    category: "process",
    text: "Cách thức đo lường hiệu suất làm việc (KPIs, OKRs) và theo dõi kết quả công việc tại doanh nghiệp?",
    options: [
      { value: "A", text: "Chủ yếu đánh giá theo cảm xúc, trực quan ngắn ngày và cuối kỳ lãnh đạo chấm điểm.", score: 1 },
      { value: "B", text: "Nhân viên tự gửi bản báo cáo cá nhân qua mail, thiếu sự kết nối tổng quan thời gian thực.", score: 2 },
      { value: "C", text: "Quản trị phân công và KPI minh bạch trên một hệ thống phần mềm quản lý dự án trực quan.", score: 3 },
      { value: "D", text: "Hệ thống số liệu thông suốt báo cáo lỗi tự động, có đo lường đánh giá và đề xuất cảnh báo rủi ro.", score: 4 }
    ]
  },
  {
    id: 16,
    category: "process",
    text: "Khả năng tự xây dựng giải pháp làm việc tự động (No-code/Low-code) của cán bộ nhân sự trong doanh nghiệp?",
    options: [
      { value: "A", text: "Không thể tự làm, toàn bộ hệ thống phải chờ đi thuê ngoài mua gói trọn bộ đắt đỏ.", score: 1 },
      { value: "B", text: "Chỉ dừng ở mức tự thiết kế được các form khảo sát, hoặc chatbot điều hướng nút bấm thô sơ.", score: 2 },
      { value: "C", text: "Có thể tự liên kết cơ bản dữ liệu qua công cụ tự động trung gian như Zapier hay Make.", score: 3 },
      { value: "D", text: "Đội ngũ sáng tạo có thể tự lắp ráp AI Agent tùy biến riêng, tạo các chatbot thông tin đa phương thức.", score: 4 }
    ]
  }
];
