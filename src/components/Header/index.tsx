import ButtonWhatsApp from "../ButtonWhatsApp";
import RevealOnScroll from "../RevealOnScroll";

import Navbar from "./Navbar";

import "./index.css"

const Header = () => {
  return (
    <header className="w-full h-screen">
      <Navbar />

      <section
        id="banner-container"
        className="h-screen px-6 md:px-14 flex justify-center items-center md:justify-start"
      >
        <div className="w-full md:w-7/12 flex flex-col items-center md:items-start">
          <RevealOnScroll direction="left">
            <h2 className="flex flex-col text-xl mb-5 text-white font-medium md:text-2xl items-center md:items-start">
              <span>Ginecologia,</span>
              <span>Uroginecologia,</span>
              <span>Cirurgia ginecológica e íntima</span>
            </h2>

            <div className="flex justify-center flex-wrap gap-5 md:justify-start">
              <ButtonWhatsApp
                text="Agendar consulta"
                styleClass="text-white border-1 border-white"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </header>
  );
};

export default Header;
