import { useRef, useState } from "react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLUListElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
    if (window.innerWidth >= 1024) return;

    setIsOpen(!isOpen);

    if (isOpen) {
      //Execute when menu close
      listRef.current?.classList.add("hidden");
      listRef.current?.classList.remove(
        "flex",
        "flex-col",
        "animate-slide-right"
      );

      navRef.current?.classList.remove(
        "h-screen",
        "flex-col",
        "gap-8",
      );
      navRef.current?.classList.add("justify-between");

      document.body.classList.remove("overflow-hidden");
    } else {
      //Execute when menu open
      document.body.classList.add("overflow-hidden");

      navRef.current?.classList.remove("justify-between");
      navRef.current?.classList.add(
        "h-screen",
        "flex-col",
        "gap-8",
      );

      listRef.current?.classList.remove("hidden");
      listRef.current?.classList.add("flex", "flex-col", "animate-slide-right");
    }
  };

  function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);

    if (element) {
      const offset = 75;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  return (
    <nav
      className="fixed top-0 z-40 flex justify-between items-center w-full py-2 px-3 md:px-4 text-primary bg-white transition-all duration-200"
      id="nav"
      ref={navRef}
    >
      <div className="flex justify-between w-full lg:w-auto">
        <div className="flex flex-col select-none">
          <span className="font-bold font-parisienne text-md">Dra Thaís Farah</span>

          <span className="text-xs">CRM 45740 | RQE 34216</span>
        </div>

        <button
          onClick={handleClick}
          className="relative flex flex-col justify-center items-center lg:hidden cursor-pointer"
          ref={hamburgerButtonRef}
        >
          <span
            className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>

      <ul
        className="hidden lg:flex justify-between gap-4 text-center"
        ref={listRef}
        onClick={handleClick}
      >
        <li
          className="transition-all duration-150 hover:font-bold hover:cursor-pointer"
          onClick={() => scrollToElement("about-me")}
        >
          Sobre mim
        </li>

        <li
          className="transition-all duration-150 hover:font-bold hover:cursor-pointer"
          onClick={() => scrollToElement("academic-background")}
        >
          Formação acadêmica
        </li>

        <li
          className="transition-all duration-150 hover:font-bold hover:cursor-pointer"
          onClick={() => scrollToElement("my-treatments")}
        >
          Procedimentos
        </li>

        <li
          className="transition-all duration-150 hover:font-bold hover:cursor-pointer"
          onClick={() => scrollToElement("comments")}
        >
          Depoimentos
        </li>

        <li
          className="transition-all duration-150 hover:font-bold hover:cursor-pointer"
          onClick={() => scrollToElement("contact")}
        >
          Contato
        </li>

        <div className="flex justify-center gap-3 lg:hidden mt-5">
          <li>
            <a
              href="https://www.instagram.com/dra.thaisfarah?igsh=MXBvanM5aW1kcmd5Zw=="
              target="_blank"
              rel="noopner noreferrer"
            >
              <FaInstagram size={22} />
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/5541999901065?text=Oi%2C%20quero%20marcar%20uma%20consulta%20com%20a%20Dra%20Tha%C3%ADs%20Farah!"
              target="_blank"
              rel="noopner noreferrer"
            >
              <FaWhatsapp size={22} />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
