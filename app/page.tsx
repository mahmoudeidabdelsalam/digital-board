'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUp, MessageCircle, Sparkles, Star, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Navbar } from '@/components/navbar';
import { SectionTitle } from '@/components/section-title';
import { ServiceCard } from '@/components/service-card';
import { PortfolioCard } from '@/components/portfolio-card';
import { Counter } from '@/components/counter';
// import { Timeline } from '@/components/timeline';
import { TestimonialCard } from '@/components/testimonial-card';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Footer } from '@/components/footer';
import { services, portfolio, whyChooseUs, workSteps, testimonials } from '@/constants/content';
const counters = [
  { value: 200, suffix: '+', label: 'مشروع منجز' },
  { value: 96, suffix: '%', label: 'رضا العملاء' },
  { value: 24, suffix: '7', label: 'دعم فني' },
];

const contactSchema = z.object({
  name: z.string().min(2, 'الاسم مطلوب').max(60),
  message: z.string().min(6, 'أرسل رسالتك من فضلك').max(300),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', message: '' },
  });

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappHref = 'https://wa.me/201094107302';

  const onSubmit = (values: ContactFormValues) => {
    const encodedMessage = encodeURIComponent(`السلام عليكم،\nاسمي ${values.name}\n${values.message}`);
    window.open(`${whatsappHref}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
    reset();
  };

  return (
    <main className="relative overflow-x-hidden">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div className="h-full rounded-full bg-linear-to-r from-primary to-secondary" style={{ width: `${scrollProgress}%` }} />
      </div>

      <Navbar />

      <section id="hero" className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute right-[-10%] top-24 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-secondary" />
              وكالة رقمية حديثة ومبتكرة
            </div>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              نصمم أفكارك ونحولها إلى واقع رقمي
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl">
              نُحوّل العلامات التجارية إلى تجارب رقمية مثيرة، من تصميم الواجهات إلى إطلاق المنتجات.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]">
                ابدأ مشروعك <ArrowLeft className="h-5 w-5" />
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-green-600 px-6 py-3 font-semibold text-white backdrop-blur-xl transition-transform hover:scale-[1.02]">
                <MessageCircle className="h-5 w-5 text-secondary" /> واتساب
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
              {counters.map((counter) => (
                <Counter key={counter.label} value={counter.value} suffix={counter.suffix} label={counter.label} />
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-primary/25 to-secondary/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">
              <Image
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
                alt="فريق تصميم رقمي يعمل على مشروع معقد"
                width={900}
                height={900}
                className="h-105 w-full rounded-[1.3rem] object-cover"
                priority
              />
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute left-8 top-8 rounded-2xl border border-white/20 bg-black/40 px-4 py-3 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Zap className="h-4 w-4 text-secondary" />
                  نمو سريع +40%
                </div>
              </motion.div>
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="absolute bottom-8 right-8 rounded-2xl border border-white/20 bg-black/40 px-4 py-3 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  استراتيجية رقمية محكمة
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="خدماتنا" subtitle="حلول رقمية متكاملة من الفكرة إلى التنفيذ" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="لماذا نحن" subtitle="السر وراء كل مشروع نُنجزه" />
          <div className="mt-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-4xl border border-white/10 bg-white/6 p-8 backdrop-blur-2xl">
              <h3 className="text-2xl font-bold text-white">عملية عمل مخصصة</h3>
              <p className="mt-4 text-white/65">نبدأ من فهم الهدف ثم نُبني حلًا بصريًا وتقنيًا مُحسّنًا للنتائج.</p>
              <div className="mt-8 grid gap-4 grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mt-0.5 rounded-full bg-linear-to-r from-primary to-secondary p-2">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-sm text-white/65">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="أعمالنا" subtitle="أمثلة على المشاريع التي أضفت عليها قيمة" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.map((item, index) => (
              <PortfolioCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="آراء العملاء" subtitle="العملاء يثقون فينا لأننا نُقدّم نتائج ملموسة" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-linear-to-r from-primary/30 to-secondary/30 p-8 shadow-glow backdrop-blur-2xl sm:p-12 lg:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                جاهز لتحويل فكرتك إلى مشروع ناجح؟
              </h2>
              <p className="mt-4 text-lg text-white/75">نُجهّز لك خطة واضحة، تصميمًا قويًا، ونتائج تُحدث فرقًا من اليوم الأول.</p>
            </div>
            <WhatsAppButton href={whatsappHref} />
          </motion.div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-4xl border border-white/10 bg-white/6 p-8 backdrop-blur-2xl sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionTitle title="تواصل معنا" subtitle="ابدأ محادثة مباشرة عبر واتساب" />
              <p className="mt-6 text-white/65">أرسل اسمك ورسالتك وسنفتح لك نافذة مباشرة مع فريقنا في دقائق.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <label className="block text-sm text-white/70">
                  الاسم
                  <input
                    {...register('name')}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none ring-0"
                    placeholder="أدخل اسمك"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-300">{errors.name.message}</p>}
                </label>
                <label className="block text-sm text-white/70">
                  رسالتك
                  <textarea
                    {...register('message')}
                    className="mt-2 min-h-32 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none ring-0"
                    placeholder="ما الذي تريد بناءه؟"
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-300">{errors.message.message}</p>}
                </label>
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02]">
                  إرسال عبر واتساب <MessageCircle className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {showBackToTop && (
        <motion.button initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 left-6 z-50 rounded-full border border-white/15 bg-black/50 p-3 text-white backdrop-blur-xl">
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </main>
  );
}
