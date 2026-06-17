export default function About() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-20 px-6 text-center bg-petal">
        <p className="font-script text-mauve text-2xl mb-2">our story</p>
        <h1 className="font-display text-4xl md:text-6xl text-plum max-w-2xl mx-auto leading-tight">
          Born from a love of flowers that <span className="italic text-mauve">never fade</span>
        </h1>
      </section>

      {/* Story */}
      <section className="py-20 px-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-3xl text-plum">How it all started</h2>
          <p className="font-body text-plum/70 leading-relaxed text-sm">
            Florified started as a passion project  a simple idea that flowers
            shouldn't have to die to be beautiful. Using colorful pipe cleaners,
            we began crafting bouquets that hold their shape, color, and charm
            for years.
          </p>
          <p className="font-body text-plum/70 leading-relaxed text-sm">
            What began as gifts for friends quickly became something much bigger.
            Every bouquet we make is a tiny piece of art, handcrafted with
            patience, creativity, and a whole lot of love.
          </p>
          <div className="flex gap-3 flex-wrap mt-2">
            {["Handmade 🤍", "Long-lasting 🌸", "Colorful 🎨", "Unique 💝"].map((tag) => (
              <span
                key={tag}
                className="bg-petal text-mauve text-xs font-body px-4 py-1.5 rounded-full rose-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image placeholder */}
        <div className="w-full aspect-square rounded-3xl bg-petal rose-border flex items-center justify-center text-6xl petal-shadow">
          🌸
        </div>
      </section>

      {/* Values */}
      <section className="bg-petal py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-script text-mauve text-2xl mb-2">what drives us</p>
          <h2 className="font-display text-3xl text-plum mb-12">Our values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: "💐", title: "Craftsmanship", desc: "Every flower is shaped by hand. No shortcuts, no machines  just care and creativity." },
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
    </div>
  );
}
