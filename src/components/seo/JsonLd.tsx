import { courses } from "@/lib/content";
import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
      },
      ...courses.map((course) => ({
        "@type": "Course",
        name: `${course.title} Course`,
        description: course.description,
        url: `${site.url}/courses/${course.id}`,
        provider: {
          "@type": "EducationalOrganization",
          name: site.name,
        },
        offers: {
          "@type": "Offer",
          price: course.price,
          priceCurrency: "PKR",
        },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
