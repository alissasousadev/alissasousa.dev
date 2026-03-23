import type { Language } from "../../types/language";

/* Props da seção Hero */
interface HeroProps {
  language: Language;
}

/* Estrutura do conteúdo traduzido da Hero */
type HeroContent = {
  greeting: string;
  titleFilled: string;
  titleOutlined: string;
  description: string;
  aboutLabel: string;
};

/* Conteúdo traduzido da Home */
const heroCopy: Record<Language, HeroContent> = {
  "pt-BR": {
    greeting: "OLÁ, MEU NOME É ALISSA",
    titleFilled: "Developer",
    titleOutlined: "Full Stack",
    description:
      "Desenvolvo sites e aplicações web com foco em performance, usabilidade e identidade visual, criando experiências digitais funcionais, intuitivas e pensadas para gerar resultado.",
    aboutLabel: "Ir para a seção sobre mim",
  },
  en: {
    greeting: "HELLO, MY NAME IS ALISSA",
    titleFilled: "Developer",
    titleOutlined: "Full Stack",
    description:
      "I develop websites and web applications focused on performance, usability, and visual identity, creating digital experiences that are functional, intuitive, and designed to deliver results.",
    aboutLabel: "Go to about section",
  },
};

/* Classes reutilizadas do título */
const titleTextClass =
  "shrink-0 text-[52px] leading-[0.95] sm:text-[68px] md:text-[78px] lg:text-[82px] lg:leading-[82px] xl:text-[94px] xl:leading-[94px]";

/* Espaço visual usado entre palavras e antes do ponto final */
const titleSpacerClass = "inline-block w-2 sm:w-3 lg:w-3 xl:w-4";

/* Hero principal da Home */
function Hero({ language }: HeroProps) {
  /* Seleciona o conteúdo conforme o idioma atual */
  const content = heroCopy[language];

  return (
    /* Seção inicial da página */
    <section
      id="home"
      aria-label={language === "pt-BR" ? "Seção inicial" : "Hero section"}
      className="overflow-x-clip bg-background"
    >
      {/*Container principal */}
      <div className="mx-auto w-full max-w-[1440px] px-6 py-6 md:px-10 lg:px-16">
        {/*Área principal da Hero */}
        <div className="flex min-h-[calc(100vh-88px)] items-start pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-30 lg:pb-24">
          {/*Bloco textual*/}
          <div className="w-full max-w-[1120px]">
            {/* Subtítulo superior*/}
            <a
              href="#about"
              className="mb-3 inline-block font-primary text-[15px] font-bold uppercase tracking-[0.08em] text-accent transition-opacity duration-300 hover:opacity-80 focus:outline-none focus-visible:opacity-80 sm:text-[17px] sm:leading-[28px] lg:mb-4 lg:text-[19px] lg:leading-[31px]"
              aria-label={content.aboutLabel}
            >
              {content.greeting}
            </a>

            {/* Wrapper do título */}
            <div className="w-full overflow-hidden">
              {/*Título principal */}
              <h1 className="flex flex-wrap items-baseline gap-y-2 font-title font-semibold tracking-[-0.04em] text-primary lg:flex-nowrap">
                {/* Palavra principal preenchida */}
                <span className={titleTextClass}>{content.titleFilled}</span>

                {/* Espaço visual entre as duas palavras do título */}
                <span className={titleSpacerClass} aria-hidden="true" />

                {/* Palavra secundária com contorno */}
                <span className={titleTextClass}>
                  <span
                    className="text-transparent"
                    style={{ WebkitTextStroke: "1.2px var(--color-primary)" }}
                  >
                    {content.titleOutlined}
                  </span>

                  {/* Espaço visual antes do ponto final */}
                  <span className={titleSpacerClass} aria-hidden="true" />

                  {/* Ponto final do título */}
                  <span className="text-primary">.</span>
                </span>
              </h1>
            </div>

            {/*Texto de apoio */}
            <p className="mt-3 max-w-none font-primary font-light text-[22px] leading-[34px] text-primary/75 sm:text-[26px] sm:leading-[38px] lg:mt-8 lg:text-[32px] lg:leading-[45px]">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;