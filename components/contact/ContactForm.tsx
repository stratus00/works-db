"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-display text-2xl font-light text-wdb-black">
        Thank you. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input type="hidden" name="_subject" value="New project inquiry — WORKS-db" />

      <div>
        <label htmlFor="name" className="block font-ui text-xs tracking-wider uppercase text-wdb-gray-400 mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-transparent border-0 border-b border-wdb-gray-200 focus:border-wdb-black focus:outline-none font-ui text-base font-light text-wdb-black py-2 transition-colors duration-200"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-ui text-xs tracking-wider uppercase text-wdb-gray-400 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-transparent border-0 border-b border-wdb-gray-200 focus:border-wdb-black focus:outline-none font-ui text-base font-light text-wdb-black py-2 transition-colors duration-200"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block font-ui text-xs tracking-wider uppercase text-wdb-gray-400 mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full bg-transparent border-0 border-b border-wdb-gray-200 focus:border-wdb-black focus:outline-none font-ui text-base font-light text-wdb-black py-2 transition-colors duration-200 appearance-none"
        >
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Renovation">Renovation</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-ui text-xs tracking-wider uppercase text-wdb-gray-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-0 border-b border-wdb-gray-200 focus:border-wdb-black focus:outline-none font-ui text-base font-light text-wdb-black py-2 transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-8 px-8 py-3 border border-wdb-black font-ui text-sm tracking-wider uppercase text-wdb-black hover:bg-wdb-black hover:text-wdb-white transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
