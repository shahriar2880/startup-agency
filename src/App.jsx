import "./App.css";
import CompanyLogo from "./components/comanylogo/CompanyLogo";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import PurposeSection from "./components/purpose/PurposeSection";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -right-28 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-l from-indigo-600/10 to-blue-600/10 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo/>
        <PurposeSection/>
      </div>
    </main>
  );
}

export default App;
