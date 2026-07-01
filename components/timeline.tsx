import { motion } from 'framer-motion';
import type { TimelineItem } from '@/types';

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative rounded-lg border border-white/10 bg-white/6 p-8 backdrop-blur-2xl">
      <div className="absolute right-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary to-secondary" />
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div key={item.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.07 }} className="relative flex gap-4 pr-4">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/20 text-sm font-bold text-white">
              {index + 1}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-white/65">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
