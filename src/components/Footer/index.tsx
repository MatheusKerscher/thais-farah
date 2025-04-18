const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 md:px-15 pb-3 pt-6 bg-gray-50 flex flex-col justify-center items-center text-sm">
      <span className="font-parisienne text-lg font-bold">Dra Thaís Farah</span>
      <span>CRM 45740 | RQE 34.216</span>

      <span className="mt-4">
        Este site obedece às orientações do Conselho Federal de Medicina
      </span>

      <span className="mt-3 mb-1">&copy; {year} - Todos os Direitos Reservados</span>

      <span>
        Desenvolvido por{" "}
        <a
          href="https://matheuskerscher.github.io/links/"
          target="_blank"
          rel="noopner noreferrer"
          className="underline font-bold"
        >
          Matheus Kerscher
        </a>
      </span>
    </footer>
  );
};

export default Footer;
