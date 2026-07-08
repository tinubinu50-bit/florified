import Link from "next/link";

const features = [
  {
    icon: "🌸",
    title: "Lasts Forever",
    desc: "Unlike real flowers, our pipe cleaner bouquets never wilt, fade, or die. A gift that stays beautiful forever.",
  },
  {
    icon: "🎨",
    title: "Fully Customizable",
    desc: "Pick your colors, themes, and wrapping style. Every bouquet is made to match your vision.",
  },
  {
    icon: "💝",
    title: "Made with Love",
    desc: "Each piece is handcrafted one flower at a time with care, patience, and a whole lot of heart.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-rose/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-mauve/10 rounded-full blur-3xl pointer-events-none" />

        <span className="inline-block bg-white rose-border text-plum text-xs font-body tracking-widest uppercase px-5 py-2 rounded-full mb-8 petal-shadow">
          Handcrafted with love 💝
        </span>

        <h1 className="font-display text-5xl md:text-7xl text-plum leading-tight max-w-3xl mb-6">
          Bouquets that bloom{" "}
          <span className="italic text-mauve">forever and ever</span>
        </h1>

        <p className="font-body text-plum/70 text-lg max-w-xl mb-10 leading-relaxed">
          Ditch the wilting petals. Our vibrant, custom flower bouquets are
          handcrafted from colorful pipe cleaners  the perfect everlasting gift
          for your favorite people.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/products"
            className="bg-mauve text-white font-body font-semibold px-8 py-3.5 rounded-full shadow-md hover:bg-plum transition-colors duration-200 text-sm"
          >
            Order Now 🌸
          </Link>
          <Link
            href="/contact"
            className="bg-white text-plum font-body font-medium px-8 py-3.5 rounded-full rose-border hover:bg-petal transition-colors duration-200 text-sm"
          >
            Get in Touch
          </Link>
        </div>

        {/* floating flowers */}
        <div className="mt-16 flex gap-6 text-5xl animate-bounce">
          🌸🌷🌺
        </div>
      </section>

      {/* Features */}
      <section className="bg-petal py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-script text-mauve text-2xl text-center mb-2">why florified?</p>
          <h2 className="font-display text-3xl md:text-4xl text-plum text-center mb-14">
            More than just flowers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-3xl p-8 petal-shadow flex flex-col items-center text-center gap-4"
              >
                <span className="text-5xl">{icon}</span>
                <h3 className="font-display text-xl text-plum">{title}</h3>
                <p className="font-body text-plum/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Photo Gallery Strip */}
<section className="py-16 px-6 overflow-hidden">
  <p className="font-script text-mauve text-2xl text-center mb-2">our work</p>
  <h2 className="font-display text-3xl text-plum text-center mb-10">
    Made with pipe cleaners, crafted with love
  </h2>
  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
    {[
      { src: "/images/products/pink-mix.png", label: "Spring Mix" },
      { src: "/images/products/blue-lily.jpg", label: "Blue Sky Lily" },
      { src: "/images/products/sunflower-white.jpg", label: "Sunshine Sunflower" },
      { src: "/images/products/red-basket.jpg", label: "Just For You" },
      { src: "/images/products/pink-carnation.jpg", label: "Pink Carnation Cloud" },
      { src: "/images/products/dark-tulip.jpg", label: "Dark Romance" },
    ].map(({ src, label }) => (
      <div key={src} className="snap-start shrink-0 w-60 md:w-72 rounded-3xl overflow-hidden petal-shadow relative group" style={{ border: "1.5px solid #E8A0BF" }}>
        <img src={src} alt={label} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-plum/60 to-transparent p-4">
          <p className="font-display text-white text-sm">{label}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* CTA Banner */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-mauve rounded-3xl py-16 px-8 petal-shadow relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <p className="font-script text-white/80 text-2xl mb-2">ready to order?</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Find your perfect bouquet
          </h2>
          <p className="font-body text-white/70 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Browse our ready-made designs or reach out to create something totally
            unique  just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-mauve font-body font-semibold px-8 py-3 rounded-full hover:bg-petal transition-colors text-sm"
            >
              Browse Products 🌷
            </Link>
            <Link
              href="/custom-orders"
              className="border-2 border-white text-white font-body font-medium px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              Custom Order
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}