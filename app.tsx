import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const Home = () => (
    <div className="reveal">
      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 mb-10">
            <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-ping"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">نحو صناعة محتوى استراتيجي</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold leading-[1.05] mb-12 tracking-tight text-gradient">
            نبني المعنى <br/>لنصنع الأثر.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
            مستشار استراتيجي يساعدك على تحويل خبرتك إلى براند شخصي ومنظومة معرفية طويلة المدى عبر مشروع "مكين".
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button onClick={() => setCurrentPage('makeen')} className="bg-brand-dark text-white px-14 py-6 rounded-full font-bold hover:scale-105 transition-all shadow-2xl shadow-black/10 min-w-[240px]">مشروع مكين</button>
            <button onClick={() => setCurrentPage('consultation')} className="text-brand-dark font-bold hover:text-brand-accent transition-colors flex items-center gap-2 group">
              احجز استشارتك
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-40 bg-brand-dark text-white rounded-[3rem] mx-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[150px]"></div>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">لماذا تحتاج إلى <span className="text-brand-accent italic">منظومة</span> وليس مجرد محتوى؟</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">المحتوى العشوائي يستهلك طاقتك، بينما المحتوى الاستراتيجي يبني أصولك. في "مكين"، نركز على العمق والارتباط العاطفي مع جمهورك.</p>
            <div className="space-y-6">
              {['تحويل الخبرة إلى منتج معرفي', 'بناء ثقة عميقة مع الجمهور', 'نظام إنتاج مستدام'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border border-brand-accent flex items-center justify-center text-brand-accent text-xs">✓</div>
                  <span className="font-bold text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-12">
               <div className="h-64 bg-zinc-900 rounded-3xl border border-white/5 p-8">
                  <div className="text-4xl mb-4">💎</div>
                  <h4 className="font-bold">القيمة</h4>
               </div>
               <div className="h-64 bg-brand-accent/20 rounded-3xl border border-brand-accent/20 p-8">
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="font-bold">الأثر</h4>
               </div>
            </div>
            <div className="space-y-6">
               <div className="h-64 bg-zinc-800 rounded-3xl border border-white/5 p-8">
                  <div className="text-4xl mb-4">🧠</div>
                  <h4 className="font-bold">العمق</h4>
               </div>
               <div className="h-64 bg-zinc-900 rounded-3xl border border-white/5 p-8">
                  <div className="text-4xl mb-4">📈</div>
                  <h4 className="font-bold">النمو</h4>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const MakeenPage = () => (
    <div className="pt-48 pb-32 px-6 reveal">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-10">مشروع <span className="text-brand-accent italic">مكين</span></h2>
        <div className="prose prose-xl max-w-none text-zinc-500 leading-relaxed space-y-8 font-light">
          <p>مكين هو رحلة انتقال من "صانع محتوى" إلى "صاحب أصل معرفي". نساعدك على بناء هوية رقمية لا تموت بموت المنصات.</p>
          <div className="grid md:grid-cols-2 gap-8 py-12">
            <div className="bg-zinc-50 p-10 rounded-3xl">
              <h3 className="text-brand-dark font-bold text-2xl mb-4">البرنامج التدريبي</h3>
              <p className="text-sm">منهجية مكثفة تأخذك من الصفر حتى إطلاق منتجك المعرفي الأول.</p>
            </div>
            <div className="bg-zinc-50 p-10 rounded-3xl">
              <h3 className="text-brand-dark font-bold text-2xl mb-4">المجتمع</h3>
              <p className="text-sm">شبكة من رواد الأعمال وصناع المحتوى الذين يتشاركون ذات الرؤية الطموحة.</p>
            </div>
          </div>
        </div>
        <button className="mt-12 bg-brand-dark text-white px-10 py-5 rounded-full font-bold">انضم للقائمة البريدية</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-arabic overflow-x-hidden">
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'makeen' && <MakeenPage />}
        {currentPage === 'consultation' && (
          <div className="pt-60 pb-40 text-center reveal">
            <h2 className="text-5xl font-bold mb-6">احجز استشارتك</h2>
            <p className="text-zinc-500 max-w-lg mx-auto mb-12">مستعد لنقل محتواك للمرحلة القادمة؟ دعنا نتحدث.</p>
            <a href="mailto:omarabusam@gmail.com" className="bg-brand-accent text-white px-12 py-5 rounded-full font-bold inline-block">تواصل عبر البريد</a>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
