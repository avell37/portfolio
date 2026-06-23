"use client";

import { motion } from "framer-motion";
import { profile } from "@/mock/portfolio";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export function Hero() {
    return (
        <section
            id="about"
            aria-labelledby="hero-heading"
            className="relative flex min-h-screen items-center overflow-hidden pt-16"
        >
            <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
            >
                <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
                <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
                <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[100px]" />
            </div>

            <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.p
                        variants={item}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        {profile.availability}
                    </motion.p>

                    <motion.h1
                        id="hero-heading"
                        variants={item}
                        className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        Привет, я{" "}
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                            {profile.name}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="mt-4 text-xl text-slate-300 sm:text-2xl"
                    >
                        {profile.age} года · {profile.role}
                    </motion.p>

                    <motion.p
                        variants={item}
                        className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
                    >
                        {profile.tagline}
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-transform hover:scale-105"
                        >
                            Смотреть проекты
                            <span
                                className="transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                            >
                                →
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
                        >
                            Написать мне
                        </a>
                    </motion.div>
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, scale: 0.95, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative"
                    aria-label="Краткая информация"
                >
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

                        <div className="relative space-y-6">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                                    Локация
                                </p>
                                <p className="mt-1 text-lg text-white">
                                    {profile.location}
                                </p>
                            </div>

                            <div
                                className="h-px bg-white/10"
                                role="separator"
                            />

                            <blockquote className="text-base leading-relaxed text-slate-300">
                                «{profile.about}»
                            </blockquote>

                            <div className="flex flex-wrap gap-2">
                                {["Frontend", "Backend", "DevOps", "UI/UX"].map(
                                    (tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className="absolute -bottom-4 -right-4 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl"
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        aria-hidden="true"
                    >
                        <p className="font-mono text-2xl font-bold text-cyan-400">
                            1+
                        </p>
                        <p className="text-xs text-slate-400">
                            год в разработке
                        </p>
                    </motion.div>
                </motion.aside>
            </div>
        </section>
    );
}
