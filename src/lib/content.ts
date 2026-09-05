export const courses = [
  {
    id: "graphic-design",
    number: "01",
    category: "Visual craft",
    title: "Graphic Designing",
    short:
      "Learn design principles, branding, layout, and visual communication you can use on real work.",
    description:
      "A practical graphic design course covering fundamentals, composition, typography, branding, and the workflows used to make visual work look considered and professional.",
    topics: [
      "Design fundamentals",
      "Layout & composition",
      "Typography",
      "Branding",
      "Visual communication",
    ],
    benefits: [
      "Build a confident eye for layout, type, and color",
      "Create brand basics you can actually present",
      "Learn a practical design workflow, not random tools",
      "Leave with project work suitable for a starter portfolio",
      "Beginner friendly, with clear feedback-style guidance",
    ],
    icon: "pen",
    accent: "copper",
    image: "/images/course-design.jpg",
    imageAlt: "Graphic design workspace with tablet, color palettes, and sketches",
    duration: "6 weeks",
    level: "Beginner",
    price: 15000,
    priceLabel: "PKR 15,000",
  },
  {
    id: "web-development",
    number: "02",
    category: "Build",
    title: "Web Development",
    short:
      "Learn how modern websites are structured and how to build responsive pages that work.",
    description:
      "A hands-on web development course covering HTML, CSS, responsive design, JavaScript fundamentals, and the frontend concepts used to ship real websites.",
    topics: [
      "Web fundamentals",
      "HTML & CSS",
      "Responsive design",
      "JavaScript fundamentals",
      "Modern frontend concepts",
    ],
    benefits: [
      "Understand how the web actually fits together",
      "Build responsive pages that hold up on real devices",
      "Learn JavaScript with practical, small projects",
      "Get comfortable with modern frontend structure",
      "Finish with a website you can show and explain",
    ],
    icon: "code",
    accent: "teal",
    image: "/images/course-web.jpg",
    imageAlt: "Web development desk with laptop and website layout in progress",
    duration: "8 weeks",
    level: "Beginner",
    price: 22000,
    priceLabel: "PKR 22,000",
  },
  {
    id: "ui-ux",
    number: "03",
    category: "Product",
    title: "UI/UX",
    short:
      "Learn to design clear interfaces, sensible flows, and screens people can actually use.",
    description:
      "A UI/UX course focused on structure, usability, and visual interface craft — from user flows and wireframes to screens that feel simple, modern, and intentional.",
    topics: [
      "UX fundamentals",
      "User flows",
      "Wireframes",
      "Interface design",
      "Usability basics",
    ],
    benefits: [
      "Design screens with a clear purpose, not decoration",
      "Map simple user flows before you start designing",
      "Build UI that feels easier to scan and use",
      "Practice with real product-style briefs",
      "Understand the overlap between design, web, and digital work",
    ],
    icon: "layout",
    accent: "ink",
    image: "/images/project-work.jpg",
    imageAlt: "UI and UX project materials on a studio desk",
    duration: "6 weeks",
    level: "Beginner",
    price: 18000,
    priceLabel: "PKR 18,000",
  },
  {
    id: "seo",
    number: "04",
    category: "Discovery",
    title: "SEO",
    short:
      "Learn how search works and how to improve a website’s visibility with practical SEO.",
    description:
      "A practical SEO course covering search fundamentals, keyword research, on-page optimization, technical basics, and content that can actually be found.",
    topics: [
      "SEO fundamentals",
      "Keyword research",
      "On-page SEO",
      "Technical SEO basics",
      "Content optimization",
    ],
    benefits: [
      "Understand how search engines evaluate pages",
      "Research keywords with a clear, simple method",
      "Improve titles, structure, and on-page content",
      "Spot basic technical issues that hold a site back",
      "Practice with an SEO audit-style project",
    ],
    icon: "search",
    accent: "gold",
    image: "/images/course-seo.jpg",
    imageAlt: "SEO learning workspace with analytics research and notes",
    duration: "5 weeks",
    level: "Beginner",
    price: 12000,
    priceLabel: "PKR 12,000",
  },
] as const;

export type Course = (typeof courses)[number];
export type CourseId = Course["id"];

export function getCourse(slug: string) {
  return courses.find((course) => course.id === slug);
}
