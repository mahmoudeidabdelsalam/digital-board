import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { href: 'https://wa.me/201001234567', label: 'واتساب', icon: MessageCircle },
  { href: 'https://facebook.com', label: 'فيسبوك', icon: Facebook },
  { href: 'https://instagram.com', label: 'إنستغرام', icon: Instagram },
  { href: 'https://linkedin.com', label: 'لينكدإن', icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-black text-white shadow-lg">
              DB
            </div>
            <div>
              <div className="text-lg font-bold text-white">Digital Board</div>
              <div className="text-sm text-white/55">Agency</div>
            </div>
          </div>
          <p className="mt-4 text-white/65">نحن نُحوّل الأفكار إلى هويات رقمية قوية، تجارب مميزة، ومشاريع جاهزة للنجاح.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">روابط سريعة</h3>
          <div className="mt-4 flex flex-col gap-2 text-white/65">
            <Link href="#services" className="transition hover:text-white">خدماتنا</Link>
            <Link href="#portfolio" className="transition hover:text-white">أعمالنا</Link>
            <Link href="#why-us" className="transition hover:text-white">لماذا نحن</Link>
            <Link href="#contact" className="transition hover:text-white">تواصل معنا</Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">تابعنا</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:border-primary/40 hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © 2026 Digital Board. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
