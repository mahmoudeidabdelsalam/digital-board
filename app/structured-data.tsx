export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Digital Board',
          url: 'https://example.com',
          logo: 'https://example.com/logo.png',
          sameAs: ['https://www.instagram.com', 'https://www.facebook.com', 'https://www.linkedin.com'],
          description:
            'وكالة تصميم رقمية تقدم خدمات تصميم مواقع، متاجر إلكترونية، هوية بصرية، محتوى سوشيال ميديا وتحسين محركات البحث.',
        }),
      }}
    />
  );
}
