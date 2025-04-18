const AcademicBackground = () => {
  return (
    <section id="academic-background" className="bg-primary flex flex-wrap md:flex-nowrap items-center justify-center gap-6 px-6 py-12">
      <span className="block font-light text-2xl md:text-3xl text-secondary uppercase text-center">Formação acadêmica</span>

      <div className="ps-4 flex flex-col border-l-0 md:border-l border-secondary text-secondary">
        <div>
          <span className="block academic-background relative ps-2 mb-4 text-sm md:text-base">Médica pela Universidade Positivo, em Curitiba-PR </span>
        </div>

        <span className="block academic-background relative ps-2 mb-4 text-sm md:text-base">
          Ginecologista e obstetra pelo Hospital do Trabalhador (HT-PR), em
          Curitiba-PR
        </span>

        <span className="block academic-background relative ps-2 mb-4 text-sm md:text-base">
          Uroginecologista pelo Hospital Universitário Evangélico Mackenzie, em
          Curitiba-PR
        </span>

        <span className="block academic-background relative ps-2 text-sm md:text-base">
          Fellow em cirurgia ginecológica minimamente
          invasiva/videolaparoscópica
        </span>
      </div>
    </section>
  );
};

export default AcademicBackground;
