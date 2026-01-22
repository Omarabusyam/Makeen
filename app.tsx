
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import { PRODUCTS, SERVICES } from './constants';
import { ShoppingBag, Sparkles, Target, Zap, ArrowRight } from 'lucide-react';

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/5 border border-brand-accent/10 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-accent">نحن لا نصنع محتوى، نحن نبني إرثاً</span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-black leading-[0.9] mb-12 tracking-tighter text-gradient pb-4">
            تَمكّن <br/><span className="italic font-light">لتمكّن.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
            مستشار استراتيجي يساعد رواد الأعمال على تحويل خبراتهم إلى أصول معرفية تدر الدخل وتبني الأثر عبر منهجية <span className="font-bold text-brand-dark underline underline-offset-4">مكين</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button onClick={() => setCurrentPage('makeen')} className="bg-brand-dark text-white px-12 py-6 rounded-2xl font-bold hover:bg-brand-accent transition-all shadow-2xl shadow-black/10 flex items-center gap-3 group">
              ابدأ رحلة مكين
              <ArrowRight className="w-5 h-5 group-hover:translate-x-[-5px] transition-transform" />
            </button>
            <button onClick={() => setCurrentPage('store')} className="bg-white border-2 border-zinc-100 text-brand-dark px-12 py-6 rounded-2xl font-bold hover:border-brand-accent transition-all">تصفح المتجر الرقمي</button>
          </div>
        </div>
      </section>

      {/* Stats/Social Proof */}
      <section className="py-20 border-y border-zinc-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'صانع محتوى مُمكّن', val: '500+' },
            { label: 'استراتيجية مُطلقة', val: '120+' },
            { label: 'ساعة تدريبية', val: '1500+' },
            { label: 'أثر مستدام', val: '∞' }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-brand-dark mb-2">{s.val}</div>
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Strategy Lab Preview */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-zinc-50 rounded-[3rem] p-12 md:p-24 border border-zinc-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-brand-accent text-white rounded-2xl flex items-center justify-center mb-8">
                <Zap className="w-6 h-6 fill-current" />
              </div>
              <h2 className="text-4xl font-bold mb-6">مختبر الاستراتيجية <span className="text-brand-accent italic">الذكي</span></h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">استخدم قوة الذكاء الاصطناعي لتوليد خطافات (Hooks) لمحتواك القادم بناءً على منهجية مكين.</p>
              <button onClick={() => setCurrentPage('ai-lab')} className="text-brand-dark font-bold underline underline-offset-8 decoration-brand-accent hover:text-brand-accent transition-all">جرب المختبر الآن مجاناً</button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100">
               <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-zinc-100 rounded-full"></div>
                  <div className="h-4 w-1/2 bg-zinc-100 rounded-full"></div>
                  <div className="pt-4 border-t border-zinc-50">
                    <div className="text-xs font-bold text-brand-accent mb-2 tracking-widest uppercase">النتيجة الاستراتيجية:</div>
                    <div className="text-sm italic text-zinc-400">"كيف تحول صمت جمهورك إلى تفاعل بـ 3 خطوات.."</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const StorePage = () => (
    <div className="pt-48 pb-32 px-6 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">المتجر الرقمي</h2>
            <p className="text-zinc-400 font-light">أدوات عملية لبناء منظومتك المعرفية.</p>
          </div>
          <ShoppingBag className="w-8 h-8 text-zinc-200" />
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {PRODUCTS.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-100 mb-6 relative">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" />
                {product.tag && (
                  <span className="absolute top-6 right-6 bg-brand-dark text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">{product.tag}</span>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-brand-dark px-8 py-4 rounded-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">شراء الآن — ${product.price}</button>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-accent transition-colors">{product.title}</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-arabic overflow-x-hidden selection:bg-brand-accent/30 selection:text-white">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'store' && <StorePage />}
        {currentPage === 'ai-lab' && <AiAssistant />}
        {currentPage === 'makeen' && (
          <div className="pt-60 pb-40 px-6 text-center reveal">
             <h2 className="text-7xl font-black mb-12">مشروع <span className="text-brand-accent italic tracking-widest">مكين</span></h2>
             <p className="max-w-2xl mx-auto text-xl text-zinc-500 font-light leading-relaxed mb-16">
               رحلة استراتيجية مدتها 12 أسبوعاً، ننتقل فيها من تشتت المحتوى إلى إحكام المنظومة. 
               <br/>التسجيل متاح الآن للدفعة القادمة.
             </p>
             <button className="bg-brand-dark text-white px-14 py-6 rounded-2xl font-bold">حمل البروشور التدريبي</button>
          </div>
        )}
        {currentPage === 'consultation' && (
          <div className="pt-60 pb-40 text-center reveal">
            <h2 className="text-5xl font-black mb-6">احجز استشارتك</h2>
            <p className="text-zinc-500 max-w-lg mx-auto mb-12">مستعد لنقل محتواك للمرحلة القادمة؟ دعنا نتحدث بعمق.</p>
            <div className="max-w-xl mx-auto bg-zinc-50 p-12 rounded-[3rem] border border-zinc-100">
               {SERVICES.map(s => (
                 <div key={s.id} className="text-center">
                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                    <div className="text-4xl font-black text-brand-accent mb-6">${s.price}</div>
                    <p className="text-zinc-400 mb-10 text-sm leading-relaxed">{s.description}</p>
                    <a href={`mailto:omarabusam@gmail.com?subject=Consultation Request - ${s.title}`} className="block w-full bg-brand-dark text-white py-5 rounded-2xl font-bold hover:bg-brand-accent transition-all">تأكيد الحجز</a>
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
