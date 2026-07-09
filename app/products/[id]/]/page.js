import { products } from "@/data/product";

export async function generateMetadata({ params }) {
  const product = products.find(function(p) { return p.id === parseInt(params.id); });
  if (!product) return {};

  return {
    title: product.name + " — Florified",
    description: product.description,
    openGraph: {
      title: product.name + " — Florified by Her",
      description: product.description,
      images: [
        {
          url: "https://florified.vercel.app" + product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      type: "website",
      siteName: "Florified by Her",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: ["https://florified.vercel.app" + product.image],
    },
  };
}

export default function ProductPage({ params }) {
  const product = products.find(function(p) { return p.id === parseInt(params.id); });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="flex flex-col items-center gap-4">
          <span className="text-6xl">🌸</span>
          <h1 className="font-display text-3xl text-plum">Bouquet not found</h1>
          <a href="/products" className="bg-mauve text-white font-body px-6 py-2.5 rounded-full text-sm hover:bg-plum transition-colors">
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  const WHATSAPP_NUMBER = "971568672524";
  const productUrl = "https://florified.vercel.app/products/" + product.id;
  const message = "Hi Florified! 🌸 I am interested in ordering the *" + product.name + "*\n\n" + product.description + "\n\nPrice: " + product.price + "\n\n🔗 " + productUrl + "\n\nCould you please share more details?";
  const waLink = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);

  return (
    <div className="min-h-screen flex flex-col">

      <section className="py-20 px-6 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="rounded-3xl overflow-hidden petal-shadow w-full aspect-square" style={{ border: "1.5px solid #E8A0BF" }}>
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-petal flex items-center justify-center text-8xl">🌸</div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-script text-mauve text-xl mb-1">Florified by Her</p>
            <h1 className="font-display text-3xl md:text-4xl text-plum leading-tight">{product.name}</h1>
          </div>

          <span className="self-start bg-mauve/10 text-mauve text-sm font-body font-semibold px-4 py-2 rounded-full">
            {product.price}
          </span>

          <p className="font-body text-plum/70 leading-relaxed text-sm">{product.description}</p>

          <div className="flex flex-wrap gap-2">
            {product.tags.map(function(tag) {
              return (
                <span key={tag} className="text-xs font-body text-mauve bg-petal px-3 py-1 rounded-full">
                  {tag}
                </span>
              );
            })}
          </div>

          
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mauve text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-plum transition-colors text-sm shadow-md text-center"
          <a>
            Order on WhatsApp 💬
          </a>

          
            href="/products"
            className="text-mauve font-body text-sm underline underline-offset-4 hover:text-plum transition-colors text-center"
          <a>
            Back to all bouquets
          </a>
        </div>

      </section>

    </div>
  );
}