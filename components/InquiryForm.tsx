"use client";

import { useState } from "react";

export default function InquiryForm() {
    const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus("idle");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mvgrkbdw", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: formData,
            });

            if (response.ok) {
                setFormStatus("success");
                form.reset();
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setFormStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="inquire" className="min-h-screen w-full flex flex-col items-center px-6 py-24 bg-[#f0eae4] border-t border-[#d8d3cc]">
            <div className="max-w-3xl text-center mb-10">
                <h2 className="text-4xl font-serif mb-6 text-[#2e2620]">Inquire</h2>
                <p className="text-lg leading-relaxed text-[#4a3f38]">
                    I’m so excited to hear more about your event. Share a bit about your vision
                    below, and I’ll be in touch within 24–48 hours.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <a
                        href="https://www.instagram.com/norikaatelier/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Norika Atelier on Instagram"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d3cc] bg-white text-[#2e2620] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7f2eb]"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
                        </svg>
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61552160206536&ref=PRODASH_UPSELL_xav_ig_profile_page_web#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Norika Atelier on Facebook"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d3cc] bg-white text-[#2e2620] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7f2eb]"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                            <path d="M13.5 22v-8.5h2.8l.4-3.2h-3.2V4.8c0-.9.3-1.6 1.6-1.6h1.7V.2c-.3 0-1.3-.2-2.5-.2-2.4 0-4.1 1.5-4.1 4.3v2.4H7.5v3.2h2.8V22h3.2Z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="max-w-xl w-full">
                {/* Status Message */}
                <div
                    aria-live="polite"
                    className={`mb-6 p-4 rounded transition-opacity duration-500 ${formStatus === "success"
                        ? "bg-green-100 text-green-800 opacity-100"
                        : formStatus === "error"
                            ? "bg-red-100 text-red-800 opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                >
                    {formStatus === "success" &&
                        "Thank you for your inquiry! I will get back to you shortly."}
                    {formStatus === "error" &&
                        "Oops! Something went wrong. Please try again."}
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>

                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block mb-2 font-medium text-[#2e2620]">
                            Your Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Enter your name"
                            disabled={isSubmitting}
                            className="w-full border border-[#cfc7bf] p-4 rounded-lg bg-white text-[#3a332d] focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium text-[#2e2620]">
                            Your Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            disabled={isSubmitting}
                            className="w-full border border-[#cfc7bf] p-4 rounded-lg bg-white text-[#3a332d] focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block mb-2 font-medium text-[#2e2620]">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="(123) 456‑7890"
                            disabled={isSubmitting}
                            className="w-full border border-[#cfc7bf] p-4 rounded-lg bg-white text-[#3a332d] focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    {/* Event Type */}
                    <div>
                        <label htmlFor="eventType" className="block mb-2 font-medium text-[#2e2620]">
                            Event Type
                        </label>
                        <select
                            id="eventType"
                            name="eventType"
                            required
                            disabled={isSubmitting}
                            className="w-full border border-[#cfc7bf] p-4 rounded-lg bg-white text-[#3a332d] focus:ring-2 focus:ring-accent"
                        >
                            <option value="">Select an event type</option>
                            <option>Wedding</option>
                            <option>Birthday</option>
                            <option>Baby Shower</option>
                            <option>Bridal Shower</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Event Date */}
                    <div>
                        <label htmlFor="eventDate" className="block mb-2 font-medium text-[#2e2620]">
                            Event Date
                        </label>
                        <input
                            id="eventDate"
                            name="eventDate"
                            type="date"
                            required
                            placeholder="Select date"
                            disabled={isSubmitting}
                            className="w-full border border-[#cfc7bf] p-4 rounded-lg bg-white text-[#3a332d] focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    {/* Event Time */}
                    <div>
                        <label htmlFor="eventTime" className="block mb-2 font-medium text-[#2e2620]">
                            Event Time
                        </label>
                        <input
                            id="eventTime"
                            name="eventTime"
                            type="time"
                            required
                            placeholder="Select time"
                            disabled={isSubmitting}
                            className="w-full border border-[#cfc7bf] p-4 rounded-lg bg-white text-[#3a332d] focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    {/* Venue */}
                    <div>
                        <label htmlFor="venue" className="block mb-2 font-medium text-[#2e2620]">
                            Venue Name / Address
                        </label>
                        <input
                            id="venue"
                            name="venue"
                            type="text"
                            required
                            placeholder="Venue name or address"
                            disabled={isSubmitting}
                            className="w-full border border-[#cfc7bf] p-4 rounded-lg bg-white text-[#3a332d] focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block mb-2 font-medium text-[#2e2620]">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            placeholder="Tell me about your event..."
                            disabled={isSubmitting}
                            className="w-full border border-[#cfc7bf] p-4 rounded-lg bg-white text-[#3a332d] resize-none focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#2e2620] text-white py-4 rounded-lg font-medium hover:bg-[#1f1915] transition disabled:opacity-60"
                    >
                        {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </button>

                </form>

            </div>
        </section>
    );
}
