import { FaWhatsapp } from "react-icons/fa6";

type ButtonWhatsAppProps = {
  link: string;
  text: string;
  styleClass?: string
};

const ButtonWhatsApp = ({ link, text, styleClass = "border-1 border-white text-white" }: ButtonWhatsAppProps) => {
  return (
    <a 
      href={link} 
      target="_blank"
      rel="noopner noreferrer"
      className={`w-fit flex items-center text-center gap-2 cursor-pointer rounded-md py-2 px-3 transition-all duration-200 hover:scale-102 ${styleClass}`}
    >
      <FaWhatsapp size={22}/> {text}
    </a>
  );
};

export default ButtonWhatsApp;
