import { MessageCircle } from 'lucide-react';

export function WhatsAppButtonEG({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]">
      <MessageCircle className="h-5 w-5" />
      واتساب مصر
    </a>
  );
}

export function WhatsAppButtonKSA({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]">
      <MessageCircle className="h-5 w-5" />
      واتساب السعودية
    </a>
  );
}