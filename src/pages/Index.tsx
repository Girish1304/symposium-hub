import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NEXUS 2025 - College Technical Symposium | Innovation Meets Inspiration</title>
        <meta 
          name="description" 
          content="Join NEXUS 2025, the premier college technical symposium featuring 50+ events, hackathons, workshops, and talks from industry leaders. March 15-17, 2025." 
        />
        <meta name="keywords" content="college symposium, technical fest, hackathon, tech event, NEXUS 2025" />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <ScanLineOverlay />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Speakers />
          <Schedule />
          <Register />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
