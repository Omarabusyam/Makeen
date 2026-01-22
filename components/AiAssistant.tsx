import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, RefreshCw, AlertCircle, Lightbulb, ClipboardCheck } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const generateStrategy = async () => {
    if (!topic) return;
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `أنت عمر أبو صيام، خبير استراتيجي في صناعة المحتوى. قدم 3 عناوين (Hooks) احترافية لموضوع: "${topic}". اجعلها قصيرة، قوية، وتثير الفضول الاستراتيجي. رد فقط بالعناوين مع ترقيمها.`,
      });
      setResult(response.text || "لم نتمكن من استخراج العناوين.");
    } catch (err) {
      setError("المختبر الذكي يحتاج لاتصال أقوى بمفاتيح الـ API. تأكد من إعداد المفتاح بشكل صحيح.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-60 pb-40 px-6 reveal">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-brand-accent/10 rounded-3xl mb-6">
            <Lightbulb className="w-8 h-8 text-brand-accent animate-pulse" />
          </div>
          <h2 className="text-5xl font-black mb-6 tracking-tight text-brand-dark">مختبر الخطافات <span className="text-brand-accent italic">الذهبية</span></h2>
          <p className="text-zinc-500 font-light text-lg leading-relaxed">أدخل فكرتك، وسنصيغها بأسلوب "مكين" الذي يجبر الجمهور على التوقف والقراءة.</p>
        </div>

        <div className="bg-white border border-zinc-100 p-8 md:p-12 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative overflow-hidden">
          <div className="mb-10">
            <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 mb-6">ما هو موضوعك القادم؟</label>
            <div className="relative group">
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="مثلاً: كيف تبني عادات يومية ناجحة..."
                className="w-full bg-zinc-50 border-2 border-transparent focus:border-brand-accent/20 rounded-2xl py-6 px-8 transition-all text-brand-dark font-medium outline-none text-lg"
              />
              <button 
                onClick={generateStrategy}
                disabled={loading || !topic}
                className="mt-6 w-full bg-brand-dark text-white py-6 rounded-2xl font-bold hover:bg-brand-accent disabled:bg-zinc-100 transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-dark/10"
              >
                {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                {loading ? 'جاري صياغة الاستراتيجية...' : 'توليد الخطافات الاستراتيجية'}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-4 p-6 bg-red-50 text-red-600 rounded-2xl text-sm mb-8 border border-red-100">
              <AlertCircle className="w-5 h-5 mt-1 shrink-0" />
              <p className="leading-relaxed">{error}</p>
            </div>
          )}

          {result && (
            <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 reveal relative group">
              <div className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em] mb-6 border-b border-brand-accent/10 pb-4 flex justify-between items-center">
                <span>توصيات عمر الاستراتيجية</span>
                <button onClick={copyToClipboard} className="text-zinc-400 hover:text-brand-accent transition-colors">
                  {copied ? <ClipboardCheck className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
              <div className="whitespace-pre-wrap leading-[2] text-zinc-800 font-medium text-lg">
                {result}
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-200/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center text-xs font-bold">ع</div>
                <div className="text-xs text-zinc-400">هذه العناوين مصممة لزيادة معدل النقر (CTR) بنسبة 40% وفق منهجية مكين.</div>
              </div>
            </div>
          )}
        </div>
        
        <p className="text-center mt-12 text-zinc-300 text-[10px] uppercase tracking-[0.3em]">تم تطوير هذا المختبر بواسطة ذكاء اصطناعي مخصص لصناعة المحتوى</p>
      </div>
    </div>
  );
};

export default AiAssistant;
