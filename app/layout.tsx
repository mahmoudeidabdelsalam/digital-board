import type { Metadata } from 'next';
import { Cairo, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { StructuredData } from './structured-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'ديجيتال بورد | وكالة تصميم رقمية',
  description:
    'نحن نبتكر مواقع احترافية، متاجر إلكترونية، هوية بصرية ومحتوى رقمي مميز بصياغة عربية حديثة.',
  keywords: ['تصميم مواقع', 'متاجر إلكترونية', 'هوية بصرية', 'سوشيال ميديا', 'SEO'],
  openGraph: {
    title: 'ديجيتال بورد | وكالة تصميم رقمية',
    description:
      'نحن نبتكر مواقع احترافية، متاجر إلكترونية، هوية بصرية ومحتوى رقمي مميز بصياغة عربية حديثة.',
    type: 'website',
    locale: 'ar_AR',
    url: 'https://example.com',
    siteName: 'Digital Board',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Digital Board' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ديجيتال بورد | وكالة تصميم رقمية',
    description:
      'نحن نبتكر مواقع احترافية، متاجر إلكترونية، هوية بصرية ومحتوى رقمي مميز بصياغة عربية حديثة.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://example.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cn(inter.variable, cairo.variable, 'min-h-screen bg-background antialiased')}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
