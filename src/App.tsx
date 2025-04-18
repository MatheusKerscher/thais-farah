import About from "./components/About";
import AcademicBackground from "./components/AcademicBackground";
import Addresses from "./components/Addresses";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyTreatments from "./components/MyTreatments";

function App() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-12 mt-10">
        <About />
        <AcademicBackground />
        <MyTreatments />
        <CallToAction />
        <Contact />
        <Addresses />
      </main>

      <Footer />
    </>
  );
}

export default App;
