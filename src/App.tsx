import Header from "./layout/Header";
import HeroSection from "./components/HeroSection";
import ReasonsSection from "./components/ReasonsSection";
import ServicesSection from "./components/ServicesSection";
import WorksSection from "./components/WorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-primary px-12 py-7">
      <Header />
      <main className="flex flex-col gap-28">
        <HeroSection />

        <ReasonsSection />

        <ServicesSection />

        <WorksSection />

        <TestimonialsSection />

        <FAQSection />

        <Footer />
      </main>
    </div>
  );
}

export default App;
