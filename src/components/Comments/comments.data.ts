type Comment = {
  description: string;
  author: string;
  source: string;
};

const commentList: Comment[] = [
  {
    author: "Fernanda",
    source: "via Doctoralia",
    description: "A doutora foi atenciosa comigo. Tirou dúvidas, e explicou de uma forma que é fácil entender para quem é leigo sobre a área.",
  },
  {
    author: "Letícia Guidolin",
    source: "via Doctoralia",
    description: "Melhor atendimento que recebi até hoje na ginecologia.",
  },
  {
    author: "Fatima",
    source: "via Doctoralia",
    description: "Muito atenciosa, muito detalhes também, gostei bastante e recomendo",
  },
  {
    author: "Mariety",
    source: "via Doctoralia",
    description: "Amei a Dra Thais, muito simpática e explica muito bem. A clinica é ótima. Todos de Parabéns!!!!",
  },
  {
    author: "Patricia Ianegitz",
    source: "via Doctoralia",
    description: "A Dra. Thais é muito simpática e atenciosa, me tirou as dúvidas com uma explicação detalhada. A consulta aconteceu no horário.",
  },
];

export default commentList;
