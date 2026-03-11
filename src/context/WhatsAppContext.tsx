import { createContext, useEffect, useState, type ReactNode } from "react";

type WhatsAppProviderProps = {
  children: ReactNode;
};

type WhatsAppContextProps = {
  whatsAppUrl: string;
  whatsAppMessage: string;
};

const WhatsAppContext = createContext({} as WhatsAppContextProps);

const WhatsAppProvider = ({ children }: WhatsAppProviderProps) => {
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [whatsMessage, setWhatsMessage] = useState("");

  useEffect(() => {
    const params = window.location.search?.substring(1)?.split("&");
    let whatsAppUrl = "https://wa.me/5541999901065?text=";
    let whatsAppMessage =
      "Olá, gostaria de agendar uma consulta com a Dra Thaís Farah!";

    if (params.length > 1) {
      const campaignUtm = params
        .filter((p) => p.includes("utm_campaign"))?.[0]
        ?.split("=")?.[1]
        ?.toLowerCase();

      const campaignName = params
        .filter((p) => p.includes("utm_term"))?.[0]
        ?.split("=")?.[1]
        ?.toLowerCase();

      if (campaignUtm === "drathaisfarah_search_sm") {
        whatsAppUrl = "https://wa.me/5542998546020?text=";
      }

      switch (campaignName) {
        case "cirurgia-intima":
          whatsAppMessage =
            "Olá, vim do Google e gostaria de agendar consulta com a Dra Thaís Farah, especialista em cirurgia íntima! ";

          break;

        case "rotina":
          whatsAppMessage =
            "Olá, vim do Google e gostaria de agendar consulta ginecológica com a Dra Thaís Farah!";

          break;

        case "incontinencia-urinaria":
          whatsAppMessage =
            "Olá, vim do Google e gostaria de agendar consulta com a Dra Thaís Farah, especialista em incontinência urinária! ";

          break;

        default:
          whatsAppMessage =
            "Olá, gostaria de agendar uma consulta com a Dra Thaís Farah!";
      }
    }

    setWhatsMessage(encodeURIComponent(whatsAppMessage));
    setWhatsAppUrl(whatsAppUrl);
  }, []);

  return (
    <WhatsAppContext.Provider
      value={{
        whatsAppUrl: whatsAppUrl,
        whatsAppMessage: whatsMessage,
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
};

export default WhatsAppProvider;

export { WhatsAppContext };
