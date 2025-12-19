// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/about", key: "about", label: { en: "About", ar: "من نحن" } },
    {
      path: "/services",
      key: "services",
      label: { en: "Services", ar: "الخدمات" },
    },
    {
      path: "/contact",
      key: "contact",
      label: { en: "Contact", ar: "تواصل معنا" },
    },
  ];

  const handleLang = (code) => {
    if (code !== lang) setLang(code);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR (always LTR so NOTHING shifts) */}
      <nav
        dir="ltr"
        className="fixed top-0 left-0 w-full z-50 bg-[#f7f0e6]/95 backdrop-blur-md border-b border-[#e7d8c7]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          {/* 3 columns: [language] [brand] [links/menu] */}
          <div className="grid grid-cols-3 items-center">
            {/* LEFT: language toggle */}
            <div className="flex items-center justify-start">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <button
                  onClick={() => handleLang("en")}
                  className={
                    lang === "en"
                      ? "font-semibold text-[#1f2333]"
                      : "text-[#7a6c5c] hover:text-[#1f2333]"
                  }
                >
                  EN
                </button>
                <span className="text-[#c0a58a]">|</span>
                <button
                  onClick={() => handleLang("ar")}
                  className={
                    lang === "ar"
                      ? "font-semibold text-[#1f2333]"
                      : "text-[#7a6c5c] hover:text-[#1f2333]"
                  }
                >
                  AR
                </button>
              </div>
            </div>

            {/* CENTER: brand (home link) */}
            <div className="flex items-center justify-center">
              <Link
                to="/"
                className="text-xs sm:text-sm tracking-[0.28em] uppercase text-[#2f2a2c] font-semibold"
              >
                ZAYYAN BAND
              </Link>
            </div>

            {/* RIGHT: desktop links or mobile hamburger */}
            <div className="flex items-center justify-end">
              {/* Desktop links */}
              <div className="hidden sm:flex items-center gap-6 text-sm text-[#3e3247]">
                {links.map((link) => (
                  <Link
                    key={link.key}
                    to={link.path}
                    className={`relative pb-0.5 hover:text-black transition-colors ${
                      isActive(link.path) ? "text-black font-semibold" : ""
                    }`}
                  >
                    {link.label[lang]}
                    {isActive(link.path) && (
                      <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#394562] rounded-full" />
                    )}
                  </Link>
                ))}
              </div>

              {/* Mobile hamburger */}
              <button
                className="sm:hidden flex flex-col gap-1.5 items-center justify-center w-8 h-8"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <span className="w-5 h-[2px] bg-[#1f2333] rounded-full" />
                <span className="w-5 h-[2px] bg-[#1f2333] rounded-full" />
                <span className="w-5 h-[2px] bg-[#1f2333] rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU SHEET */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            dir="ltr"
            className="fixed inset-0 z-40 sm:hidden bg-black/35 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="absolute top-0 left-0 right-0 bg-[#f7f0e6] rounded-b-3xl shadow-xl px-6 pt-5 pb-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top row inside sheet */}
              <div className="flex items-center justify-between mb-4">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="text-xs tracking-[0.28em] uppercase text-[#2f2a2c] font-semibold"
                >
                  ZAYYAN BAND
                </Link>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-xl text-[#1f2333]"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              {/* Language toggle inside menu (also fixed, no flip) */}
              <div className="flex items-center gap-2 text-xs mb-4">
                <button
                  onClick={() => handleLang("en")}
                  className={
                    lang === "en"
                      ? "font-semibold text-[#1f2333]"
                      : "text-[#7a6c5c] hover:text-[#1f2333]"
                  }
                >
                  EN
                </button>
                <span className="text-[#c0a58a]">|</span>
                <button
                  onClick={() => handleLang("ar")}
                  className={
                    lang === "ar"
                      ? "font-semibold text-[#1f2333]"
                      : "text-[#7a6c5c] hover:text-[#1f2333]"
                  }
                >
                  AR
                </button>
              </div>

              {/* Menu links */}
              <nav className="flex flex-col gap-3 text-lg text-[#2f2a2c]">
                {links.map((link) => (
                  <Link
                    key={link.key}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={isActive(link.path) ? "font-semibold" : ""}
                  >
                    {link.label[lang]}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
