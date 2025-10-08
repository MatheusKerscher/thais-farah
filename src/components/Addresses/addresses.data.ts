type Address = {
  title: string;
  address: string;
  link: string;
  phoneLink?: string;
};

const addressList: Address[] = [
  {
    title: "Clínica Yoni",
    address:
      "R. Padre Anchieta, 2050 - sala 2504, 25° andar - Bigorrilho, Curitiba - PR, 80730-001",
    link: "https://wa.me/5541999901065?text=Oi%2C%20quero%20marcar%20uma%20consulta%20com%20a%20Dra%20Tha%C3%ADs%20Farah!",
  },
  {
    title: "Consultório São Mateus do Sul",
    address:
      "R. Dom Pedro II, 201 - Centro - São Mateus do Sul - PR, 83900-120",
    link: "https://wa.me/5542998546020?text=Oi%2C%20quero%20marcar%20uma%20consulta%20com%20a%20Dra%20Tha%C3%ADs%20Farah!",
    phoneLink: "tel:+554235322442",
  },
];

export default addressList;
