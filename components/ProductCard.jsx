"use client";

const INSTAGRAM_USERNAME = "florified_by_her";

export default function ProductCard({ product }) {
  const { name, description, image, tags, price } = product;

  const igLink = `https://ig.me/m/${INSTAGRAM_USERNAME}`;

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden petal-shadow flex flex-col transition-transform duration-300 hover:-translate-y-1" style={{ border: "1.5px solid #E8A0BF" }}>

      {/* Image area */}
      <div className="relative w-full aspect-square bg-petal flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-7xl">🌸</span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-mauve/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-mauve font-body font-semibold text-sm px-7 py-3 rounded-full hover:bg-petal transition-colors duration-200 shadow-lg"
          <a>
            Order This 💬
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="font-display text-lg text-plum">{name}</h3>
        <span className="self-start bg-mauve/10 text-mauve text-xs font-body font-semibold px-3 py-1 rounded-full">
          {price}
        </span>
        <p className="font-body text-plum/60 text-xs leading-relaxed flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-body text-mauve bg-petal px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}