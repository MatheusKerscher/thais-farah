import myTreatmentList from "./myTreatments.data";

const MyTreatments = () => {
  return (
    <section id="my-treatments" className="px-6 md:px-15">
      <h3 className="font-light text-2xl md:text-3xl text-primary uppercase text-center">Meus tratamentos</h3>

      <div className="flex justify-center gap-6 flex-wrap mt-8">
          {myTreatmentList.map((treatment) => (
            <div key={treatment.title} className="shadow-gray-400 shadow-md rounded-md p-3">
              <h2 className="font-medium text-primary mb-3">{treatment.title}</h2>

              <ul className="list-disc ps-5 text-tertiary">
                {treatment.description.map((text) => (
                  <li key={text} className="text-sm pt-1">{text}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MyTreatments;
