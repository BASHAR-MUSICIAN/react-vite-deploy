// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import { LanguageProvider } from "./LanguageContext";
import Navbar from "./components/Navbar"; // we'll create this next

// WhatsApp bubble stays the same as before (if you’re using it)
function WhatsAppBubble() {
  const whatsappNumber = "0000000000"; // put your real number
  const message = encodeURIComponent(
    "Hi Zayyan Band, I’d like to ask about wedding music."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 px-4 py-3 rounded-full shadow-lg bg-[#25D366] text-[#0f1a10] text-sm font-semibold flex items-center gap-2 hover:brightness-110 transition"
    >
      <span>WhatsApp Zayyan Band</span>
    </a>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <WhatsAppBubble />
    </LanguageProvider>
  );
}
