import Link from "next/link";

const services = [
  {
    icon: "💐",
    title: "Ready-Made Bouquets",
    desc: "Browse our collection of pre-designed bouquets, available in a variety of colors and styles. Perfect for gifting or treating yourself.",
    cta: "Browse Products",
    href: "/products",
  },
  {
    icon: "🎨",
    title: "Custom Orders",
    desc: "Have a specific color palette, theme, or size in mind? We'll craft a bouquet tailored exactly to your vision from scratch.",
    cta: "Start Custom Order",
    href: "/custom-orders",
  },
  {
    icon: "🎁",
    title: "Gift Packaging",
    desc: "We wrap every bouquet beautifully. Whether it's a birthday, anniversary, or just because  presentation is everything.",
    cta: "Get in Touch",
    href: "/contact",
  },
  {
    icon: "💌",
    title: "Occasion Specials",
    desc: "Valentine's Day, graduations, baby showers, weddings  we create themed bouquets for every special occasion.",
    cta: "Get in Touch",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="py-20 px-6 text-center bg-petal">
        <p className="font-script text-mauve text-2xl mb-2">what we offer</p>
        <h1 className="font-display text-4xl md:text-6xl text-plum max-w-2xl mx-auto leading-tight">
          Everything you need for the <span className="italic text-mauve">perfect bouquet</span>
        </h1>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon, title, desc, cta, href }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-8 petal-shadow rose-border flex flex-col gap-4"
            >
              <span className="text-5xl">{icon}</span>
              <h2 className="font-display text-2xl text-plum">{title}</h2>
              <p className="font-body text-plum/70 text-sm leading-relaxed flex-1">{desc}</p>
              <Link
                href={href}
                className="self-start bg-mauve text-white text-sm font-body font-semibold px-6 py-2.5 rounded-full hover:bg-plum transition-colors duration-200"
              >
                {cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-petal py-16 px-6 text-center">
        <p className="font-script text-mauve text-2xl mb-2">not sure where to start?</p>
        <h2 className="font-display text-3xl text-plum mb-4">Just reach out  we'll help 🌸</h2>
        <Link
          href="/contact"
          className="inline-block bg-mauve text-white font-body font-semibold px-8 py-3 rounded-full hover:bg-plum transition-colors text-sm mt-2"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
