// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaDrum, FaMusic, FaUsers } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import Navbar from "../components/Navbar";


export default function Home() {
  const { lang } = useLanguage();

  const content = {
    en: {
      heroTitle: "Zayyan Band",
      heroSubtitle:
        "Live Arabic and international music for romantic entrances, first dances, and unforgettable wedding nights.",
      heroCta: "Book Your Wedding Date",
      offerTitle: "What We Offer",
      offerItems: [
        { icon: <FaDrum />, label: "Zaffeh & Drum Shows" },
        { icon: <FaMusic />, label: "Live Band & Dabkeh Sets" },
        { icon: <FaUsers />, label: "Custom Wedding Programs" },
      ],
      whyTitle: "Why Couples Book Zayyan Band",
      whyCards: [
        {
          title: "Personalized for Your Story",
          text: "We build each set around your entrance, first dance, and the vibe you want for the night.",
        },
        {
          title: "Arabic + International Mix",
          text: "From dabkeh and tarab to modern hits, we balance tradition with a modern party feel.",
        },
        {
          title: "Smooth, Professional Flow",
          text: "We coordinate with your planner, MC, and venue so the music matches every moment.",
        },
      ],
    },

    ar: {
      heroTitle: "فرقة زيّان",
      heroSubtitle:
        "موسيقى زفاف حيّة بالعربي والعالمي لزفّة مميّزة، دخلة العرسان، ورقص لآخر السهرة.",
      heroCta: "احجز موعد زفافك",
      offerTitle: "شو منقدّم",
      offerItems: [
        { icon: <FaDrum />, label: "زفّة وعروض طبلة" },
        { icon: <FaMusic />, label: "فرقة حيّة ورقص دبكة" },
        { icon: <FaUsers />, label: "برنامج خاص على ذوقكم" },
      ],
      whyTitle: "ليش تختاروا فرقة زيّان؟",
      whyCards: [
        {
          title: "موسيقى على قصة حبكم",
          text: "منصمّم البرنامج حسب دخلة العرسان، الرقصة الأولى، وطبيعة السهرة اللي بتحبوها.",
        },
        {
          title: "خليط عربي وعالمي",
          text: "من دبكة وطرب لأغاني حديثة، منوازن بين الأصالة والأجواء الشبابية.",
        },
        {
          title: "تنظيم واحترافية",
          text: "مننسّق مع منظم الحفل، الـMC، والقاعة عشان الموسيقى تمشي مع كل لحظة.",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#f7f0e6] text-[#1f2333]">
      <Navbar />

      <main className="pt-28 pb-16 px-4 sm:px-6">
        {/* HERO */}
        <section className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#d9c7aa] shadow-xl">
            {/* HERO IMAGE */}
            <div className="h-[420px] w-full">
              <img
                src="/images/zayyan.JPG"
                alt="Zayyan Band"
                className="w-full h-full object-cover"
              />
            </div>

            

            {/* HERO TEXT CARD */}
            <div
              className={`
                absolute inset-x-4 sm:inset-x-10 md:left-1/2 md:-translate-x-1/2
                md:w-[55%] lg:w-[40%]
                top-1/2 -translate-y-1/2
                bg-[#fdf7ee] text-[#1f2333] rounded-3xl shadow-lg
                px-6 sm:px-10 py-10
                flex flex-col items-center text-center
                transition-all duration-300 ease-out
                hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-[52%]
                z-10
                ${lang === "ar" ? "font-[system-ui]" : ""}
              `}
              dir={lang === "ar" ? "rtl" : "ltr"}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {t.heroTitle}
              </h1>

              <p className="text-sm sm:text-base mb-6 text-[#4f4944]">
                {t.heroSubtitle}
              </p>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full
                           border border-[#394562] text-[#394562] text-base font-medium
                           hover:bg-[#394562] hover:text-[#fdf7ee] transition-colors"
              >
                {t.heroCta}
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="max-w-6xl mx-auto mt-16" dir={lang === "ar" ? "rtl" : "ltr"}>
          <h2 className="text-center text-xl sm:text-2xl font-semibold mb-6">
            {t.offerTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.offerItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#fdf7ee] rounded-2xl px-4 py-4 shadow-sm border border-[#ecdac7]"
              >
                <div className="text-xl text-[#394562]">{item.icon}</div>
                <p className="text-sm text-[#4f4944]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY SECTION */}
        <section className="max-w-6xl mx-auto mt-16" dir={lang === "ar" ? "rtl" : "ltr"}>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">
            {t.whyTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.whyCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#fdf7ee] rounded-3xl shadow-md border border-[#ecdac7] p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                <p className="text-sm text-[#6b5a4a]">{card.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
