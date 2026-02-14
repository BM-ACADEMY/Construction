import React from "react";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./Routes/AppRoutes";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import Whatsapp from "./components/Pages/FloatingWhatsAppButton"; // Import Whatsapp

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <Whatsapp /> {/* Add Whatsapp button here */}
      <Footer />
    </>
  );
};

export default App;   // ✅ THIS LINE IS REQUIRED
