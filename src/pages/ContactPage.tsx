import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | JARVIS 2026</title>
        <meta 
          name="description" 
          content="Get in touch with the JARVIS 2026 team - send us your questions, inquiries, or feedback." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <ScanLineOverlay />
        <Navbar />
        <main className="pt-24">
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
