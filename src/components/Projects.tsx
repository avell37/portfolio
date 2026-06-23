"use client";

import { projects } from "@/mock/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
    return (
        <AnimatedSection
            id="projects"
            className="relative py-24"
            aria-labelledby="projects-heading"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="mx-auto max-w-6xl px-6">
                <header className="mb-12">
                    <p className="mb-2 font-mono text-sm uppercase tracking-widest text-cyan-400">
                        Портфолио
                    </p>
                    <h2
                        id="projects-heading"
                        className="text-3xl font-bold text-white sm:text-4xl"
                    >
                        Избранные проекты
                    </h2>
                    <p className="mt-3 max-w-2xl text-slate-400">
                        <span className="md:hidden">
                            Подробности, стек и ссылки к каждому проекту.
                        </span>
                        <span className="hidden md:inline">
                            Наведи на карточку — увидишь подробности, стек и
                            ссылки.
                        </span>
                    </p>
                </header>

                <div className="grid gap-6 sm:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}
