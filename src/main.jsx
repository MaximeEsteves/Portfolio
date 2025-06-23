import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./styles/Main.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Propos from "./pages/Propos";
import Logement from "./pages/Logement";
import Error from "./pages/Error";

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
