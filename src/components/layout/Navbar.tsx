import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Mail, X } from "lucide-react";

import alissaLogo from "../../assets/logos/alissa-logo.svg";
import { navbarContent } from "../../data/navbarContent";
import type { Language } from "../../types/language";

interface NavbarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  onContactClick: () => void;
}

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/alissasousa/",
    ariaLabel: "LinkedIn",
    icon: Linkedin,
    isExternal: true,
  },
  {
    href: "https://github.com/alissasousadev",
    ariaLabel: "GitHub",
    icon: Github,
    isExternal: true,
  },
  {
    href: "mailto:alissasousa.dev@outlook.com",
    ariaLabel: "Email",
    icon: Mail,
    isExternal: false,
  },
  {
    href: "https://www.instagram.com/eualissasousa",
    ariaLabel: "Instagram",
    icon: Instagram,
    isExternal: true,
  },
];

function Navbar({
  language,
  onLanguageChange,
  onContactClick,
}: NavbarProps) {
  // Controla se o menu flutuante está aberto ou fechado.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Seleciona os textos de acordo com o idioma atual.
  const content = navbarContent[language];

  // Lista dos links principais da navegação.
  const navigationItems = [
    { label: content.about, href: "#about" },
    { label: content.projects, href: "#projects" },
  ];

  // Abre ou fecha o menu.
  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  // Fecha o menu.
  function closeMenu() {
    setIsMenuOpen(false);
  }

  // Fecha o menu e chama a ação de contato.
  function handleContactAction() {
    closeMenu();
    onContactClick();
  }

  // Fecha o menu ao apertar a tecla ESC.
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  // Impede o scroll da página quando o menu estiver aberto.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Cabeçalho fixo */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {/* Logo em SVG */}
          <a
            href="#home"
            aria-label={language === "pt-BR" ? "Ir para o início" : "Go to home"}
            className="shrink-0"
          >
            <img
              src={alissaLogo}
              alt="Alissa"
              className="h-auto w-[106px] md:w-[130px]"
            />
          </a>

          {/* Mesmo botão para abrir e fechar o menu */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-floating-menu"
            aria-label={isMenuOpen ? content.closeMenu : content.openMenu}
            className="flex h-12 w-12 items-center justify-center"
          >
            {isMenuOpen ? (
              // Ícone X.
              <X className="h-10 w-10 text-brand-700" strokeWidth={1.5} />
            ) : (
              // Ícone hamburger.
              <span className="flex flex-col items-end gap-4">
                <span className="block h-[3px] w-12 rounded-full bg-brand-700" />
                <span className="block h-[2px] w-9 rounded-full bg-brand-700" />
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Menu flutuante */}
      {isMenuOpen && (
        <>
          {/* Overlay para fechar ao clicar fora */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label={content.closeMenu}
            className="fixed inset-0 z-40 bg-background/30"
          />

          {/* Painel do menu */}
          <aside
            id="navbar-floating-menu"
            className="fixed right-6 top-6 z-45 w-[280px] border border-brand-700/10 bg-surface px-6 pt-20 pb-6 text-brand-700 md:right-10 md:top-8 md:w-[290px] md:pt-18"
          >
            {/* Navegação principal */}
            <nav className="mb-10 flex flex-col gap-5">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="font-primary text-[1.05rem] text-brand-700 transition-all duration-300 hover:translate-x-1 hover:opacity-75"
                >
                  {item.label}
                </a>
              ))}

              {/* Botão do modal de contato */}
              <button
                type="button"
                onClick={handleContactAction}
                className="w-fit text-left font-primary text-[1.05rem] text-brand-700 transition-all duration-300 hover:translate-x-1 hover:opacity-75"
              >
                {content.contact}
              </button>
            </nav>

            {/* Área de redes sociais */}
            <div className="mb-10">
              <p className="mb-4 font-primary text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand-700/35">
                {content.sayHello}
              </p>

              <div className="flex items-center gap-4">
                {socialLinks.map(({ href, ariaLabel, icon: Icon, isExternal }) => (
                  <a
                    key={ariaLabel}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    aria-label={ariaLabel}
                    className="transition-opacity duration-300 hover:opacity-70"
                  >
                    <Icon className="h-4 w-4 text-brand-700" strokeWidth={1} />
                  </a>
                ))}
              </div>
            </div>

            {/* Alternador de idioma */}
            <div className="flex items-center gap-2 font-primary text-[0.72rem] font-semibold uppercase tracking-[0.24em]">
              <button
                type="button"
                onClick={() => onLanguageChange("en")}
                aria-label={content.changeToEnglish}
                className={`transition-opacity duration-300 ${
                  language === "en"
                    ? "text-brand-700"
                    : "text-brand-700/40 hover:text-brand-700"
                }`}
              >
                EN
              </button>

              <span className="text-brand-700/25">|</span>

              <button
                type="button"
                onClick={() => onLanguageChange("pt-BR")}
                aria-label={content.changeToPortuguese}
                className={`transition-opacity duration-300 ${
                  language === "pt-BR"
                    ? "text-brand-700"
                    : "text-brand-700/40 hover:text-brand-700"
                }`}
              >
                PT
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

export default Navbar;
