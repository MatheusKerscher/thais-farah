import { useContext } from "react";

import { FaWhatsapp } from "react-icons/fa6";
import { WhatsAppContext } from "../../context/WhatsAppContext";

type ButtonWhatsAppProps = {
  text: string;
  styleClass?: string;
  ownUrl?: boolean;
  url?: string;
};

const ButtonWhatsApp = ({
  text,
  styleClass = "border-1 border-primary text-primary",
  ownUrl = false,
  url,
}: ButtonWhatsAppProps) => {
  const { whatsAppUrl, whatsAppMessage } = useContext(WhatsAppContext);

  return (
    <a
      href={(ownUrl ? url : whatsAppUrl) + whatsAppMessage}
      target="_blank"
      rel="noopner noreferrer"
      className={`w-fit flex items-center text-center gap-2 cursor-pointer rounded-2xl py-2 px-3 transition-all duration-200 hover:scale-102 ${styleClass}`}
    >
      <FaWhatsapp size={22} /> {text}
    </a>
  );
};

export default ButtonWhatsApp;
