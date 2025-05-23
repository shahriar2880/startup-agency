import "./App.css";
import CompanyLogo from "./components/comanylogo/CompanyLogo";
import FeaturesSection from "./components/features/FeaturesSection";
import FooterSection from "./components/footer/FooterSection";
import Hero from "./components/hero/Hero";
import MonitorSection from "./components/monitorsection/MonitorSection";
import Navbar from "./components/nav/Navbar";
import NewsletterSection from "./components/newsletter/NewsletterSection";
import PricingSection from "./components/pricingsection/PricingSection";
import PurposeSection from "./components/purpose/PurposeSection";
import ScheduleSection from "./components/schedulesection/ScheduleSection";
import ServicesSection from "./components/services/ServicesSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -right-28 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/30 to-red-500/40 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/30 to-red-500/40 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo/>
        <FeaturesSection/>
        <PurposeSection/>
        <ScheduleSection/>
        <PricingSection/>
        <MonitorSection/>
        <ServicesSection/>
        <TestimonialsSection/>
        <NewsletterSection/>
        <FooterSection/>
      </div>
    </main>
  );
}

export default App;
