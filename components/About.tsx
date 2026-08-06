export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen w-full flex items-center justify-center bg-[#f7f3ef] px-4 py-20"
        >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-start">

                {/* LEFT — TEXT (unchanged content) */}
                <div className="md:pr-0">
                    <h2 className="text-4xl font-semibold text-[#2e2620] mb-6">
                        Party Decoration Rentals & Event Planning on Long Island, NY
                    </h2>

                    <p className="text-lg leading-relaxed text-[#4a3f38]">
                        Norika Atelier Events began as a labor of love inspired by the arrival of my
                        daughter, Scarlett Luna. Planning her earliest celebrations opened my eyes to how
                        deeply meaningful these moments can be. That spark grew into a passion for helping
                        others create unforgettable celebrations.
                    </p>

                    <p className="text-lg leading-relaxed text-[#4a3f38] mt-6">
                        Today, we’re a small, family‑inspired studio serving Long Island, New York with
                        elegant party decoration rentals, event design, and full-service party planning.
                        From birthday party décor to baby shower and bridal shower styling, every detail
                        is handled with care, creativity, and intention.
                    </p>

                    <p className="text-lg leading-relaxed text-[#4a3f38] mt-6">
                        Whether you’re planning a celebration in Nassau County, Suffolk County, or anywhere
                        across Long Island, our goal is simple: to transform your vision into a beautifully
                        personal experience that feels effortless from start to finish.
                    </p>
                </div>

                {/* RIGHT — IMAGE */}
                <div className="flex justify-center">
                    <img
                        src="/scarlett.jpg"
                        alt="Scarlett Luna"
                        className="rounded-xl shadow-lg w-full max-w-md object-cover"
                    />
                </div>

            </div>
        </section>

    );
}
