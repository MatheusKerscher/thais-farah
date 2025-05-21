const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 md:px-15 pb-5 pt-6 bg-white flex flex-col justify-center items-center text-sm">
      <span className="font-bold">Dra Thaís Farah</span>
      <span className="text-xs">CRM 45740 | RQE 34216</span>

      <span className="mt-4 text-center">
        Este site obedece às orientações do Conselho Federal de Medicina
      </span>

      <span className="mt-3 mb-1">&copy; {year} - Todos os Direitos Reservados</span>

      <span className="mt-5">
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
