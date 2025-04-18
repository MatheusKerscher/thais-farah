import RevealOnScroll from "../RevealOnScroll";
import myTreatmentList from "./myTreatments.data";

const MyTreatments = () => {
  return (
    <section id="my-treatments" className="px-6 md:px-15">
      <RevealOnScroll direction="down">
        <h3 className="font-light text-2xl md:text-3xl text-primary uppercase text-center">
          Meus tratamentos
        </h3>
      </RevealOnScroll>

      <div className="flex justify-center gap-6 flex-wrap mt-8">
        {myTreatmentList.map((treatment) => (
          <div
            key={treatment.title}
            className="shadow-gray-400 shadow-md rounded-md p-3 flex-1"
          >
            <RevealOnScroll direction="up">
              <h2 className="font-medium text-primary mb-3 sm:text-lg md:text-xl text-center sm:text-start">
                {treatment.title}
              </h2>

              <ul className="list-disc ps-5">
                {treatment.description.map((text) => (
                  <li
                    key={text}
                    className="text-sm md:text-base pt-1 text-tertiary"
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
