import { config } from "@/lib/config";

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished = "2026-02-01",
  dateModified = "2026-02-26",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${config.siteUrl}${url}`,
    datePublished,
    dateModified,
    publisher: {
      "@type": "Organization",
      name: config.siteName,
      url: config.siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${config.siteUrl}${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
}

export function WebPageSchema({ title, description, url }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${config.siteUrl}${url}`,
    publisher: {
      "@type": "Organization",
      name: config.siteName,
      url: config.siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.siteName,
    url: config.siteUrl,
    description: config.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
