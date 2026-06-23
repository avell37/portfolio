export type Project = {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    stack: string[];
    gradient: string;
    liveUrl?: string;
    repoUrl?: string;
};

export const profile = {
    name: "Сергей",
    nickname: "avell",
    age: 22,
    role: "Frontend / Fullstack разработчик",
    tagline:
        "Создаю быстрые, продуманные веб-приложения — от API до интерфейса",
    about: "Люблю превращать идеи в рабочий продукт: проектирую архитектуру, пишу чистый код и довожу UX до деталей. Открыт к интересным задачам и долгосрочным проектам.",
    location: "Россия, г. Кострома",
    availability: "Открыт к предложениям",
};

export const skills = [
    { name: "TypeScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Redux Toolkit", category: "Frontend" },
    { name: "Zustand", category: "Frontend" },
    { name: "TanStack Query", category: "Frontend" },
    { name: "Dnd Kit", category: "Frontend" },
    { name: "NestJS", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "REST API", category: "Backend" },
    { name: "WebSocket", category: "Backend" },
    { name: "JWT", category: "Backend" },
    { name: "PostgreSQL", category: "Базы данных" },
    { name: "Prisma ORM", category: "Базы данных" },
    { name: "Redis", category: "Базы данных" },
    { name: "AWS S3", category: "Интеграции" },
    { name: "Email / SMTP", category: "Интеграции" },
    { name: "Google Sheets API", category: "Интеграции" },
    { name: "Docker", category: "DevOps" },
    { name: "CI/CD", category: "DevOps" },
    { name: "Nginx", category: "DevOps" },
    { name: "Git", category: "Инструменты" },
    { name: "GitHub", category: "Инструменты" },
    { name: "Postman", category: "Инструменты" },
];

export const projects: Project[] = [
    {
        id: "rivere",
        title: "Rivere",
        shortDescription:
            "Система управления проектами и задачами в стиле Trello с ролями, приглашениями и аналитикой.",
        fullDescription:
            "Полнофункциональное приложение для командной работы. Пользователи могут создавать рабочие пространства, приглашать участников по email, управлять проектами через Kanban-доски, отслеживать прогресс задач и просматривать статистику активности. Реализована система ролей и прав доступа, достижения пользователей, управление сессиями, загрузка файлов через S3-хранилище и административная панель. Проект развернут в production-среде.",
        stack: [
            "Next.js",
            "TypeScript",
            "Zustand",
            "Axios",
            "Zod",
            "React-hook-form",
            "shadcn/ui",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "AWS S3",
            "WebSocket",
            "Email",
            "Docker",
        ],
        gradient: "from-cyan-500 via-blue-500 to-indigo-600",
        liveUrl: "https://rivere.ru",
        repoUrl: "https://github.com/avell37/Rivere",
    },

    {
        id: "techsy",
        title: "Techsy",
        shortDescription:
            "Интернет-магазин с системой авторизации, отзывами и административной панелью.",
        fullDescription:
            "E-Commerce приложение с каталогом товаров, регистрацией пользователей, системой отзывов и административной панелью управления контентом. Реализованы CRUD-операции для товаров, управление пользователями, авторизация и разграничение доступа. Проект послужил практикой построения полноценного клиент-серверного приложения с использованием современного TypeScript-стека.",
        stack: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Axios",
            "Yup",
            "React-hook-form",
            "shadcn/ui",
            "Express",
            "PostgreSQL",
            "Prisma",
            "Redux Toolkit",
            "OAuth",
            "JWT",
            "Docker",
        ],
        gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
        repoUrl: "https://github.com/avell37/Techsy",
    },
];

export const contacts = {
    email: "shrokov.37@gmail.com",
    telegram: "@avell37",
    github: "github.com/avell37",
};

export const navLinks = [
    { href: "#about", label: "Обо мне" },
    { href: "#skills", label: "Навыки" },
    { href: "#projects", label: "Проекты" },
    { href: "#contact", label: "Контакты" },
];
