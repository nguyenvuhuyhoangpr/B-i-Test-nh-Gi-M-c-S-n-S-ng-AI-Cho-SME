import React from "react";
import { CategoryKey } from "../types";
import { CATEGORIES } from "../data";
import { TRANSLATIONS, getCategoryAnalysis, Lang } from "../translations";
import { 
  Award, 
  RefreshCw, 
  Printer, 
  BrainCircuit, 
  CheckCircle2, 
  TrendingUp, 
  Database, 
  Users, 
  Settings,
  Star,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { motion } from "motion/react";

interface ResultSectionProps {
  answers: Record<number, number>; // questionId -> score (1-4)
  onReset: () => void;
  lang: Lang;
}

export default function ResultSection({ answers, onReset, lang }: ResultSectionProps) {
  const t = TRANSLATIONS[lang];

  // Calculate scores
  // There are 16 questions in total, 4 per category.
  // Raw max per category is 4 * 4 = 16 points. Raw min is 4 * 1 = 4 points.
  // We normalize to a 25.0 point scale for easy total sum up to 100%.
  const categoryScores = CATEGORIES.reduce((acc, cat) => {
    const qIdsInCat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].filter(id => {
      if (cat.key === "strategy") return id >= 1 && id <= 4;
      if (cat.key === "data") return id >= 5 && id <= 8;
      if (cat.key === "people") return id >= 9 && id <= 12;
      return id >= 13 && id <= 16;
    });

    const sum = qIdsInCat.reduce((total, id) => total + (answers[id] || 0), 0);
    // Normalized score: (sum / de-max 16) * 25.
    const normalized = Math.round((sum / 16) * 25);
    acc[cat.key] = normalized;
    return acc;
  }, {} as Record<CategoryKey, number>);

  const overallScore = Math.round(
    categoryScores.strategy + 
    categoryScores.data + 
    categoryScores.people + 
    categoryScores.process
  );

  const getLevelInfo = () => {
    if (overallScore <= 35) {
      return {
        name: t.levelIncipient,
        color: "bg-rose-500/10 text-rose-300 border-rose-500/20",
        badge: "bg-rose-600 text-white",
        desc: t.levelIncipientDesc,
        accent: "text-rose-450 dark:text-rose-400"
      };
    } else if (overallScore <= 60) {
      return {
        name: t.levelSpontaneous,
        color: "bg-amber-500/10 text-amber-300 border-amber-500/20",
        badge: "bg-amber-500 text-slate-950",
        desc: t.levelSpontaneousDesc,
        accent: "text-amber-450 dark:text-amber-400"
      };
    } else if (overallScore <= 85) {
      return {
        name: t.levelOptimistic,
        color: "bg-indigo-500/10 text-indigo-300 border-indigo-505/20 border-indigo-500/20",
        badge: "bg-indigo-600 text-white",
        desc: t.levelOptimisticDesc,
        accent: "text-indigo-400"
      };
    } else {
      return {
        name: t.levelBreakthrough,
        color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
        badge: "bg-emerald-600 text-white",
        desc: t.levelBreakthroughDesc,
        accent: "text-emerald-400"
      };
    }
  };

  const levelInfo = getLevelInfo();

  const handlePrint = () => {
    window.print();
  };

  // List of formatted analyses for each of the 4 domains
  const pillars: { key: CategoryKey; title: string; score: number; colorClass: string; barGradient: string; icon: React.ReactNode }[] = [
    { key: "strategy", title: t.strategyName, score: categoryScores.strategy, colorClass: "text-purple-600 dark:text-purple-400", barGradient: "from-purple-500 to-indigo-500", icon: <BrainCircuit className="h-5 w-5" /> },
    { key: "data", title: t.dataName, score: categoryScores.data, colorClass: "text-cyan-600 dark:text-cyan-400", barGradient: "from-cyan-500 to-blue-500", icon: <Database className="h-5 w-5" /> },
    { key: "people", title: t.peopleName, score: categoryScores.people, colorClass: "text-emerald-600 dark:text-emerald-400", barGradient: "from-emerald-500 to-teal-500", icon: <Users className="h-5 w-5" /> },
    { key: "process", title: t.processName, score: categoryScores.process, colorClass: "text-amber-600 dark:text-amber-400", barGradient: "from-amber-600 to-amber-400", icon: <Settings className="h-5 w-5" /> },
  ];

  // Motion animation parameters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="results-portal-screen" 
      className="space-y-12 print:mt-0 max-w-4xl mx-auto"
    >
      {/* Visual Result Hero Header */}
      <motion.div 
        variants={itemVariants}
        className="relative overflow-hidden bg-white dark:bg-slate-900/40 border border-slate-205 dark:border-slate-800 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8"
      >
        {/* Glow ambient design assets */}
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-100 dark:border-slate-800 pb-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/25 px-4 py-1.5 rounded-full text-xxs font-mono font-bold uppercase tracking-wider">
              <Award className="h-4 w-4 text-cyan-500" />
              <span>{t.resultsSub}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white tracking-tight">
              {t.resultsHeader}
            </h1>
          </div>

          {/* Quick actions panel */}
          <div className="flex items-center justify-center gap-3 w-full sm:w-auto print:hidden">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-950/60 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
            >
              <Printer className="h-4.5 w-4.5 text-cyan-550 dark:text-cyan-400" />
              <span>{t.btnPrint}</span>
            </button>
            
            <button
              onClick={onReset}
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-550 hover:to-cyan-400 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all shadow-md shadow-indigo-500/20 font-bold"
            >
              <RefreshCw className="h-4.5 w-4.5 animate-spin" style={{ animationDuration: "12s" }} />
              <span>{t.btnRetake}</span>
            </button>
          </div>
        </div>

          {/* Dashboard statistics showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Circular SVG Dial Gauge */}
          <div className="lg:col-span-5 text-center space-y-4 flex flex-col items-center">
            <div className="relative inline-block">
              {/* Outer visual aura rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 filter blur-xl opacity-80 animate-pulse"></div>
              
              <svg className="w-56 h-56 sm:w-64 sm:h-64 mx-auto relative z-10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="41" stroke="#e2e8f0" className="dark:stroke-slate-800/80" strokeWidth="6" fill="transparent" />
                
                {/* Score path with glow filters */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="41" 
                  stroke="url(#highScoreGrad)" 
                  strokeWidth="7" 
                  fill="transparent"
                  strokeDasharray="257.6" 
                  strokeDashoffset={257.6 - (257.6 * overallScore) / 100}
                  strokeLinecap="round" 
                  transform="rotate(-90 50 50)" 
                  className="transition-all duration-1000 ease-out" 
                />
                
                {/* Score text markup */}
                <text x="50" y="48" textAnchor="middle" className="text-4xl font-display font-black leading-none fill-slate-900 dark:fill-white">{overallScore}</text>
                <text x="50" y="64" textAnchor="middle" className="text-xs font-black font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">/ 100</text>
                
                {/* High quality visual gradients */}
                <defs>
                  <linearGradient id="highScoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#818cf8" /> {/* Indigo light */}
                    <stop offset="50%" stopColor="#06b6d4" /> {/* Cyan */}
                    <stop offset="100%" stopColor="#10b981" /> {/* Emerald */}
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="space-y-1">
              <h2 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider font-mono flex items-center justify-center space-x-1">
                <span>{t.overallScoreLabel}</span>
                <Sparkles className="h-4 w-4 text-cyan-400 animate-bounce" />
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">{t.overallScoreDesc}</p>
            </div>
          </div>

          {/* Level information text block */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4">
            <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-md ${levelInfo.color} space-y-4 shadow-xl`}>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest ${levelInfo.badge} flex items-center space-x-1`}>
                  <Star className="h-4 w-4 fill-current" />
                  <span>{t.levelBadgeLabel}</span>
                </span>
                <span className="font-extrabold text-lg sm:text-xl uppercase tracking-tight text-slate-900 dark:text-white leading-none">{levelInfo.name}</span>
              </div>
              
              <div className="text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-relaxed font-sans space-y-3 font-medium">
                <p>{levelInfo.desc}</p>
                
                <div className="bg-white/40 dark:bg-slate-950/40 p-4 rounded-xl border border-white/40 dark:border-slate-800/80 flex items-center space-x-3 mt-4 text-slate-800 dark:text-slate-200">
                  <ShieldCheck className="h-5 w-5 text-cyan-500 dark:text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold">Mô hình giải pháp được chứng nhận đánh giá bởi chuyên gia AI Nguyễn Vũ Huy Hoàng.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Axis Breakdown Scores & Custom SVG Radar Visual Complex */}
      <motion.div 
        variants={itemVariants}
        className="bg-white dark:bg-slate-900/40 border border-slate-205 dark:border-slate-800 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <h2 className="text-xl sm:text-2xl font-black font-display text-slate-900 dark:text-white tracking-tight flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6 text-cyan-500 shrink-0" />
            <span>{t.radarChartTitle}</span>
          </h2>
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">{lang === "vi" ? "16 Tiêu Chí Năng Lực" : "16 Capability Criteria"}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Horizontal progress bars listing */}
          <div className="lg:col-span-6 space-y-6">
            {pillars.map((p, i) => {
              const scorePercent = (p.score / 25) * 100;
              return (
                <div className="space-y-3 bg-slate-50/50 dark:bg-slate-950/20 p-5 rounded-xl border border-slate-200/50 dark:border-slate-900" key={p.key}>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
                      <span className="text-slate-500 font-mono text-xs bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">0{i + 1}</span>
                      <span>{p.title}</span>
                    </span>
                    <span className={`font-mono font-extrabold text-base sm:text-lg ${p.colorClass}`}>{p.score} <span className="text-slate-400 text-xs font-bold">/ 25</span></span>
                  </div>
                  
                  {/* Glowing custom dynamic bar progress */}
                  <div className="h-5 w-full bg-slate-100 dark:bg-slate-950 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-850 p-0.5 relative">
                    <div 
                      className={`h-full bg-gradient-to-r ${p.barGradient} rounded-md transition-all duration-1000 ease-out`} 
                      style={{ width: `${scorePercent}%` }}
                    >
                      {/* Ambient flash reflex overlay */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Upgraded Comparative Radar map */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center space-y-4">
            <span className="text-xs font-mono font-black text-slate-500 uppercase tracking-widest text-center">{t.radarChartLabelStrategy} · {t.radarChartLabelData} · {t.radarChartLabelPeople} · {t.radarChartLabelProcess}</span>
            
            <div className="relative">
              {/* Pulse overlay inside radar */}
              <div className="absolute inset-10 rounded-full bg-cyan-500/5 filter blur-2xl animate-pulse"></div>

              <svg className="w-64 h-64 sm:w-72 sm:h-72 relative z-10" viewBox="-10 -10 120 120">
                {/* Visual grid rings */}
                <circle cx="50" cy="50" r="10" stroke="#94a3b8" className="dark:stroke-slate-700" strokeWidth="0.4" fill="none" strokeDasharray="1 3" />
                <circle cx="50" cy="50" r="20" stroke="#94a3b8" className="dark:stroke-slate-700" strokeWidth="0.4" fill="none" strokeDasharray="1 3" />
                <circle cx="50" cy="50" r="30" stroke="#94a3b8" className="dark:stroke-slate-700" strokeWidth="0.4" fill="none" strokeDasharray="1 3" />
                <circle cx="50" cy="50" r="40" stroke="#94a3b8" className="dark:stroke-slate-700" strokeWidth="0.5" fill="none" strokeDasharray="1 3" />
                
                {/* Anchor outer border grid octagons */}
                <polygon points="50,10 90,50 50,90 10,50" stroke="#475569" className="dark:stroke-slate-600" strokeWidth="1" fill="none" />
                <polygon points="50,20 80,50 50,80 20,50" stroke="#cbd5e1" className="dark:stroke-slate-700" strokeWidth="0.6" fill="none" strokeDasharray="1 1" />
                
                {/* Dynamic crosshair axes */}
                <line x1="50" y1="5" x2="50" y2="95" stroke="#475569" className="dark:stroke-slate-600" strokeWidth="0.8" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="#475569" className="dark:stroke-slate-600" strokeWidth="0.8" />

                {/* Draw comparative polygon path */}
                {(() => {
                   const s = (categoryScores.strategy / 25) * 40;
                   const d = (categoryScores.data / 25) * 40;
                   const p = (categoryScores.people / 25) * 40;
                   const pr = (categoryScores.process / 25) * 40;

                   const p1 = `50,${50 - s}`;
                   const p2 = `${50 + d},50`;
                   const p3 = `50,${50 + p}`;
                   const p4 = `${50 - pr},50`;

                  return (
                    <>
                      {/* Area polygon overlay */}
                      <polygon 
                        points={`${p1} ${p2} ${p3} ${p4}`} 
                        fill="rgba(6, 182, 212, 0.3)" 
                        stroke="#06b6d4" 
                        strokeWidth="2.5" 
                        className="transition-all duration-1000 ease-out" 
                      />
                      
                      {/* Anchor feedback score dots */}
                      <circle cx="50" cy={50 - s} r="4.5" fill="#a855f7" className="shadow" />
                      <circle cx={50 + d} cy="50" r="4.5" fill="#06b6d4" className="shadow" />
                      <circle cx="50" cy={50 + p} r="4.5" fill="#10b981" className="shadow" />
                      <circle cx={50 - pr} cy="50" r="4.5" fill="#f59e0b" className="shadow" />
                    </>
                  );
                })()}

                {/* Radar label nodes */}
                <text x="50" y="-1" textAnchor="middle" className="text-[10px] sm:text-xs font-black font-mono uppercase fill-purple-700 dark:fill-purple-400 drop-shadow-sm">{t.radarChartLabelStrategy}</text>
                <text x="100" y="53" textAnchor="start" className="text-[10px] sm:text-xs font-black font-mono uppercase fill-cyan-700 dark:fill-cyan-400 drop-shadow-sm">{t.radarChartLabelData}</text>
                <text x="50" y="106" textAnchor="middle" className="text-[10px] sm:text-xs font-black font-mono uppercase fill-emerald-700 dark:fill-emerald-400 drop-shadow-sm">{t.radarChartLabelPeople}</text>
                <text x="0" y="53" textAnchor="end" className="text-[10px] sm:text-xs font-black font-mono uppercase fill-amber-700 dark:fill-amber-400 drop-shadow-sm">{t.radarChartLabelProcess}</text>
              </svg>
            </div>
            
            <span className="text-xs text-slate-600 dark:text-slate-400 text-center leading-relaxed font-medium mt-2">{t.radarChartDesc}</span>
          </div>
        </div>
      </motion.div>

      {/* Structured Detailed Analysis Report in Vietnamese of English */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-black font-display text-slate-950 dark:text-white tracking-tight flex items-center space-x-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          <Award className="h-6 w-6 text-indigo-500 shrink-0" />
          <span>{t.pillarAnalysisHeader}</span>
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {pillars.map((p) => {
            const analysis = getCategoryAnalysis(p.key, p.score, lang);
            return (
              <motion.div 
                whileHover={{ y: -3 }}
                key={p.key} 
                className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Pillar Header and Rating Scores */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex p-2.5 rounded-xl ${
                      p.key === "strategy" ? "bg-purple-500/10 text-purple-500" :
                      p.key === "data" ? "bg-cyan-500/10 text-cyan-500" :
                      p.key === "people" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-600 dark:text-amber-500"
                    }`}>
                      {p.icon}
                    </span>
                    <h4 className="font-black font-display text-slate-900 dark:text-white text-lg sm:text-xl">
                      {p.title}
                    </h4>
                  </div>
                  
                  <div className="flex items-center space-x-2 self-start sm:self-center">
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-500 uppercase tracking-widest">{t.progressPercentLabel}:</span>
                    <span className={`font-mono font-black text-base sm:text-xl ${p.colorClass}`}>{p.score} / 25</span>
                  </div>
                </div>

                {/* Sub-group dynamic evaluations with rich presentation */}
                <div className="space-y-6 text-sm sm:text-base">
                  
                  {/* Real diagnostic statement */}
                  <div className="space-y-3">
                    <span className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs sm:text-sm block tracking-widest">{t.evaluationLabel}</span>
                    <div className="p-5 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 text-slate-900 dark:text-slate-200 leading-relaxed text-sm sm:text-base font-medium">
                      <strong className="block text-slate-950 dark:text-white text-base sm:text-lg mb-2.5 font-bold font-display flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-cyan-500 shrink-0" />
                        <span>{analysis.segmentTitle}</span>
                      </strong>
                      {analysis.evaluation}
                    </div>
                  </div>

                  {/* Curated list of recommendations */}
                  <div className="space-y-3">
                    <span className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs sm:text-sm block tracking-widest leading-none">{t.actionPlansLabel}</span>
                    <ul className="grid grid-cols-1 gap-3">
                      {analysis.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start space-x-3 text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-50/70 dark:bg-slate-950/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors text-sm sm:text-base font-medium font-sans">
                          <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
