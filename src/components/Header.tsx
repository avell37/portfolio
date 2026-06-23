"use client";

import { motion } from "framer-motion";
import { navLinks, profile } from "@/mock/portfolio";
import { Sparkles } from "lucide-react";

export function Header() {
    return (
        <motion.header
            className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0b14]/70 backdrop-blur-xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a
                    href="#"
                    className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-white"
                    aria-label="На главную"
                >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-xs font-bold text-white shadow-lg shadow-violet-500/25 transition-transform group-hover:scale-105">
                        <Sparkles />
                    </span>
                    <span>{profile.nickname}</span>
                </a>

                <nav aria-label="Основная навигация">
                    <ul className="hidden items-center gap-1 sm:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="rounded-full px-4 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href="https://t.me/avell37"
                    className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-600/20 transition-all hover:shadow-violet-600/40 hover:brightness-110"
                    target="_blank"
                >
                    Связаться
                </a>
            </div>
        </motion.header>
    );
}
