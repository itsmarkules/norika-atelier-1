"use client";

export default function Header() {
    return (
        <section className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/header2.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Soft dark overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Header Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl font-serif uppercase tracking-[0.25em] text-white drop-shadow-xl">
                    Norika Atelier
                </h1>

                {/* Subheading */}
                <p className="mt-6 text-xl md:text-2xl font-light text-white/90 tracking-wide drop-shadow-lg">
                    Bringing Your Celebration Vision to Life
                </p>

                {/* Location Line */}
                <p className="mt-8 flex items-center gap-4 text-white/85 text-lg md:text-xl font-medium drop-shadow-md">
                    <span className="h-px w-12 bg-white/40"></span>
                    Serving Long Island, New York
                    <span className="h-px w-12 bg-white/40"></span>
                </p>

                {/* CTA Button */}
                <a
                    href="#inquire"
                    className="mt-8 inline-block px-8 py-3 border border-white/70 text-white/90 rounded-full 
               backdrop-blur-sm hover:bg-white/20 transition-all duration-300 
               tracking-wide font-medium drop-shadow-lg"
                >
                    Inquire Now
                </a>

            </div>
        </section>
    );
}
