"use client";

import { useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "971568672524";

export default function ProductCard({ product }) {
  const { id, name, description, image, tags, price } = product;
  const [overlayVisible, setOverlayVisible] = useState(false);

  function handleOrder() {
    const productUrl = "https://florified.vercel.app/products/" + id;
    const message = "Hi Florified!  I am interested in ordering the " + name + "\n\n🔗 " + productUrl + "\n\nCould you please share more details?";
    const encoded = encodeURIComponent(message);
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encoded, "_blank");
  }

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden petal-shadow flex flex-col transition-transform duration-300 hover:-translate-y-1"
      style={{ border: "1.5px solid #E8A0BF" }}
      onMouseLeave={function() { setOverlayVisible(false); }}
    >
      <div
        className="relative w-full aspect-square bg-petal flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={function() { setOverlayVisible(true); }}
      >
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-7xl">🌸</span>
        )}

        <div className={"absolute inset-0 bg-mauve/80 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 " + (overlayVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>
          <button
            onClick={function(e) { e.stopPropagation(); handleOrder(); }}
            className="bg-white text-mauve font-body font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-petal transition-colors duration-200 shadow-lg cursor-pointer"
          >
            Order on WhatsApp 💬
          </button>
          <Link
            href={"/products/" + id}
            onClick={function(e) { e.stopPropagation(); }}
            className="bg-white/20 text-white font-body text-xs px-6 py-2 rounded-full hover:bg-white/30 transition-colors border border-white/40"
          >
            View Details →
          </Link>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="font-display text-lg text-plum">{name}</h3>
        <span className="self-start bg-mauve/10 text-mauve text-xs font-body font-semibold px-3 py-1 rounded-full">
          {price}
        </span>
        <p className="font-body text-plum/60 text-xs leading-relaxed flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map(function(tag) {
            return (
              <span key={tag} className="text-[10px] font-body text-mauve bg-petal px-3 py-1 rounded-full">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
