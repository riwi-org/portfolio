const dict = {
    es: {
        title: "Juan David Carreño Arias | Portfolio",
        navAbout: "Sobre mí",
        navProjects: "Proyectos",
        navSkills: "Habilidades",
        navContact: "Contacto",
        heroRole: "Desarrollo software para pequeños negocios. Tengo experiencia como Scrum master y estoy aprendiendo Python e inteligencia artificial.",
        ctaProjects: "Ver proyectos",
        ctaContact: "Contactarme",
        legendBuild: "Lo que construyo",
        legendLearn: "Lo que aprendo",
        rowAI: "IA",
        aboutTitle: "Sobre mí",
        aboutP: "Soy tecnólogo del SENA, con inglés nivel C1. He liderado equipos junior como Scrum master. Me interesan el frontend, los patrones de diseño y el open source. Trabajo con git, GitHub y Conventional Commits, y ahora estoy aprendiendo Python, IA y agentes.",
        fuxiTitle: "Fuxi",
        fuxiP: "Fuxi es la startup que estoy desarrollando. Creamos soluciones de software para pequeños negocios.",
        projectsTitle: "Proyectos",
        p1Title: "Gestión de proyectos con diagrama de Gantt",
        p1Desc: "Aplicación web con React y Node, construida desde cero, incluido el diagrama de Gantt.",
        p2Title: "CRUD para una revista",
        p2Desc: "CRUD con PHP y Laravel para crear, consultar, editar y eliminar los registros de una revista.",
        p3Title: "Chat en tiempo real con WebSockets",
        p3Desc: "Prueba técnica: chat en tiempo real con WebSockets sobre Node.js.",
        p4Title: "Gestión de stock con React Native",
        p4Desc: "Aplicación móvil para gestionar el inventario de un negocio, con React Native y Expo, y un backend en Node.js.",
        private: "Repositorio privado",
        request: "Pedir acceso",
        skillsTitle: "Habilidades",
        skUse: "Lo uso",
        skArch: "Arquitectura y buenas prácticas",
        archPatterns: "Patrones Singleton y Observer",
        archStyles: "Cliente-servidor, MVC y arquitectura en capas",
        bestPr: "Buenas prácticas",
        skMgmt: "Gestión",
        scrum: "Scrum master (liderazgo de equipos junior)",
        skDesign: "Diseño",
        skLearn: "Estoy aprendiendo",
        learnAI: "IA, agentes, RAG y modelos",
        skBasic: "Conocimientos básicos",
        deployNote: "Deploy en Vercel, Railway y Expo.dev (poca experiencia)",
        eduTitle: "Formación e idiomas",
        eduSena: "Tecnólogo en Análisis y Desarrollo de Software, SENA",
        eduMedia: "Mediatécnica en Desarrollo de Software, colegio",
        eduAlura: "Certificado en React, Alura Latam",
        eduRiwi: "Cursando actualmente en Riwi",
        eduLang: "Inglés nivel C1 y español",
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
        heroRole: "I build software for small businesses. I have experience as a Scrum master and I’m learning Python and artificial intelligence.",
        ctaProjects: "View projects",
        ctaContact: "Get in touch",
        legendBuild: "What I build",
        legendLearn: "What I’m learning",
        rowAI: "AI",
        aboutTitle: "About",
        aboutP: "I’m a SENA technologist with English at C1 level. I’ve led junior teams as a Scrum master. I’m interested in frontend, design patterns and open source. I work with git, GitHub and Conventional Commits, and I’m now learning Python, AI and agents.",
        fuxiTitle: "Fuxi",
        fuxiP: "Fuxi is the startup I’m building. We create software solutions for small businesses.",
        projectsTitle: "Projects",
        p1Title: "Project management with a Gantt chart",
        p1Desc: "A web app built with React and Node, made from scratch, including the Gantt chart.",
        p2Title: "CRUD for a magazine",
        p2Desc: "A CRUD built with PHP and Laravel to create, read, edit and delete a magazine’s records.",
        p3Title: "Real-time chat with WebSockets",
        p3Desc: "Technical assessment: a real-time chat built with WebSockets on Node.js.",
        p4Title: "Stock management with React Native",
        p4Desc: "A mobile app to manage a business’s inventory, built with React Native and Expo, with a Node.js backend.",
        private: "Private repository",
        request: "Request access",
        skillsTitle: "Skills",
        skUse: "I use",
        skArch: "Architecture and best practices",
        archPatterns: "Singleton and Observer patterns",
        archStyles: "Client-server, MVC and layered architecture",
        bestPr: "Best practices",
        skMgmt: "Management",
        scrum: "Scrum master (leading junior teams)",
        skDesign: "Design",
        skLearn: "Learning",
        learnAI: "AI, agents, RAG and models",
        skBasic: "Basic knowledge",
        deployNote: "Deployment on Vercel, Railway and Expo.dev (limited experience)",
        eduTitle: "Education and languages",
        eduSena: "Technologist in Software Analysis and Development, SENA",
        eduMedia: "Vocational high school diploma in Software Development",
        eduAlura: "React certificate, Alura Latam",
        eduRiwi: "Currently studying at Riwi",
        eduLang: "English at C1 level and Spanish",
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
