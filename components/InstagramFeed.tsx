"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type InstaPost = {
    id: string;
    caption?: string;
    media_url: string;
    media_type: string;
    permalink: string;
};

type InstagramFeedProps = {
    posts?: InstaPost[];
};

const fallbackPosts: InstaPost[] = [
    {
        id: "fallback-1",
        caption: "Elegant event styling inspiration from Norika Atelier.",
        media_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        media_type: "IMAGE",
        permalink: "https://www.instagram.com/norikaatelier/",
    },
    {
        id: "fallback-2",
        caption: "A softly styled celebration moment.",
        media_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
        media_type: "IMAGE",
        permalink: "https://www.instagram.com/norikaatelier/",
    },
    {
        id: "fallback-3",
        caption: "Textured florals and curated décor details.",
        media_url: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=900&q=80",
        media_type: "IMAGE",
        permalink: "https://www.instagram.com/norikaatelier/",
    },
    {
        id: "fallback-4",
        caption: "A timeless tabletop moment from Norika Atelier.",
        media_url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        media_type: "IMAGE",
        permalink: "https://www.instagram.com/norikaatelier/",
    },
];

export default function InstagramFeed({ posts: staticPosts }: InstagramFeedProps) {
    const [posts, setPosts] = useState<InstaPost[]>(staticPosts ?? []);
    const [loading, setLoading] = useState(!staticPosts);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (staticPosts && staticPosts.length > 0) {
            setPosts(staticPosts);
            setLoading(false);
            return;
        }

        const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
        if (!token) {
            setPosts(fallbackPosts);
            setError(null);
            setLoading(false);
            return;
        }

        const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${token}`;

        fetch(endpoint)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data) => {
                if (!data || !Array.isArray(data.data)) throw new Error("Invalid response");
                setPosts(data.data.slice(0, 4));
            })
            .catch((err: any) => {
                setError("Instagram feed unavailable. Showing preview posts instead.");
                setPosts(fallbackPosts);
            })
            .finally(() => setLoading(false));
    }, [staticPosts]);

    if (loading) return <div className="py-6 text-center text-sm text-gray-500">Loading Instagram…</div>;

    const displayPosts = posts.length > 0 ? posts : fallbackPosts;

    return (
        <div className="w-full">
            {error ? (
                <div className="pb-4 text-center text-xs text-gray-500">{error}</div>
            ) : null}

            <div className="mb-5 flex flex-col items-center gap-3 text-center sm:mb-6">
                <h3
                    className="text-2xl font-semibold tracking-[-0.04em] text-[#2e2620] sm:text-3xl lg:text-[2.1rem]"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                >
                    Recent Inspiration
                </h3>

                <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between sm:w-full sm:max-w-xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#d8cbbf] bg-[#f6efe8] px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#7b675b] sm:px-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d1a76a]" />
                        Instagram
                    </span>

                    <a
                        href="https://www.instagram.com/norikaatelier/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-[#d8cbbf] bg-white px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#4a3f38] transition duration-200 hover:border-[#c7a875] hover:text-[#2e2620]"
                    >
                        Follow @norikaatelier
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
                {displayPosts.map((post) => (
                    <a
                        key={post.id}
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        <div className="relative overflow-hidden rounded-[1.1rem] border border-[#efe5d9] bg-[#f7f3ef] shadow-[0_14px_30px_rgba(46,38,32,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(46,38,32,0.12)]">
                            <div className="relative h-40 overflow-hidden sm:h-48 lg:h-52 xl:h-56">
                                {post.media_type === "VIDEO" ? (
                                    <video
                                        src={post.media_url}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                        poster={post.media_url}
                                        aria-label={post.caption ?? "Instagram video"}
                                        muted
                                        loop
                                        playsInline
                                        controls
                                    />
                                ) : (
                                    <Image
                                        src={post.media_url}
                                        alt={post.caption ?? "Instagram post"}
                                        fill
                                        sizes="(min-width:1024px) 25vw, 50vw"
                                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                        unoptimized
                                    />
                                )}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#2e2620]/85 via-[#2e2620]/35 to-transparent px-3 py-3 text-white/90 sm:px-4">
                                <span className="text-[0.62rem] uppercase tracking-[0.18em] text-[#f0e4d1]">
                                    View post
                                </span>
                                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm backdrop-blur-sm">
                                    →
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
