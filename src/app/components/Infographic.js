'use client';

import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// Animated counting number
function Counter({ to, delay = 0 }) {
  const [ref, inView] = useInView(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(() => {
      let t0 = null;
      const tick = (ts) => {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / 1600, 1);
        setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay * 1000);
    return () => clearTimeout(id);
  }, [inView, to, delay]);
  return <span ref={ref}>{n.toLocaleString()}</span>;
}

// 10×10 dot grid — filledCount dots are yellow, rest are dim
function DotGrid({ filledCount, label, note }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div className="flex flex-col items-center">
      <div
        ref={ref}
        className="flex flex-wrap gap-[5px]"
        style={{ width: '154px' }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="w-[11px] h-[11px] rounded-full"
            style={{
              backgroundColor:
                inView && i < filledCount ? '#EEC750' : 'rgba(37,65,178,0.15)',
              transition: inView
                ? `background-color 0.3s ease ${Math.floor(i / 10) * 0.06}s`
                : 'none',
            }}
          />
        ))}
      </div>
      <div className="mt-4 text-[34px] font-bold text-[#2541B2] leading-none">
        {filledCount}%
      </div>
      <div className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#2541B2] mt-1">
        {label}
      </div>
      {note && (
        <div className="text-[11px] text-gray-400 mt-1 text-center max-w-[140px]">
          {note}
        </div>
      )}
    </div>
  );
}

// Horizontal animated bar
function Bar({ label, value, delay = 0 }) {
  const [ref, inView] = useInView(0.3);
  const pct = Math.round(value * 100);
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-[16px] text-[#2541B2] font-medium">{label}</span>
        <span className="text-[22px] font-bold text-[#2541B2]">{pct}%</span>
      </div>
      <div className="h-7 rounded-full overflow-hidden bg-[#eaedfa]">
        <div
          className="h-full rounded-full bg-[#EEC750]"
          style={{
            width: inView ? `${pct}%` : '0%',
            transition: `width 1.1s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s`,
          }}
        />
      </div>
    </div>
  );
}

// Section header — fades in on scroll
function SectionHeader({ tag, title, subtitle }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div
      ref={ref}
      className="pt-14 pb-6"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {tag && (
        <div className="text-[11px] font-bold tracking-[0.22em] text-[#EEC750] uppercase mb-2">
          {tag}
        </div>
      )}
      <div className="text-[28px] md:text-[34px] font-bold text-[#2541B2] leading-tight">
        {title}
      </div>
      {subtitle && (
        <div className="text-[15px] text-gray-500 mt-3 leading-relaxed max-w-[540px]">
          {subtitle}
        </div>
      )}
      <hr className="border-[#2541B2] mt-6" />
    </div>
  );
}

// Pull-quote — narrative emphasis block
function Pullquote({ children }) {
  const [ref, inView] = useInView(0.4);
  return (
    <div
      ref={ref}
      className="border-l-4 border-[#EEC750] pl-5 my-10"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateX(-16px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <div className="text-[20px] md:text-[22px] font-bold text-[#2541B2] leading-snug italic">
        {children}
      </div>
    </div>
  );
}

// Big story stat (large number + label)
function StoryStat({ to, label, delay = 0 }) {
  const [ref, inView] = useInView(0.3);
  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      <div className="text-[44px] sm:text-[56px] md:text-[68px] font-bold text-[#2541B2] leading-none tabular-nums">
        <Counter to={to} delay={delay} />
      </div>
      <div className="text-[12px] text-gray-400 mt-2 uppercase tracking-[0.18em]">{label}</div>
    </div>
  );
}

export default function Infographic() {
  return (
    <div className="bg-white pb-16">

      {/* ── THE SCALE ── */}
      <SectionHeader
        tag="April 15, 1912"
        title="The scale of the disaster"
        subtitle="In the early hours of the morning, the RMS Titanic disappeared beneath the North Atlantic. The toll was staggering."
      />
      <div className="grid grid-cols-3 gap-4 py-10 border-b border-gray-100">
        <StoryStat to={2224} label="people aboard"  delay={0}    />
        <StoryStat to={1502} label="lives lost"     delay={0.15} />
        <StoryStat to={722}  label="survivors"      delay={0.30} />
      </div>

      {/* ── OVERVIEW DOT GRID ── */}
      <SectionHeader
        tag="Survival Rate"
        title="Only 1 in 3 made it out alive"
        subtitle="Each dot represents 1 in 100 passengers. Yellow means survived."
      />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 py-8 border-b border-gray-100">
        <DotGrid filledCount={38} label="survived" note="each ● = 1 in 100 passengers" />
        <div className="flex-1 max-w-[420px]">
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
            Of the estimated 2,224 people on board, only around{' '}
            <strong className="text-[#2541B2]">38%</strong> survived.
            The rest were lost to the freezing waters of the North Atlantic.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            But that number was far from evenly distributed. Survival depended
            heavily on <strong className="text-[#2541B2]">who you were</strong>,{' '}
            <strong className="text-[#2541B2]">where you slept</strong>, and{' '}
            <strong className="text-[#2541B2]">who you were with</strong>.
          </p>
        </div>
      </div>

      {/* ── GENDER ── */}
      <SectionHeader
        tag="Factor 01 — Gender"
        title="Women were four times more likely to survive"
        subtitle='The "women and children first" protocol had a dramatic effect. The numbers speak for themselves.'
      />
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 py-8 justify-start border-b border-gray-100">
        <DotGrid filledCount={74} label="Female" note="74 in 100 survived" />
        <DotGrid filledCount={19} label="Male"   note="19 in 100 survived" />
      </div>
      <Pullquote>
        A woman&apos;s chance of survival was 74%. A man&apos;s was just 19%.
      </Pullquote>

      {/* ── PASSENGER CLASS ── */}
      <SectionHeader
        tag="Factor 02 — Passenger Class"
        title="Your ticket determined your fate"
        subtitle="First-class passengers had better access to lifeboats, deck space, and information. The difference was life and death."
      />
      <div className="py-8 max-w-[520px] border-b border-gray-100">
        <Bar label="1st Class" value={0.629630} delay={0}    />
        <Bar label="2nd Class" value={0.472826} delay={0.12} />
        <Bar label="3rd Class" value={0.242363} delay={0.24} />
      </div>
      <Pullquote>
        A 3rd-class passenger was 2.6× less likely to survive than someone in 1st class.
      </Pullquote>

      {/* ── EMBARKATION ── */}
      <SectionHeader
        tag="Factor 03 — Port of Embarkation"
        title="Where you boarded shaped your odds"
        subtitle="Cherbourg passengers fared best — partly because more first-class travellers boarded there."
      />
      <div className="py-8 max-w-[520px] border-b border-gray-100">
        <Bar label="Cherbourg (France)"    value={0.553571} delay={0}    />
        <Bar label="Queenstown (Ireland)"  value={0.389610} delay={0.12} />
        <Bar label="Southampton (England)" value={0.339009} delay={0.24} />
      </div>

      {/* ── FAMILY SIZE ── */}
      <SectionHeader
        tag="Factor 04 — Family Size"
        title="Travelling alone was dangerous. So was a large group."
        subtitle="Small families — 1 to 3 relatives — had the highest survival rate. Solitary passengers and large groups both fared worse."
      />
      <div className="py-8 max-w-[520px]">
        <Bar label="Small family (1–3 relatives)" value={0.578767} delay={0}    />
        <Bar label="Travelling alone"             value={0.303538} delay={0.12} />
        <Bar label="Large family (4+ relatives)"  value={0.161290} delay={0.24} />
      </div>
      <Pullquote>
        Having someone with you helped — but too many people made coordinating survival nearly impossible.
      </Pullquote>

    </div>
  );
}
