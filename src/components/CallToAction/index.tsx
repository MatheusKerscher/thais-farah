import ButtonWhatsApp from "../ButtonWhatsApp";
import RevealOnScroll from "../RevealOnScroll";

import banner from "../../assets/images/cta-banner.jpg"

const CallToAction = () => {
  return (
    <section className="px-6 md:px-15 md:pe-0 flex flex-col md:flex-row justify-center md:justify-between">
      <div
        className="w-full max-w-[560px] bg-no-repeat bg-center flex flex-col justify-center gap-4 p-4 rounded-lg"
      >
        <RevealOnScroll direction="down">
          <span className="text-base md:text-lg text-primary font-medium">
            Tem dúvidas?
          </span>
        </RevealOnScroll>

        <RevealOnScroll direction="down">
          <p className="text-sm md:text-base text-primary text-justify">
            Na minha consulta, toda a atenção está voltada para você. Vamos
            ouvir suas queixas com cuidado, entender o que está acontecendo e
            definir o melhor caminho para o tratamento.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="down">
          <div className="flex justify-center md:justify-start">
            <ButtonWhatsApp
              link="https://wa.me/554131236550?text=Oi%2C%20quero%20marcar%20uma%20consulta%20com%20a%20Dra%20Tha%C3%ADs%20Farah!"
              text="Agendar consulta"
              styleClass="border-1 border-primary text-primary"
            />
          </div>
        </RevealOnScroll>
      </div>

      <div>
        <img src={banner} alt="Dra Thaís Farah sentada em um sofá segurando um celular" className="rounded-2xl md:rounded-e-none" width={460}/>
      </div>
    </section>
  );
};

export default CallToAction;
