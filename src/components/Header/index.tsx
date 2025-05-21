import ButtonWhatsApp from "../ButtonWhatsApp";
import RevealOnScroll from "../RevealOnScroll";

import bannerDesktop from "../../assets/images/banner-desktop.png";
import bannerMobile from "../../assets/images/banner-mobile.jpg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full h-screen">
      <Navbar />

      <section className="h-screen px-6 md:px-14 md:pe-0 flex flex-col md:flex-row gap-6 justify-center items-center md:justify-start bg-white">
        <div className="w-full md:w-7/12 flex flex-col items-center md:items-start">
          <RevealOnScroll direction="down">
            <h1 className="font-bold text-2xl md:text-3xl text-center md:text-start text-primary mb-3">
              Dra Thaís Farah
            </h1>

            <h2 className="flex flex-wrap gap-1 text-sm md:text-lg mb-5 text-primary font-medium justify-center md:justify-start">
              <span>Ginecologia,</span>
              <span>Uroginecologia,</span>
              <span>Cirurgia ginecológica e íntima</span>
            </h2>

            <div className="flex justify-center flex-wrap gap-5 md:justify-start">
              <ButtonWhatsApp
                link="https://wa.me/5541999901065?text=Oi%2C%20quero%20marcar%20uma%20consulta%20com%20a%20Dra%20Tha%C3%ADs%20Farah!"
                text="Agendar consulta"
              />
            </div>
          </RevealOnScroll>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <RevealOnScroll direction="up">
            <img
              src={bannerDesktop}
              alt="Dra Thaís Farah com jaleco branco e sorrindo"
              width={620}
              className="not-md:hidden rounded-2xl md:rounded-e-none"
            />
            <img
              src={bannerMobile}
              alt="Dra Thaís Farah com jaleco branco e sorrindo"
              width={520}
              className="md:hidden rounded-2xl md:rounded-e-none"
            />
          </RevealOnScroll>
        </div>
      </section>
    </header>
  );
};

export default Header;
