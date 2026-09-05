export const site = {
  name: "Lumina",
  tagline: "Practical digital skills. Real capability.",
  description:
    "Lumina teaches practical digital skills across graphic design, web development, UI/UX, and SEO — with clear pricing and a direct way to get in touch.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumina.studio",
  email: "hello@lumina.studio",
  phone: "03242676853",
  whatsappNumber: "923242676853",
} as const;

export function whatsappHref(
  text = "Hi, I want to know more about Lumina courses.",
) {
  const url = new URL(`https://wa.me/${site.whatsappNumber}`);
  url.searchParams.set("text", text);
  return url.toString();
}

export const navLinks = [
  { href: "/#courses", label: "Courses", external: false },
  { href: whatsappHref(), label: "Contact", external: true },
] as const;
