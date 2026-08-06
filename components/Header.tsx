"use client";

export default function Header() {
    return (
        <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-black">
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="h-full w-full min-w-full min-h-full object-cover object-center scale-[1.02] blur-[1px]"
                    src="/header3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                />
            </div>

            {/* Soft dark overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_45%),linear-gradient(135deg,rgba(7,7,7,0.62),rgba(7,7,7,0.34))]" />

            {/* Vignette for video edges */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_70%,rgba(0,0,0,0.55)_100%)]" />

            {/* Header Content */}
            <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center text-center px-6 pt-10 sm:pt-14 md:pt-16">

                {/* Social Links */}
                <div className="absolute right-4 top-4 z-20 flex items-center gap-2 sm:right-6 sm:top-6">
                    <a
                        href="https://www.instagram.com/norikaatelier/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Norika Atelier on Instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:h-11 sm:w-11"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current sm:h-5.5 sm:w-5.5" aria-hidden="true">
                            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
                        </svg>
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61552160206536&ref=PRODASH_UPSELL_xav_ig_profile_page_web#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Norika Atelier on Facebook"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:h-11 sm:w-11"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current sm:h-5.5 sm:w-5.5" aria-hidden="true">
                            <path d="M9.198 21.5h3.3V13h2.2l.3-2.6h-2.5V5.8c0-.6.2-1.1.9-1.1h1.6V2.3c-.3 0-1.2-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.5H8.2V13h1.1v8.5Z" />
                        </svg>
                    </a>
                </div>

                {/* Main Logo */}
                <img
                    src="/logo2.PNG"
                    alt="Norika Atelier logo"
                    className="w-full max-w-[24rem] sm:max-w-[28rem] md:max-w-[34rem] lg:max-w-[38rem] object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.75)] saturate-150 contrast-125 brightness-110"
                />

                {/* Subheading */}
                <p
                    className="mt-2 text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.28em] text-white/90 drop-shadow-lg"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    Bringing Your Celebration Vision to Life
                </p>

                {/* Location Line */}
                <p className="mt-4 flex items-center gap-3 text-sm sm:text-base md:text-lg text-white/85 font-medium drop-shadow-md">
                    <span className="h-px w-8 sm:w-10 bg-white/40"></span>
                    Serving Long Island, New York
                    <span className="h-px w-8 sm:w-10 bg-white/40"></span>
                </p>

                {/* CTA Button */}
                <div className="mt-6 flex flex-col items-center gap-2">
                    <a
                        href="#inquire"
                        className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-black shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3efe7] hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] sm:px-8 sm:py-3.5"
                    >
                        Inquire Now
                    </a>
                    {/*<p className="text-xs uppercase tracking-[0.25em] text-white/70 sm:text-sm">
                        Response within 24 hours
                    </p>*/}
                </div>

            </div>
        </section>
    );
}
