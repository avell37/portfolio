import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "avell — Fullstack разработчик",
    description:
        "Портфолио Сергея — fullstack разработчика. Проекты, навыки и контакты.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            className={`${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}
        >
            <body className="min-h-screen bg-[#0a0b14] font-sans text-slate-200 antialiased">
                {children}
            </body>
        </html>
    );
}
