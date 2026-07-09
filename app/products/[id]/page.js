import { products } from "@/data/product";
import ProductDetail from "@/components/ProductDetail";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find(function(p) { return p.id === parseInt(id); });
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
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find(function(p) { return p.id === parseInt(id); });
  return <ProductDetail product={product} />;
}
