import { Briefcase, Compass, Crown, Headphones, MonitorSmartphone, Search, ShoppingBag, Sparkles, Smartphone, Wand2 } from 'lucide-react';

export const services = [
  { title: 'تصميم مواقع', description: 'مواقع سريعة، جميلة، وفعالة لتحويل الزوار إلى عملاء.', icon: 'MonitorSmartphone' },
  { title: 'متاجر إلكترونية', description: 'متاجر احترافية مع تجربة شراء سلسة ودعم تحسين التحويل.', icon: 'ShoppingBag' },
  { title: 'سوشيال ميديا', description: 'هوية رقمية متسقة مع محتوى يرفع التفاعل والنمو.', icon: 'Smartphone' },
  { title: 'هوية بصرية', description: 'شعار، ألوان، خطوط، ومحتوى بصري يُميّز علامتك.', icon: 'Crown' },
  { title: 'تصميم جرافيك', description: 'ملفات تسويقية، بوسترات، عروض، ومحتوى احترافي.', icon: 'Wand2' },
  { title: 'تحسين محركات البحث', description: 'تحسين هيكلي ونفسي لرفع الظهور في النتائج.', icon: 'Search' },
  { title: 'الدعم الفني', description: 'مواكبة مستمرة وتحديثات لضمان استقرار مشروعك.', icon: 'Headphones' },
];

export const whyChooseUs = [
  { title: 'Fast Delivery', description: 'تسليم سريع مع التركيز على الجودة والوضوح.' },
  { title: 'Modern UI', description: 'تصاميم حديثة تعكس احترافية علامتك.' },
  { title: 'Responsive', description: 'مُحسّنة لكل الأجهزة بواجهة متناسقة.' },
  { title: 'SEO Ready', description: 'متوافقة مع أفضل الممارسات لرفع الظهور.' },
  { title: 'Cloudflare Optimized', description: 'أداء ممتاز مع نشر سهل على Cloudflare Pages.' },
  { title: 'Premium Design', description: 'تفاصيل دقيقة وأفكار مبتكرة تظهر قيمتك.' },
];

export const workSteps = [
  { title: 'استشارة', description: 'نسمع أهدافك ونحدد احتياجك الرقمي بدقة.' },
  { title: 'تخطيط', description: 'نرتّب الخطة، الهيكل، والرسالة الصحيحة لكل صفحة.' },
  { title: 'تصميم', description: 'نصمم تجربة بصرية تتماشى مع هويتك وهدفك.' },
  { title: 'تطوير', description: 'نحوّل الخطوط إلى موقع أو منصة جاهزة للعرض.' },
  { title: 'إطلاق', description: 'نطلق المشروع مع متابعة الأداء والتحسين.' },
];

export const portfolio = [
  {
    title: 'Nova Studio',
    category: 'Website',
    description: 'موقع براند فاخر للعلامات التجارية ذات الطابع الراقي.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Luxe Market',
    category: 'E-commerce',
    description: 'متجر إلكتروني بصري يرفع التحويل ويُسهل الشراء.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Aero Brand',
    category: 'Branding',
    description: 'هوية بصرية جديدة ومميزة لعلامة ناشئة في قطاع التكنولوجيا.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Pulse Social',
    category: 'Social Media',
    description: 'حملة محتوى بصرية لإبراز القيم والرسالة الخاصة بالعلامة.',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Orion UI',
    category: 'UI Design',
    description: 'تصميم واجهات احترافي يُحسّن تجربة المستخدم ويعزز الالتزام.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'North Labs',
    category: 'Website',
    description: 'منصة شركة تقنية مع تجربة ديناميكية وسريعة.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
];

export const testimonials = [
  {
    name: 'سارة أحمد',
    role: 'مديرة تسويق',
    quote: 'أثارت الواجهة الجديدة اهتمام العملاء بشكل مباشر، والنتيجة كانت أسرع من المتوقع.',
    avatar: 'SA',
  },
  {
    name: 'أحمد خليفة',
    role: 'مالك متجر',
    quote: 'تجربة العمل كانت منظمة جدًا، والتسليم كان احترافيًا وذكيًا.',
    avatar: 'AK',
  },
  {
    name: 'ليلى حسن',
    role: 'مؤسسة علامة',
    quote: 'أحببنا التفاصيل والهوية البصرية، والنتيجة تعكس طابعنا بالكامل.',
    avatar: 'LH',
  },
];

export const navItems = [
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#portfolio' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'آراء العملاء', href: '#testimonials' },
  { label: 'تواصل معنا', href: '#contact' },
];
