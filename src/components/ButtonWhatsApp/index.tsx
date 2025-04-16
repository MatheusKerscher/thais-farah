import { FaWhatsapp } from "react-icons/fa6";

type ButtonWhatsAppProps = {
  link: string;
  text: string;
};

const ButtonWhatsApp = ({ link, text }: ButtonWhatsAppProps) => {
  return (
    <a 
      href={link} 
      target="_blank"
      rel="noopner noreferrer"
      className="w-fit flex gap-2 cursor-pointer border-1 border-white text-white rounded-md py-2 px-3 transition-all duration-200 hover:scale-102"
    >
      <FaWhatsapp size={22}/> {text}
    </a>
  );
};

export default ButtonWhatsApp;
