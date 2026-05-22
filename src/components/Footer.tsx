import React from "react";
import { TRANSLATIONS, Lang } from "../translations";
import { Award, Briefcase, ShieldCheck, Phone } from "lucide-react";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="footer-logo-panel" className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10 sm:py-16 mt-16 print:border-t-0 print:pt-6 print:mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Brand stamp & copyright */}
        <div className="md:col-span-12 lg:col-span-5 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-cyan-500/10 p-2.5 rounded-lg border border-cyan-500/30">
              <ShieldCheck id="footer-logo-shield" className="h-6 w-6 text-cyan-400 animate-pulse" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-lg tracking-tight text-white uppercase">{t.siteTitle}</h3>
              <p className="text-xs text-slate-500 font-mono">BẢN QUYỀN CHƯƠNG TRÌNH © 2026</p>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
            {t.expertCopyright}
          </p>
        </div>

        {/* Expert biography & credentials spacing */}
        <div className="md:col-span-12 lg:col-span-7 space-y-5 lg:pl-6 border-t lg:border-t-0 lg:border-l border-slate-800 pt-8 lg:pt-0">
          <h4 className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase">
            {t.authorLabel}
          </h4>

          <div className="space-y-1">
            <div>
              <span className="text-xl font-black font-sans text-white tracking-tight">
                {t.authorName}
              </span>
              <span className="block text-sm text-cyan-400 font-semibold mt-0.5">
                {t.expertFooterSubtitle}
              </span>
            </div>
          </div>

          <div className="space-y-3.5 text-sm">
            <div className="flex items-start space-x-3">
              <div className="mt-0.5 bg-slate-900 p-1.5 rounded text-cyan-400 border border-slate-800">
                <Award className="h-4.5 w-4.5" />
              </div>
              <span className="text-slate-300 leading-relaxed">
                {t.expertCredential1}
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <div className="mt-0.5 bg-slate-900 p-1.5 rounded text-cyan-400 border border-slate-800">
                <Briefcase className="h-4.5 w-4.5" />
              </div>
              <span className="text-slate-300 leading-relaxed">
                {t.expertCredential2}
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <div className="mt-0.5 bg-slate-900 p-1.5 rounded text-cyan-400 border border-slate-800">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <span className="text-slate-300 leading-relaxed">
                {t.expertCredential3}
              </span>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white p-2.5 rounded-full shadow-lg shadow-indigo-500/20">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-xs text-slate-500 font-mono leading-none">{t.expertFooterContactLabel}</span>
                <a 
                  href="tel:0949124620" 
                  className="text-lg font-black font-mono tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  0949.124.620
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
