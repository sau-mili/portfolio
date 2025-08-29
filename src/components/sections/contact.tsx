"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function ContactSection({ center = false }: { center?: boolean }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending…");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-14">
      <Reveal>
        <h2 className={`mb-2 text-2xl font-semibold text-gray-900 ${center ? "text-center" : ""}`}>
          Let’s Design & Build
        </h2>
        <p className={`mb-6 text-gray-700 ${center ? "text-center" : ""}`}>
          Got a project? I’m available for web design/dev, branding, and illustration work. Tell me a bit about what you
          need and I’ll get back shortly.
        </p>
      </Reveal>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border bg-white p-5">
        <div className="grid gap-2 sm:grid-cols-2">
          <label className="text-sm text-gray-700">
            <span className="mb-1 block">Name</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Your name"
            />
          </label>
          <label className="text-sm text-gray-700">
            <span className="mb-1 block">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label className="text-sm text-gray-700">
          <span className="mb-1 block">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="min-h-[120px] w-full rounded-md border px-3 py-2"
            placeholder="Tell me about your project…"
          />
        </label>

        <div className="flex flex-col gap-2">
          <Button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white">
            Send Message
          </Button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </div>
      </form>
    </section>
  );
}
