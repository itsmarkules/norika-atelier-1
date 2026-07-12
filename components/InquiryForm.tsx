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
