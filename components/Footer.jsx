import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-petal mt-auto" style={{ borderTop: "1.5px solid #E8A0BF" }}>
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-2">
          <span style={{ fontFamily: '"Cormorant Garamond", serif' }} className="text-2xl text-mauve font-bold italic">Florified</span>
          <span className="text-xs text-rose tracking-widest uppercase font-body">by her</span>
          <p className="text-sm text-plum/70 font-body mt-2 leading-relaxed">
            Handcrafted bouquets made from colorful pipe cleaners beautiful, lasting, and made with love.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-sm font-body text-plum/70 hover:text-mauve transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-body text-plum/70 hover:text-mauve transition-colors">About</Link>
          <Link href="/services" className="text-sm font-body text-plum/70 hover:text-mauve transition-colors">Services</Link>
          <Link href="/products" className="text-sm font-body text-plum/70 hover:text-mauve transition-colors">Products</Link>
          <Link href="/custom-orders" className="text-sm font-body text-plum/70 hover:text-mauve transition-colors">Custom Orders</Link>
          <Link href="/contact" className="text-sm font-body text-plum/70 hover:text-mauve transition-colors">Get in Touch</Link>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-2">
          <h4 className="font-display text-mauve font-semibold mb-1">Find Us</h4>
          
           <a href="https://www.instagram.com/florified_by_her" target="_blank" rel="noopener noreferrer" className="text-sm font-body text-plum/70 hover:text-mauve transition-colors">
  📸 @florified_by_her
</a>
          <p className="text-sm font-body text-plum/70 mt-2 leading-relaxed">
            Slide into our DMs to place an order or ask anything!
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="text-center py-4 text-xs text-plum/40 font-body" style={{ borderTop: "1.5px solid #E8A0BF" }}>
        © {new Date().getFullYear()} Florified by Her. All rights reserved. 🌷
      </div>
    </footer>
  );
}