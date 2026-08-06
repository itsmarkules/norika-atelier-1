export default function About() {
    return (
        <section
            id="about"
            className="h-screen w-full bg-[#f7f3ef] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
        >
            <div className="mx-auto grid h-full max-w-6xl w-full grid-cols-1 items-center gap-8 md:grid-cols-[0.6fr_0.45fr] md:gap-10 lg:gap-12">

                {/* LEFT — TEXT */}
                <div className="md:pr-6">
                    <h2 className="mb-5 text-3xl font-semibold leading-tight text-[#2e2620] sm:text-[2.4rem] lg:text-[2.65rem]">
                        About Norika Atelier Events
                    </h2>

                    <p className="text-base leading-6 text-[#4a3f38]">
                        Norika Atelier Events began as a labor of love inspired by the arrival of my
                        daughter, Scarlett Luna. Planning her earliest celebrations opened my eyes to how
                        deeply meaningful these moments can be. That spark grew into a passion for helping
                        others create unforgettable celebrations.
                    </p>

                    <p className="text-base leading-6 text-[#4a3f38] mt-4">
                        Today, we’re a small, family‑inspired studio serving Long Island, New York with
                        elegant party decoration rentals, event design, and full-service party planning.
                        From birthday party décor to baby shower and bridal shower styling, every detail
                        is handled with care, creativity, and intention.
                    </p>

                    <p className="text-base leading-6 text-[#4a3f38] mt-4">
                        Whether you’re planning a celebration in Nassau County, Suffolk County, or anywhere
                        across Long Island, our goal is simple: to transform your vision into a beautifully
                        personal experience that feels effortless from start to finish.
                    </p>
                </div>

                {/* RIGHT — IMAGE */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] border border-white/90 bg-white p-3 shadow-[0_20px_60px_rgba(46,38,32,0.14)]">
                        <img
                            src="/scarlett.jpg"
                            alt="Scarlett Luna"
                            className="h-[300px] w-full rounded-[1.5rem] object-cover object-center sm:h-[340px] md:h-[380px] lg:h-[420px]"
                        />
                    </div>
                </div>

            </div>
        </section>

    );
}
