import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | JARVIS 2026</title>
        <meta 
          name="description" 
          content="Find answers to frequently asked questions about JARVIS 2026 - registration, events, workshops, and logistics." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <ScanLineOverlay />
        <Navbar />
        <main className="pt-24">
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
