import { useEffect, useRef, useState } from "react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLUListElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", applyNavBackground);

    applyNavBackground();
  }, []);

  const applyNavBackground = () => {
    const spans = hamburgerButtonRef.current?.children;

    const updateSpanColors = (add: string, remove: string) => {
      if (spans) {
        setTimeout(() => {
          Array.from(spans).forEach((el) => {
            el.classList.remove(remove);
            el.classList.add(add);
          });
        }, 100);
      }
    };

    if (window.scrollY > 0) {
      navRef.current?.classList.remove(
        "text-white",
        "bg-transparent",
        "bg-white"
      );
      navRef.current?.classList.add("text-primary", "bg-secondary");

      updateSpanColors("bg-primary", "bg-white");
    } else {
      navRef.current?.classList.remove(
        "text-primary",
        "bg-white",
        "bg-secondary"
      );
      navRef.current?.classList.add("text-white", "bg-transparent");

      updateSpanColors("bg-white", "bg-primary");
    }
  };

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
        "bg-secondary",
        "bg-white",
        "text-primary"
      );
      navRef.current?.classList.add(
        "justify-between",
        "bg-transparent",
        "text-white"
      );

      document.body.classList.remove("overflow-hidden");

      applyNavBackground();
    } else {
      //Execute when menu open
      document.body.classList.add("overflow-hidden");

      navRef.current?.classList.remove(
        "justify-between",
        "bg-transparent",
        "bg-white",
        "text-white"
      );
      navRef.current?.classList.add(
        "h-screen",
        "flex-col",
        "gap-8",
        "bg-secondary",
        "text-primary"
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
      className="fixed top-0 z-40 flex justify-between items-center w-full bg-transparent py-2 px-3 md:px-4 text-white transition-all duration-200"
      id="nav"
      ref={navRef}
    >
      <div className="flex justify-between gap-3 pb-2 w-full lg:w-auto">
        <div className="flex flex-col select-none">
          <h1 className="font-bold text-base md:text-lg">Dra Thaís Farah</h1>

          <span className="text-xs">CRM 45740 | RQE 34216</span>
        </div>

        <button
          onClick={handleClick}
          className="relative flex flex-col justify-center items-center lg:hidden cursor-pointer"
          ref={hamburgerButtonRef}
        >
          <span
            className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "bg-primary rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "bg-primary opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen
                ? "bg-primary -rotate-45 -translate-y-1"
                : "translate-y-0.5"
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
