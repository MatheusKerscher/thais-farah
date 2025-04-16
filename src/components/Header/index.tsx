import { useRef, useState } from "react";

import ButtonWhatsApp from "../ButtonWhatsApp";

import './index.css'
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      navRef.current?.classList.remove("h-screen", "z-10", "flex-col", "gap-8", "bg-white", "text-primary");
      navRef.current?.classList.add("justify-between", "bg-transparent", "text-white");

      listRef.current?.classList.add("hidden");
      listRef.current?.classList.remove("flex", "flex-col", "animate-slide-right");
    } else {
      navRef.current?.classList.add("h-screen", "z-10", "flex-col", "gap-8", "bg-white", "text-primary");
      navRef.current?.classList.remove("justify-between", "bg-transparent", "text-white");

      listRef.current?.classList.remove("hidden");
      listRef.current?.classList.add("flex", "flex-col", "animate-slide-right");
    }
  };

  return (
    <header className="w-full h-screen">
      <nav
        className="fixed top-0 flex justify-between items-center w-full bg-transparent py-2 px-3 md:px-4 text-white"
        id="nav"
        ref={navRef}
      >
        <div className="flex justify-between w-full md:w-auto">
          <div className="flex flex-col">
            <h1 className="font-medium">Dra Thaís Farah</h1>

            <span className="text-sm">CRM 45740 | RQE 34216</span>
          </div>

          <button
            onClick={handleClick}
            className="relative flex flex-col justify-center items-center md:hidden"
          >
            <span
              className={`block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? "bg-primary rotate-45 translate-y-1" : "bg-white -translate-y-0.5"
                      }`}
            ></span>
            <span
              className={`block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? "bg-primary opacity-0" : " bg-white opacity-100"
                      }`}
            ></span>
            <span
              className={`block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? "bg-primary -rotate-45 -translate-y-1" : "bg-white translate-y-0.5"
                      }`}
            ></span>
          </button>
        </div>

        <ul className="hidden md:flex justify-between gap-4 text-center" ref={listRef}  onClick={handleClick}>
          <li className="transition-all duration-150 hover:font-medium">
            <a href="#about-me">Sobre mim</a>
          </li>

          <li className="transition-all duration-150 hover:font-medium">
            <a href="#academic-background">Formação acadêmica</a>
          </li>

          <li className="transition-all duration-150 hover:font-medium">
            <a href="#my-treatments">Procedimentos</a>
          </li>

          <li className="transition-all duration-150 hover:font-medium">
            <a href="#comments">Depoimentos</a>
          </li>
          
          <li className="transition-all duration-150 hover:font-medium">
            <a href="#contact">Contato</a>
          </li>

          <div className="flex justify-center gap-3 md:hidden mt-5">
            <li>
              <a
                href="https://www.instagram.com/dramayaradealmeidap?igsh=MWliMDAzaWJzeXJ6cA=="
                target="_blank"
                rel="noopner noreferrer"
              >
                <FaInstagram size={22}/>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/5541984827145?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra%20Mayara%20de%20Almeida%20Pereira."
                target="_blank"
                rel="noopner noreferrer"
              >
                <FaWhatsapp size={22}/>
              </a>
            </li>
          </div>
        </ul>
      </nav>

      <section
        id="banner-container"
        className="h-screen px-6 md:px-14 flex justify-center items-center md:justify-start"
      >
        <div className="w-full md:w-6/12 flex flex-col not-md:items-center">
          <h2 className="flex flex-col text-lg mb-5 text-white font-medium md:text-2xl not-md:items-center">
            <span>Ginecologia,</span>
            <span>Uroginecologia e</span>
            <span>Cirurgia ginecológica e íntima</span>
          </h2>

          <ButtonWhatsApp link="a" text="Agende sua consulta" />
        </div>
      </section>
    </header>
  );
};

export default Header;
