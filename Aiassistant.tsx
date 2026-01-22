
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, RefreshCw, AlertCircle } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateStrategy = async () => {
    if (!topic) return;
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `أنت عمر أبو صيام، خبير استراتيجي في مشروع مكين. قدم لجمهورك 3 عناوين (خطافات - Hooks) جذابة لموضوع: "${topic}". يجب أن تكون العناوين غامضة، مثيرة للفضول، وتركز على القيمة العميقة وليس "الكليك بيت" الرخيص. رد بصيغة مباشرة ومهنية.`,
      });
      setResult(response.text || "حدث خطأ في استجابة النظام الذكي.");
    } catch (err) {
      setError("نعتذر، المختبر مشغول حالياً. يرجى المحاولة لاحقاً.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-60 pb-40 px-6 reveal">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-brand-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-8 h-8 text-brand-accent" />
          </div>
          <h2 className="text-5xl font-black mb-6">مختبر الاستراتيجية <span className="text-brand-accent italic">الذكي</span></h2>
          <p className="text-zinc-500 font-light text-lg">أدخل موضوع محتواك القادم، وسأقوم بصياغة 3 خطافات ذهبية لك بناءً على فلسفة "مكين".</p>
        </div>

        <div className="bg-white border border-zinc-100 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-brand-dark/5">
          <div className="mb-8">
            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 mb-4">موضوع المحتوى</label>
            <div className="relative">
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="مثلاً: أهمية الصبر في ريادة الأعمال..."
                className="w-full bg-zinc-50 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-brand-accent/20 transition-all text-brand-dark font-medium"
              />
              <button 
                onClick={generateStrategy}
                disabled={loading || !topic}
                className="absolute left-3 top-3 bottom-3 bg-brand-dark text-white px-8 rounded-xl font-bold hover:bg-brand-accent disabled:bg-zinc-200 transition-all flex items-center gap-2"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {loading ? 'جاري التحليل...' : 'توليد'}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-3 p-4 bg-red-50 text-red-500 rounded-xl text-sm mb-8">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}

          {result && (
            <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 reveal">
              <div className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-6 border-b border-brand-accent/10 pb-4">توصيات عمر الاستراتيجية:</div>
              <div className="whitespace-pre-wrap leading-relaxed text-zinc-700 font-medium italic">
                {result}
              </div>
            </div>
          )}
        </div>
        
        <p className="text-center mt-12 text-zinc-300 text-[10px] uppercase tracking-widest">ملاحظة: النتائج تعتمد على خوارزميات الذكاء الاصطناعي، استخدمها كنقطة انطلاق.</p>
      </div>
    </div>
  );
};

export default AiAssistant;
