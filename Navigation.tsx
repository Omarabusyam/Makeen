import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'py-4 bg-white/70 backdrop-blur-2xl border-b border-zinc-100' : 'py-10 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div 
          onClick={() => onNavigate('home')} 
          className="text-2xl font-black tracking-tighter cursor-pointer hover:opacity-70 transition-opacity"
        >
          عمر أبو صيام<span className="text-brand-accent italic">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {[
            { id: 'home', label: 'الرئيسية' },
            { id: 'makeen', label: 'مكين' },
            { id: 'consultation', label: 'استشارة' }
          ].map(item => (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-xs font-bold tracking-widest uppercase transition-all relative group ${currentPage === item.id ? 'text-brand-dark' : 'text-zinc-400 hover:text-brand-dark'}`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand-accent transition-all ${currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
          <button 
            onClick={() => onNavigate('consultation')}
            className="bg-brand-dark text-white text-[10px] px-8 py-3 rounded-full font-bold hover:bg-brand-accent transition-all"
          >
            تواصل الآن
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
