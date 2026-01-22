import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 px-8 bg-white border-t border-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <h2 className="text-3xl font-black mb-6">عمر أبو صيام<span className="text-brand-accent">.</span></h2>
            <p className="text-zinc-400 max-w-sm leading-relaxed font-light">نصنع القيمة، لنترك الأثر. مشروع مكين هو بوابتك لعالم المحتوى الاستراتيجي الرصين.</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-300 mb-8">روابط</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-brand-accent transition-colors">مكين</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">الاستشارات</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">المدونة</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-300 mb-8">تواصل</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-brand-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-zinc-50">
          <p className="text-zinc-300 text-[10px] uppercase tracking-[0.2em]">© {new Date().getFullYear()} جميع الحقوق محفوظة لـ عمر أبو صيام</p>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-300 hover:border-brand-accent hover:text-brand-accent transition-all cursor-pointer">↑</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
