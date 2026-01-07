import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import TechnicalEvents from "@/components/TechnicalEvents";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";
import GoatBackground from "@/components/GoatBackground";

const Events = () => {
  return (
    <>
      <Helmet>
        <title>Technical Events | JARVIS 2026</title>
        <meta 
          name="description" 
          content="Explore 9 exciting technical events at JARVIS 2026 - Robo War, RC Adventure, Line Following Robot, Paper Presentation, and more!" 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <GoatBackground />
        <ScanLineOverlay />
        <Navbar />
        <main className="pt-24">
          <TechnicalEvents />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Events;
