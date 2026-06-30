import { motion } from 'framer-motion';
import Image from 'next/image';
import type { PortfolioItem } from '@/types';

export function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} whileHover={{ y: -6, scale: 1.01 }} className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 backdrop-blur-2xl">
      <div className="relative h-72 overflow-hidden">
        <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/80 backdrop-blur-xl">
            {item.category}
          </div>
          <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
          <p className="mt-2 text-sm text-white/70">{item.description}</p>
        </div>
      </div>
    </motion.article>
  );
}
