"use client";

import { motion } from "framer-motion";
import { skills } from "@/mock/portfolio";
import { AnimatedSection } from "./AnimatedSection";

const categories = [...new Set(skills.map((s) => s.category))];

export function Skills() {
    return (
        <AnimatedSection
            id="skills"
            className="relative py-24"
            aria-labelledby="skills-heading"
        >
            <div className="mx-auto max-w-6xl px-6">
                <header className="mb-12">
                    <p className="mb-2 font-mono text-sm uppercase tracking-widest text-violet-400">
                        Стек
                    </p>
                    <h2
                        id="skills-heading"
                        className="text-3xl font-bold text-white sm:text-4xl"
                    >
                        Навыки и технологии
                    </h2>
                    <p className="mt-3 max-w-2xl text-slate-400">
                        Инструменты, с которыми работаю каждый день — список
                        легко заменить под себя.
                    </p>
                </header>

                <div className="grid gap-8 lg:grid-cols-2">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                delay: catIndex * 0.1,
                                duration: 0.5,
                            }}
                            className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
                        >
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                                {category}
                            </h3>
                            <ul className="flex flex-wrap gap-2" role="list">
                                {skills
                                    .filter((s) => s.category === category)
                                    .map((skill, i) => (
                                        <motion.li
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay:
                                                    catIndex * 0.1 + i * 0.05,
                                            }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                        >
                                            <span className="inline-block cursor-default rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-violet-500/40 hover:text-white">
                                                {skill.name}
                                            </span>
                                        </motion.li>
                                    ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
