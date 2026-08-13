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
        <section id="inquire" className="relative w-full overflow-hidden bg-[#f0eae4] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-6 top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(223,183,110,0.18),_transparent_60%)] blur-3xl" />
                <div className="absolute right-8 top-28 h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(244,220,190,0.3),_transparent_60%)] blur-3xl" />
                <div className="absolute bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border border-[#d8cbbf]/45 bg-white/20 blur-2xl" />
            </div>

            <div className="relative mx-auto max-w-5xl">
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <span className="inline-flex items-center rounded-full border border-[#d8cbbf] bg-[#f7f2eb] px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#7b675b]">
                        Concierge
                    </span>
                    <h2
                        className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#2e2620] sm:text-5xl lg:text-[3.2rem]"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                        Inquire
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-[#4a3f38] sm:text-lg">
                        I’m so excited to hear more about your event. Share a bit about your vision below, and I’ll be in touch within 24–72 hours.
                    </p>
                    <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-[#7b675b] sm:text-base">
                        We require a minimum of $500 for all site event installations.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-3">
                        <a
                            href="https://www.instagram.com/norikaatelier/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Norika Atelier on Instagram"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d3cc] bg-white text-[#2e2620] shadow-[0_10px_24px_rgba(46,38,32,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7f2eb]"
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
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d3cc] bg-white text-[#2e2620] shadow-[0_10px_24px_rgba(46,38,32,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f7f2eb]"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                                <path d="M13.5 22v-8.5h2.8l.4-3.2h-3.2V4.8c0-.9.3-1.6 1.6-1.6h1.7V.2c-.3 0-1.3-.2-2.5-.2-2.4 0-4.1 1.5-4.1 4.3v2.4H7.5v3.2h2.8V22h3.2Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-0 sm:px-4">
                    <div
                        aria-live="polite"
                        className={`mb-6 w-full max-w-3xl rounded-xl border p-4 text-sm font-medium shadow-sm transition-all duration-300 ${formStatus === "success"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                            : formStatus === "error"
                                ? "border-red-200 bg-red-50 text-red-800"
                                : "pointer-events-none border-transparent bg-transparent opacity-0"
                            }`}
                    >
                        {formStatus === "success" &&
                            "Thank you for your inquiry! I will get back to you shortly."}
                        {formStatus === "error" &&
                            "Oops! Something went wrong. Please try again."}
                    </div>

                    <form onSubmit={handleSubmit} className="w-full max-w-3xl rounded-[2rem] border border-[#e4d9ca] bg-[rgba(255,255,255,0.62)] p-5 shadow-[0_28px_80px_rgba(46,38,32,0.08)] backdrop-blur-sm sm:p-8 lg:p-10" noValidate>
                        <div className="grid gap-5 sm:gap-6">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#5b4b40]">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    disabled={isSubmitting}
                                    className="w-full rounded-xl border border-[#d9ccbf] bg-white/80 p-4 text-[#3a332d] shadow-inner outline-none transition focus:border-[#c7a875] focus:ring-2 focus:ring-[#ead7b1]/60"
                                />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#5b4b40]">
                                        Your Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        disabled={isSubmitting}
                                        className="w-full rounded-xl border border-[#d9ccbf] bg-white/80 p-4 text-[#3a332d] shadow-inner outline-none transition focus:border-[#c7a875] focus:ring-2 focus:ring-[#ead7b1]/60"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#5b4b40]">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        placeholder="(123) 456‑7890"
                                        disabled={isSubmitting}
                                        className="w-full rounded-xl border border-[#d9ccbf] bg-white/80 p-4 text-[#3a332d] shadow-inner outline-none transition focus:border-[#c7a875] focus:ring-2 focus:ring-[#ead7b1]/60"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="eventType" className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#5b4b40]">
                                        Event Type
                                    </label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        required
                                        disabled={isSubmitting}
                                        className="w-full rounded-xl border border-[#d9ccbf] bg-white/80 p-4 text-[#3a332d] shadow-inner outline-none transition focus:border-[#c7a875] focus:ring-2 focus:ring-[#ead7b1]/60"
                                    >
                                        <option value="">Select an event type</option>
                                        <option>Wedding</option>
                                        <option>Birthday</option>
                                        <option>Baby Shower</option>
                                        <option>Bridal Shower</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="venue" className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#5b4b40]">
                                        Venue
                                    </label>
                                    <input
                                        id="venue"
                                        name="venue"
                                        type="text"
                                        required
                                        placeholder="Venue name or address"
                                        disabled={isSubmitting}
                                        className="w-full rounded-xl border border-[#d9ccbf] bg-white/80 p-4 text-[#3a332d] shadow-inner outline-none transition focus:border-[#c7a875] focus:ring-2 focus:ring-[#ead7b1]/60"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="eventDate" className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#5b4b40]">
                                        Event Date
                                    </label>
                                    <input
                                        id="eventDate"
                                        name="eventDate"
                                        type="date"
                                        required
                                        placeholder="Select date"
                                        disabled={isSubmitting}
                                        className="w-full rounded-xl border border-[#d9ccbf] bg-white/80 p-4 text-[#3a332d] shadow-inner outline-none transition focus:border-[#c7a875] focus:ring-2 focus:ring-[#ead7b1]/60"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="eventTime" className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#5b4b40]">
                                        Event Time
                                    </label>
                                    <input
                                        id="eventTime"
                                        name="eventTime"
                                        type="time"
                                        required
                                        placeholder="Select time"
                                        disabled={isSubmitting}
                                        className="w-full rounded-xl border border-[#d9ccbf] bg-white/80 p-4 text-[#3a332d] shadow-inner outline-none transition focus:border-[#c7a875] focus:ring-2 focus:ring-[#ead7b1]/60"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#5b4b40]">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder="Tell me about your event..."
                                    disabled={isSubmitting}
                                    className="w-full resize-none rounded-xl border border-[#d9ccbf] bg-white/80 p-4 text-[#3a332d] shadow-inner outline-none transition focus:border-[#c7a875] focus:ring-2 focus:ring-[#ead7b1]/60"
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex w-full items-center justify-center rounded-full bg-[#2e2620] px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-[0_18px_32px_rgba(46,38,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[#1f1915] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
