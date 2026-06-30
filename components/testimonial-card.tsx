import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Testimonial } from '@/types';

export function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} className="rounded-[1.75rem] border border-white/10 bg-white/6 p-7 backdrop-blur-2xl">
      <div className="flex items-center gap-1 text-secondary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-5 text-lg leading-8 text-white/75">“{testimonial.quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-bold text-white">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold text-white">{testimonial.name}</div>
          <div className="text-sm text-white/60">{testimonial.role}</div>
        </div>
      </div>
    </motion.article>
  );
}
