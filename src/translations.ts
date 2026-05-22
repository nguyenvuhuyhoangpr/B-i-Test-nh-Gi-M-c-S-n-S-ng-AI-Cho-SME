export type Lang = "vi" | "en";

export interface TranslationSet {
  siteTitle: string;
  subtitle: string;
  authorLabel: string;
  authorName: string;
  academicBody: string;
  navHome: string;
  navTheme: string;
  navLang: string;
  
  // Intro screen
  introHeader: string;
  introSub: string;
  introDesc: string;
  btnStartTest: string;
  contextHeader: string;
  contextDesc1: string;
  contextDesc2: string;
  strategicTip: string;
  strategicTipVal: string;
  whyHeader: string;
  whyIntro: string;
  whyReason1: string;
  whyReason2: string;
  whyReason3: string;
  whyReason4: string;
  usersJoinedStat: string;
  roadmapHeader: string;
  roadmapStep1Title: string;
  roadmapStep1Desc: string;
  roadmapStep2Title: string;
  roadmapStep2Desc: string;
  roadmapStep3Title: string;
  roadmapStep3Desc: string;
  roadmapStep4Title: string;
  roadmapStep4Desc: string;

  // Questionnaire screen
  progressLabel: string;
  questionLabel: string;
  progressPercentLabel: string;
  btnPrev: string;
  btnNext: string;
  btnSubmit: string;
  btnCancel: string;
  alertAnswerRequired: string;

  // Results screen
  resultsHeader: string;
  resultsSub: string;
  btnPrint: string;
  btnRetake: string;
  overallScoreLabel: string;
  overallScoreDesc: string;
  levelBadgeLabel: string;
  levelIncipient: string;
  levelSpontaneous: string;
  levelOptimistic: string;
  levelBreakthrough: string;
  radarChartTitle: string;
  radarChartLabelStrategy: string;
  radarChartLabelData: string;
  radarChartLabelPeople: string;
  radarChartLabelProcess: string;
  radarChartDesc: string;
  
  // Categories & Local Deep Diagnosis
  strategyName: string;
  dataName: string;
  peopleName: string;
  processName: string;

  pillarAnalysisHeader: string;
  evaluationLabel: string;
  actionPlansLabel: string;

  levelIncipientDesc: string;
  levelSpontaneousDesc: string;
  levelOptimisticDesc: string;
  levelBreakthroughDesc: string;

  expertFooterContactLabel: string;
  expertFooterSubtitle: string;
  expertCredential1: string;
  expertCredential2: string;
  expertCredential3: string;
  expertCopyright: string;
}

export const TRANSLATIONS: Record<Lang, TranslationSet> = {
  vi: {
    siteTitle: "SME AI Readiness",
    subtitle: "Hệ Thống Đánh Giá Sẵn Sàng AI",
    authorLabel: "Chuyên gia đồng hành",
    authorName: "Nguyễn Vũ Huy Hoàng",
    academicBody: "VIỆN ĐÀO TẠO & CHUYỂN GIAO CÔNG NGHỆ",
    navHome: "Trang chủ",
    navTheme: "Giao diện",
    navLang: "Ngôn ngữ",

    // Intro screen
    introHeader: "Bài Đánh Giá Mức Độ Sẵn Sàng AI Cho SME",
    introSub: "KỶ NGUYÊN TRÍ TUỆ NHÂN TẠO 2026",
    introDesc: "Hệ thống đo lường và khảo sát thực tiễn 16 tiêu chí giúp vạch rõ điểm nghẽn chuyển đổi số, tự động hiển thị sơ đồ phân tích và đề xuất hành trình ứng dụng AI tinh gọn cho doanh nghiệp vừa và nhỏ Việt Nam.",
    btnStartTest: "Thực Hiện Bài Đánh Giá Ngay",
    contextHeader: "Bối Cảnh & Sự Cấp Bách Đối Với SME",
    contextDesc1: "Chúng ta đang sống trong giai đoạn chuyển đổi công nghệ vũ bão nhất lịch sử. Trí tuệ nhân tạo (AI) không còn là khái niệm viễn tưởng, mà đã trở thành động cơ sống còn nâng cao gấp 5-10 lần hiệu năng vận hành nội bộ.",
    contextDesc2: "Hơn 90% doanh nghiệp lớn toàn cầu đang tích cực tái cấu trúc bằng AI. Tuy nhiên, các doanh nghiệp vừa và nhỏ (SME) Việt Nam vẫn đang loay hoay trong mê cung thông tin: thiếu dữ liệu chuẩn hóa, thiếu ngân sách lớn, và nhân sự e ngại thay đổi.",
    strategicTip: "MẸO CHIẾN LƯỢC",
    strategicTipVal: "Để không bị đào thải bởi làn sóng mới, SME không cần đầu tư những phần mềm tỷ đồng. Hãy bắt kịp từ các công cụ Generative AI nhỏ nhất để tối ưu nhân sự từng bước một.",
    whyHeader: "Tại Sao Doanh Nghiệp Bạn Nên Làm Bài Test?",
    whyIntro: "Để ứng dụng AI thành công, ban lãnh đạo cần xác định rõ trạng thái hiện tại thay vì đầu tư mò mẫm hay thổi phồng công nghệ. Bài đánh giá giúp tháo gỡ 4 hốc tử thần gây lãng phí:",
    whyReason1: "Tránh đầu tư loãng ngân sách vào hệ thống AI đắt đỏ không phù hợp kỹ năng cơ bản.",
    whyReason2: "Kiểm tra xem hạ tầng dữ liệu nội bộ đã sẵn sàng và đủ “sạch” để nạp cho các AI Agent chưa.",
    whyReason3: "Đánh giá tâm lý đón nhận công nghệ mới của nhân viên để kịp thời bồi đắp văn hóa học tập.",
    whyReason4: "Xác định đúng các phòng ban vận hành nặng tính thủ công để ưu tiên tích hợp AI giảm chi phí trước mắt.",
    usersJoinedStat: "Đã có +340 SME Việt Nam tham gia đánh giá năng lực AI.",
    roadmapHeader: "Hành Trình Đánh Giá Mức Độ Sẵn Sàng AI",
    roadmapStep1Title: "1. Khởi động nhanh",
    roadmapStep1Desc: "Bỏ qua các bước đăng ký thông tin phức tạp để đi trực tiếp vào cốt lõi bốc tách vấn đề.",
    roadmapStep2Title: "2. Khảo sát 16 câu hỏi",
    roadmapStep2Desc: "Mất 5-7 phút lựa chọn trạng thái thực tế doanh nghiệp trên 4 trục năng lực chính.",
    roadmapStep3Title: "3. Nhận ngay báo cáo",
    roadmapStep3Desc: "Nhìn rõ biểu đồ trực quan, điểm số phân tích đa năng lực và biểu đồ phân cực chi tiết.",
    roadmapStep4Title: "4. Bản vẽ đề xuất",
    roadmapStep4Desc: "Nhận danh sách lộ trình hành động thiết thực cho từng trục năng lực riêng biệt.",

    // Questionnaire
    progressLabel: "TIẾN ĐỘ KHẢO SÁT",
    questionLabel: "Câu hỏi",
    progressPercentLabel: "Hoàn thành",
    btnPrev: "Câu trước",
    btnNext: "Câu sau",
    btnSubmit: "Nộp Bài & Xem Kết Quả",
    btnCancel: "Hủy bài test & Quay về trang đầu",
    alertAnswerRequired: "Vui lòng trả lời câu hỏi hiện tại trước khi tiếp tục!",

    // Results
    resultsHeader: "Kết Quả Đánh Giá Năng Lực AI",
    resultsSub: "CẤP ĐỘ SẴN SÀNG AI CỦA DOANH NGHIỆP",
    btnPrint: "In & Lưu PDF",
    btnRetake: "Làm Lại Test",
    overallScoreLabel: "CHỈ SỐ SẴN SÀNG CHUNG",
    overallScoreDesc: "Dựa theo kết quả tích hợp 4 trục năng lực doanh nghiệp",
    levelBadgeLabel: "CẤP ĐỘ SẴN SÀNG",
    levelIncipient: "SƠ KHAI (Chưa sẵn sàng)",
    levelSpontaneous: "BỘC PHÁT (Sẵn sàng sơ khởi)",
    levelOptimistic: "TỐI ƯU HÓA (Sẵn sàng hạn chế)",
    levelBreakthrough: "ĐỘT PHÁ (Sẵn sàng toàn diện)",
    radarChartTitle: "Biểu Đồ Năng Lực Sẵn Sàng 4 Trục Lõi",
    radarChartLabelStrategy: "Ch.Lược",
    radarChartLabelData: "D.Liệu",
    radarChartLabelPeople: "Nhân Sự",
    radarChartLabelProcess: "Q.Trình",
    radarChartDesc: "Phần diện tích bôi cyan càng rộng, tỷ lệ sẵn sàng AI toàn diện của SME càng cao.",

    // Categories
    strategyName: "Nhận thức & Chiến lược",
    dataName: "Dữ liệu & Hạ tầng",
    peopleName: "Nguồn nhân lực & Văn hóa",
    processName: "Ứng dụng & Quy trình",

    pillarAnalysisHeader: "Phân Tích Chi Tiết 4 Trục Năng Lực & Đề Xuất Hành Động",
    evaluationLabel: "Đánh giá trạng thái thực tế:",
    actionPlansLabel: "Nhóm hành động khuyến nghị ưu tiên:",

    levelIncipientDesc: "Doanh nghiệp hiện tại hầu như chưa chuẩn bị gì cho việc tích hợp AI. Quy trình vận hành thủ công rời rạc, dữ liệu số thô sơ và nhân sự chưa tiếp xúc công cụ Prompt thông minh. Ban điều hành cần chuyển đổi chiến lược căn bản và nâng cao nhận thức số trước tiên.",
    levelSpontaneousDesc: "Công ty đã có một số hoạt động số hóa văn phòng nhỏ lẻ và nhân sự tự sử dụng các công cụ cơ bản thế hệ mới (ChatGPT, v.v.). Tuy nhiên, việc vận dụng hoàn toàn mang tính bộc phát cá nhân, thiếu chiến lược liên thông và nguồn dữ liệu cốt lõi chưa đủ sạch để tự động hóa diện rộng.",
    levelOptimisticDesc: "Hệ thống quy trình và cơ sở dữ liệu liên phòng ban đã sẵn sàng khá vững vàng. Ban lãnh đạo cam kết đồng hành và nhân sự giàu năng lực tiếp cận đổi mới. Doanh nghiệp hội tụ đủ yếu tố để thí điểm nhanh một số dự án AI nòng cốt giúp tăng tốc năng suất trong 3-6 tháng.",
    levelBreakthroughDesc: "Chúc mừng! Doanh nghiệp sở hữu nền tảng vận hành tự động lý tưởng, dữ liệu cập nhật API liên tục, văn hóa nỗ lực bứt phá công nghệ sâu rộng. Đây là thời cơ vàng để doanh nghiệp nhúng AI trực tiếp làm tài sản cạnh tranh độc quyền toàn diện.",

    expertFooterContactLabel: "HOTLINE TƯ VẤN TRỰC TIẾP",
    expertFooterSubtitle: "Chuyên gia đào tạo AI hàng đầu cho doanh nghiệp & lãnh đạo",
    expertCredential1: "Nhà sáng lập Viện Đào tạo & Chuyển giao công nghệ thế hệ mới.",
    expertCredential2: "Đã tư vấn & nâng cấp tư duy Prompt/AI tích hợp cho +2,000 nhân sự các cấp.",
    expertCredential3: "Chuyên gia phát triển ứng dụng AI thực chiến giúp cắt giảm 50% thời gian vận hành.",
    expertCopyright: "Bản quyền công cụ đánh giá và mô hình giải pháp AI toàn diện thuộc về Chuyên gia Nguyễn Vũ Huy Hoàng. Chương trình được thiết kế nhằm hỗ trợ nâng tầm năng lực cạnh tranh bền vững cho cộng đồng SME Việt Nam."
  },
  en: {
    siteTitle: "SME AI Readiness",
    subtitle: "AI Readiness Assessment Portal",
    authorLabel: "Accredited Expert",
    authorName: "Nguyen Vu Huy Hoang",
    academicBody: "INSTITUTE OF DIGITAL EDUCATION & TECHNOLOGY TRANSFER",
    navHome: "Home",
    navTheme: "Theme",
    navLang: "Language",

    // Intro screen
    introHeader: "SME AI Readiness & Capabilities Assessment",
    introSub: "THE ERA OF COGNITIVE INTELLIGENCE 2026",
    introDesc: "A practice-driven 16-criteria assessment system to identify digital transformation obstacles, map organizational strengths and output a direct local action path for small and medium enterprises.",
    btnStartTest: "Take the Assessment Now",
    contextHeader: "Context & Urgency for SMEs",
    contextDesc1: "We are living in the swiftest technology shift in human history. Artificial Intelligence (AI) is no longer a science fiction buzzword, it has matured into a vital growth engine capable of magnifying individual productivity by 5X to 10X.",
    contextDesc2: "Over 90% of global enterprises are integrating model APIs in their standard operations. Meanwhile, Vietnamese SMEs still struggle in information labyrinths: lacking standardized data, operating with limited budgets, or confronting employee inertia.",
    strategicTip: "STRATEGIC TIP",
    strategicTipVal: "To prevent elimination in this tidal wave, SMEs do not need to purchase blockbusting million-dollar suites. Begin immediately from free generative portals to elevate individual operational metrics step-by-step.",
    whyHeader: "Why Should Your Business Take This Assessment?",
    whyIntro: "For successful AI application, company leadership must establish their objective baseline instead of gambling budgets or hyping platforms. This diagnostic removes 4 fatal operational leaks:",
    whyReason1: "Prevents cash drain into expensive AI suites poorly aligned with baseline team training.",
    whyReason2: "Validates if internal files and telemetry are ready and clean enough to feed cognitive models safely.",
    whyReason3: "Safeguards employee mental transition and cultural alignment to handle novel workspaces.",
    whyReason4: "Surgical target processes currently bogged down manually to integrate immediate cost-reducing copilots.",
    usersJoinedStat: "Over 340+ Vietnamese SMEs have benchmarked their capabilities.",
    roadmapHeader: "The Assessment Roadmap Journey",
    roadmapStep1Title: "1. Instant Start",
    roadmapStep1Desc: "Bypass complicated registration setups and deep-dive right into the capability questions.",
    roadmapStep2Title: "2. 16 Core Questions",
    roadmapStep2Desc: "Spend 5-7 minutes evaluating the business reality across 4 essential development pillars.",
    roadmapStep3Title: "3. Interactive Results",
    roadmapStep3Desc: "Instantly view an intuitive competence profile score and detailed polarity layout charts.",
    roadmapStep4Title: "4. Action Blueprints",
    roadmapStep4Desc: "Receive granular, actionable strategic guidelines customized of each pillar.",

    // Questionnaire
    progressLabel: "ASSESSMENT PROGRESS",
    questionLabel: "Question",
    progressPercentLabel: "Completed",
    btnPrev: "Previous",
    btnNext: "Next",
    btnSubmit: "Submit & Compile Results",
    btnCancel: "Abort Test & Return Home",
    alertAnswerRequired: "Please select an answer for the current question before moving forward!",

    // Results
    resultsHeader: "Assessment Diagnostic Outcomes",
    resultsSub: "ENTERPRISE AI ADOPTION COMPETENCY PROFILE",
    btnPrint: "Print & Export PDF",
    btnRetake: "Restart Assessment",
    overallScoreLabel: "INTEGRATED READY REGISTER",
    overallScoreDesc: "Based on balanced performance across 4 organizational axes",
    levelBadgeLabel: "READINESS BAND",
    levelIncipient: "INCIPIENT (Unprepared)",
    levelSpontaneous: "SPONTANEOUS (Early Stage)",
    levelOptimistic: "OPTIMISTIC (Conditionally Ready)",
    levelBreakthrough: "BREAKTHROUGH (Completely Empowered)",
    radarChartTitle: "The Balanced 4-Axis Competency Map",
    radarChartLabelStrategy: "Strategy",
    radarChartLabelData: "Data",
    radarChartLabelPeople: "People",
    radarChartLabelProcess: "Process",
    radarChartDesc: "The wider the shaded cyan polygon area is, the higher the balanced SME AI readiness index.",

    // Categories
    strategyName: "Strategy & Cognitive Direction",
    dataName: "Data & cloud Infrastructure",
    peopleName: "Human Capital & Innovation",
    processName: "Process & Tool Automation",

    pillarAnalysisHeader: "Granular 4-Axis Evaluation & Custom Action Path",
    evaluationLabel: "Organizational state assessment:",
    actionPlansLabel: "High priority action roadmap:",

    levelIncipientDesc: "The enterprise currently shows minimum preparation for AI integration. Outdated manual systems, completely siloed messy data assets, and lack of prompt literacy are dominant. Leadership must prioritize digital awareness and establish basic guidelines first.",
    levelSpontaneousDesc: "Multiple individual employees are experimenting with chatbots (ChatGPT, etc.) to optimize micro-tasks. However, this is largely uncoordinated, lacking cross-functional coherence and solid central pipelines to clean or share data.",
    levelOptimisticDesc: "Departmental workflows and core relational files are in highly stable digital shapes. Executive sponsors are heavily aligned and staff is enthusiastic about continuous learning. Ready to pilot 2-3 targeted AI implementations immediately.",
    levelBreakthroughDesc: "Congratulations! The enterprise exhibits state-of-the-art automatic digital workflows, real-time API syncs, and a highly literate technical culture. You are positioned to leverage proprietary custom AI Agents as an exclusive economic moat.",

    expertFooterContactLabel: "EXPERT ADVISORY LINE",
    expertFooterSubtitle: "Premier Corporate AI Coach & Digital Mentor",
    expertCredential1: "Founder of the modern Institute of Digital Education & Technology Transfer.",
    expertCredential2: "Trained and mentored over 2,000 corporate staff & high-level decision makers in Prompt Engineering and AI.",
    expertCredential3: "Designer of custom generative work environments, saving enterprises and teams up to 50% manual hours.",
    expertCopyright: "All assessment methodologies, core competency indexes, and advisory reports are copyrighted by Trainer Nguyen Vu Huy Hoang. This program is created to boost the sustainable advantage of SMEs."
  }
};

// Precise detailed English categories translations for the questions if requested
export const EN_QUESTIONS = [
  // Strategy
  {
    id: 1,
    text: "How committed and knowledgeable and supportive is the executive leadership toward the long-term AI development direction?",
    options: [
      { value: "A", text: "Hardly interested, or does not know where to start.", score: 1 },
      { value: "B", text: "Observing competitors and wanting to experiment, but without concrete plans.", score: 2 },
      { value: "C", text: "Already targeting and directing AI integration in selected business divisions.", score: 3 },
      { value: "D", text: "Enacted strategic AI milestones and integrated AI targets into key performance indicators (KPIs).", score: 4 }
    ]
  },
  {
    id: 2,
    text: "What is your business's annual dedicated budget for digital transformation and AI pilots?",
    options: [
      { value: "A", text: "No separate budget is allocated for this category.", score: 1 },
      { value: "B", text: "Basic operational IT budget exists, but without specific funds for AI initiatives.", score: 2 },
      { value: "C", text: "Willing to approve budgets for small pilots if positive ROI is proved.", score: 3 },
      { value: "D", text: "Strategically allocated long-term resources and budget for AI technology, engineering, and continuous training.", score: 4 }
    ]
  },
  {
    id: 3,
    text: "How strong is the competitive pressure and market urgency for adopting AI tools inside your industry sector?",
    options: [
      { value: "A", text: "Virtually no pressure experienced; our current target market is highly traditional and stable.", score: 1 },
      { value: "B", text: "Heard lots of industry gossip but seen very few actual local direct peers implement any solutions.", score: 2 },
      { value: "C", text: "Direct rivals are deploying AI; we must act immediately to defend our core customer base.", score: 3 },
      { value: "D", text: "Competitors are scaling exponentially with models; we want to redefine and lead the space.", score: 4 }
    ]
  },
  {
    id: 4,
    text: "What is the priority level of using AI to reduce cost or boost business revenues in the next 12 months?",
    options: [
      { value: "A", text: "Very low; survival and preserving existing models are our singular priority.", score: 1 },
      { value: "B", text: "Moderate; only willing to explore pre-packaged SaaS options once all tech risks are removed.", score: 2 },
      { value: "C", text: "High; categorized as one of the top 3 vital growth channels inside the firm.", score: 3 },
      { value: "D", text: "Extremely critical and urgent; the decisive driver of corporate gross margins and expansion.", score: 4 }
    ]
  },

  // Data
  {
    id: 5,
    text: "What is the state of digitization regarding internal operation logs, client data, and standard company registers?",
    options: [
      { value: "A", text: "Primarily physical notebooks, paper slips, or scattered manual Excel spreadsheets on personal laptops.", score: 1 },
      { value: "B", text: "Adopted specific separate SaaS tools (e.g. CRM, Accounting) but data is highly siloed and non-cohesive.", score: 2 },
      { value: "C", text: "Core registry files and operational historical logs are stored cleanly on a centralized shared cloud space.", score: 3 },
      { value: "D", text: "Excellently structured schema updated in real-time through connected cross-departmental APIs.", score: 4 }
    ]
  },
  {
    id: 6,
    text: "What is the cleanliness, accuracy, and synchronization of your customer contact database?",
    options: [
      { value: "A", text: "Frequently duplicated, messy, and lacks standard processes to filter out errors or dead contacts.", score: 1 },
      { value: "B", text: "Stored in central tables but manual cleaning is only carried out irregularly upon specific request.", score: 2 },
      { value: "C", text: "Periodic automated batch-cleaning is handled for all primary marketing and sales pipelines.", score: 3 },
      { value: "D", text: "Continuously structured clean pipelines protected by Multi-factor authentication, ready to feed AI agents immediately.", score: 4 }
    ]
  },
  {
    id: 7,
    text: "To what extent does your business analyze historical data to guide organizational decisions or forecast market trends?",
    options: [
      { value: "A", text: "Relies almost exclusively on the localized experience and gut-feelings of the owner.", score: 1 },
      { value: "B", text: "Limited to calculating basic static metrics at year-end or review sessions.", score: 2 },
      { value: "C", text: "Constantly utilizes cloud-based interactive visuals (Dashboards) to drive weekly alignments.", score: 3 },
      { value: "D", text: "Implements advanced predictive modeling techniques to structure granular sales and demand forecast targets.", score: 4 }
    ]
  },
  {
    id: 8,
    text: "What is the status of your company's IT infrastructure and adoption of unified cloud-computing suites?",
    options: [
      { value: "A", text: "Lacking; slow networks, obsolete computer devices, and overall unreliable office routers.", score: 1 },
      { value: "B", text: "Sufficient for basic typing but missing any common shared cloud workspace for storing materials.", score: 2 },
      { value: "C", text: "Highly familiar with centralized enterprise cloud systems (e.g. Google Workspace, Microsoft 365, etc.).", score: 3 },
      { value: "D", text: "Modern serverless architecture with advanced role-based permissions and robust SaaS API integration.", score: 4 }
    ]
  },

  // People
  {
    id: 9,
    text: "How knowledgeable and proactive is your workforce regarding standard AI helpers (ChatGPT, Claude, Gemini, Midjourney, etc.)?",
    options: [
      { value: "A", text: "Hardly anyone has heard of them or learned how to leverage them for tasks.", score: 1 },
      { value: "B", text: "A small handful of employees self-taught some basic shortcuts but use is fragmented.", score: 2 },
      { value: "C", text: "Many teams use them daily to translate messages, draft outlines, or research search terms.", score: 3 },
      { value: "D", text: "Staff excels in structured prompting, treating AI assistants as high-utility daily coplayers.", score: 4 }
    ]
  },
  {
    id: 10,
    text: "Has your organization delivered systematic corporate training or bootcamps regarding Prompt engineering and AI concepts?",
    options: [
      { value: "A", text: "Never organized any courses, training modules, or expert workshops on this focus.", score: 1 },
      { value: "B", text: "Informally encourages self-education but allocates zero structured educational budgets.", score: 2 },
      { value: "C", text: "Sent core staff to external masterclasses or generic awareness technology seminars.", score: 3 },
      { value: "D", text: "Structured structured prompting curriculums delivered and updated periodically with leading external coaches.", score: 4 }
    ]
  },
  {
    id: 11,
    text: "What is the predominant psychological reaction of employees when introduced to novel software systems?",
    options: [
      { value: "A", text: "Fear of redundancy, cognitive friction, deep-seated anxiety, or quiet passive resistance.", score: 1 },
      { value: "B", text: "Indifference or neutrality; executing purely on mandatory instructions without active curiosity.", score: 2 },
      { value: "C", text: "Curious, cooperative, and highly receptive if training support is backed by leadership.", score: 3 },
      { value: "D", text: "Eagerly proposing digital strategies themselves; pro-innovation minds focusing on efficiency.", score: 4 }
    ]
  },
  {
    id: 12,
    text: "Does the business have a dedicated IT/digital shift leader, or a trusted external strategist to orchestrate deployment?",
    options: [
      { value: "A", text: "Completely absent; no internal tech owners and no external advisory support.", score: 1 },
      { value: "B", text: "Includes a general computer tech technician handling printers, lacking strategic model expertise.", score: 2 },
      { value: "C", text: "Maintains an active long-term agreement with general external software developers or outsourcing agencies.", score: 3 },
      { value: "D", text: "Backed by an experienced digital transformation team or a reliable advisory partnership with an AI expert.", score: 4 }
    ]
  },

  // Process
  {
    id: 13,
    text: "What is the character of standard, recurring office workflows in your business?",
    options: [
      { value: "A", text: "Intensely manual and repetitive; printing forms, chasing signatures, and manual entry.", score: 1 },
      { value: "B", text: "Communicate on instant messengers but tracking tasks and approvals remains completely manual.", score: 2 },
      { value: "C", text: "Core operational routines (Sales, CRM, Ledger) are centralized on digital project management apps.", score: 3 },
      { value: "D", text: "Flow-oriented automation (Workplace Automation) is deployed, ready to trigger cognitive agents.", score: 4 }
    ]
  },
  {
    id: 14,
    text: "What is the level of actual pilot test cases or active deployment of AI inside your marketing/sales/service workflows?",
    options: [
      { value: "A", text: "Zero adoption; no automation or predictive models have ever been tested.", score: 1 },
      { value: "B", text: "Created simple click-based chatbot menus on social channels or drafted introductory templates.", score: 2 },
      { value: "C", text: "Regularly uses systems to compile marketing copy, synthesize content layouts, or refine sales talk track.", score: 3 },
      { value: "D", text: "Fully integrated APIs into product code, creating exclusive value streams directly.", score: 4 }
    ]
  },
  {
    id: 15,
    text: "How does the business measure, benchmark, and align team performance (KPIs, OKRs)?",
    options: [
      { value: "A", text: "Purely based on subjective leader feelings, localized short-term impressions, and manual reports.", score: 1 },
      { value: "B", text: "Teams write disjointed status emails individually; missing automated cross-team data updates.", score: 2 },
      { value: "C", text: "Clear task execution tracked on dynamic task visual boards accessible to all key sponsors.", score: 3 },
      { value: "D", text: "Fully automated database syncs that flag bottlenecks and offer automated target adjustment advice.", score: 4 }
    ]
  },
  {
    id: 16,
    text: "Are your employees capable of configuring custom workflows without custom code (No-code/Low-code workflow builders)?",
    options: [
      { value: "A", text: "No capability; all technological adaptations require contracting external service agencies.", score: 1 },
      { value: "B", text: "Limited to creating simple drag-and-drop feedback sheets or structured contact boxes.", score: 2 },
      { value: "C", text: "Can link disjointed applications through intermediary cloud orchestrators (e.g. Zapier, Make).", score: 3 },
      { value: "D", text: "Proactively builds custom multi-modal chatbots and triggers AI chains using advanced tooling.", score: 4 }
    ]
  }
].map(q => {
  let category: "strategy" | "data" | "people" | "process" = "strategy";
  if (q.id >= 5 && q.id <= 8) category = "data";
  else if (q.id >= 9 && q.id <= 12) category = "people";
  else if (q.id >= 13 && q.id <= 16) category = "process";
  return { ...q, category };
});

// High-quality Rule-based report insights generator based on scores
export interface CategoryAnalysisResult {
  segmentTitle: string;
  evaluation: string;
  recommendations: string[];
}

export function getCategoryAnalysis(
  category: "strategy" | "data" | "people" | "process",
  score: number,
  lang: Lang
): CategoryAnalysisResult {
  const isVI = lang === "vi";
  
  if (category === "strategy") {
    if (score <= 8) {
      return {
        segmentTitle: isVI ? "NHẬN THỨC SƠ KHỞI - THẤP (Low Strategy Focus)" : "INCIPIENT FOCUS (Low Strategic Focus)",
        evaluation: isVI
          ? "Ban điều hành chưa bộc lộ định hướng áp dụng số hoặc chưa nhận thức sâu sắc về rủi ro của kỷ nguyên AI. Doanh nghiệp đang đối mặt nguy cơ mất tính cạnh tranh cao."
          : "Executive leadership exhibits low digital alignment or lacks a deep awareness of AI disruptions. Your firm faces substantial structural risk as peers scale.",
        recommendations: isVI
          ? [
              "Tập trung nâng cấp kiến thức số qua các nội dung ngắn, trực tuyến miễn phí.",
              "Vạch ra 01 bài toán gây đau đầu nhất trong bộ phận kinh doanh để thử nghiệm giải quyết trước bằng AI.",
              "Tham gia các nhóm tư vấn, hội thảo SME của Chuyên gia Nguyễn Vũ Huy Hoàng để cập nhật xu hướng thực tế."
            ]
          : [
              "Focus on basic digital literacy training for board sponsors via free online materials.",
              "Isolate the single most urgent operational bottleneck in your firm and prioritize a rapid AI experimental fix.",
              "Join localized business forums hosted by Consultant Nguyen Vu Huy Hoang to grab ready-to-use case studies."
            ]
      };
    } else if (score <= 13) {
      return {
        segmentTitle: isVI ? "BỘC PHÁT TRUNG BÌNH (Spontaneous Strategic Action)" : "SPONTANEOUS ACTION (Medium Strategic Focus)",
        evaluation: isVI
          ? "Ban lãnh đạo đã bắt đầu quan tâm và có thiện chí nhưng việc định biên ngân sách cũng như vạch kế hoạch AI còn rời rạc, chưa thống nhất thành chỉ số đo lường hiệu quả cụ thể."
          : "Sponsors are aligned and willing, but budget planning, resource mapping, and strategic AI goals remain highly fragmented and lack KPI tracking.",
        recommendations: isVI
          ? [
              "Chính thức trích xuất một phần nhỏ ngân sách hàng quý dành riêng cho việc chuyển đổi số và nâng tiện ích nhân sự.",
              "Xây dựng danh mục các đầu việc phù hợp để nhúng AI, tránh ứng dụng ồ ạt không định hướng.",
              "Đặt mục tiêu giảm thiểu ít nhất 20% chi phí xử lý văn bản hành chính thông qua các giải pháp Prompt chuẩn hóa."
            ]
          : [
              "Formally designate a small, ring-fenced quarterly budget purely for digital tests.",
              "Draft an internal taxonomy of which operational areas can be safety augmented by LLMs.",
              "Set a target to reduce writing or administrative hours by 20% by using master prompting templates."
            ]
      };
    } else {
      return {
        segmentTitle: isVI ? "ĐỊNH HƯỚNG XUẤT SẮC - CAO (Advanced Strategy Vision)" : "ADVANCED VISION (High Strategic focus)",
        evaluation: isVI
          ? "Tầm nhìn ban lãnh đạo cực kỳ xuất sắc. AI đã được công nhận là một trong 3 cánh tay đắc lực bậc nhất giúp bành trướng doanh thu của doanh nghiệp."
          : "Excellent executive vision. AI is explicitly targeted as one of the top 3 growth levers to expand corporate profitability in your market segment.",
        recommendations: isVI
          ? [
              "Thành lập ban chuyên trách AI nội bộ hoặc cử nhân sự nòng cốt làm điều phối viên thúc đẩy đổi mới liên tục.",
              "Xây dựng Nguyên tắc sử dụng AI An toàn để bảo mật thông tin tối mật của doanh nghiệp.",
              "Liên hệ Chuyên gia Nguyễn Vũ Huy Hoàng để cố vấn một lộ trình nhúng API AI độc quyền vào lõi kinh doanh sản phẩm."
            ]
          : [
              "Appoint a dedicated internal AI champion to maintain high pace of pilot discovery across departments.",
              "Enact a clear Security & Acceptable Use Policy for AI tools to protect confidential properties.",
              "Schedule an advanced design sprint with Nguyen Vu Huy Hoang to engineer proprietary custom workflows."
            ]
      };
    }
  }

  if (category === "data") {
    if (score <= 8) {
      return {
        segmentTitle: isVI ? "HẠ TẦNG TRUYỀN THỐNG - THẤP (Analog Data Legacy)" : "ANALOG LEGACY (Low Data Infrastructure)",
        evaluation: isVI
          ? "Hồ sơ lưu trữ thủ công hoặc Excel rời rạc khiến việc áp dụng AI gặp khó khăn nghiêm trọng. AI không có dữ liệu chất lượng để học hỏi và xử lý."
          : "Scattered spreadsheets or analog procedures create massive friction. No advanced AI agent can deliver high-level value without clean input context.",
        recommendations: isVI
          ? [
              "Khởi động dự án Số Hóa hồ sơ: Đưa mọi quy trình lưu trữ vật lý lên các nền tảng đám mây trực tuyến.",
              "Sắp xếp cấu trúc thư mục của công ty theo quy ước thống nhất để chuẩn bị cho việc nạp thông tin sau này.",
              "Bắt đầu sử dụng Google Drive hoặc Microsoft OneDrive để thiết lập thói quen chia sẻ thư liệu trực tuyến liên thông."
            ]
          : [
              "Launch a 'Digital First' registry initiative: migrate all physical archives to standard cloud files.",
              "Re-organize company cloud storage with a strict unified file-naming convention.",
              "Standardize G-Suite or Microsoft 365 cloud sharing habits across all client-facing employees."
            ]
      };
    } else if (score <= 13) {
      return {
        segmentTitle: isVI ? "SỐ HÓA BÁN PHẦN - TRUNG BÌNH (Fragmented Cloud Data)" : "FRAGMENTED DATA (Medium Data Infrastructure)",
        evaluation: isVI
          ? "Doanh nghiệp đã làm quen với lưu trữ đám mây trực tuyến, nhưng dữ liệu còn phân mảnh lớn giữa các phòng ban và chưa có hệ quy chuẩn làm sạch tự động."
          : "Your firm is comfortable with general cloud drives, but telemetry remains deeply siloed between teams and lacks routine cleaning procedures.",
        recommendations: isVI
          ? [
              "Kết nối các tệp dữ liệu cốt lõi (Sales và Marketing) thành một mối lưu trữ chung duy nhất.",
              "Bắt đầu quy định thời gian quét dọn và chuẩn hóa cơ sở dữ liệu khách hàng theo tháng.",
              "Sử dụng các cổng kết nối API sẵn có của phần mềm quản trị để đồng tải dữ liệu tự động giữa các bên."
            ]
          : [
              "Consolidate core sales databases and marketing leads into a unified Customer Relationship Management cloud repository.",
              "Instill a monthly dynamic cleaning sweep to purge duplicated entries and structure fields.",
              "Leverage standard pre-packaged UI integrations to feed data into your analytics dashboards automatically."
            ]
      };
    } else {
      return {
        segmentTitle: isVI ? "DỮ LIỆU THÔNG SUỐT - CAO (Structured Cloud Ecosystem)" : "CLOUD ECOSYSTEM (High Data Infrastructure)",
        evaluation: isVI
          ? "Hạ tầng dữ liệu số của bạn cực kỳ lý tưởng để sẵn sàng triển khai các dự án AI quy mô lớn hoặc tự động hóa RPA."
          : "Exceedingly mature data architecture. Your organization is primed to leverage custom models, automated chains, and autonomous RPA agents immediately.",
        recommendations: isVI
          ? [
              "Bắt đầu thử nghiệm xây dựng AI Agent hỗ trợ khách hàng thế hệ mới kết nối thẳng với API cơ sở dữ liệu bán hàng nội bộ.",
              "Mã hóa và kiểm soát kỹ lưỡng phân quyền bảo mật dữ liệu khách hàng theo từng vai trò nhân viên.",
              "Bắt đầu thiết lập mô hình dự báo thị trường, dự báo tồn kho bằng học máy tự động."
            ]
          : [
              "Experiment with an autonomous customer concierge agent linked directly to your core inventory/sales API endpoints.",
              "Enforce encryption standards and strict role-based access controls for your database.",
              "Incorporate automated predictive modeling to forecast localized seasonal demand and inventory cycles."
            ]
      };
    }
  }

  if (category === "people") {
    if (score <= 8) {
      return {
        segmentTitle: isVI ? "VĂN HÓA E NGẠI - THẤP (Low Tech Acceptance)" : "E RECOGNITION (Low Culture Readiness)",
        evaluation: isVI
          ? "Nguồn nhân lực đang có xu hướng phòng thủ, e ngại thay đổi và sợ công nghệ cướp mất cơ hội nghề nghiệp. Đây là rào cản nhân sinh cực kỳ nguy hại."
          : "Team displays classic cognitive resistance or fears being replaced by automated intelligence. This is a critical human obstacle to overcome.",
        recommendations: isVI
          ? [
              "Lãnh đạo cần truyền tải thông điệp truyền cảm hứng: 'AI không thay thế con người, mà người biết dùng AI sẽ thay thế người không biết dùng'.",
              "Tổ chức các cuộc thi nội bộ vui vẻ về Prompt sáng tạo để xóa tan sợ hãi đối với công nghệ mới.",
              "Tài trợ 100% tài khoản ChatGPT Plus hay Claude Pro cho các nhân sự đam mê thử nghiệm tiên phong."
            ]
          : [
              "Leadership must emphasize clear, positive narratives: 'AI will not replace humans; rather, humans using AI will replace those who do not.'",
              "Launch lighthearted, incentive-backed internal prompting hackathons to dispel technology anxiety.",
              "Fully sponsor standard pro accounts (e.g. ChatGPT Plus) for top performers who act as early tech adopters."
            ]
      };
    } else if (score <= 13) {
      return {
        segmentTitle: isVI ? "TỰ CHỦ RỜI RẠC - TRUNG BÌNH (Spontaneous Prompt Literacy)" : "SPONTANEOUS LITERACY (Medium Culture Readiness)",
        evaluation: isVI
          ? "Nhiều cá nhân tự mò mẫm học Prompt nhưng chưa có chương trình chia sẻ tập thể hay đào tạo hệ thống để nhân rộng hiệu suất vượt bậc cho cả doanh nghiệp."
          : "Multiple self-driven talents are using basic generative shortcuts, but no central knowledge-sharing structure exist to multiply these efficiency gains team-wide.",
        recommendations: isVI
          ? [
              "Tạo một kênh thông tin nội bộ (#ai-sharing) trực tuyến để nhân sự chia sẻ trực tiếp các câu lệnh (prompts) hiệu quả cho nhau hàng tuần.",
              "Xây dựng thư viện Prompt chuyên nghiệp dành riêng cho từng vị trí nghiệp vụ trong công ty.",
              "Tổ chức khóa huấn luyện ngắn chuyên nghiệp để đồng bộ hóa kỹ năng Prompt cơ bản cho toàn bộ đội ngũ."
            ]
          : [
              "Settle a central chat channel (e.g., #ai-best-practices) for employees to showcase their custom prompt recipes.",
              "Build a digital playbook documenting validated prompt formulas adapted specifically for separate teams.",
              "Run a tailored cross-departmental prompting masterclass to establish a standard baseline of AI execution."
            ]
      };
    } else {
      return {
        segmentTitle: isVI ? "ĐỘI NGŨ CHỦ ĐỘNG - CAO (Self-Driven AI Culture)" : "AI LEADER CULTURE (High Culture Readiness)",
        evaluation: isVI
          ? "Văn hóa đổi mới công nghệ vô cùng tuyệt vời. Nhân sự chủ động, xem AI như người đồng nghiệp tri kỷ và sục sôi trải nghiệm cái mới."
          : "Stellar pro-innovation engineering culture. Employees actively approach challenges with cognitive tools and embrace software upgrades with open arms.",
        recommendations: isVI
          ? [
              "Khuyến khích nhân sự tự động hóa các tác vụ lặp của họ bằng các nền tảng No-code.",
              "Thành lập quỹ phát kiến đổi mới số định kỳ hàng quý để trao giải cho các quy trình AI xuất sắc do nhân sự đề xuất.",
              "Huấn luyện nâng cao về tư duy logic giải quyết bài toán lớn, kỹ năng lập trình bổ trợ."
            ]
          : [
              "Instruct your teams to officially build automated self-service agents via friendly no-code builders.",
              "Set up a quarterly innovation fund to reward employee-led automated workflows that cut operational budgets.",
              "Sponsor advanced education in logical diagnostic thinking, basic script programming, and model fine-tuning."
            ]
      };
    }
  }

  // category === "process"
  if (score <= 8) {
    return {
      segmentTitle: isVI ? "QUY TRÌNH THỦ CÔNG - THẤP (High-Friction Manual Flow)" : "MANUAL FLOW (Low Process Automation)",
      evaluation: isVI
        ? "Mọi luồng công tác lặp đi lặp lại hoàn toàn thủ công. Sự rườm rà này làm triệt tiêu thời gian sáng tạo chiến lược của nhân sự."
        : "Operational workflows are riddled with manual routing, approvals, and physical sign-offs, completely exhausting staff cognitive energy.",
      recommendations: isVI
        ? [
            "Vẽ lại chi tiết sơ đồ công việc hàng ngày của doanh nghiệp để xác định 3 mắt xích lặp đi lặp lại tốn thời gian nhất.",
            "Tích hợp các chatbot hỗ trợ trực tuyến đơn giản có sẵn vào Fanpage, Website để lọc yêu cầu cơ bản của khách hàng.",
            "Chuẩn hóa kịch bản bán hàng và email chăm sóc thành các khối nội dung sẵn sàng cung cấp dữ liệu đầu nạp cho các thế hệ Prompt."
          ]
        : [
            "Document a granular flowchart of daily workflows to isolate the 3 most redundant time-consuming steps.",
            "Integrate simple pre-built chatbot logic on social channels or your site to filter simple clients.",
            "Convert sales scripts and routine customer support emails into clean, copy-pasteable blocks to serve as instant AI prompts."
          ]
    };
  } else if (score <= 13) {
    return {
      segmentTitle: isVI ? "TỰ ĐỘNG KHU VỰC - TRUNG BÌNH (Partial Automated Workflows)" : "PARTIAL AUTOMATION (Medium Process Automation)",
      evaluation: isVI
        ? "Doanh nghiệp đã chuyển đổi quy trình tốt trên các nền tảng quản trị dự án, nhưng các luồng việc chưa tự động hóa liên thông hoàn toàn."
        : "Your organization uses structured project management spaces, but workflows are not interconnected or fully automated through API actions.",
      recommendations: isVI
        ? [
            "Bắt đầu sử dụng Zapier hoặc Make để kết nối tự động luồng việc (Ví dụ: Khách điền Form -> Có thông báo về Chat -> Tự gửi Mail chào).",
            "Tích hợp các plugin AI xử lý thông tin trực tiếp vào phần mềm quản lý công việc để tự động tóm tắt biên bản các buổi họp nội bộ.",
            "Thử nghiệm chatbot tư vấn sản phẩm nội bộ phục vụ cho chính nhân sự kinh doanh tra cứu kiến thức sản phẩm."
          ]
        : [
            "Deploy low-code triggers using Make or Zapier to connect tools (e.g. Lead Form -> Notification -> Automated Email response).",
            "Embed cognitive plugins inside your communication spaces to automatically transcribe and summarize company meeting logs.",
            "Test a simple internal product knowledge chatbot to help onboarding team members retrieve specs and guidelines instantly."
          ]
    };
  } else {
    return {
      segmentTitle: isVI ? "ĐỘT PHÁ TỰ ĐỘNG - CAO (Hyper-Automated Ecosystem)" : "HYPER-AUTOMATED (High Process Automation)",
      evaluation: isVI
        ? "Quy trình vận hành cực kỳ trơn tru, liền mạch kỹ thuật số cao. Bạn đang nắm giữ cơ hội vàng kiến tạo mô hình Autonomous Agent bứt tốc tăng trưởng."
        : "Outstanding structural agility. Workflows are digitized and accessible, making your firm prime for a hyper-automated, agent-driven scaling ecosystem.",
      recommendations: isVI
        ? [
            "Xây dựng hệ thống tự phục vụ của khách hàng (AI Support) thông qua mô hình trò chuyện đa phương thức tự động giải phóng 80% hotline.",
            "Kết nối phân tích báo cáo tự động cập nhật liên tục thông qua API gửi báo cáo tình hình tài chính tới lãnh đạo hàng ngày.",
            "Chia sẻ mô hình tự động hóa thành công đầu tiên này như một điển cứu cạnh tranh bứt phá tuyển dụng nhân tài lớn."
          ]
        : [
            "Design a multi-modal client-facing support desk (AI assistant) to answer 80% of routine technical requests autonomously.",
            "Orchestrate automatic backend jobs that pull database telemetry and output clean executive briefs directly every morning.",
            "Package or share your pioneer digital achievements in external case studies to boost your brand prestige."
          ]
    };
  }
}
