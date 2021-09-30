module.exports = {
  locales: {
    "/": {
      lang: "English",
      title: "DJOB",
      description: "Developer Diego Orellana",
      nav: [{ text: "Background", link: "/" }],
    },
    "/es/": {
      lang: "Español",
      title: "DJOB",
      description: "Desarrollador Diego Orellana",
      nav: [{ text: "Sobre mí", link: "/es/" }],
    },
    "/it/": {
      lang: "Italiano",
      title: "DJOB",
      description: "Desarrollador Diego Orellana",
      nav: [{ text: "Sobre mí", link: "/it/" }],
    },
  },
  themeConfig: {
    locales: {
      "/": {
        selectText: "Languages",
        nav: [{ text: "Background", link: "/" }],
      },
      "/es/": {
        selectText: "Lenguajes",
        nav: [{ text: "Sobre mí", link: "/es/" }],
      },
    },
  },
};
