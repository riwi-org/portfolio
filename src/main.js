const dict = {
    es: {
        title: "Juan David Carreño Arias | Portfolio",
        navAbout: "Sobre mí",
        navProjects: "Proyectos",
        navSkills: "Habilidades",
        navContact: "Contacto",
        heroRole: "Desarrollo software para pequeños negocios y estoy aprendiendo Python e inteligencia artificial.",
        ctaProjects: "Ver proyectos",
        ctaContact: "Contactarme",
        legendBuild: "Lo que construyo",
        legendLearn: "Lo que aprendo",
        rowAI: "IA",
        aboutTitle: "Sobre mí",
        aboutP: "Soy tecnólogo del SENA y bilingüe en inglés y español. Me interesan el frontend y los proyectos open source. Sé trabajar con git y GitHub, y ahora estoy aprendiendo Python e IA.",
        fuxiTitle: "Fuxi",
        fuxiP: "Fuxi es la startup que estoy desarrollando. Creamos soluciones de software para pequeños negocios.",
        projectsTitle: "Proyectos",
        p1Title: "Gestión de proyectos con diagrama de Gantt",
        p1Desc: "Aplicación web con React y Node, construida desde cero, incluido el diagrama de Gantt.",
        p2Title: "CRUD para una revista",
        p2Desc: "Aplicación sencilla para crear, consultar, editar y eliminar los registros de una revista.",
        private: "Repositorio privado",
        request: "Pedir acceso",
        skillsTitle: "Habilidades",
        skUse: "Lo uso",
        skLearn: "Estoy aprendiendo",
        skBasic: "Conocimientos básicos",
        eduTitle: "Formación e idiomas",
        eduDegree: "Tecnólogo, SENA",
        eduLang: "Bilingüe: inglés y español",
        contactTitle: "Contacto",
        contactP: "¿Tienes un proyecto o quieres conversar? Escríbeme.",
        footer: "© 2026 Juan David Carreño Arias",
        ariaLang: "Cambiar idioma a inglés",
        ariaTheme: "Cambiar tema claro u oscuro",
    },
    en: {
        title: "Juan David Carreño Arias | Portfolio",
        navAbout: "About",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",
        heroRole: "I build software for small businesses, and I’m learning Python and artificial intelligence.",
        ctaProjects: "View projects",
        ctaContact: "Get in touch",
        legendBuild: "What I build",
        legendLearn: "What I’m learning",
        rowAI: "AI",
        aboutTitle: "About",
        aboutP: "I’m a SENA technologist, bilingual in English and Spanish. I’m interested in frontend and open source projects. I work with git and GitHub, and I’m now learning Python and AI.",
        fuxiTitle: "Fuxi",
        fuxiP: "Fuxi is the startup I’m building. We create software solutions for small businesses.",
        projectsTitle: "Projects",
        p1Title: "Project management with a Gantt chart",
        p1Desc: "A web app built with React and Node, made from scratch, including the Gantt chart.",
        p2Title: "CRUD for a magazine",
        p2Desc: "A simple app to create, read, edit and delete a magazine’s records.",
        private: "Private repository",
        request: "Request access",
        skillsTitle: "Skills",
        skUse: "I use",
        skLearn: "Learning",
        skBasic: "Basic knowledge",
        eduTitle: "Education and languages",
        eduDegree: "Technologist, SENA",
        eduLang: "Bilingual: English and Spanish",
        contactTitle: "Contact",
        contactP: "Have a project or want to chat? Write to me.",
        footer: "© 2026 Juan David Carreño Arias",
        ariaLang: "Switch language to Spanish",
        ariaTheme: "Toggle light or dark theme",
    },
};

const root = document.documentElement;

function setLang(lang) {
    const t = dict[lang];
    root.lang = lang;
    document.title = t.title;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t[el.dataset.i18n];
    });
    document.getElementById("lang-label").textContent = lang === "es" ? "EN" : "ES";
    document.getElementById("lang-btn").setAttribute("aria-label", t.ariaLang);
    document.getElementById("theme-btn").setAttribute("aria-label", t.ariaTheme);
    try {
        localStorage.setItem("lang", lang);
    } catch (e) {}
}

let lang = (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
try {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") lang = saved;
} catch (e) {}
setLang(lang);

document.getElementById("lang-btn").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    setLang(lang);
});

document.getElementById("theme-btn").addEventListener("click", () => {
    const dark = root.classList.toggle("dark");
    try {
        localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {}
});