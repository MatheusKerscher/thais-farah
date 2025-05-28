import About from "./components/About";
import AcademicBackground from "./components/AcademicBackground";
import Addresses from "./components/Addresses";
import CallToAction from "./components/CallToAction";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyTreatments from "./components/MyTreatments";

function App() {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <About />
        <AcademicBackground />
        <MyTreatments />
        <CallToAction />
        <Comments />
        <Contact />
        <Addresses />
      </main>

      <Footer />
    </>
  );
}

export default App;
