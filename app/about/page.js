import Link from "next/link";

const services = [
  { icon: "💐", title: "Ready-Made Bouquets", desc: "Browse our collection of pre-designed bouquets in a variety of colors and styles. Perfect for gifting or treating yourself." },
  { icon: "🎨", title: "Custom Orders", desc: "Have a specific color palette or theme in mind? We'll craft a bouquet tailored exactly to your vision from scratch." },
  { icon: "🎁", title: "Gift Packaging", desc: "Every bouquet is wrapped beautifully. Whether it's a birthday, anniversary, or just because presentation is everything." },
  { icon: "💌", title: "Occasion Specials", desc: "Valentine's Day, graduations, baby showers, weddings — we create themed bouquets for every special occasion." },
];

export default function About() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 opacity-15 pointer-events-none">
          <img src="/images/products/white-lily.jpg" className="w-full h-full object-cover" />
          <img src="/images/products/pink-mix.png" className="w-full h-full object-cover" />
          <img src="/images/products/burgundy-vase.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-petal/80 pointer-events-none" />
        <div className="relative z-10">
          <p className="font-script text-mauve text-2xl mb-2">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl text-plum max-w-2xl mx-auto leading-tight">
            Born from a love of flowers that{" "}
            <span className="italic text-mauve">never fade</span>
          </h1>
        </div>
      </section>

      {/* Story + image */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center w-full">
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-3xl text-plum">How it all started</h2>
          <p className="font-body text-plum/70 leading-relaxed text-sm">
            Florified started as a passion project  a simple idea that flowers
            shouldn't have to die to be beautiful. Using colorful pipe cleaners,
            we began crafting bouquets that hold their shape, color, and charm for years.
          </p>
          <p className="font-body text-plum/70 leading-relaxed text-sm">
            What began as gifts for friends quickly became something much bigger.
            Every bouquet we make is a tiny piece of art, handcrafted with patience,
            creativity, and a whole lot of love.
          </p>
          <div className="flex gap-3 flex-wrap mt-2">
            {["Handmade 🤍", "Long-lasting 🌸", "Colorful 🎨", "Unique 💝"].map((tag) => (
              <span key={tag} className="bg-petal text-mauve text-xs font-body px-4 py-1.5 rounded-full rose-border">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src="/images/products/pink-mix.png" className="rounded-3xl w-full h-48 object-cover petal-shadow" />
          <img src="/images/products/blue-lily.jpg" className="rounded-3xl w-full h-48 object-cover petal-shadow mt-6" />
          <img src="/images/products/sunflower-white.jpg" className="rounded-3xl w-full h-48 object-cover petal-shadow" />
          <img src="/images/products/pink-carnation.jpg" className="rounded-3xl w-full h-48 object-cover petal-shadow mt-6" />
        </div>
      </section>

      {/* Values */}
      <section className="bg-petal py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-script text-mauve text-2xl mb-2">What drives us</p>
          <h2 className="font-display text-3xl text-plum mb-12">Our values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: "💐", title: "Craftsmanship", desc: "Every flower is shaped by hand. No shortcuts, no machine just care and creativity." },
              { icon: "♻️", title: "Lasting Beauty", desc: "We believe beautiful things should last. Our bouquets are made to be kept, not thrown away." },
              { icon: "🎀", title: "Personal Touch", desc: "Every order is personal. We listen to what you want and make it happen." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-8 petal-shadow flex flex-col items-center gap-3 text-center">
                <span className="text-4xl">{icon}</span>
                <h3 className="font-display text-lg text-plum">{title}</h3>
                <p className="font-body text-plum/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full">
        <p className="font-script text-mauve text-2xl text-center mb-2">What We Offer</p>
        <h2 className="font-display text-3xl text-plum text-center mb-12">Our services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-3xl p-8 petal-shadow flex flex-col gap-4" style={{ border: "1.5px solid #E8A0BF" }}>
              <span className="text-5xl">{icon}</span>
              <h3 className="font-display text-xl text-plum">{title}</h3>
              <p className="font-body text-plum/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full width photo strip */}
      <section className="py-4 overflow-hidden bg-petal">
        <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
          {[
            "/images/products/dark-tulip.jpg",
            "/images/products/burgundy-vase.jpg",
            "/images/products/sunflower-peach.jpg",
            "/images/products/white-lily.jpg",
            "/images/products/red-basket.jpg",
            "/images/products/pink-carnation.jpg",
            "/images/products/dark-tulip.jpg",
            "/images/products/burgundy-vase.jpg",
            "/images/products/sunflower-peach.jpg",
            "/images/products/white-lily.jpg",
          ].map((src, i) => (
            <img key={i} src={src} alt="" className="w-48 h-48 object-cover rounded-2xl shrink-0" />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <p className="font-script text-mauve text-2xl mb-2">Love what you see?</p>
        <h2 className="font-display text-3xl text-plum mb-6">Let's make something beautiful together</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="bg-mauve text-white font-body font-semibold px-8 py-3 rounded-full hover:bg-plum transition-colors text-sm shadow-md">
            Browse Products 🌸
          </Link>
          <Link href="/contact" className="bg-white text-plum font-body font-medium px-8 py-3 rounded-full rose-border hover:bg-petal transition-colors text-sm">
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}
