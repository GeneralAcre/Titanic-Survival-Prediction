'use client';

import { useState, useEffect, useRef } from 'react';

// Pre-seeded baseline — reflects what people commonly associate with the Titanic
const SEED = [
  { word: 'ICEBERG',    count: 412 },
  { word: 'LOVE',       count: 390 },
  { word: 'SINKING',    count: 360 },
  { word: 'JACK',       count: 310 },
  { word: 'ROSE',       count: 295 },
  { word: 'TRAGEDY',    count: 270 },
  { word: 'OCEAN',      count: 200 },
  { word: 'DISASTER',   count: 185 },
  { word: 'SURVIVAL',   count: 165 },
  { word: '1912',       count: 150 },
  { word: 'UNSINKABLE', count: 130 },
  { word: 'LIFEBOAT',   count: 105 },
  { word: 'COLD',       count: 90  },
  { word: 'DOOR',       count: 80  },
  { word: 'ATLANTIC',   count: 68  },
  { word: 'HISTORY',    count: 60  },
  { word: 'SHIP',       count: 55  },
  { word: 'TEARS',      count: 42  },
];

// Map count → visual scale
function getScale(count) {
  if (count >= 350) return { font: '2.2rem',  px: '1.6rem', py: '0.7rem' };
  if (count >= 200) return { font: '1.7rem',  px: '1.4rem', py: '0.6rem' };
  if (count >= 100) return { font: '1.3rem',  px: '1.2rem', py: '0.5rem' };
  if (count >= 40)  return { font: '1.05rem', px: '1rem',   py: '0.45rem' };
  if (count >= 10)  return { font: '0.9rem',  px: '0.9rem', py: '0.4rem' };
  return              { font: '0.78rem', px: '0.8rem', py: '0.35rem' };
}

// 3 colour variants cycling by sorted index
const COLORS = [
  { bg: '#EEC750', text: '#2541B2', border: 'transparent' },
  { bg: 'rgba(255,255,255,0.08)', text: '#ffffff', border: 'rgba(255,255,255,0.25)' },
  { bg: 'rgba(37,65,178,0.6)', text: '#EEC750', border: 'rgba(238,199,80,0.35)' },
];

export default function WordCloud() {
  const [words, setWords] = useState([]);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null); // { text, ok }
  const [justAdded, setJustAdded] = useState(null);
  const inputRef = useRef(null);

  // Merge seed + localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('titanicWords') || '[]');
    const map = new Map(SEED.map(w => [w.word, w.count]));
    saved.forEach(({ word, count }) => {
      map.set(word, (map.get(word) || 0) + count);
    });
    const merged = Array.from(map, ([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count);
    setWords(merged);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleaned = input.trim().toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 16);
    if (!cleaned) return;

    setWords(prev => {
      const exists = prev.find(w => w.word === cleaned);
      const next = exists
        ? prev.map(w => w.word === cleaned ? { ...w, count: w.count + 1 } : w)
        : [...prev, { word: cleaned, count: 1 }];
      return next.sort((a, b) => b.count - a.count);
    });

    // Persist delta
    const saved = JSON.parse(localStorage.getItem('titanicWords') || '[]');
    const entry = saved.find(w => w.word === cleaned);
    if (entry) entry.count += 1;
    else saved.push({ word: cleaned, count: 1 });
    localStorage.setItem('titanicWords', JSON.stringify(saved));

    setJustAdded(cleaned);
    setFeedback({ text: `"${cleaned}" added!`, ok: true });
    setInput('');
    inputRef.current?.focus();

    setTimeout(() => setJustAdded(null), 700);
    setTimeout(() => setFeedback(null), 2000);
  };

  return (
    <div className="bg-[#2541B2] px-6 md:px-10 pb-24">
      <div className="max-w-screen-lg mx-auto">

        {/* Header */}
        <div className="border-t border-white/20 pt-12 mb-8">
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#EEC750] uppercase block mb-2">
            Word Association
          </span>
          <p className="text-white text-[22px] md:text-[26px] font-bold leading-tight mb-1">
            What&apos;s the first word that comes to mind?
          </p>
          <p className="text-white/50 text-[14px]">
            Type it below — the more people say it, the bigger it gets.
          </p>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex gap-3 mb-3 max-w-sm">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 16))}
            placeholder="e.g. ICEBERG"
            className="flex-1 bg-white/10 border border-white/25 text-white placeholder-white/30 px-4 py-2.5 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#EEC750] text-[15px] uppercase tracking-wide"
          />
          <button
            type="submit"
            className="bg-[#EEC750] text-[#2541B2] px-6 py-2.5 rounded-[5px] font-bold text-[14px] hover:bg-[#d4ae42] transition-colors whitespace-nowrap"
          >
            ADD →
          </button>
        </form>

        {/* Feedback */}
        <div className="h-5 mb-8">
          {feedback && (
            <span
              className="text-[13px] text-[#EEC750]"
              style={{ animation: 'fadeUp 0.3s ease forwards' }}
            >
              {feedback.text}
            </span>
          )}
        </div>

        {/* Bubbles */}
        <div className="flex flex-wrap gap-3 items-center">
          {words.map(({ word, count }, i) => {
            const scale = getScale(count);
            const color = COLORS[i % 3];
            const floatDelay = (i % 7) * 0.45;
            const isNew = word === justAdded;

            return (
              <span
                key={word}
                title={`${count} votes`}
                style={{
                  fontSize: scale.font,
                  paddingLeft: scale.px,
                  paddingRight: scale.px,
                  paddingTop: scale.py,
                  paddingBottom: scale.py,
                  backgroundColor: color.bg,
                  color: color.text,
                  border: `1.5px solid ${color.border}`,
                  borderRadius: '9999px',
                  fontWeight: 700,
                  cursor: 'default',
                  userSelect: 'none',
                  display: 'inline-block',
                  lineHeight: 1.1,
                  animation: isNew
                    ? 'popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards'
                    : `float 3.2s ease-in-out ${floatDelay}s infinite`,
                  transition: 'font-size 0.4s ease, padding 0.4s ease',
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

      </div>
    </div>
  );
}
