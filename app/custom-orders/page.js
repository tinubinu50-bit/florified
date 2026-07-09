const WHATSAPP_NUMBER = "971568672524";

export default function CustomOrders() {
  const message = "Hi Florified! 🌸 I would like to place a *Custom Order*\n\nHere are my details:\n\n🎨 Color palette / theme: \n💐 Flower types I like: \n🎁 Occasion: \n📏 Size preference: \n✨ Any special requests: \n\nLooking forward to hearing from you!";
  const encoded = encodeURIComponent(message);
  const waLink = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encoded;

  return (
    <div className="flex flex-col">

      <section className="py-24 px-6 text-center bg-petal">
        <p className="font-script text-mauve text-2xl mb-2">make it yours</p>
        <h1 className="font-display text-4xl md:text-6xl text-plum max-w-2xl mx-auto leading-tight">
          Custom bouquets, <span className="italic text-mauve">your way</span>
        </h1>
        <p className="font-body text-plum/70 mt-4 max-w-md mx-auto text-sm leading-relaxed">
          Dream bouquet in mind? Tell us everything and we will bring it to life 🌸
        </p>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto w-full flex flex-col items-center gap-10">

        <div className="text-8xl">🎨</div>

        <div className="bg-white rounded-3xl p-8 petal-shadow w-full flex flex-col gap-4" style={{ border: "1.5px solid #E8A0BF" }}>
          <h2 className="font-display text-2xl text-plum text-center mb-2">How it works</h2>
          {[
            { step: "1", text: "Click the button below to open WhatsApp" },
            { step: "2", text: "A pre-filled message with all the details we need will be ready for you" },
            { step: "3", text: "Fill in your color palette, occasion, size, and any special requests" },
            { step: "4", text: "Send it and we will reply with a design preview" },
            { step: "5", text: "Sit back while we craft your dream bouquet 🌸" },
          ].map(function(item) {
            return (
              <div key={item.step} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-mauve text-white font-body font-bold text-sm flex items-center justify-center shrink-0">
                  {item.step}
                </span>
                <p className="font-body text-plum/70 text-sm leading-relaxed pt-1">{item.text}</p>
              </div>
            );
          })}
        </div>

        
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-mauve text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-plum transition-colors text-base shadow-md"
        <a>
          Start My Custom Order on WhatsApp 💬
        </a>

        <p className="font-body text-plum/50 text-xs text-center">
          You will be redirected to WhatsApp with a pre-filled message. Just fill in your details and hit send!
        </p>

      </section>

    </div>
  );
}
