import React, { useState } from "react";
import { CategoryKey } from "../types";
import { QUESTIONS, CATEGORIES } from "../data";
import { TRANSLATIONS, EN_QUESTIONS, Lang } from "../translations";
import { ChevronLeft, ChevronRight, Check, ListTodo, BrainCircuit, Database, Users, Settings, AlertCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface QuestionnaireProps {
  answers: Record<number, number>; // id to score
  onSelectAnswer: (questionId: number, score: number) => void;
  onSubmit: () => void;
  onBack: () => void;
  lang: Lang;
}

export default function Questionnaire({ answers, onSelectAnswer, onSubmit, onBack, lang }: QuestionnaireProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = TRANSLATIONS[lang];
  const questionList = lang === "vi" ? QUESTIONS : EN_QUESTIONS;
  
  const currentQuestion = questionList[currentIndex];
  const totalQuestions = questionList.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const currentCategory = CATEGORIES.find(cat => cat.key === currentQuestion.category);

  // Helper icons for categories
  const getCategoryIcon = (key: CategoryKey) => {
    switch (key) {
      case "strategy":
        return <BrainCircuit className="h-5 w-5 text-purple-500" />;
      case "data":
        return <Database className="h-5 w-5 text-cyan-400" />;
      case "people":
        return <Users className="h-5 w-5 text-emerald-400" />;
      case "process":
        return <Settings className="h-5 w-5 text-amber-500" />;
    }
  };

  const getCategoryBgColor = (key: CategoryKey) => {
    switch (key) {
      case "strategy": return "bg-purple-500/10 text-purple-400 border-purple-500/25";
      case "data": return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25";
      case "people": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/25";
      case "process": return "bg-amber-500/10 text-amber-400 border-amber-500/25";
    }
  };

  const getCategoryName = (key: CategoryKey) => {
    switch (key) {
      case "strategy": return t.strategyName;
      case "data": return t.dataName;
      case "people": return t.peopleName;
      case "process": return t.processName;
    }
  };

  const currentScore = answers[currentQuestion.id] || 0;

  const handleOptionSelect = (score: number) => {
    onSelectAnswer(currentQuestion.id, score);
    // Auto-advance with visual buffer
    if (currentIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 400);
    }
  };

  const handleNext = () => {
    if (answers[currentQuestion.id] === undefined) {
      return; 
    }
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const allAnswered = questionList.every(q => answers[q.id] !== undefined);
  const isCurrentAnswered = answers[currentQuestion.id] !== undefined;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      id="survey-player-container" 
      className="max-w-3xl mx-auto bg-white dark:bg-slate-900/40 border border-slate-205 dark:border-slate-800 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 transition-all duration-300"
    >
      {/* Pillar Tracker Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3 rounded-xl">
            <ListTodo className="h-6 w-6 text-indigo-600 dark:text-cyan-400" />
          </div>
          <div>
            <span className="text-xxs font-mono font-bold text-slate-400 dark:text-slate-500 block uppercase leading-none tracking-widest">{t.progressLabel}</span>
            <span className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
              {t.questionLabel} <span className="text-indigo-650 dark:text-cyan-400 font-mono">{currentIndex + 1}</span> / {totalQuestions}
            </span>
          </div>
        </div>

        {currentCategory && (
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider ${getCategoryBgColor(currentCategory.key)}`}>
            {getCategoryIcon(currentCategory.key)}
            <span>{getCategoryName(currentCategory.key)}</span>
          </div>
        )}
      </div>

      {/* Modern Progress Line with beautiful animation */}
      <div className="space-y-2">
        <div className="h-2 w-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xxs font-mono text-slate-450 uppercase">{t.progressLabel}</span>
          <span className="text-xxs font-mono text-indigo-650 dark:text-cyan-400 font-bold">{progressPercent}% {t.progressPercentLabel}</span>
        </div>
      </div>

      {/* Main Question Box with Slide Transition */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.25 }}
          className="space-y-6"
        >
          <div className="min-h-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black font-display text-slate-900 dark:text-white leading-snug">
              {currentQuestion.text}
            </h3>
          </div>

          {/* Dynamic option selectors */}
          <div className="space-y-4">
            {currentQuestion.options.map((opt) => {
              const isSelected = currentScore === opt.score;
              return (
                <motion.button
                  whileHover={{ scale: 1.006, transition: { duration: 0.1 } }}
                  whileTap={{ scale: 0.994 }}
                  key={opt.value}
                  onClick={() => handleOptionSelect(opt.score)}
                  className={`w-full text-left flex items-start space-x-4 p-4.5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-slate-50/80 to-slate-100/50 dark:from-slate-950 dark:to-slate-900 border-cyan-500 text-slate-900 dark:text-white shadow-xl dark:shadow-cyan-500/5 ring-1 ring-cyan-500"
                      : "bg-slate-50/40 dark:bg-slate-950/20 hover:bg-slate-100/40 dark:hover:bg-slate-900/30 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:border-slate-350 dark:hover:border-slate-700"
                  }`}
                >
                  <div className={`mt-0.5 h-7 w-7 rounded-full flex items-center justify-center font-bold text-xs font-mono shrink-0 transition-colors ${
                    isSelected 
                      ? "bg-cyan-500 text-slate-950 dark:bg-cyan-400 dark:text-slate-950 shadow-md" 
                      : "bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                  }`}>
                    {opt.value}
                  </div>
                  
                  <div className="flex-1 text-sm sm:text-base pr-4 text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
                    {opt.text}
                  </div>

                  {isSelected ? (
                    <div className="bg-cyan-500 dark:bg-cyan-400 p-1.5 rounded-full text-slate-950 flex shrink-0 shadow-sm">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="h-6 w-6 border border-slate-300 dark:border-slate-700 rounded-full shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Alert Warning if Unanswered */}
      {!isCurrentAnswered && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2 text-xs text-rose-500 dark:text-rose-400 font-semibold bg-rose-500/10 p-3.5 rounded-xl border border-rose-500/20"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{t.alertAnswerRequired}</span>
        </motion.div>
      )}

      {/* Navigation Buttons and Submit */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>{t.btnPrev}</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!isCurrentAnswered || currentIndex === totalQuestions - 1}
            className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
            title={!isCurrentAnswered ? t.alertAnswerRequired : ""}
          >
            <span>{t.btnNext}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {currentIndex === totalQuestions - 1 ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSubmit}
            disabled={!allAnswered}
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-650 to-cyan-500 hover:from-indigo-600 hover:to-cyan-400 text-white font-black px-10 py-4 rounded-xl shadow-lg shadow-indigo-500/25 transition-all text-xs uppercase tracking-widest cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{t.btnSubmit}</span>
            <Check className="h-4 w-4 stroke-[2.5]" />
          </motion.button>
        ) : (
          <button
            onClick={onBack}
            className="text-xs text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-cyan-400 underline font-semibold transition-colors cursor-pointer"
          >
            {t.btnCancel}
          </button>
        )}
      </div>
    </motion.div>
  );
}
