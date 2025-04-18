type Treatment = {
  title: string;
  description: string[];
};

const myTreatmentList: Treatment[] = [
  {
    title: "Ginecologia",
    description: [
      "anticoncepção",
      " inserção de DIU com e sem sedação",
      "⁠climatério e menopausa ",
      "⁠miomas e adenomiose",
      "⁠sangramento uterino anormal",
    ],
  },
  {
    title: "Uroginecologia",
    description: [
      "incontinência urinária",
      "⁠disfunções miccionals",
      "infecção urinária de repetição",
      "prolapsos de paredes vaginais e órgãos pélvicos",
    ],
  },
  {
    title: "Cirurgia íntima",
    description: [
      "correção de hipertrofia de pequenos lábios",
      "⁠perineoplastia",
      "⁠correção de alterações pós-parto",
    ],
  },
];

export default myTreatmentList;
