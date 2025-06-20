import { FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";

import doctoraliaIcon from "../../assets/icons/icon-doctoralia.svg";
import RevealOnScroll from "../RevealOnScroll";
import { useContext } from "react";
import { WhatsAppContext } from "../../context/WhatsAppContext";

const Contact = () => {
  const { whatsAppUrl } = useContext(WhatsAppContext);
  
  return (
    <section id="contact" className="px-6 md:px-15 py-8 bg-secondary">
      <RevealOnScroll direction="down">
        <h3 className="font-light text-2xl md:text-3xl text-primary uppercase text-center">
          Contato
        </h3>
      </RevealOnScroll>

      <div className="mt-8 flex flex-wrap flex-col sm:flex-row gap-8 justify-center text-white">
        <RevealOnScroll direction="up">
          <a
            className="flex flex-col gap-2 items-center p-4 bg-primary rounded-2xl shadow-lg"
            href={whatsAppUrl}
            target="_blank"
            rel="noopner noreferrer"
          >
            <span className="flex gap-2 font-light items-center">
              <FaWhatsapp size={22} />
              WhatsApp
            </span>

            <span className="font-medium">Clique aqui para agendar</span>
          </a>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <a
            className="flex flex-col gap-2 items-center p-4 bg-primary rounded-2xl shadow-lg"
            href="https://www.instagram.com/dra.thaisfarah?igsh=MXBvanM5aW1kcmd5Zw=="
            target="_blank"
            rel="noopner noreferrer"
          >
            <span className="flex gap-2 font-light items-center">
              <FaInstagram size={22} />
              Instagram
            </span>

            <span className="font-medium">@dra.thaisfarah</span>
          </a>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <a
            className="flex flex-col gap-2 items-center p-4 bg-primary rounded-2xl shadow-lg"
            href="https://www.doctoralia.com.br/thais-farah-lundgren/ginecologista/curitiba"
            target="_blank"
            rel="noopner noreferrer"
          >
            <span className="flex gap-2 font-light items-center">
              <img
                src={doctoraliaIcon}
                alt="Ícone do doctoralia"
                width="22px"
              />
              Doctoralia
            </span>

            <span className="font-medium">Visualizar meu perfil</span>
          </a>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <a
            className="flex flex-col gap-2 items-center p-4 bg-primary rounded-2xl shadow-lg"
            href="mailto:thais@clinicayoni.com.br"
            target="_blank"
            rel="noopner noreferrer"
          >
            <span className="flex gap-2 font-light items-center">
              <FaRegEnvelope size={22} />
              Email
            </span>

            <span className="font-medium">thais@clinicayoni.com.br</span>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;
