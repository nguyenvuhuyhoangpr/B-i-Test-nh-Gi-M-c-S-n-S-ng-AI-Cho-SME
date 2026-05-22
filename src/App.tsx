import React, { useState, useEffect } from "react";
import { TRANSLATIONS, Lang } from "./translations";
import IntroSection from "./components/IntroSection";
import Questionnaire from "./components/Questionnaire";
import ResultSection from "./components/ResultSection";
import Footer from "./components/Footer";
import { BrainCircuit, GraduationCap, Sun, Moon, Languages } from "lucide-react";

export default function App() {
  const [screen, setScreen] = useState<"intro" | "test" | "results">("intro");
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return (localStorage.getItem("sme-ai-lang") as Lang) || "vi";
    } catch {
      return "vi";
    }
  });

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      return (localStorage.getItem("sme-ai-theme") as "light" | "dark") || "dark";
    } catch {
      return "dark";
    }
  });

  // Hashmap of answers where Key = questionId, Value = score (1 to 4)
  const [answers, setAnswers] = useState<Record<number, number>>({});

  useEffect(() => {
    try {
      localStorage.setItem("sme-ai-lang", lang);
    } catch (e) {
      console.warn("Storage write failure", e);
    }
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem("sme-ai-theme", theme);
    } catch (e) {
      console.warn("Storage write failure", e);
    }
  }, [theme]);

  const handleStartTest = () => {
    setScreen("test");
  };

  const handleSelectAnswer = (qId: number, score: number) => {
    setAnswers(prev => ({
      ...prev,
      [qId]: score
    }));
  };

  const handleSubmitTest = () => {
    setScreen("results");
  };

  const handleReset = () => {
    setAnswers({});
    setScreen("intro");
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className={`${theme === "dark" ? "dark bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"} min-h-screen flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300`}>
      {/* Top Professional Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 print:hidden transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo & Institute Context */}
          <div className="flex items-center space-x-3 text-center md:text-left cursor-pointer" onClick={handleReset}>
            <div className="bg-gradient-to-br from-indigo-500 to-cyan-400 text-white p-2.5 rounded-xl shadow-lg">
              <BrainCircuit className="h-6 w-6 stroke-[2]" />
            </div>
            <div>
              <h2 className="text-xxs font-mono font-black text-indigo-600 dark:text-cyan-400 tracking-wider leading-none uppercase">{t.academicBody}</h2>
              <span className="text-base sm:text-lg font-black font-display text-slate-900 dark:text-white tracking-tight leading-normal">
                {t.subtitle}
              </span>
            </div>
          </div>

          {/* Controls Box: Theme Toggle, Lang Swapper, Bio badge */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            {/* Language Switch Clickable Pills */}
            <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-1.5 rounded-xl text-xs">
              <Languages className="h-3.5 w-3.5 text-slate-400 mr-1.5 hidden sm:inline ml-1" />
              <button
                onClick={() => setLang("vi")}
                className={`px-3 py-1 rounded-lg font-bold text-xs cursor-pointer transition-all ${
                  lang === "vi" 
                    ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 shadow-xs" 
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-350"
                }`}
              >
                Tiếng Việt
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-lg font-bold text-xs cursor-pointer transition-all ${
                  lang === "en" 
                    ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 shadow-xs" 
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-350"
                }`}
              >
                English
              </button>
            </div>

            {/* Light/Dark Toggle Button */}
            <button
              onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors shadow-xs cursor-pointer"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-500" />
              ) : (
                <Moon className="h-4 w-4 text-indigo-600" />
              )}
            </button>

            {/* Expert Accreditation Badge */}
            <div className="hidden sm:flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider">
              <GraduationCap className="h-4 w-4 text-indigo-600 dark:text-cyan-400" />
              <span className="text-slate-700 dark:text-slate-200 font-bold">{t.authorName}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container spacing */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {screen === "intro" && (
          <IntroSection onStart={handleStartTest} lang={lang} />
        )}
        
        {screen === "test" && (
          <Questionnaire 
            answers={answers} 
            onSelectAnswer={handleSelectAnswer} 
            onSubmit={handleSubmitTest} 
            onBack={handleReset} 
            lang={lang}
          />
        )}
        
        {screen === "results" && (
          <ResultSection 
            answers={answers} 
            onReset={handleReset} 
            lang={lang}
          />
        )}
      </main>

      {/* Corporate Professional Footer */}
      <Footer lang={lang} />
    </div>
  );
}
