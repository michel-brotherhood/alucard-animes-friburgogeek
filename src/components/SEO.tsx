import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
}

export const SEO = ({ title, description, canonical, keywords, ogImage }: SEOProps) => {
  const fullTitle = `${title} | Friburgo Geek`;
  const defaultOgImage = "https://www.friburgogeek.com.br/favicon.webp";
  const imageUrl = ogImage || defaultOgImage;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={`https://www.friburgogeek.com.br${canonical}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://www.friburgogeek.com.br${canonical}`} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={`https://www.friburgogeek.com.br${canonical}`} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};
