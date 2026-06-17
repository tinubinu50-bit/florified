import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";

export default function Products() {
  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="py-20 px-6 text-center bg-petal">
        <p className="font-script text-mauve text-2xl mb-2">our creations</p>
        <h1 className="font-display text-4xl md:text-6xl text-plum max-w-2xl mx-auto leading-tight">
          Bouquets made with <span className="italic text-mauve">heart & color</span>
        </h1>
        <p className="font-body text-plum/70 mt-4 text-sm max-w-md mx-auto">
          All prices are negotiable  just slide into our DMs and we'll work something out 🌸
        </p>
        <Link
          href="/custom-orders"
          className="inline-block mt-6 bg-white rose-border text-mauve font-body font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-mauve hover:text-white transition-colors duration-200"
        >
          Want something custom? →
        </Link>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}