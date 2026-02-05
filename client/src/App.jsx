import React from "react";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./Routes/AppRoutes";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;   // ✅ THIS LINE IS REQUIRED
