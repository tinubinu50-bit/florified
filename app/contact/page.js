"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up to email service (e.g. EmailJS or Formspree)
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="py-20 px-6 text-center bg-petal">
        <p className="font-script text-mauve text-2xl mb-2">say hello</p>
        <h1 className="font-display text-4xl md:text-6xl text-plum max-w-2xl mx-auto leading-tight">
          We'd love to <span className="italic text-mauve">hear from you</span>
        </h1>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* Left info */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-display text-2xl text-plum mb-3">Get in touch</h2>
            <p className="font-body text-plum/70 text-sm leading-relaxed">
              Have a question, a special request, or just want to say hi? Fill
              out the form and we'll get back to you as soon as possible 🌸
            </p>
          </div>
          <div className="flex flex-col gap-4">
            
              <a href="https://www.instagram.com/florified_by_her" target="_blank" rel="noopener noreferrer" className="text-sm font-body text-plum/70 hover:text-mauve transition-colors">
  📸 @florified_by_her

              <div>
                <p className="font-body font-semibold text-sm text-plum">Instagram</p>
                <p className="font-body text-xs text-plum/60">@florified_by_her</p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-white rose-border rounded-2xl px-6 py-4 petal-shadow">
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-body font-semibold text-sm text-plum">WhatsApp</p>
                <p className="font-body text-xs text-plum/60">Available on request</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="bg-white rose-border rounded-3xl p-10 petal-shadow flex flex-col items-center gap-4 text-center">
            <span className="text-6xl">🌸</span>
            <h3 className="font-display text-2xl text-plum">Thank you!</h3>
            <p className="font-body text-plum/70 text-sm">
              We received your message and will reach out to you soon 💝
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rose-border rounded-3xl p-8 petal-shadow flex flex-col gap-5"
          >
            {[
              { name: "name", label: "Your Name", type: "text", placeholder: "e.g. Sarah" },
              { name: "email", label: "Email Address", type: "email", placeholder: "sarah@email.com" },
              { name: "phone", label: "Phone / WhatsApp (optional)", type: "tel", placeholder: "+971 xx xxx xxxx" },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name} className="flex flex-col gap-1.5">
                <label className="font-body text-xs font-semibold text-plum/70 uppercase tracking-wider">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required={name !== "phone"}
                  className="bg-blush rose-border rounded-xl px-4 py-3 text-sm font-body text-plum placeholder:text-plum/30 outline-none focus:border-mauve transition-colors"
                />
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-xs font-semibold text-plum/70 uppercase tracking-wider">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what you're looking for, or just say hi! 🌸"
                rows={4}
                required
                className="bg-blush rose-border rounded-xl px-4 py-3 text-sm font-body text-plum placeholder:text-plum/30 outline-none focus:border-mauve transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-mauve text-white font-body font-semibold py-3.5 rounded-full hover:bg-plum transition-colors text-sm shadow-md mt-2"
            >
              Send Message 💌
            </button>
          </form>
        )}
      </section>
    </div>
  );
}