import aboutMe from "../../assets/images/about-me.jpg";
import ButtonWhatsApp from "../ButtonWhatsApp";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  return (
    <section
      id="about-me"
      className="flex gap-8 flex-col-reverse lg:flex-row px-6 md:px-15"
    >
      <div className="flex items-center justify-center">
        <img
          src={aboutMe}
          alt="Dra. Thaís Farah Gonçalves sorrindo"
          width="80%"
          className="image-shadow"
        />
      </div>

      <div className="flex flex-col gap-4 text-tertiary">
        <span className="font-bold text-xs uppercase text-primary">
          Sobre mim
        </span>

        <h2 className="text-xl md:text-3xl">Dra. Thaís Farah Gonçalves </h2>

        <RevealOnScroll direction="up">
          <p className="text-justify text-sm md:text-base">
            Sou médica formada pela Universidade Positivo, com residência médica
            em Ginecologia e Obstetrícia pelo Hospital do Trabalhador (HT - PR).
            Me especializei em Uroginecologia no Hospital Universitário
            Evangélico Mackenzie (HUEM - PR) e atualmente estou em constante
            aperfeiçoamento, realizando fellow em cirurgia ginecológica
            minimamente invasiva (videolaparoscopica).
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <p className="text-justify text-sm md:text-base">
            Minha atuação vai além da técnica: acredito em um cuidado
            humanizado, baseado na escuta ativa e na decisão compartilhada com a
            paciente. Cada mulher é única, e o tratamento precisa refletir essa
            individualidade, respeitando suas escolhas, histórias e objetivos.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <p className="text-justify text-sm md:text-base">
            Na minha prática clínica e cirúrgica, atendo tanto casos de maior
            complexidade quanto demandas do dia a dia da saúde da mulher.
            Trabalho com carinho e dedicação nas seguintes áreas:
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <ul className="ms-8 list-disc text-sm md:text-base">
            <li>
              Cirurgias ginecológicas minimamente invasivas (menos dor,
              recuperação mais rápida);
            </li>

            <li className="my-2">
              Uroginecologia (incontinência urinária, infecções de repetição,
              bexiga hiperativa, cirurgias vaginais);
            </li>

            <li className="my-2">
              Anticoncepção personalizada (orientação individual para escolha do
              melhor método);
            </li>

            <li>
              Menopausa e reposição hormonal (acolhendo essa fase com cuidado,
              ciência e empatia).
            </li>
          </ul>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <p className="text-justify text-sm md:text-base">
            O cuidado com a mulher exige conhecimento, sensibilidade e respeito
            pela sua jornada — e é com esse propósito que construo minha prática
            todos os dias.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <p className="text-justify text-sm md:text-base">
            <strong>
              Vamos cuidar de você com leveza, informação e segurança
            </strong>
            .
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <div className="flex justify-center md:justify-start">
            <ButtonWhatsApp
              link="https://wa.me/554198970801?text=Oi%2C%20quero%20marcar%20uma%20consulta%20com%20a%20Dra%20Tha%C3%ADs%20Farah!"
              text="Agende sua consulta"
              styleClass="border-0 bg-tertiary text-white"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;
