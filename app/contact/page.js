export default function Contact() {
  const faqs = [
    { q: "How long does an order take?", a: "Most bouquets take 3-5 days to handcraft. For urgent orders, reach out and we will do our best!" },
    { q: "Can I request custom colors?", a: "Absolutely! Just tell us your color palette, occasion, and any inspo photos." },
    { q: "Do you deliver?", a: "Yes! We deliver within the UAE. Details and fees are discussed when you place your order." },
    { q: "How long do the bouquets last?", a: "Forever! Pipe cleaner bouquets do not wilt or fade. They will look beautiful for years." },
    { q: "Are prices negotiable?", a: "Prices vary by size and complexity. DM us and we will find something that works." },
  ];

  return (
    <div className="flex flex-col">

      <section className="py-24 px-6 text-center bg-petal">
        <p className="font-script text-mauve text-2xl mb-2">say hello</p>
        <h1 className="font-display text-4xl md:text-6xl text-plum max-w-2xl mx-auto leading-tight mb-4">
          We love to hear from you
        </h1>
        <p className="font-body text-plum/70 max-w-md mx-auto text-sm leading-relaxed">
          Slide into our DMs or drop a WhatsApp — we are always happy to chat 🌸
        </p>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          <div className="bg-white rounded-3xl p-8 petal-shadow flex flex-col items-center text-center gap-4" style={{border: "1.5px solid #E8A0BF"}}>
            <span className="text-5xl">📸</span>
            <h3 className="font-display text-2xl text-plum">Instagram</h3>
            <p className="font-body text-plum/60 text-sm">@florified_by_her</p>
            <p className="font-body text-plum/70 text-sm leading-relaxed">
              Follow us for daily bouquet drops and DM us to place an order!
            </p>
            <a href="https://www.instagram.com/florified_by_her" target="_blank" rel="noopener noreferrer" className="bg-mauve text-white font-body text-xs font-semibold px-5 py-2 rounded-full hover:bg-plum transition-colors">
              Visit Instagram
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 petal-shadow flex flex-col items-center text-center gap-4" style={{border: "1.5px solid #E8A0BF"}}>
            <span className="text-5xl">💬</span>
            <h3 className="font-display text-2xl text-plum">WhatsApp</h3>
            <p className="font-body text-plum/60 text-sm">Chat with us directly</p>
            <p className="font-body text-plum/70 text-sm leading-relaxed">
              Prefer WhatsApp? Send us a message and we will get back to you soon.
            </p>
            <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer" className="bg-mauve text-white font-body text-xs font-semibold px-5 py-2 rounded-full hover:bg-plum transition-colors">
              Message on WhatsApp
            </a>
          </div>

        </div>

        <p className="font-script text-mauve text-2xl text-center mb-2">good to know</p>
        <h2 className="font-display text-3xl text-plum text-center mb-10">Frequently Asked</h2>

        <div className="flex flex-col gap-4">
          {faqs.map(function(item) {
            return (
              <div key={item.q} className="bg-white rounded-2xl px-6 py-5 petal-shadow" style={{border: "1.5px solid #E8A0BF"}}>
                <p className="font-display text-plum text-base mb-2">{item.q}</p>
                <p className="font-body text-plum/60 text-sm leading-relaxed">{item.a}</p>
              </div>
            );
          })}
        </div>

      </section>

      <section className="py-20 px-6 text-center bg-mauve">
        <p className="font-script text-white/80 text-2xl mb-2">do not be shy</p>
        <h2 className="font-display text-3xl text-white mb-6">
          Every great bouquet starts with a hello 🌸
        </h2>
        <a href="https://www.instagram.com/florified_by_her" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-mauve font-body font-semibold px-8 py-3.5 rounded-full hover:bg-petal transition-colors text-sm shadow-md">
          DM us on Instagram
        </a>
      </section>

    </div>
  );
}
