import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";

const SchedulePage = () => {
  return (
    <>
      <Helmet>
        <title>Schedule | JARVIS 2026</title>
        <meta 
          name="description" 
          content="View the complete schedule for JARVIS 2026 - plan your day with events, workshops, and ceremonies." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <ScanLineOverlay />
        <Navbar />
        <main className="pt-24">
          <Schedule />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SchedulePage;
