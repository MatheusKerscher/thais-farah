import About from "./components/About";
import AcademicBackground from "./components/AcademicBackground";
import Header from "./components/Header";
import MyTreatments from "./components/MyTreatments";

function App() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-12 mt-10 mb-10">
        <About />

        <AcademicBackground />

        <MyTreatments />
      </main>
    </>
  );
}

export default App;
