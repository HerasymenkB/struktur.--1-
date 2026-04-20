/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Check, 
  Instagram, 
  Search, 
  ShieldCheck, 
  Globe, 
  Zap, 
  MessageCircle, 
  TrendingUp,
  Mail,
  Linkedin,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  X as XIcon,
  ChevronDown
} from 'lucide-react';
import { motion, animate, useInView, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import * as Slides from './components/PresentationSlides';
import { translations, Language } from './translations';

function useGraphAnimation<T extends HTMLElement | SVGElement>() {
  const [isTriggered, setIsTriggered] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current || isTriggered) return;

    // ONE trigger function for both cases
    const triggerAnimation = () => {
      setIsTriggered(true);
    };

    // 1. Detect initial visibility on load securely
    const rect = ref.current.getBoundingClientRect();
    // If the top of the element is inside the screen (or above it during a reload layout)
    if (rect.top < window.innerHeight * 0.95) {
      triggerAnimation();
      return;
    }

    // 2. If NOT visible initially, attach IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger earlier as soon as 15% of the graph breaches the viewport
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px 0px 0px"
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isTriggered]);

  return { ref, isTriggered };
}

const Counter = ({ value, duration = 1.2 }: { value: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const { ref, isTriggered } = useGraphAnimation<HTMLSpanElement>();
  
  useEffect(() => {
    if (!isTriggered) return;

    const isPercentage = value.includes('%');
    const isScore = value.includes('/');
    const isPlus = value.startsWith('+');
    const isSeconds = value.endsWith('s');
    
    let numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
    if (isNaN(numericValue)) numericValue = 0;

    const controls = animate(0, numericValue, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        let formatted = '';
        if (isPercentage) {
          formatted = latest.toFixed(1) + '%';
        } else if (isSeconds) {
          formatted = latest.toFixed(1) + 's';
        } else if (isScore) {
          formatted = Math.round(latest) + ' / 100';
        } else if (isPlus) {
          formatted = '+' + Math.round(latest);
        } else {
          formatted = Math.round(latest).toString();
        }
        setDisplayValue(formatted);
      }
    });
    return () => controls.stop();
  }, [value, duration, isTriggered]);

  return <span ref={ref}>{displayValue}</span>;
};

const ScrollCounter = Counter;

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const t = translations[lang].nav;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-6 flex justify-center pointer-events-none">
      <nav className="w-full max-w-6xl bg-white/80 backdrop-blur-2xl border border-black/5 rounded-full px-6 md:px-10 py-2.5 md:py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto relative">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Link to="/" className="text-sm font-bold tracking-tighter" onClick={() => setIsOpen(false)}>STRUKTUR.</Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-14 text-xs font-medium text-black/40">
            <Link to="/" className={`transition-colors ${isActive('/') ? 'text-black' : 'hover:text-black'}`}>{t.home}</Link>
            <Link to="/services" className={`transition-colors ${isActive('/services') ? 'text-black' : 'hover:text-black'}`}>{t.services}</Link>
            <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-black' : 'hover:text-black'}`}>{t.contact}</Link>
          </div>

          <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
            {/* Language Switcher (Desktop) */}
            <div className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-widest">
              <button 
                onClick={() => setLang('en')}
                className={`transition-colors ${lang === 'en' ? 'text-black' : 'text-black/20 hover:text-black/40'}`}
              >
                EN
              </button>
              <span className="text-black/10">|</span>
              <button 
                onClick={() => setLang('de')}
                className={`transition-colors ${lang === 'de' ? 'text-black' : 'text-black/20 hover:text-black/40'}`}
              >
                DE
              </button>
            </div>

            {/* Desktop CTA */}
            <a 
              href="https://wa.me/4916091465087?text=Hello%2C%20I’m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-brand-dark text-white px-6 py-2.5 rounded-full text-xs font-bold hover:opacity-90 transition-opacity text-center"
            >
              {t.cta}
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-black/60 hover:text-black transition-colors"
            >
              {isOpen ? <XIcon size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-2xl border border-black/5 rounded-[2rem] p-8 shadow-2xl md:hidden flex flex-col items-center gap-8"
            >
              <div className="flex flex-col items-center gap-6 text-sm font-bold tracking-tight">
                <Link to="/" onClick={() => setIsOpen(false)} className={`transition-colors ${isActive('/') ? 'text-black' : 'text-black/60 hover:text-black'}`}>{t.home}</Link>
                <Link to="/services" onClick={() => setIsOpen(false)} className={`transition-colors ${isActive('/services') ? 'text-black' : 'text-black/60 hover:text-black'}`}>{t.services}</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className={`transition-colors ${isActive('/contact') ? 'text-black' : 'text-black/60 hover:text-black'}`}>{t.contact}</Link>
              </div>
              
              <div className="w-full h-px bg-black/5" />
              
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest">
                <button 
                  onClick={() => { setLang('en'); setIsOpen(false); }}
                  className={`transition-colors ${lang === 'en' ? 'text-black' : 'text-black/20'}`}
                >
                  ENGLISH
                </button>
                <span className="text-black/10">|</span>
                <button 
                  onClick={() => { setLang('de'); setIsOpen(false); }}
                  className={`transition-colors ${lang === 'de' ? 'text-black' : 'text-black/20'}`}
                >
                  DEUTSCH
                </button>
              </div>

              <a 
                href="https://wa.me/4916091465087?text=Hello%2C%20I’m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-dark text-white py-4 rounded-full text-sm font-bold block text-center"
              >
                {t.cta}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  const g = translations[lang].graphic;
  const { ref: graphRef, isTriggered } = useGraphAnimation<HTMLDivElement>();
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[8px] md:text-[10px] tracking-[0.3em] font-bold text-black/30 uppercase mb-4 md:mb-6"
        >
          {t.tag}
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto mb-8 md:mb-6 leading-[1.2] md:leading-[1.1] px-4 md:px-0"
        >
          {t.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-xl text-black/50 max-w-xl mx-auto mb-12 md:mb-10 leading-[1.6] md:leading-relaxed px-4 md:px-0"
        >
          {t.subtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 md:mb-24"
        >
          <a 
            href="https://wa.me/4916091465087?text=Hello%2C%20I’m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity w-full sm:w-auto inline-block text-center"
          >
            {t.ctaPrimary}
          </a>
          <Link to="/presentation" className="bg-white text-black px-8 py-4 rounded-full font-medium border border-black/5 hover:bg-black/5 transition-colors w-full sm:w-auto text-center">
            {t.ctaSecondary}
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-2 mb-20 md:hidden"
        >
          <div className="text-[8px] font-bold text-black/20 tracking-widest uppercase">Scroll</div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={14} className="text-black/20" />
          </motion.div>
        </motion.div>

        {/* Hero Graphic */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
            <div className="flex-1 w-full">
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest">{g.tracker}</span>
                <span className="text-[9px] md:text-[10px] font-bold text-green-500 uppercase tracking-widest flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  {g.status}
                </span>
              </div>
              <div className="border border-[#E5E5E5] rounded-[12px] md:rounded-[16px] p-6 md:p-10">
                <div className="flex items-end gap-2 md:gap-3 h-32 md:h-40" ref={graphRef}>
                  {[40, 60, 45, 70, 55, 85, 100, 110].map((height, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      animate={{ height: isTriggered ? `${height}%` : 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.6 + (i * 0.05),
                        ease: "easeOut"
                      }}
                      className={`flex-1 rounded-t-md ${i >= 6 ? 'bg-brand-dark' : 'bg-black/5'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-64 space-y-6">
              {[
                { label: g.conversion, value: '14.2%' },
                { label: g.speed, value: '0.8s' },
                { label: g.seo, value: '98 / 100' },
                { label: g.goal, value: '+40', color: 'text-brand-accent' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between border-b border-black/5 pb-4">
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">{stat.label}</span>
                  <span className={`text-sm font-bold ${stat.color || 'text-black'}`}>
                    {stat.label === g.seo ? "98 / 100" : <Counter value={stat.value} />}
                  </span>
                </div>
              ))}
              <div className="pt-2">
                <span className="text-[9px] font-bold text-black/20 uppercase tracking-widest">{g.calibrated}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Problem = ({ lang }: { lang: Language }) => {
  const t = translations[lang].problem;
  return (
    <section className="py-16 md:py-32 px-6 bg-brand-dark text-white rounded-[32px] md:rounded-[40px] mx-4 md:mx-6 mb-16 md:mb-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <div className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-white/30 uppercase mb-6">{t.tag}</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {t.title}
          </h2>
          <p className="text-sm md:text-lg text-white/60 leading-relaxed max-w-md">
            {t.desc}
          </p>
        </div>
        <div className="space-y-4 md:space-y-6">
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-[24px] md:rounded-[32px] border border-white/10">
            <div className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">{t.solution1Tag}</div>
            <p className="text-sm md:text-lg font-medium text-white/90">{t.solution1Desc}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-[24px] md:rounded-[32px] border border-white/10">
            <div className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">{t.solution2Tag}</div>
            <p className="text-sm md:text-lg font-medium text-white/90">{t.solution2Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ConversionLogic = ({ lang }: { lang: Language }) => {
  const t = translations[lang].logic;
  return (
    <section className="py-16 md:py-24 px-6 bg-white rounded-[32px] md:rounded-[40px] mx-4 md:mx-6 mb-16 md:mb-24 border border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <div className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-black/30 uppercase mb-6">{t.tag}</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15] md:leading-[1.1]">
            {t.title}<br className="hidden md:block" />
            <span className="text-black/40"> {t.titleSpan}</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-16">
          <div className="space-y-3 md:space-y-4 w-full md:w-72">
            {[
              { icon: <Instagram size={16} />, label: 'Instagram' },
              { icon: <Zap size={16} />, label: 'Paid Ads' },
              { icon: <MessageCircle size={16} />, label: 'Word of Mouth' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-gray px-6 md:px-8 py-4 md:py-5 rounded-full flex items-center gap-3 text-sm font-medium border border-black/5">
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>

          <div className="flex flex-row md:flex-col items-center justify-center gap-8 md:gap-4">
            {[0, 1, 2].map(i => (
              <ArrowRight key={i} className="text-black/10 rotate-90 md:rotate-0" />
            ))}
          </div>

          <div className="relative w-full md:w-80 aspect-video">
            {/* Ripple Wave 1 */}
            <motion.div
              animate={{
                scale: [1, 1.4],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="ripple ripple-1 absolute inset-0 border border-red-400/30 rounded-[20px] md:rounded-[24px] pointer-events-none"
            />
            {/* Ripple Wave 2 */}
            <motion.div
              animate={{
                scale: [1, 1.4],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5,
                ease: "easeOut"
              }}
              className="ripple ripple-2 absolute inset-0 border border-red-400/30 rounded-[20px] md:rounded-[24px] pointer-events-none"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.015, 1],
                boxShadow: [
                  "0 0 0 rgba(239, 68, 68, 0)",
                  "0 0 20px rgba(239, 68, 68, 0.05)",
                  "0 0 0 rgba(239, 68, 68, 0)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full h-full bg-red-50 border-2 border-dashed border-red-200 rounded-[20px] md:rounded-[24px] flex flex-col items-center justify-center p-6 md:p-8 text-center"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-3 md:mb-4">
                <ShieldCheck size={18} md:size={20} />
              </div>
              <div className="text-xs md:text-sm font-bold text-red-600 mb-1 md:mb-2">{t.weakDest}</div>
              <p className="text-[10px] md:text-xs text-red-400 leading-relaxed max-w-[200px]">{t.weakDesc}</p>
            </motion.div>
          </div>

          <div className="rotate-90 md:rotate-0">
            <ArrowRight className="text-black/10" />
          </div>

          <div className="w-full md:w-72 aspect-video bg-brand-dark rounded-[20px] md:rounded-[24px] flex flex-col items-center justify-center p-6 md:p-8 text-center text-white">
            <TrendingUp size={20} md:size={24} className="text-white/40 mb-3 md:mb-4 rotate-180" />
            <div className="text-xs md:text-sm font-bold mb-1">{t.lostOpp}</div>
            <div className="text-[10px] md:text-xs text-white/40">{t.lostConv}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GrowthSystem = ({ lang }: { lang: Language }) => {
  const t = translations[lang].growthSystem;
  return (
    <section className="py-16 md:py-24 px-6 bg-white rounded-[32px] md:rounded-[40px] mx-4 md:mx-6 mb-16 md:mb-24 border border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-black/30 uppercase mb-6">{t.tag}</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-[1.15] md:leading-[1.1]">{t.title}</h2>
          <p className="text-black/50 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item: any, i: number) => (
            <div key={i} className="bg-brand-gray p-8 md:p-12 rounded-[24px] md:rounded-[32px] border border-black/5 flex flex-col items-start transition-colors hover:border-black/10">
              <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-xs md:text-sm text-black/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = ({ lang }: { lang: Language }) => {
  const t = translations[lang].services;
  const icons = [<Globe size={20} />, <Instagram size={20} />, <Search size={20} />, <ShieldCheck size={20} />];
  return (
    <section id="services" className="pt-2 md:pt-4 pb-12 md:pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-black/30 uppercase mb-8 md:mb-12 text-center md:text-left">{t.tag}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {t.items.map((service, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-[24px] md:rounded-[32px] border border-black/5 hover:border-black/10 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-gray rounded-xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-brand-dark group-hover:text-white transition-colors">
                {icons[i]}
              </div>
              <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-xs md:text-sm text-black/50 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = ({ lang }: { lang: Language }) => {
  const t = translations[lang].process;
  const { ref: pathRef, isTriggered } = useGraphAnimation<HTMLDivElement>();
  return (
    <section id="process" className="py-10 md:py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <div className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-black/30 uppercase mb-6">{t.tag}</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 md:mb-12">{t.title}</h2>
          
          <div className="space-y-10 md:space-y-12">
            {t.steps.map((item, i) => (
              <div key={i} className="flex gap-5 md:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mb-2" />
                  <div className="w-px flex-1 bg-black/5" />
                </div>
                <div>
                  <div className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest mb-1">{lang === 'en' ? 'Step' : 'Schritt'} {item.step}</div>
                  <h3 className="text-sm md:text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-black/50 leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-16 border border-black/5 relative overflow-hidden w-full flex flex-col">
          <div className="absolute top-6 md:top-10 left-0 right-0 text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest text-center">{t.chartLabel}</div>
          
          <div className="w-full flex flex-col gap-8 md:gap-12 mt-6 md:mt-8">
            <div className="relative h-48 md:h-64 w-full" ref={pathRef}>
              <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                <motion.path
                  d="M 0 35 Q 25 32, 50 20 T 100 5"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="1.5"
                  pathLength={1}
                  strokeDasharray="1 1"
                  initial={{ strokeDashoffset: 1 }}
                  animate={{ strokeDashoffset: isTriggered ? 0 : 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle 
                  cx="100" cy="5" r="2" fill="#111111"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isTriggered ? 1 : 0, scale: isTriggered ? 1 : 0 }}
                  transition={{ delay: 1.8, duration: 0.4 }}
                />
              </svg>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black/40 mb-2">
                <ScrollCounter value="+240%" duration={2} />
              </div>
              <div className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest">{t.growthLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatYouGet = ({ lang }: { lang: Language }) => {
  const t = translations[lang].whatYouGet;
  return (
    <section className="py-16 md:py-24 px-6 bg-white rounded-[32px] md:rounded-[40px] mx-4 md:mx-6 mb-16 md:mb-24 border border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 md:mb-6">{t.title}</h2>
          <p className="text-black/40 text-xs md:text-sm">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-8 md:gap-y-12">
          {t.items.map((feature, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center text-green-500 shrink-0 mt-1">
                <Check size={14} />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-xs md:text-sm text-black/50 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Cases = ({ lang }: { lang: Language }) => {
  const t = translations[lang].cases;
  return (
    <section id="work" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
          <div className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-black/30 uppercase">{t.tag}</div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {t.projects.map((project: any, i: number) => (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
              <div className="relative aspect-[16/10] rounded-[24px] md:rounded-[32px] overflow-hidden mb-4 md:mb-6">
                <img 
                  src={project.img} 
                  alt={`${project.title} - Referenzprojekt für lokales Business Design`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex items-center justify-between">
                  <div className="bg-white/90 backdrop-blur-md px-5 md:px-6 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-bold">
                    {project.title} <span className="text-black/40 ml-2">{project.stats}</span>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center">
                    <ArrowUpRight size={16} md:size={18} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ lang }: { lang: Language }) => {
  const t = translations[lang].pricing;
  const s = translations[lang].services;
  return (
    <section className="py-16 md:py-24 px-6 bg-white rounded-[32px] md:rounded-[40px] mx-4 md:mx-6 mb-16 md:mb-24 border border-black/5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 md:mb-16">{t.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Tier 1 - Starter */}
          <div className="bg-brand-gray p-8 md:p-12 rounded-[24px] md:rounded-[32px] border border-black/5 flex flex-col h-full hover:border-black/20 transition-all duration-300 transform hover:-translate-y-1 text-left">
            <div className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest mb-4">
              {s.packages.tier1.label}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-black tracking-tight">{s.packages.tier1.title}</h3>
            <p className="text-black/50 text-sm mb-8 leading-relaxed min-h-[40px]">{s.packages.tier1.desc}</p>
            <div className="w-full h-px bg-black/5 mb-8" />
            
            <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 flex-1">
              {s.packages.tier1.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-black/60">
                  <Check size={14} className="text-black shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <a href="https://wa.me/4916091465087" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-full border border-black/10 hover:bg-black/5 font-bold text-xs md:text-sm transition-all block text-center text-black">
              {s.packages.tier1.cta}
            </a>
          </div>

          {/* Tier 2 - Client System */}
          <div className="bg-brand-dark p-8 md:p-12 rounded-[24px] md:rounded-[32px] border border-white/5 flex flex-col relative md:-translate-y-6 shadow-2xl shadow-black/20 z-10 hover:-translate-y-8 transition-all duration-300 text-left">
            <div className="absolute top-6 md:top-8 right-6 md:right-8">
              <div className="px-3 py-1 bg-white text-black text-[8px] md:text-[9px] font-bold uppercase tracking-widest rounded-full">{s.packages.tier2.badge}</div>
            </div>
            <div className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest mb-4">
              {s.packages.tier2.label}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white tracking-tight">{s.packages.tier2.title}</h3>
            <p className="text-white/50 text-sm mb-8 leading-relaxed min-h-[40px]">{s.packages.tier2.desc}</p>
            <div className="w-full h-px bg-white/10 mb-8" />
            
            <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 flex-1">
              {s.packages.tier2.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-white/60">
                  <Check size={14} className="text-white shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <a href="https://wa.me/4916091465087" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-full bg-white text-black border-transparent hover:opacity-90 font-bold text-xs md:text-sm transition-all block text-center">
              {s.packages.tier2.cta}
            </a>
          </div>

          {/* Tier 3 - Growth System */}
          <div className="bg-brand-gray p-8 md:p-12 rounded-[24px] md:rounded-[32px] border border-black/5 flex flex-col h-full hover:border-black/20 transition-all duration-300 transform hover:-translate-y-1 text-left">
            <div className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest mb-4">
              {s.packages.tier3.label}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-black tracking-tight">{s.packages.tier3.title}</h3>
            <p className="text-black/50 text-sm mb-8 leading-relaxed min-h-[40px]">{s.packages.tier3.desc}</p>
            <div className="w-full h-px bg-black/5 mb-8" />
            
            <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 flex-1">
              {s.packages.tier3.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-black/60">
                  <Check size={14} className="text-black shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <a href="https://wa.me/4916091465087" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-full border border-black/10 hover:bg-black/5 font-bold text-xs md:text-sm transition-all block text-center text-black">
              {s.packages.tier3.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ lang }: { lang: Language }) => {
  const t = translations[lang].cta;
  return (
    <section className="py-20 md:py-32 px-6 bg-brand-dark text-white rounded-[32px] md:rounded-[40px] mx-4 md:mx-6 mb-16 md:mb-24 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase mb-6">{t.tag}</div>
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6">{t.title}</h2>
        <p className="text-white/40 text-sm md:text-lg mb-10 md:mb-12">{t.subtitle}</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://wa.me/4916091465087?text=Hello%2C%20I’m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-10 py-5 rounded-full font-bold hover:opacity-90 transition-opacity w-full sm:w-auto inline-block text-center"
          >
            {t.primary}
          </a>
          <a 
            href="https://wa.me/4916091465087?text=Hello%2C%20I’m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-colors w-full sm:w-auto inline-block text-center"
          >
            {t.secondary}
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footer;
  const n = translations[lang].nav;
  return (
    <footer className="py-16 md:py-24 px-6 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold tracking-tighter mb-4 md:mb-6">STRUKTUR.</div>
            <p className="text-xs md:text-sm text-black/40 leading-relaxed">{t.desc}</p>
          </div>
          
          <div>
            <h3 className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest mb-4 md:mb-6">{t.nav}</h3>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">{n.home}</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">{n.services}</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">{n.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest mb-4 md:mb-6">{t.social}</h3>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium">
              <li className="flex items-center gap-2"><Instagram size={14} /> Instagram</li>
              <li className="flex items-center gap-2"><Linkedin size={14} /> LinkedIn</li>
              <li className="flex items-center gap-2"><MessageCircle size={14} /> WhatsApp</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest mb-4 md:mb-6">{t.contact}</h3>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium">
              <li className="flex items-center gap-2"><Mail size={14} /> hello@struktur.agency</li>
              <li className="flex items-center gap-2"><Globe size={14} /> {lang === 'en' ? 'Based in Berlin // Global Operations' : 'Sitz in Berlin // Weltweite Operationen'}</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/5 text-[9px] md:text-[10px] font-bold text-black/20 uppercase tracking-widest text-center md:text-left">
          <div>{t.rights}</div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            {t.status}
          </div>
        </div>
      </div>
    </footer>
  );
};

const Presentation = ({ lang }: { lang: Language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const t = translations[lang].presentation;

  const presentationSlides = [
    { component: Slides.Slide1, notes: t.slides.s1.notes },
    { component: Slides.Slide2, notes: t.slides.s2.notes },
    { component: Slides.Slide3, notes: t.slides.s3.notes },
    { component: Slides.Slide4, notes: t.slides.s4.notes },
    { component: Slides.Slide5, notes: t.slides.s5.notes },
    { component: Slides.Slide6, notes: t.slides.s6.notes },
    { component: Slides.Slide7, notes: t.slides.s7.notes },
    { component: Slides.Slide8, notes: t.slides.s8.notes },
    { component: Slides.Slide9, notes: t.slides.s9.notes },
    { component: Slides.Slide10, notes: t.slides.s10.notes },
    { component: Slides.Slide11, notes: t.slides.s11.notes },
    { component: Slides.Slide12, notes: t.slides.s12.notes },
  ];

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setScale(width / 1200);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const CurrentSlideComponent = presentationSlides[currentSlide].component;

  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 min-h-screen bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-12 md:mb-16">
          <button 
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className={`absolute -left-24 top-1/2 -translate-y-1/2 p-6 rounded-full bg-white border border-black/5 shadow-xl transition-all z-20 hidden xl:flex items-center justify-center ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'hover:bg-black hover:text-white'}`}
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            onClick={() => setCurrentSlide(prev => Math.min(presentationSlides.length - 1, prev + 1))}
            disabled={currentSlide === presentationSlides.length - 1}
            className={`absolute -right-24 top-1/2 -translate-y-1/2 p-6 rounded-full bg-white border border-black/5 shadow-xl transition-all z-20 hidden xl:flex items-center justify-center ${currentSlide === presentationSlides.length - 1 ? 'opacity-0 pointer-events-none' : 'hover:bg-black hover:text-white'}`}
          >
            <ChevronRight size={32} />
          </button>

          <div 
            ref={containerRef}
            className="bg-white rounded-[2rem] w-full aspect-[16/10] overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] relative"
          >
            <div 
              style={{ 
                width: '1200px', 
                height: '750px',
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            >
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full"
              >
                <CurrentSlideComponent lang={lang} />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mb-16">
          <button 
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className={`p-4 rounded-full bg-white border border-black/5 shadow-sm transition-all xl:hidden ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black hover:text-white'}`}
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="text-sm font-bold tracking-widest text-black/30">
            {String(currentSlide + 1).padStart(2, '0')} / {String(presentationSlides.length).padStart(2, '0')}
          </div>

          <button 
            onClick={() => setCurrentSlide(prev => Math.min(presentationSlides.length - 1, prev + 1))}
            disabled={currentSlide === presentationSlides.length - 1}
            className={`p-4 rounded-full bg-white border border-black/5 shadow-sm transition-all xl:hidden ${currentSlide === presentationSlides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black hover:text-white'}`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="bg-white rounded-[2rem] p-12 border border-black/5 shadow-sm">
          <div className="text-[10px] font-bold text-black/20 uppercase tracking-widest mb-4">{t.notes} // {t.slide} {currentSlide + 1}</div>
          <p className="text-xl leading-relaxed text-black/70 font-medium">
            {presentationSlides[currentSlide].notes}
          </p>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = ({ lang }: { lang: Language }) => {
  const s = translations[lang]?.services || translations.en.services;

  const getWaLink = (serviceTitle: string) => {
    const message = s.additional.waMessage.replace('{service}', serviceTitle);
    return `https://wa.me/4916091465087?text=${encodeURIComponent(message)}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9FB]">
      <style dangerouslySetInnerHTML={{ __html: `
        .mono {
            font-family: 'JetBrains Mono', monospace;
            letter-spacing: 0.1em;
        }
        .hover-card-shadow:hover {
            box-shadow: 0 20px 40px -12px rgba(0,0,0,0.08);
        }
      `}} />
      
      {/* Header */}
      <header className="pt-56 pb-24 px-6 text-center max-w-[900px] mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest mb-6"
          >
            {s.hero.label}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.08] mb-8 text-black max-w-[800px] mx-auto tracking-[-0.04em]"
          >
            {s.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#636366] max-w-[520px] mx-auto leading-relaxed"
          >
            {s.hero.subtitle}
          </motion.p>
      </header>

      {/* Pricing Tiers */}
      <section className="max-w-[1100px] w-full mx-auto px-6 md:px-10 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-16">
              
              {/* Tier 1 - Starter */}
              <div className="bg-brand-gray p-8 md:p-12 rounded-[24px] md:rounded-[32px] border border-black/5 flex flex-col h-full hover:border-black/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-normal mb-4">
                      {s.packages.tier1.label}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-black tracking-tight">{s.packages.tier1.title}</h3>
                  <p className="text-black/50 text-sm mb-8 leading-relaxed min-h-[40px]">{s.packages.tier1.desc}</p>
                  <div className="w-full h-px bg-black/5 mb-8" />
                  
                  <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 flex-1">
                      {s.packages.tier1.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-black/60">
                            <Check size={14} className="text-black shrink-0" />
                            {feature}
                        </li>
                      ))}
                  </ul>
                  
                  <a href="https://wa.me/4916091465087" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-full border border-black/10 hover:bg-black/5 font-bold text-xs md:text-sm transition-all block text-center text-black">
                      {s.packages.tier1.cta}
                  </a>
              </div>

              {/* Tier 2 - Client System */}
              <div className="bg-brand-dark p-8 md:p-12 rounded-[24px] md:rounded-[32px] border border-white/5 flex flex-col relative md:-translate-y-6 shadow-2xl shadow-black/20 z-10 hover:-translate-y-8 transition-all duration-300">
                  <div className="absolute top-6 md:top-8 right-6 md:right-8">
                      <div className="px-3 py-1 bg-white text-black text-[8px] md:text-[9px] font-bold uppercase tracking-widest rounded-full">{s.packages.tier2.badge}</div>
                  </div>
                  <div className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest mb-4">
                      {s.packages.tier2.label}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white tracking-tight">{s.packages.tier2.title}</h3>
                  <p className="text-white/50 text-sm mb-8 leading-relaxed min-h-[40px]">{s.packages.tier2.desc}</p>
                  <div className="w-full h-px bg-white/10 mb-8" />
                  
                  <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 flex-1">
                      {s.packages.tier2.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-white/60">
                            <Check size={14} className="text-white shrink-0" />
                            {feature}
                        </li>
                      ))}
                  </ul>
                  
                  <a href="https://wa.me/4916091465087" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-full bg-white text-black border-transparent hover:opacity-90 font-bold text-xs md:text-sm transition-all block text-center">
                      {s.packages.tier2.cta}
                  </a>
              </div>

              {/* Tier 3 - Growth System */}
              <div className="bg-brand-gray p-8 md:p-12 rounded-[24px] md:rounded-[32px] border border-black/5 flex flex-col h-full hover:border-black/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-normal mb-4">
                      {s.packages.tier3.label}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-black tracking-tight">{s.packages.tier3.title}</h3>
                  <p className="text-black/50 text-sm mb-8 leading-relaxed min-h-[40px]">{s.packages.tier3.desc}</p>
                  <div className="w-full h-px bg-black/5 mb-8" />
                  
                  <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 flex-1">
                      {s.packages.tier3.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-black/60">
                            <Check size={14} className="text-black shrink-0" />
                            {feature}
                        </li>
                      ))}
                  </ul>
                  
                  <a href="https://wa.me/4916091465087" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-full border border-black/10 hover:bg-black/5 font-bold text-xs md:text-sm transition-all block text-center text-black">
                      {s.packages.tier3.cta}
                  </a>
              </div>

          </div>

          {/* Transparency Note */}
          <div className="text-center">
              <p className="text-[9px] md:text-[10px] font-bold uppercase text-black/30 tracking-widest leading-relaxed max-w-[600px] mx-auto">
                  {s.packages.scope}
              </p>
          </div>
      </section>

      {/* Additional Services Title */}
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 mb-16 text-center">
          <div className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-widest mb-4">{s.additional.label}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black tracking-[-0.04em]">{s.additional.title}</h2>
          <p className="text-[#636366] text-lg max-w-[500px] mx-auto">{s.additional.subtitle}</p>
      </div>

      {/* Other Services Grid */}
      <section className="max-w-[1280px] w-full mx-auto px-6 md:px-10 pb-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              
              <div className="group bg-white p-7 rounded-[24px] border border-[rgba(0,0,0,0.05)] hover-card-shadow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#F9F9FB] rounded-[14px] flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors text-black">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-black leading-tight tracking-[-0.04em]">{s.additional.items.image.title}</h4>
                  <p className="text-[14px] text-[#636366] leading-relaxed flex-1">{s.additional.items.image.desc}</p>
                  <a href={getWaLink(s.additional.items.image.title)} target="_blank" rel="noopener noreferrer" className="mt-6 text-[11px] font-medium text-black/30 group-hover:text-black transition-colors inline-block">{s.additional.link}</a>
              </div>

              <div className="group bg-white p-7 rounded-[24px] border border-[rgba(0,0,0,0.05)] hover-card-shadow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#F9F9FB] rounded-[14px] flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors text-black">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-black leading-tight tracking-[-0.04em]">{s.additional.items.social.title}</h4>
                  <p className="text-[14px] text-[#636366] leading-relaxed flex-1">{s.additional.items.social.desc}</p>
                  <a href={getWaLink(s.additional.items.social.title)} target="_blank" rel="noopener noreferrer" className="mt-6 text-[11px] font-medium text-black/30 group-hover:text-black transition-colors inline-block">{s.additional.link}</a>
              </div>

              <div className="group bg-white p-7 rounded-[24px] border border-[rgba(0,0,0,0.05)] hover-card-shadow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#F9F9FB] rounded-[14px] flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors text-black">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-black leading-tight tracking-[-0.04em]">{s.additional.items.marketing.title}</h4>
                  <p className="text-[14px] text-[#636366] leading-relaxed flex-1">{s.additional.items.marketing.desc}</p>
                  <a href={getWaLink(s.additional.items.marketing.title)} target="_blank" rel="noopener noreferrer" className="mt-6 text-[11px] font-medium text-black/30 group-hover:text-black transition-colors inline-block">{s.additional.link}</a>
              </div>

              <div className="group bg-white p-7 rounded-[24px] border border-[rgba(0,0,0,0.05)] hover-card-shadow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#F9F9FB] rounded-[14px] flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors text-black">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-black leading-tight tracking-[-0.04em]">{s.additional.items.brand.title}</h4>
                  <p className="text-[14px] text-[#636366] leading-relaxed flex-1">{s.additional.items.brand.desc}</p>
                  <a href={getWaLink(s.additional.items.brand.title)} target="_blank" rel="noopener noreferrer" className="mt-6 text-[11px] font-medium text-black/30 group-hover:text-black transition-colors inline-block">{s.additional.link}</a>
              </div>

              <div className="group bg-white p-7 rounded-[24px] border border-[rgba(0,0,0,0.05)] hover-card-shadow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#F9F9FB] rounded-[14px] flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors text-black">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-black leading-tight tracking-[-0.04em]">{s.additional.items.security.title}</h4>
                  <p className="text-[14px] text-[#636366] leading-relaxed flex-1">{s.additional.items.security.desc}</p>
                  <a href={getWaLink(s.additional.items.security.title)} target="_blank" rel="noopener noreferrer" className="mt-6 text-[11px] font-medium text-black/30 group-hover:text-black transition-colors inline-block">{s.additional.link}</a>
              </div>

          </div>
      </section>

      {/* Selected Cases */}
      <Cases lang={lang} />

      {/* Final CTA */}
      <section className="border-t border-[rgba(0,0,0,0.06)] py-32 text-center px-6 mt-auto">
          <div className="mono text-[11px] text-[#636366] uppercase mb-8 font-medium">{s.cta.label}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black tracking-tight leading-tight tracking-[-0.04em]">{s.cta.title}</h2>
          <p className="text-lg text-[#636366] mb-12 max-w-[420px] mx-auto leading-relaxed">{s.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/4916091465087?text=Hello%2C%20I’m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="bg-black text-white px-10 py-5 rounded-full font-bold hover:opacity-90 transition-opacity w-full sm:w-auto inline-block text-center shadow-lg shadow-black/10">{s.cta.primary}</a>
              <a href="https://wa.me/4916091465087?text=Hello%2C%20I’m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="bg-white border border-black/10 text-black px-10 py-5 rounded-full font-bold hover:bg-black/5 transition-colors w-full sm:w-auto inline-block text-center">
                  {s.cta.secondary}
              </a>
          </div>
      </section>
    </div>
  );
};

const ContactPage = ({ lang }: { lang: Language }) => {
  const c = translations[lang]?.contact || translations.en.contact;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Hero Section */}
      <section className="pt-[200px] pb-[80px] text-center px-6 md:px-10">
          <div className="max-w-[1100px] mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[9px] md:text-[10px] uppercase tracking-normal font-bold text-black/30 mb-8"
              >
                {c.hero.title}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[48px] md:text-[68px] font-extrabold tracking-tighter leading-[1.08] max-w-[900px] mx-auto mb-7 text-black"
              >
                {c.hero.subtitle}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[18px] md:text-[20px] text-[#636366] max-w-[520px] mx-auto mb-12 leading-relaxed"
              >
                {c.hero.description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
              >
                  <a href="https://wa.me/4916091465087" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark text-white rounded-full font-medium hover:opacity-90 transition-opacity w-full sm:w-auto text-center">
                      <svg className="w-5 h-5 mr-2.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      {c.actions.whatsapp}
                  </a>
                  <a href="mailto:hello@struktur.agency" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium border border-black/5 hover:bg-black/5 transition-colors w-full sm:w-auto text-center">
                      {c.actions.email}
                  </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center justify-center gap-2 text-sm text-[#636366] font-medium"
              >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  {c.actions.fastest}
              </motion.div>
          </div>
      </section>



      {/* Contact Cards Grid */}
      <section className="pb-[120px] px-6 md:px-10">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              
              {/* WhatsApp Card */}
              <a href="https://wa.me/4916091465087" target="_blank" rel="noopener noreferrer" className="group bg-white p-10 rounded-[24px] border border-[rgba(0,0,0,0.06)] hover-card-shadow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full">
                  <div className="text-[9px] md:text-[10px] uppercase tracking-normal font-bold text-black/30 mb-6">{c.cards.messaging.label}</div>
                  <div className="w-12 h-12 bg-[#F9F9FB] rounded-[14px] flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors text-black">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <h3 className="text-[18px] font-bold mb-2 text-black leading-tight tracking-[-0.04em]">{c.cards.messaging.title}</h3>
                  <p className="text-[15px] text-[#636366] mb-8 flex-grow">+49 160 91465087</p>
                  <div className="text-[11px] font-medium text-black/40 group-hover:text-black transition-colors mt-auto flex items-center">
                      {c.cards.messaging.button} 
                      <svg className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
              </a>

              <a href="mailto:hello@struktur.agency" className="group bg-white p-10 rounded-[24px] border border-[rgba(0,0,0,0.06)] hover-card-shadow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full">
                  <div className="text-[9px] md:text-[10px] uppercase tracking-normal font-bold text-black/30 mb-6">{c.cards.email.label}</div>
                  <div className="w-12 h-12 bg-[#F9F9FB] rounded-[14px] flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors text-black">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-[18px] font-bold mb-2 text-black leading-tight tracking-[-0.04em]">{c.cards.email.title}</h3>
                  <p className="text-[15px] text-[#636366] mb-8 flex-grow break-all font-medium">hello@struktur.agency</p>
                  <div className="text-[11px] font-medium text-black/40 group-hover:text-black transition-colors mt-auto flex items-center">
                      {c.cards.email.button} 
                      <svg className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
              </a>

              <a href="#" className="group bg-white p-10 rounded-[24px] border border-[rgba(0,0,0,0.06)] hover-card-shadow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full">
                  <div className="text-[9px] md:text-[10px] uppercase tracking-normal font-bold text-black/30 mb-6">{c.cards.work.label}</div>
                  <div className="w-12 h-12 bg-[#F9F9FB] rounded-[14px] flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors text-black">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </div>
                  <h3 className="text-[18px] font-bold mb-2 text-black leading-tight tracking-[-0.04em]">{c.cards.work.title}</h3>
                  <p className="text-[15px] text-[#636366] mb-8 flex-grow">@struktur.agency</p>
                  <div className="text-[11px] font-medium text-black/40 group-hover:text-black transition-colors mt-auto flex items-center">
                      {c.cards.work.button} 
                      <svg className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
              </a>

              <div className="group bg-white p-10 rounded-[24px] border border-[rgba(0,0,0,0.06)] hover-card-shadow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full relative overflow-hidden">
                  <div className="text-[9px] md:text-[10px] uppercase tracking-normal font-bold text-black/30 mb-6 relative z-10">{c.cards.location.label}</div>
                  <div className="w-12 h-12 bg-[#F9F9FB] rounded-[14px] flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors text-black relative z-10">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <h3 className="text-[18px] font-bold mb-2 relative z-10 text-black leading-tight tracking-[-0.04em]">{c.cards.location.title}</h3>
                  <p className="text-[15px] text-[#636366] mb-8 relative z-10">Torstraße 123<br />10119 Berlin</p>

                  <div className="text-[11px] font-medium text-black/40 group-hover:text-black transition-colors mt-auto relative z-10 flex items-center">
                      {c.cards.location.button} 
                      <svg className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
              </div>

          </div>
      </section>

      {/* Next Steps CTA */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 mb-[120px]">
          <div className="bg-[#111111] rounded-[32px] py-[100px] md:py-[120px] px-8 text-center relative overflow-hidden border border-white/5">
              <div className="max-w-[800px] mx-auto relative z-10">
                  <div className="mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6 border border-white/10 inline-block px-4 py-1.5 rounded-full">{c.nextSteps.tag}</div>
                  <h2 className="text-[40px] md:text-[56px] font-extrabold text-white tracking-tighter leading-[1.1] mb-6">{c.nextSteps.title}</h2>
                  <p className="text-[18px] md:text-[20px] text-white/50 mb-10 max-w-[480px] mx-auto">{c.nextSteps.subtitle}</p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a href="https://wa.me/4916091465087" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-10 py-5 rounded-full font-bold hover:opacity-90 transition-opacity w-full sm:w-auto inline-block text-center shadow-xl shadow-black/20">
                          {c.nextSteps.primary}
                      </a>
                      <a href="#" className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-colors w-full sm:w-auto inline-block text-center">
                          {c.nextSteps.secondary}
                      </a>
                  </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-[32px]">
                  <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-white/[0.02] blur-[120px] rounded-full mix-blend-overlay"></div>
                  <div className="absolute -bottom-[50%] -right-[10%] w-[60%] h-[120%] bg-white/[0.02] blur-[100px] rounded-full mix-blend-overlay"></div>
              </div>
          </div>
      </section>
    </div>
  );
};

const Home = ({ lang }: { lang: Language }) => (
  <>
    <Hero lang={lang} />
    <Problem lang={lang} />
    <ConversionLogic lang={lang} />
    <Services lang={lang} />
    <GrowthSystem lang={lang} />
    <Process lang={lang} />
    <WhatYouGet lang={lang} />
    <Cases lang={lang} />
    <Pricing lang={lang} />
    <FinalCTA lang={lang} />
  </>
);

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-brand-dark selection:text-white">
        <Navbar lang={lang} setLang={setLang} />
        <main>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/services" element={<ServicesPage lang={lang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} />} />
            <Route path="/presentation" element={<Presentation lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </BrowserRouter>
  );
}
