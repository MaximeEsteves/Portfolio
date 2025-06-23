import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./styles/Main.scss";

import Header from "./pages/Home/Header";
import Footer from "./pages/Home/Footer";
import Home from "./pages/Home/Home";
import Propos from "./pages/Propos/Propos";
import Logement from "./pages/Logement/Logement";
import Error from "./pages/Error/Error";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Propos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
);
