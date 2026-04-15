import React from 'react';
import { 
  Smartphone, 
  Target, 
  ArrowRight, 
  Zap, 
  X, 
  Check, 
  TrendingUp,
  Mail,
  Instagram
} from 'lucide-react';
import { translations, Language } from '../translations';

const Icon = ({ name, size = 24, className = "" }: { name: string, size?: number, className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    smartphone: <Smartphone size={size} className={className} />,
    target: <Target size={size} className={className} />,
    arrowRight: <ArrowRight size={size} className={className} />,
    zap: <Zap size={size} className={className} />,
    x: <X size={size} className={className} />,
    check: <Check size={size} className={className} />,
    trendingUp: <TrendingUp size={size} className={className} />,
    mail: <Mail size={size} className={className} />,
    instagram: <Instagram size={size} className={className} />
  };
  return icons[name] || null;
};

export const Slide1 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s1;
    return (
        <div className="h-full w-full flex flex-col items-center justify-center text-center p-24 relative overflow-hidden bg-white">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gray-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-gray-100 rounded-full blur-3xl opacity-50"></div>
            
            <div className="z-10 flex flex-col items-center space-y-8">
                <div className="w-24 h-1 bg-black mb-8 rounded-full"></div>
                <h1 className="text-7xl font-bold tracking-tight text-[#1D1D1F] max-w-4xl leading-[1.1]">
                    {t.title}
                </h1>
                <p className="text-2xl text-[#86868B] max-w-2xl font-light">
                    {t.subtitle}
                </p>
            </div>
        </div>
    );
};

export const Slide2 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s2;
    return (
        <div className="h-full w-full flex flex-col justify-center p-24 bg-white">
            <div className="mb-16">
                <h2 className="text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">{t.title}</h2>
                <p className="text-xl text-[#86868B]">{t.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 flex-1">
                <div className="bg-[#F5F5F7] p-10 rounded-3xl flex flex-col justify-center">
                    <Icon name="smartphone" size={32} className="text-[#1D1D1F] mb-6" />
                    <h3 className="text-2xl font-semibold mb-3">{t.items[0].title}</h3>
                    <p className="text-[#86868B] text-lg">{t.items[0].desc}</p>
                </div>
                <div className="bg-[#F5F5F7] p-10 rounded-3xl flex flex-col justify-center">
                    <Icon name="target" size={32} className="text-[#1D1D1F] mb-6" />
                    <h3 className="text-2xl font-semibold mb-3">{t.items[1].title}</h3>
                    <p className="text-[#86868B] text-lg">{t.items[1].desc}</p>
                </div>
                <div className="bg-[#F5F5F7] p-10 rounded-3xl flex flex-col justify-center">
                    <Icon name="arrowRight" size={32} className="text-[#1D1D1F] mb-6" />
                    <h3 className="text-2xl font-semibold mb-3">{t.items[2].title}</h3>
                    <p className="text-[#86868B] text-lg">{t.items[2].desc}</p>
                </div>
                <div className="bg-black p-10 rounded-3xl flex flex-col justify-center text-white">
                    <Icon name="zap" size={32} className="text-white mb-6" />
                    <h3 className="text-2xl font-semibold mb-3">{t.items[3].title}</h3>
                    <p className="text-gray-400 text-lg">{t.items[3].desc}</p>
                </div>
            </div>
        </div>
    );
};

export const Slide3 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s3;
    return (
        <div className="h-full w-full flex flex-col justify-center items-center p-24 text-center bg-white">
            <h2 className="text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6 max-w-4xl">{t.title}</h2>
            <p className="text-2xl text-[#86868B] mb-20 max-w-2xl">{t.subtitle}</p>
            
            <div className="flex items-center justify-center w-full max-w-5xl space-x-4">
                <div className="flex flex-col space-y-4 w-64">
                    {t.items.map((item, i) => (
                        <div key={i} className="bg-[#F5F5F7] p-6 rounded-2xl border border-gray-100 flex items-center justify-center font-medium text-lg">{item}</div>
                    ))}
                </div>
                
                <Icon name="arrowRight" size={48} className="text-[#D1D1D6] mx-8" />
                
                <div className="w-80 h-80 rounded-full border-4 border-dashed border-[#D1D1D6] flex flex-col items-center justify-center p-8 bg-white relative">
                    <Icon name="x" size={48} className="text-[#1D1D1F] mb-4" />
                    <h3 className="text-xl font-bold text-center">{t.dest}</h3>
                    <p className="text-sm text-[#86868B] text-center mt-2">{t.destDesc}</p>
                </div>
                
                <Icon name="arrowRight" size={48} className="text-[#D1D1D6] mx-8" />
                
                <div className="w-64 bg-red-50 p-8 rounded-3xl border border-red-100 flex flex-col items-center justify-center opacity-80">
                    <h3 className="text-2xl font-bold text-red-900 mb-2">{t.result}</h3>
                    <p className="text-red-700 text-center font-medium">{t.resultDesc}</p>
                </div>
            </div>
        </div>
    );
};

export const Slide4 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s4;
    return (
        <div className="h-full w-full flex flex-col justify-center p-24 bg-white">
            <div className="mb-20 text-center">
                <h2 className="text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">{t.title}</h2>
                <p className="text-xl text-[#86868B]">{t.subtitle}</p>
            </div>
            
            <div className="flex justify-between items-stretch gap-6 flex-1">
                <div className="flex-1 bg-white border border-gray-200 rounded-[2rem] p-10 flex flex-col shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110 duration-500"></div>
                    <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-8">1</div>
                    <h3 className="text-3xl font-bold mb-4">{t.steps[0].title}</h3>
                    <p className="text-[#86868B] text-lg leading-relaxed flex-1">{t.steps[0].desc}</p>
                </div>
                
                <div className="flex items-center justify-center">
                    <Icon name="arrowRight" size={32} className="text-[#D1D1D6]" />
                </div>
                
                <div className="flex-1 bg-[#F5F5F7] rounded-[2rem] p-10 flex flex-col relative overflow-hidden group">
                     <div className="w-16 h-16 bg-white border border-gray-200 text-black rounded-2xl flex items-center justify-center text-2xl font-bold mb-8 shadow-sm">2</div>
                    <h3 className="text-3xl font-bold mb-4">{t.steps[1].title}</h3>
                    <p className="text-[#86868B] text-lg leading-relaxed flex-1">{t.steps[1].desc}</p>
                </div>
                
                <div className="flex items-center justify-center">
                    <Icon name="arrowRight" size={32} className="text-[#D1D1D6]" />
                </div>
                
                <div className="flex-1 bg-white border border-gray-200 rounded-[2rem] p-10 flex flex-col shadow-sm relative overflow-hidden group">
                    <div className="w-16 h-16 bg-gray-100 text-[#86868B] rounded-2xl flex items-center justify-center text-2xl font-bold mb-8">3</div>
                    <h3 className="text-3xl font-bold mb-4">{t.steps[2].title} <span className="text-sm font-normal text-[#86868B] block mt-1">{t.steps[2].optional}</span></h3>
                    <p className="text-[#86868B] text-lg leading-relaxed flex-1">{t.steps[2].desc}</p>
                </div>
            </div>
        </div>
    );
};

export const Slide5 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s5;
    return (
        <div className="h-full w-full flex p-24 items-center bg-white">
            <div className="w-1/2 pr-16">
                <h2 className="text-6xl font-bold tracking-tight text-[#1D1D1F] mb-8 leading-[1.1]">{t.title}</h2>
                <p className="text-2xl text-[#86868B] leading-relaxed mb-8">
                    {t.subtitle}
                </p>
                <div className="w-16 h-1 bg-[#E5E5EA] rounded-full"></div>
            </div>
            
            <div className="w-1/2 flex flex-col space-y-6">
                {t.items.slice(0, 3).map((item, i) => (
                    <div key={i} className="bg-[#F5F5F7] p-8 rounded-3xl flex items-start space-x-6">
                        <div className="bg-white p-3 rounded-full shadow-sm mt-1">
                            <Icon name="check" size={24} className="text-black" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-[#86868B]">{item.desc}</p>
                        </div>
                    </div>
                ))}
                
                <div className="bg-black p-8 rounded-3xl flex items-start space-x-6">
                    <div className="bg-gray-800 p-3 rounded-full mt-1">
                        <Icon name="trendingUp" size={24} className="text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{t.items[3].title}</h3>
                        <p className="text-gray-400">{t.items[3].desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Slide6 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s6;
    return (
        <div className="h-full w-full flex flex-col justify-center p-24 bg-white">
            <div className="mb-20 text-center">
                <h2 className="text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6">{t.title}</h2>
                <p className="text-2xl text-[#86868B]">{t.subtitle}</p>
            </div>
            
            <div className="relative flex justify-between w-full max-w-5xl mx-auto mt-10">
                <div className="absolute top-10 left-0 w-full h-1 bg-[#E5E5EA] -translate-y-1/2 z-0"></div>
                <div className="absolute top-10 left-0 w-[75%] h-1 bg-black -translate-y-1/2 z-0"></div>
                
                {t.steps.map((step, i) => (
                    <div key={i} className={`relative z-10 flex flex-col items-center group cursor-default ${i === 3 ? 'opacity-60 hover:opacity-100 transition-opacity' : ''}`}>
                        <div className={`w-20 h-20 ${i === 3 ? 'bg-white text-gray-400 border-2 border-gray-200' : 'bg-black text-white'} rounded-full flex items-center justify-center text-2xl font-bold border-8 border-white shadow-sm mb-10 transition-transform group-hover:scale-110`}>{i + 1}</div>
                        <h3 className={`text-xl font-bold mb-2 ${i === 3 ? 'text-gray-500' : ''}`}>{step.title}</h3>
                        <p className={`${i === 3 ? 'text-gray-400' : 'text-[#86868B]'} text-center w-40 text-sm`}>{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Slide7 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s7;
    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-24 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">{t.title}</h2>
                <p className="text-xl text-[#86868B]">{t.subtitle}</p>
            </div>
            
            <div className="bg-[#F5F5F7] rounded-[2.5rem] p-16 w-full max-w-4xl shadow-inner border border-gray-100">
                <div className="grid grid-cols-2 gap-x-16 gap-y-10">
                    {t.items.map((item, i) => (
                        <div key={i} className="flex items-start space-x-4">
                            <Icon name="check" size={24} className="text-black mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                <p className="text-[#86868B]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-center">
                    <span className="text-[#86868B] text-lg font-medium">{t.footer}</span>
                </div>
            </div>
        </div>
    );
};

export const Slide8 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s8;
    return (
        <div className="h-full w-full flex flex-col justify-center p-24 bg-white">
             <div className="mb-16 text-center">
                <h2 className="text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">{t.title}</h2>
                <p className="text-xl text-[#86868B]">{t.subtitle}</p>
            </div>
            
            <div className="flex w-full gap-12 flex-1">
                <div className="flex-1 bg-white border border-gray-200 rounded-3xl p-10 flex flex-col relative opacity-50 grayscale">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <Icon name="x" size={120} className="text-black opacity-20" />
                    </div>
                    <h3 className="text-2xl font-bold mb-8 text-center border-b pb-4">{t.trad}</h3>
                    <div className="flex justify-center space-x-4 mb-10 text-sm text-gray-400">
                        {t.tradNav.map((nav, i) => <span key={i}>{nav}</span>)}
                    </div>
                    <div className="flex-1 border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute top-4 left-4 w-20 h-4 bg-gray-200 rounded"></div>
                        <div className="absolute top-12 left-4 w-32 h-4 bg-gray-200 rounded"></div>
                        <div className="absolute top-4 right-4 w-16 h-16 bg-gray-200 rounded-full"></div>
                        <div className="mt-20 w-full flex flex-col space-y-4 items-center">
                            <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                            <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                            <div className="w-24 h-8 bg-gray-200 rounded mt-4"></div>
                        </div>
                        <p className="mt-8 text-sm font-medium">{t.tradDesc}</p>
                    </div>
                </div>
                
                <div className="flex-1 bg-white rounded-3xl p-10 flex flex-col shadow-lg border border-black/5 relative transform scale-105">
                    <div className="absolute top-0 inset-x-0 h-2 bg-black rounded-t-3xl"></div>
                    <h3 className="text-2xl font-bold mb-8 text-center border-b pb-4">{t.our}</h3>
                    <div className="flex-1 bg-[#F5F5F7] rounded-xl p-8 flex flex-col items-center justify-center text-center relative">
                        <h4 className="text-3xl font-black mb-4">{t.ourTitle}</h4>
                        <p className="text-gray-500 mb-8 max-w-xs">{t.ourDesc}</p>
                        <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg w-full max-w-xs shadow-md">
                            {t.ourCTA}
                        </button>
                    </div>
                    <div className="mt-6 flex justify-between items-center px-4">
                        {t.ourFeatures.map((f, i) => (
                            <span key={i} className="flex items-center text-sm font-medium text-black"><Icon name="check" size={16} className="mr-2"/> {f}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Slide9 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s9;
    return (
        <div className="h-full w-full flex flex-col justify-center items-center p-24 text-center bg-white">
            <h2 className="text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6">{t.title}</h2>
            <p className="text-2xl text-[#86868B] mb-20 max-w-2xl">{t.subtitle}</p>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
                {t.items.map((item, i) => (
                    <span key={i} className={`px-8 py-4 ${i === 2 ? 'bg-black text-white border border-black' : 'bg-white border border-gray-200 text-black'} rounded-full text-2xl font-medium shadow-sm hover:border-black transition-colors`}>{item}</span>
                ))}
            </div>
        </div>
    );
};

export const Slide10 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s10;
    return (
        <div className="h-full w-full flex flex-col justify-center p-24 bg-white">
            <div className="mb-20 text-center">
                <h2 className="text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6">{t.title}</h2>
                <p className="text-2xl text-[#86868B]">{t.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-3 gap-10">
                {t.items.map((item, i) => (
                    <div key={i} className={`border-t-2 ${i === 0 ? 'border-black' : 'border-[#D1D1D6]'} pt-8`}>
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-xl text-[#86868B] leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Slide11 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s11;
    return (
        <div className="h-full w-full flex flex-col justify-center items-center p-24 bg-white">
            <div className="mb-16 text-center">
                <h2 className="text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">{t.title}</h2>
                <p className="text-xl text-[#86868B]">{t.subtitle}</p>
            </div>
            
            <div className="flex gap-8 w-full max-w-5xl items-stretch">
                {t.packages.map((pkg, i) => (
                    <div key={i} className={`flex-1 ${i === 1 ? 'bg-black text-white border border-black transform scale-105 shadow-xl relative z-10' : i === 2 ? 'bg-[#F5F5F7] border border-gray-200' : 'bg-white border border-gray-200'} rounded-[2rem] p-10 flex flex-col`}>
                        {i === 1 && <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-[1.8rem]">{pkg.badge}</div>}
                        <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                        <p className={`${i === 1 ? 'text-gray-400' : 'text-[#86868B]'} text-sm mb-8 h-10`}>{pkg.desc}</p>
                        <div className={`text-4xl font-bold mb-8 pb-8 border-b ${i === 1 ? 'border-gray-800' : 'border-gray-100'}`}>{pkg.main}</div>
                        <ul className={`space-y-4 flex-1 ${i === 1 ? 'text-gray-300' : 'text-black'}`}>
                            {pkg.features.map((f, j) => (
                                <li key={j} className={`flex items-center text-sm ${i === 1 && j > 0 && j < 3 ? 'text-white font-medium' : ''}`}><Icon name="check" size={16} className={`mr-3 ${i === 1 ? 'text-white' : 'text-black'}`}/> {f}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Slide12 = ({ lang }: { lang: Language }) => {
    const t = translations[lang].presentation.slides.s12;
    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-24 text-center bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white z-0"></div>
            <div className="z-10 flex flex-col items-center max-w-4xl">
                <h2 className="text-7xl font-bold tracking-tight text-[#1D1D1F] mb-6 leading-[1.1]">{t.title}</h2>
                <p className="text-3xl text-[#86868B] mb-16 font-light">{t.subtitle}</p>
                
                <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
                    <button className="flex-1 flex items-center justify-center px-8 py-5 bg-[#25D366] text-white rounded-full text-xl font-bold shadow-lg hover:bg-[#1EBE5D] transition-colors">
                        <Smartphone size={24} className="mr-3" />
                        {t.ctas[0]}
                    </button>
                    <button className="flex-1 flex items-center justify-center px-8 py-5 bg-black text-white rounded-full text-xl font-bold shadow-lg hover:bg-gray-800 transition-colors">
                        <Mail size={24} className="mr-3" />
                        {t.ctas[1]}
                    </button>
                    <button className="flex-1 flex items-center justify-center px-8 py-5 bg-white text-black border-2 border-black rounded-full text-xl font-bold hover:bg-gray-50 transition-colors">
                        <Instagram size={24} className="mr-3" />
                        {t.ctas[2]}
                    </button>
                </div>
            </div>
        </div>
    );
};
