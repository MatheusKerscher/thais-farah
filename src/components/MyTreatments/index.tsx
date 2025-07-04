import RevealOnScroll from "../RevealOnScroll";
import myTreatmentList from "./myTreatments.data";

const MyTreatments = () => {
  return (
    <section id="my-treatments" className="p-6 md:p-15 bg-secondary">
      <RevealOnScroll direction="down">
        <h3 className="font-light text-2xl md:text-3xl text-primary uppercase text-center">
          Meus tratamentos
        </h3>
      </RevealOnScroll>

      <div className="flex justify-center gap-6 flex-wrap mt-8">
        {myTreatmentList.map((treatment) => (
          <div
            key={treatment.title}
            className="bg-primary shadow-lg rounded-2xl p-3 flex-1"
          >
            <RevealOnScroll direction="up">
              <h2 className="font-medium text-white mb-3 sm:text-lg text-center">
                {treatment.title}
              </h2>

              <ul className="list-disc ps-5">
                {treatment.description.map((text) => (
                  <li
                    key={text}
                    className="text-sm md:text-base pt-1 text-white"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyTreatments;
