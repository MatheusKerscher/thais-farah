import addressList from "./addresses.data";

const Addresses = () => {
  return (
    <section className="px-6 md:px-15 py-6">
      <h3 className="font-light text-2xl md:text-3xl text-primary uppercase text-center">
        Meus locais de atendimento
      </h3>

      <div className="flex flex-wrap gap-6 justify-center mt-10 text-tertiary">
        {addressList.map((address) => (
          <div key={address.title} className="p-4 flex flex-col items-center justify-between gap-4 shadow-xl rounded-lg w-full md:w-5/12">
            <h4 className="font-light text-xl md:text-2xl text-center">{address.title}</h4>

            <span className="text-sm md:text-base block text-center">
              <span className="font-bold">Endereço:</span> {address.address}
            </span>

            <a
              className="font-bold transition-all duration-200 hover:underline text-sm md:text-base"
              href={address.link}
              target="_blank"
              rel="noopner noreferrer"
            >
              Agendar consulta
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Addresses;
