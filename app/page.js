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

const galleryImages = [
  { src: "/images/products/pink-mix.png", label: "Spring Mix" },
  { src: "/images/products/blue-lily.jpg", label: "Blue Sky Lily" },
  { src: "/images/products/sunflower-white.jpg", label: "Sunshine Sunflower" },
  { src: "/images/products/red-basket.jpg", label: "Just For You" },
  { src: "/images/products/pink-carnation.jpg", label: "Pink Carnation Cloud" },
  { src: "/images/products/dark-tulip.jpg", label: "Dark Romance" },
  { src: "/images/products/burgundy-vase.jpg", label: "Burgundy Statement" },
  { src: "/images/products/sunflower-peach.jpg", label: "Golden Sunflower" },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">

        {/* Background collage - blurred bouquet images */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 opacity-20 pointer-events-none">
          <img src="/images/products/pink-mix.jpg" className="w-full h-full object-cover" />
          <img src="/images/products/sunflower-white.jpg" className="w-full h-full object-cover" />
          <img src="/images/products/blue-lily.jpg" className="w-full h-full object-cover" />
          <img src="/images/products/pink-carnation.jpg" className="w-full h-full object-cover" />
          <img src="/images/products/dark-tulip.jpg" className="w-full h-full object-cover" />
          <img src="/images/products/burgundy-vase.jpg" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-blush/75 pointer-events-none" />

        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-rose/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-mauve/20 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="/images/logo.png"
            alt="Florified"
            className="w-24 h-24 rounded-full object-cover mb-6 shadow-lg"
            style={{ border: "3px solid #E8A0BF" }}
          />

          <span className="inline-block bg-white/80 backdrop-blur-sm rose-border text-plum text-xs font-body tracking-widest uppercase px-5 py-2 rounded-full mb-6 petal-shadow">
            Handcrafted with love 💝
          </span>

          <h1 className="font-display text-5xl md:text-7xl text-plum leading-tight max-w-3xl mb-4">
            Bouquets that bloom{" "}
            <span className="italic text-mauve">forever and ever</span>
          </h1>

          <p className="font-script text-mauve text-2xl mb-6">— by Florified</p>

          <p className="font-body text-plum/70 text-lg max-w-xl mb-10 leading-relaxed">
            Vibrant, custom flower bouquets handcrafted from colorful pipe cleaners.
            The perfect everlasting gift for your favorite people.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/products"
              className="bg-mauve text-white font-body font-semibold px-8 py-3.5 rounded-full shadow-md hover:bg-plum transition-colors duration-200 text-sm"
            >
              Shop Bouquets 🌸
            </Link>
            <Link
              href="/contact"
              className="bg-white/80 backdrop-blur-sm text-plum font-body font-medium px-8 py-3.5 rounded-full rose-border hover:bg-petal transition-colors duration-200 text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Scrolling ticker */}
      <div className="bg-mauve py-3 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="text-white font-body text-sm tracking-widest uppercase flex gap-12">
              <span>🌸 Handcrafted Bouquets</span>
              <span>🎨 Custom Orders</span>
              <span>💝 Made with Love</span>
              <span>🌷 Pipe Cleaner Art</span>
            </span>
          ))}
        </div>
      </div>

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

      {/* Bento grid showcase */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
  <Link href="/products" className="col-span-2 row-span-2 rounded-3xl overflow-hidden petal-shadow relative group block">
    <img src="/images/products/pink-mix.png" alt="Spring Mix" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-plum/50 to-transparent flex items-end p-5">
      <p className="font-display text-white text-lg">Spring Mix Signature</p>
    </div>
  </Link>
  <Link href="/products" className="rounded-3xl overflow-hidden petal-shadow relative group block">
    <img src="/images/products/sunflower-white.jpg" alt="Sunflower" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
  </Link>
  <Link href="/products" className="rounded-3xl overflow-hidden petal-shadow relative group block">
    <img src="/images/products/blue-lily.jpg" alt="Blue Lily" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
  </Link>
  <Link href="/products" className="rounded-3xl overflow-hidden petal-shadow relative group block">
    <img src="/images/products/pink-carnation.jpg" alt="Carnation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
  </Link>
  <Link href="/products" className="rounded-3xl overflow-hidden petal-shadow relative group block">
    <img src="/images/products/dark-tulip.jpg" alt="Tulip" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
  </Link>
</div>
      </section>

      {/* Scrollable gallery strip */}
      <section className="py-16 px-6 bg-petal overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="font-script text-mauve text-2xl mb-1">Our Work</p>
              <h2 className="font-display text-3xl text-plum">Made with pipe cleaners, crafted with love</h2>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-block bg-mauve text-white font-body font-semibold px-6 py-2.5 rounded-full hover:bg-plum transition-colors text-sm shrink-0 ml-6"
            >
              View All 🌸
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {galleryImages.map(({ src, label }) => (
              <Link
                href="/products"
                key={src}
                className="snap-start shrink-0 w-56 md:w-64 rounded-3xl overflow-hidden petal-shadow relative group block"
                style={{ border: "1.5px solid #E8A0BF" }}
              >
                <img src={src} alt={label} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/60 to-transparent flex items-end p-4">
                  <p className="font-display text-white text-sm">{label}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link
              href="/products"
              className="inline-block bg-mauve text-white font-body font-semibold px-6 py-2.5 rounded-full hover:bg-plum transition-colors text-sm"
            >
              View All Products 🌸
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-mauve rounded-3xl py-16 px-8 petal-shadow relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <p className="font-script text-white/80 text-2xl mb-2">ready to order?</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Find your perfect bouquet
          </h2>
          <p className="font-body text-white/70 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Browse our ready-made designs or reach out to create something totally unique — just for you.
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