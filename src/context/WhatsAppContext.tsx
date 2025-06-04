import { createContext, useEffect, useState, type ReactNode } from "react";

type WhatsAppProviderProps = {
  children: ReactNode;
};

type WhatsAppContextProps = {
  whatsAppUrl: string;
};

const WhatsAppContext = createContext({} as WhatsAppContextProps);

const WhatsAppProvider = ({ children }: WhatsAppProviderProps) => {
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  useEffect(() => {
    const params = window.location.search?.substring(1)?.split("&");

    setWhatsAppUrl(
      "https://wa.me/5541999901065?text=Oi%2C%20quero%20marcar%20uma%20consulta%20com%20a%20Dra%20Tha%C3%ADs%20Farah!"
    );

    if (params.length > 1) {
      const campaignUtm = params
        .filter((p) => p.includes("utm_campaign"))?.[0]
        ?.split("=")?.[1]
        ?.toLowerCase();

      if (campaignUtm === "drathaisfarah_search_sm") {
        setWhatsAppUrl(
          "https://wa.me/5542998546020?text=Oi%2C%20quero%20marcar%20uma%20consulta%20com%20a%20Dra%20Tha%C3%ADs%20Farah!"
        );
      }
    }
  }, []);

  return (
    <WhatsAppContext.Provider
      value={{
        whatsAppUrl: whatsAppUrl,
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
};

export default WhatsAppProvider;

export { WhatsAppContext };
