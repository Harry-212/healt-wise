import { pageBreadcrumbJsonLd } from "@/lib/seo/breadcrumb-json-ld";

type Props = {
  sectionName: string;
  sectionPath: string;
  pageName: string;
  pagePath: string;
};

export default function BreadcrumbJsonLd(props: Props) {
  const jsonLd = pageBreadcrumbJsonLd(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
