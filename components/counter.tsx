import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1000;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="min-w-[120px] rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-xl">
      <div className="text-2xl font-black text-white">
        {displayValue}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </motion.div>
  );
}
