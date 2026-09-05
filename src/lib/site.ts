export const site = {
  name: "Lumina",
  tagline: "Practical digital skills. Real capability.",
  description:
    "Lumina teaches practical digital skills across graphic design, web development, UI/UX, and SEO — with clear pricing and a direct way to get in touch.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumina.studio",
  email: "hello@lumina.studio",
  phone: "+92 300 1234567",
  phoneHref: "tel:+923001234567",
} as const;

export const navLinks = [
  { href: "/#courses", label: "Courses" },
  { href: "/#contact", label: "Contact" },
] as const;
