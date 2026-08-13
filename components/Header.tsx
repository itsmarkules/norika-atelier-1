"use client";

export default function Header() {
    return (
        <section className="relative isolate h-screen w-full overflow-hidden bg-black">

            {/* Background Video */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="h-full w-full min-w-full min-h-full object-cover object-center"
                    src="/header3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                />
            </div>

            {/* Soft dark overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%),linear-gradient(135deg,rgba(7,7,7,0.55),rgba(7,7,7,0.28))]" />

            {/* Cinematic vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(0,0,0,0.22)_70%,rgba(0,0,0,0.45)_100%)]" />

            {/* Optional luxury noise texture */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />

            {/* Header Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 py-6 sm:px-6 sm:py-8 md:py-8 animate-[fadeUp_0.9s_ease-out]">

                {/* Social Links */}
                <div className="absolute right-4 top-4 z-20 flex items-center gap-2 sm:right-6 sm:top-6">
                    <a
                        href="https://www.instagram.com/norikaatelier/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Norika Atelier on Instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:text-[#D4AF37] sm:h-11 sm:w-11"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current sm:h-5.5 sm:w-5.5">
                            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
                        </svg>
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61552160206536"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Norika Atelier on Facebook"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:text-[#D4AF37] sm:h-11 sm:w-11"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current sm:h-5.5 sm:w-5.5">
                            <path d="M9.198 21.5h3.3V13h2.2l.3-2.6h-2.5V5.8c0-.6.2-1.1.9-1.1h1.6V2.3c-.3 0-1.2-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.5H8.2V13h1.1v8.5Z" />
                        </svg>
                    </a>
                </div>

                {/* Logo with grounding shadow */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent blur-xl"></div>
                    <img
                        src="/logo2.PNG"
                        alt="Norika Atelier logo"
                        className="relative w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-[26rem] lg:max-w-[30rem] object-contain 
                        drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)] saturate-150 contrast-125 brightness-110"
                    />
                </div>

                {/* Subheading */}
                <p
                    className="mt-3 text-sm sm:text-base md:text-lg font-normal tracking-[0.02em] leading-relaxed 
                    bg-gradient-to-b from-[#D4AF37] via-[#f3e7c9] to-white/75 bg-clip-text text-transparent 
                    drop-shadow-[0_1px_1px_rgba(255,255,255,0.25)]"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    Elevated Designs with Intention
                </p>

                {/* Location Line */}
                <p className="mt-4 flex items-center gap-3 text-sm sm:text-base md:text-base text-white/85 font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]">
                    <span className="h-px w-8 sm:w-10 bg-[#D4AF37]/35"></span>
                    Serving Long Island, New York
                    <span className="h-px w-8 sm:w-10 bg-[#D4AF37]/35"></span>
                </p>

                {/* CTA */}
                <div className="mt-5 flex flex-col items-center gap-2">
                    <a
                        href="#inquire"
                        className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black 
                        shadow-[0_6px_24px_rgba(0,0,0,0.22)] transition-all duration-300 
                        hover:-translate-y-0.5 hover:bg-[#f8f5ef] hover:border-[#D4AF37] hover:shadow-[0_10px_32px_rgba(0,0,0,0.32)] hover:scale-[1.015]"
                    >
                        Inquire Now
                    </a>
                </div>

            </div>

            {/* Fade-up animation keyframes */}
            <style>{`
                @keyframes fadeUp {
                    0% { opacity: 0; transform: translateY(14px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
