import { motion } from 'framer-motion';
import { MonitorSmartphone, ShoppingBag, Smartphone, Crown, Wand2, Search, Headphones } from 'lucide-react';
import type { ServiceItem } from '@/types';

const icons = {
  MonitorSmartphone,
  ShoppingBag,
  Smartphone,
  Crown,
  Wand2,
  Search,
  Headphones,
};

export function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const Icon = icons[service.icon as keyof typeof icons] ?? MonitorSmartphone;

  return (
    <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} whileHover={{ y: -6, scale: 1.02 }} className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 p-7 backdrop-blur-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
        <p className="mt-3 text-white/65">{service.description}</p>
      </div>
    </motion.article>
  );
}
