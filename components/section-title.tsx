import { motion } from 'framer-motion';

export function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="max-w-2xl">
      <h2 className="font-arabic text-3xl font-black text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-white/65">{subtitle}</p>
    </motion.div>
  );
}
