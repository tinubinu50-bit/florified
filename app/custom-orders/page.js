import Link from "next/link";

export default function CustomOrders() {
  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="py-20 px-6 text-center bg-petal">
        <p className="font-script text-mauve text-2xl mb-2">make it yours</p>
        <h1 className="font-display text-4xl md:text-6xl text-plum max-w-2xl mx-auto leading-tight">
          Custom bouquets, <span className="italic text-mauve">your way</span>
        </h1>
      </section>

      {/* Coming soon / contact CTA */}
      <section className="py-24 px-6 flex flex-col items-center text-center max-w-2xl mx-auto gap-8">
        <div className="text-8xl">🎨</div>
        <h2 className="font-display text-3xl text-plum">
          Custom order builder coming soon!
        </h2>
        <p className="font-body text-plum/70 text-sm leading-relaxed">
          We're working on a fun drag-and-drop bouquet builder where you can
          pick your flowers, colors, and wrapping style. Until then, just reach
          out to us directly — we love bringing your ideas to life!
        </p>
        <div className="bg-petal rose-border rounded-3xl p-8 petal-shadow w-full text-left flex flex-col gap-3">
          <p className="font-display text-lg text-plum">How to place a custom order right now:</p>
          {[
            "1. Visit our Instagram @florified_by_her",
            "2. Send us a DM with your color palette or inspo pic",
            "3. Tell us the occasion, size, and any special requests",
            "4. We'll send you a design preview and confirm details",
            "5. Sit back while we craft your dream bouquet 🌸",
          ].map((step) => (
            <p key={step} className="font-body text-plum/70 text-sm">{step}</p>
          ))}
        </div>
        
          href="https://www.instagram.com/florified_by_her"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-mauve text-white font-body font-semibold px-8 py-3.5 rounded-full hover:bg-plum transition-colors text-sm shadow-md"
        <a>
          DM us on Instagram 📸
        </a>
        <Link href="/products" className="text-mauve font-body text-sm underline underline-offset-4 hover:text-plum transition-colors">
          Or browse ready-made designs →
        </Link>
      </section>
    </div>
  );
}
