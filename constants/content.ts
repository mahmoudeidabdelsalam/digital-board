import { Briefcase, Compass, Crown, Headphones, MonitorSmartphone, Search, ShoppingBag, Sparkles, Smartphone, Wand2 } from 'lucide-react';

export const services = [
  { title: 'تصميم مواقع', description: 'مواقع سريعة، جميلة، وفعالة لتحويل الزوار إلى عملاء.', icon: 'MonitorSmartphone' },
  { title: 'متاجر إلكترونية', description: 'متاجر احترافية مع تجربة شراء سلسة ودعم تحسين التحويل.', icon: 'ShoppingBag' },
  { title: 'سوشيال ميديا', description: 'هوية رقمية متسقة مع محتوى يرفع التفاعل والنمو.', icon: 'Smartphone' },
  { title: 'هوية بصرية', description: 'شعار، ألوان، خطوط، ومحتوى بصري يُميّز علامتك.', icon: 'Crown' },
  { title: 'تصميم جرافيك', description: 'ملفات تسويقية، بوسترات، عروض، ومحتوى احترافي.', icon: 'Wand2' },
  { title: 'تحسين محركات البحث', description: 'تحسين هيكلي ونفسي لرفع الظهور في النتائج.', icon: 'Search' },
];

export const whyChooseUs = [
  { title: 'تسليم سريع', description: 'تسليم سريع مع التركيز على الجودة والوضوح.' },
  { title: 'تصاميم احترافي', description: 'تصاميم حديثة تعكس احترافية علامتك.' },
  { title: 'الأجهزة', description: 'مُحسّنة لكل الأجهزة بواجهة متناسقة.' },
  { title: 'تحسين محركات البحث', description: 'متوافقة مع أفضل محركات البحث ورفع الظهور.' },
  { title: 'كلاود فلير', description: 'أداء ممتاز مع نشر سهل على Cloudflare Pages.' },
  { title: 'أفكار', description: 'تفاصيل دقيقة وأفكار مبتكرة تظهر قيمتك.' },
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
    title: 'الرأي الثاني',
    category: 'Website',
    description: 'منصة تجمع بين المريض والأطباء النخبة ، حيث تقدم للمريض تجربة حجز موعد في عيادة افتراضية اونلاين.',
    image: './portfolio-1.png',
    link: 'https://secondopinion.sa',
  },
  {
    title: 'تقنية 5 C',
    category: 'Website',
    description: 'شركة رائدة في مجال تطوير البرمجيات وأتمتة التحول الرقمي',
    image: './portfolio-2.png',
    link: 'https://fivectech.com',
  },
  {
    title: 'Pinos Pizzeriaa',
    category: 'Website and E-commerce',
    description: 'مطعم إيطالي في الإسماعيلية، وبفضل خبرة مهنية مثبتة تمتد لأربعة عشر عامًا في مجال المطبخ الإيطالي',
    image: './portfolio-3.png',
    link: 'https://pinospizzeriaa.com',
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
