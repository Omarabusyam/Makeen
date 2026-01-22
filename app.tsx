import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import { PRODUCTS, SERVICES } from './constants';
import { ShoppingBag, Sparkles, Target, Zap, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const Home = () => (
    <div className="reveal">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_70%_20%,#C5A05915_0%,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-dark text-white mb-10 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">الإصدار 2.0 من نظام مكين</span>
          </div>
          <h1 className="text-6xl md:text-[110px] font-black leading-[0.9] mb-12 tracking-tighter text-gradient pb-6">
            نحن لا نصنع محتوى، <br/><span className="italic font-light">نحن نبني إرثاً.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
            مستشار استراتيجي يساعدك على تحويل خبرتك المتراكمة إلى براند شخصي ومنظومة معرفية تدر الدخل وتبني الأثر.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button onClick={() => setCurrentPage('makeen')} className="bg-brand-dark text-white px-14 py-6 rounded-2xl font-bold hover:bg-brand-accent transition-all shadow-2xl shadow-black/10 flex items-center gap-3 group">
              اكتشف منهجية مكين
              <ArrowRight className="w-5 h-5 group-hover:translate-x-[-5px] transition-transform" />
            </button>
            <button onClick={() => setCurrentPage('consultation')} className="bg-white border-2 border-zinc-100 text-brand-dark px-14 py-6 rounded-2xl font-bold hover:border-brand-accent transition-all">احجز جلسة استشارية</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-zinc-50 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-16">
          {[
            { label: 'طلاب مكين', val: '450+' },
            { label: 'استراتيجية براند', val: '85+' },
            { label: 'جلسة توجيهية', val: '1.2k' },
            { label: 'تقييم رضا', val: '4.9/5' }
          ].map((s, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl font-black text-brand-dark mb-3 group-hover:text-brand-accent transition-colors">{s.val}</div>
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick AI Hook Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-brand-dark rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[150px]"></div>
          <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">توقف عن <span className="text-brand-accent italic">التخمين</span>.</h2>
              <p className="text-zinc-400 text-lg mb-10 font-light">استخدم مختبرنا الذكي لصياغة خطافات محتوى مبنية على سيكولوجية الجماهير العربية.</p>
              <button onClick={() => setCurrentPage('ai-lab')} className="bg-white text-brand-dark px-10 py-5 rounded-2xl font-bold hover:bg-brand-accent hover:text-white transition-all">جرب المختبر مجاناً</button>
            </div>
            <div className="space-y-6">
               <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                    <div className="text-sm font-medium">تحويل فكرة معقدة إلى عنوان بسيط وجذاب.</div>
                  </div>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm ml-12">
                  <div className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                    <div className="text-sm font-medium">صياغة وعود حقيقية تجذب العميل المثالي.</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-arabic overflow-x-hidden selection:bg-brand-accent/30">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'store' && (
          <div className="pt-48 pb-32 px-6 reveal">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-16">
                <div>
                  <h2 className="text-5xl font-black mb-4 tracking-tighter">المتجر الرقمي</h2>
                  <p className="text-zinc-400 font-light">أدوات عملية لبناء منظومتك المعرفية.</p>
                </div>
                <ShoppingBag className="w-8 h-8 text-zinc-200" />
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                {PRODUCTS.map(product => (
                  <div key={product.id} className="group">
                    <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-100 mb-8 relative">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      {product.tag && (
                        <span className="absolute top-6 right-6 bg-brand-dark text-white text-[10px] font-bold px-5 py-2.5 rounded-full uppercase tracking-widest">{product.tag}</span>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <button className="bg-white text-brand-dark px-8 py-4 rounded-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-all">شراء الآن — ${product.price}</button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors">{product.title}</h3>
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {currentPage === 'ai-lab' && <AiAssistant />}
        {currentPage === 'makeen' && (
          <div className="pt-60 pb-40 px-6 reveal">
             <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-7xl font-black mb-12">مشروع <span className="text-brand-accent italic tracking-widest">مكين</span></h2>
                <div className="bg-zinc-50 p-12 md:p-20 rounded-[4rem] text-right mb-16">
                   <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                     <Target className="text-brand-accent w-8 h-8" />
                     ماذا ستحقق في مكين؟
                   </h3>
                   <div className="grid md:grid-cols-2 gap-8">
                      {[
                        'بناء هوية بصرية ولفظية فريدة.',
                        'تصميم استراتيجية محتوى لـ 12 شهر.',
                        'إطلاق أول منتج رقمي خاص بك.',
                        'إتقان مهارات البيع عبر القصة (Storyselling).'
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                          <p className="text-zinc-600 font-medium">{item}</p>
                        </div>
                      ))}
                   </div>
                </div>
                <button className="bg-brand-dark text-white px-16 py-7 rounded-3xl font-bold text-xl hover:scale-105 transition-all shadow-2xl">سجل اهتمامك الآن</button>
             </div>
          </div>
        )}
        {currentPage === 'consultation' && (
          <div className="pt-60 pb-40 text-center reveal">
            <h2 className="text-5xl font-black mb-6">احجز استشارتك</h2>
            <p className="text-zinc-500 max-w-lg mx-auto mb-16 text-lg font-light">دعنا نضع استراتيجيتك تحت المجهر ونخرج بخطة عمل فورية.</p>
            <div className="max-w-xl mx-auto bg-white p-12 rounded-[4rem] shadow-2xl shadow-brand-dark/5 border border-zinc-50">
               {SERVICES.map(s => (
                 <div key={s.id} className="text-center">
                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                    <div className="text-5xl font-black text-brand-dark mb-8 tracking-tighter"><span className="text-2xl text-zinc-300 font-light">$</span>{s.price}</div>
                    <p className="text-zinc-400 mb-12 text-sm leading-relaxed">{s.description}</p>
                    <a href={`mailto:omarabusam@gmail.com?subject=Consultation Request`} className="flex items-center justify-center gap-3 w-full bg-brand-dark text-white py-6 rounded-2xl font-bold hover:bg-brand-accent transition-all group">
                      <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      تأكيد الموعد
                    </a>
                 </div>
               ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
