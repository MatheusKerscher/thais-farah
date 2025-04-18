import RevealOnScroll from "../RevealOnScroll";
import addressList from "./addresses.data";

const Addresses = () => {
  return (
    <section className="px-6 md:px-15 py-6">
      <RevealOnScroll direction="up">
        <h3 className="font-light text-2xl md:text-3xl text-primary uppercase text-center">
          Meus locais de atendimento
        </h3>
      </RevealOnScroll>

      <div className="flex flex-wrap gap-8 justify-center mt-10 text-tertiary">
        {addressList.map((address) => (
          <div
            key={address.title}
            className="p-4 flex flex-col items-center justify-between gap-4 shadow-xl border-1 border-gray-100 rounded-lg w-full md:w-5/12"
          >
            <RevealOnScroll direction="up">
              <h4 className="font-light text-xl md:text-2xl text-center">
                {address.title}
              </h4>
            </RevealOnScroll>

            <RevealOnScroll direction="up">
              <span className="text-sm md:text-base block text-center">
                <span className="font-bold">Endereço:</span> {address.address}
              </span>
            </RevealOnScroll>

            <RevealOnScroll direction="up">
              <div className="flex justify-center gap-4">
                <a
                  className="font-bold transition-all duration-200 hover:underline text-sm md:text-base"
                  href={address.link}
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  Agendar consulta
                </a>

                {address.phoneLink && (
                  <a
                    className="font-bold transition-all duration-200 hover:underline text-sm md:text-base"
                    href={address.phoneLink}
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    Telefone
                  </a>
                )}
              </div>
            </RevealOnScroll>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Addresses;
