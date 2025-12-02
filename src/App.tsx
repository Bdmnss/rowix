import Header from "./layout/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen bg-primary px-12 py-7">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
