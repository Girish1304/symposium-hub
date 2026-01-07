import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Register | JARVIS 2026</title>
        <meta 
          name="description" 
          content="Register now for JARVIS 2026 - Chennai Institute of Technology's premier technical symposium." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <ScanLineOverlay />
        <Navbar />
        <main className="pt-24">
          <Register />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RegisterPage;
