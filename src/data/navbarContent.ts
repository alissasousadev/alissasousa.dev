import type { Language } from "../types/language";

interface NavbarContent {
  about: string;
  projects: string;
  contact: string;
  sayHello: string;
  openMenu: string;
  closeMenu: string;
  changeToEnglish: string;
  changeToPortuguese: string;
}

export const navbarContent: Record<Language, NavbarContent> = {
  "pt-BR": {
    about: "sobre mim",
    projects: "projetos",
    contact: "contato",
    sayHello: "Diga olá",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    changeToEnglish: "Mudar idioma para inglês",
    changeToPortuguese: "Mudar idioma para português",
  },
  en: {
    about: "about me",
    projects: "projects",
    contact: "contact",
    sayHello: "Say hello",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    changeToEnglish: "Change language to English",
    changeToPortuguese: "Change language to Portuguese",
  },
};