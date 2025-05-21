import { FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";

import doctoraliaIcon from "../../assets/icons/icon-doctoralia.svg";
import RevealOnScroll from "../RevealOnScroll";

const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-15 py-8 bg-white">
      <RevealOnScroll direction="down">
        <h3 className="font-light text-2xl md:text-3xl text-primary uppercase text-center">
          Contato
        </h3>
      </RevealOnScroll>

      <div className="mt-8 flex flex-wrap flex-col sm:flex-row gap-8 justify-center text-primary divide-primary divide-y-1 sm:divide-x-1 sm:divide-y-0">
        <RevealOnScroll direction="up">
          <a
            className="flex flex-col gap-2 items-center pb-6 sm:pb-0 sm:pe-6"
            href="https://wa.me/5541999901065?text=Oi%2C%20quero%20marcar%20uma%20consulta%20com%20a%20Dra%20Tha%C3%ADs%20Farah!"
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
            className="flex flex-col gap-2 items-center pb-6 sm:pb-0 sm:pe-6"
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
            className="flex flex-col gap-2 items-center pb-6 sm:pb-0 sm:pe-6"
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
            className="flex flex-col gap-2 items-center pb-6 sm:pb-0 sm:pe-6"
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
