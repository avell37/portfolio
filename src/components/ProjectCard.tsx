"use client";

import { motion } from "framer-motion";
import type { Project } from "@/mock/portfolio";

type ProjectCardProps = {
    project: Project;
    index: number;
};

function ProjectLinks({ project }: { project: Project }) {
    if (!project.liveUrl && !project.repoUrl) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition-transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Открыть сайт
                </a>
            )}
            {project.repoUrl && (
                <a
                    href={project.repoUrl}
                    className="rounded-lg border border-white/20 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            )}
        </div>
    );
}

function ProjectStack({
    project,
    variant,
}: {
    project: Project;
    variant: "front" | "detail";
}) {
    const chipClassName =
        variant === "front"
            ? "rounded-md bg-black/30 px-2 py-0.5 text-xs font-medium text-white/90 backdrop-blur-sm"
            : "rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-300";

    return (
        <ul
            className="flex flex-wrap gap-1.5"
            role="list"
            aria-label={`Стек: ${project.title}`}
        >
            {project.stack.map((tech) => (
                <li key={tech}>
                    <span className={chipClassName}>{tech}</span>
                </li>
            ))}
        </ul>
    );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 md:h-80"
        >
            <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 transition-opacity duration-500 md:group-hover:opacity-60`}
                aria-hidden="true"
            />

            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]"
                aria-hidden="true"
            />

            <div className="relative md:hidden">
                <div
                    className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                    aria-hidden="true"
                />
                <div className="relative flex flex-col gap-4 p-6">
                    <h3 className="text-xl font-bold text-white">
                        {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">
                        {project.fullDescription}
                    </p>
                    <ProjectStack project={project} variant="detail" />
                    <ProjectLinks project={project} />
                </div>
            </div>

            <div className="relative hidden h-full flex-col justify-between p-6 md:flex">
                <div>
                    <h3 className="text-xl font-bold text-white">
                        {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                        {project.shortDescription}
                    </p>
                </div>

                <ProjectStack project={project} variant="front" />
            </div>

            <div className="absolute inset-0 hidden translate-y-full flex-col justify-end bg-slate-950/95 p-6 backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex md:group-hover:translate-y-0">
                <p className="mb-4 text-xs leading-relaxed text-slate-300">
                    {project.fullDescription}
                </p>

                <div className="mb-4">
                    <ProjectStack project={project} variant="detail" />
                </div>

                <ProjectLinks project={project} />
            </div>
        </motion.article>
    );
}
