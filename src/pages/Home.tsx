import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import type { Language } from "../types/language";

function Home() {
  // Controla o idioma atual do site.
  const [language, setLanguage] = useState<Language>("pt-BR");

  // Função temporária até o modal de contato ser criado.
  function handleOpenContactModal() {
    window.alert( language === "pt-BR" ? 
      "Aqui vamos abrir o modal de contato." : 
      "The contact modal will open here." );
  }

  return (
    <div id="home" className="min-h-screen bg-background text-brand-700">
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onContactClick={handleOpenContactModal}
      />

      <main>
        <section id="about" />
        <section id="projects" />
      </main>
    </div>
  );
}

export default Home;