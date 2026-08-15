import InstagramFeed from "./InstagramFeed";

export default function About() {
    const instagramPreviewPosts = [
        {
            id: "1",
            caption: "A recent floral styling moment from Norika Atelier.",
            media_url: "/instagram/instagram1.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/p/DadRpdZljKu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: "2",
            caption: "Custom event styling inspiration for your next celebration.",
            media_url: "/instagram/instagram2.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/p/DZoLcaYu0cM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: "3",
            caption: "Elegant tabletop details with a soft, neutral palette.",
            media_url: "/instagram/instagram3.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/p/DRyN5-IjiBl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: "4",
            caption: "Delicate decor touches for a memorable celebration.",
            media_url: "/instagram/instagram4.jpg",
            media_type: "IMAGE",
            permalink: "https://www.instagram.com/p/DQ-duHvjlRQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
    ];

    return (
        <section
            id="about"
            className="relative overflow-hidden min-h-screen lg:min-h-[80vh] w-full bg-[#f7f3ef] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-12 xl:py-16"
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-3 top-12 h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,183,110,0.35),_transparent_60%)] blur-2xl sm:left-4 sm:top-10" />
                <div className="absolute right-4 top-20 h-16 w-16 rounded-full bg-[radial-gradient(circle,_rgba(244,220,190,0.45),_transparent_60%)] opacity-90 sm:right-6 sm:top-24" />
                <div className="absolute left-1/2 top-28 h-20 w-20 -translate-x-1/2 rounded-full border border-[#d8cbbf]/50 bg-white/20 blur-xl sm:top-32 sm:h-24 sm:w-24" />
                <div className="absolute right-8 bottom-8 block sm:right-10 sm:bottom-10">
                    <div className="flex flex-col items-center gap-1">
                        <div className="h-12 w-8 rounded-full bg-[#d8b887]/90 shadow-xl sm:h-16 sm:w-10" />
                        <div className="h-8 w-[2px] bg-[#b88c54] sm:h-10" />
                    </div>
                </div>
                <div className="absolute left-8 bottom-12 block sm:left-10 sm:bottom-16">
                    <div className="grid gap-2">
                        <span className="block h-2 w-2 rounded-full bg-[#c6a876]" />
                        <span className="block h-2 w-2 rounded-full bg-[#e3d4c1]" />
                        <span className="block h-2 w-2 rounded-full bg-[#bfa88a]" />
                    </div>
                </div>
                <div className="absolute left-10 top-16 block sm:left-20 sm:top-20">
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                        <div className="absolute inset-0 rounded-full bg-[#fff5e7]/70" />
                        <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#d8b887] sm:h-3 sm:w-3" />
                        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#f4dec1]" />
                        <div className="absolute left-0 bottom-2 h-2 w-2 rounded-full bg-[#bfa88a]" />
                    </div>
                </div>
                <div className="absolute right-8 top-16 block sm:right-16 sm:top-20">
                    <div className="grid gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#d8b887]" />
                        <div className="h-1.5 w-1.5 rounded-full bg-[#f4dec1]" />
                        <div className="h-1.5 w-1.5 rounded-full bg-[#bfa88a]" />
                        <div className="h-1.5 w-1.5 rounded-full bg-[#e8e2db]" />
                    </div>
                </div>
            </div>
            <div className="mx-auto relative z-10 flex h-full max-w-5xl flex-col items-center justify-center gap-8 text-center">
                <div className="w-full rounded-[2rem] border border-[#eadfce] bg-[rgba(255,255,255,0.45)] p-5 shadow-[0_30px_90px_rgba(46,38,32,0.12)] backdrop-blur-[2px] sm:p-7 lg:p-8">
                    <div className="mb-5 text-center sm:mb-6">
                        <span className="inline-flex items-center justify-center rounded-full border border-[#d8cbbf] bg-[#f6efe8] px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#7b675b]">
                            Our story
                        </span>
                        <h2
                            className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#2e2620] sm:text-4xl lg:text-[2.8rem]"
                            style={{ fontFamily: '"Playfair Display", serif' }}
                        >
                            The Story Behind Norika Atelier
                        </h2>
                    </div>

                    <div className="space-y-5 text-left text-[#4a3f38]">
                        <p className="text-base leading-7 lg:text-lg lg:leading-9">
                            At Norika Atelier, we believe every celebration should feel effortless, intentional, and unforgettable. We offer full-service event design and styling, combining timeless aesthetics with carefully curated details to transform your vision into a one-of-a-kind experience.
                        </p>

                        <p className="text-base leading-7 lg:text-lg lg:leading-9">
                            From statement backdrops, lush floral installations to soft candlelight, fabric draping, and custom balloon artistry, we create environments that feel inviting, elegant, and memorable. Our collection of premium rental pieces allows us to design celebrations that are refined, cohesive, and unlike anything else.
                        </p>

                        <p className="text-base leading-7 lg:text-lg lg:leading-9">
                            <span className="text-[#c7a27c]">Norika</span>—my middle name given to me by my mother, means <span className="italic">“beautiful sunshine”</span> and <span className="italic">“to be a blessing”</span>. Those meanings have become the heart of this business. My hope is that every event, gathering, and space we design brings beauty, joy, and inspiration to the people who experience it.
                        </p>

                        <p className="text-base leading-7 lg:text-lg lg:leading-9">
                            Because life moves quickly, but the moments we gather with the people we love are the ones that become our most treasured memories.
                        </p>
                    </div>

                </div>

                <div className="w-full rounded-[1.75rem] bg-white/90 p-5 shadow-[0_18px_50px_rgba(46,38,32,0.1)] ring-1 ring-[#d8cbbf]/40 sm:p-8">
                    <InstagramFeed posts={instagramPreviewPosts} />
                </div>
            </div>

            {/*
            <div className="mx-auto grid h-full max-w-6xl w-full grid-cols-1 items-center gap-8 md:grid-cols-[0.6fr_0.45fr] md:gap-10 lg:gap-12 xl:gap-14">

                LEFT — TEXT
                <div className="md:pr-6">
                    <h2 className="mb-5 text-2xl font-semibold leading-tight text-[#2e2620] sm:text-[2.1rem] lg:text-[2.20rem] xl:text-[2.5rem]">
                        The Story Behind Norika Atelier
                    </h2>

                    <p className="text-base leading-6 text-[#4a3f38] lg:text-lg lg:leading-8">
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

                RIGHT — TEMP TEXT
                <div className="flex justify-center md:justify-end">
                    <div className="w-full max-w-[34rem] lg:max-w-[35rem] xl:max-w-[40rem] rounded-[1.75rem] border border-[#d8cbbf]/40 bg-[#f7f3ef] p-8 shadow-[0_28px_80px_rgba(46,38,32,0.18)]">
                        <p className="text-base leading-7 text-[#4a3f38] lg:text-lg lg:leading-9">
                            Norika Atelier was born from a passion for creating unforgettable moments with intention. More than a name, it represents growth, purpose, creativity, and the belief that every celebration deserves to be thoughtfully designed.
                        </p>
                        <p className="mt-5 text-base leading-7 text-[#4a3f38] lg:text-lg lg:leading-9">
                            Whether you’re planning an intimate gathering, a milestone celebration, or an elegant wedding, we thoughtfully design every element to create a space that feels both elevated and deeply personal.
                        </p>
                        <p className="mt-5 text-base leading-7 text-[#4a3f38] lg:text-lg lg:leading-9">
                            Our services include event design and styling, luxury backdrop rentals, custom balloon installations, draping and fabric installations, floral design, candle styling, and curated décor rentals. Every piece is intentionally selected to complement your event, creating a seamless design from the moment your guests arrive.
                        </p>
                        <p className="mt-5 text-base leading-7 text-[#4a3f38] lg:text-lg lg:leading-9">
                            Whether we’re styling an intimate gathering or transforming an entire venue, our goal is always the same: to create an experience that feels beautiful, meaningful, and unforgettable.
                        </p>
                    </div>
                </div>

            </div>
            */}
        </section>

    );
}
