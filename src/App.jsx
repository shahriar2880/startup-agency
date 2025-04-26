import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-300/30 to-blue-200/30 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

export default App;
