"use client";

import { motion } from "framer-motion";
import { contacts, profile } from "@/mock/portfolio";
import { AnimatedSection } from "./AnimatedSection";

const contactItems = [
    {
        label: "Email",
        value: contacts.email,
        href: `mailto:${contacts.email}`,
        icon: (
            <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
            </svg>
        ),
    },
    {
        label: "Telegram",
        value: contacts.telegram,
        href: `https://t.me/${contacts.telegram.replace("@", "")}`,
        icon: (
            <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        value: contacts.github,
        href: `https://${contacts.github}`,
        icon: (
            <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
];

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <AnimatedSection
            id="contact"
            className="relative mt-12 pb-8"
            aria-labelledby="contact-heading"
        >
            <footer className="mx-auto max-w-6xl px-6">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/50 via-slate-900/80 to-cyan-950/50 p-8 sm:p-12">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <p className="mb-2 font-mono text-sm uppercase tracking-widest text-fuchsia-400">
                                Контакты
                            </p>
                            <h2
                                id="contact-heading"
                                className="text-3xl font-bold text-white sm:text-4xl"
                            >
                                Давайте поработаем вместе
                            </h2>
                            <p className="mt-4 max-w-md text-slate-400">
                                Есть идея, проект или просто хочешь
                                поздороваться — пиши, отвечу быстро.
                            </p>
                        </div>

                        <address className="grid gap-3 not-italic sm:grid-cols-1">
                            {contactItems.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target={
                                        item.label === "Email"
                                            ? undefined
                                            : "_blank"
                                    }
                                    rel={
                                        item.label === "Email"
                                            ? undefined
                                            : "noopener noreferrer"
                                    }
                                    className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-4 transition-all hover:border-violet-500/30 hover:bg-white/[0.06]"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    whileHover={{ y: -2 }}
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 transition-colors group-hover:bg-violet-500/20 group-hover:text-violet-300">
                                        {item.icon}
                                    </span>
                                    <span>
                                        <span className="block text-xs text-slate-500">
                                            {item.label}
                                        </span>
                                        <span className="block text-sm font-medium text-white">
                                            {item.value}
                                        </span>
                                    </span>
                                </motion.a>
                            ))}
                        </address>
                    </div>

                    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
                        <p className="text-sm text-slate-500">
                            © {year} {profile.nickname}. Сделано с Next.js и
                            Tailwind.
                        </p>
                        <p className="font-mono text-xs text-slate-600">
                            v1.0 · portfolio
                        </p>
                    </div>
                </div>
            </footer>
        </AnimatedSection>
    );
}
