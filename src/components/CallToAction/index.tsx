import ButtonWhatsApp from "../ButtonWhatsApp";
import RevealOnScroll from "../RevealOnScroll";
import "./index.css";

const CallToAction = () => {
  return (
    <section className="px-6 md:px-15">
      <div
        id="cta-banner"
        className="w-full max-w-[560px] h-[85vh] mx-auto bg-no-repeat bg-center flex flex-col justify-end gap-4 p-4 rounded-lg"
      >
        <RevealOnScroll direction="left">
          <span className="text-sm md:text-base text-white font-medium">
            Tem dúvidas?
          </span>
        </RevealOnScroll>

        <RevealOnScroll direction="left">
          <p className="text-sm md:text-base text-white text-justify">
            Na minha consulta, toda a atenção está voltada para você. Vamos
            ouvir suas queixas com cuidado, entender o que está acontecendo e
            definir o melhor caminho para o tratamento.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="left">
          <div className="flex justify-center md:justify-start">
            <ButtonWhatsApp
              link="https://wa.me/554198970801?text=Oi%2C%20quero%20marcar%20uma%20consulta%20com%20a%20Dra%20Tha%C3%ADs%20Farah!"
              text="Entrar em contato"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CallToAction;
