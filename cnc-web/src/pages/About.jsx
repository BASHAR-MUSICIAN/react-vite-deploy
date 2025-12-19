// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { lang } = useLanguage(); // 👈 global language

  const t = {
    pageTitle: { en: "About Zayyan Band", ar: "عن فرقة زيّان" },
    pageSubtitle: {
      en: "Zayyan Band is a live wedding band creating unforgettable entrances, emotional moments, and energetic dance sets.",
      ar: "فرقة زيّان هي فرقة زفاف حيّة تقدّم زفّات مميّزة، لحظات عاطفية، وحفلات مليئة بالطاقة والرقص."
    },

    storyTitle: { en: "❤️ Our Story", ar: "❤️ قصّتنا" },
    storyText: {
      en: "Zayyan Band started as a small group of musicians playing for friends and family weddings. Today, we are known for emotional entrances, powerful dabkeh sets, and warm musical moments that match every couple’s story.",
      ar: "بدأت فرقة زيّان كمجموعة صغيرة من الموسيقيين يعزفون في حفلات العائلة والأصدقاء. اليوم، نُعرَف بزفّات مؤثرة، دبكات قويّة، ولحظات موسيقية دافئة تناسب قصة كل عريس وعروس."
    },

    momentsTitle: { en: "Moments from Zayyan Weddings", ar: "لحظات من حفلات زيّان" },
    momentsSubtitle: {
      en: "A glimpse of entrances, dances, and celebrations we’ve shared with couples.",
      ar: "لمحات من الزفّات، الرقصات، واللحظات التي عشناها مع العرسان."
    },

    videoTitle: { en: "🎬 Highlight Moments", ar: "🎬 لقطات مميّزة" },
    videoSubtitle: {
      en: "Short highlights from real weddings we performed at.",
      ar: "مقتطفات قصيرة من حفلات زفاف أحييناها."
    },

    galleryTitle: { en: "✨ Captured Moments", ar: "✨ لحظات موثّقة" },

    instaTitle: { en: "📸 See More Moments", ar: "📸 شوفوا لحظات أكثر" },
    instaText: {
      en: "Visit our Instagram for full videos, entrances, drum shows, and highlights.",
      ar: "زوروا صفحتنا على إنستغرام لمشاهدة فيديوهات كاملة، زفّات، عروض طبلة، ولقطات مميّزة."
    },
    instaButton: { en: "Open Instagram", ar: "افتح إنستغرام" }
  };

  const moments = [
    {
      src: "/images/zayyan1.jpg",
      title: { en: "Grand Entrance", ar: "دخلة العرسان" },
      text: {
        en: "Zaffeh walk-in with drums, cheering, and lights.",
        ar: "زفّة دخول مع طبول، تصفيق، وإضاءة مميّزة."
      }
    },
    {
      src: "/images/zayyan2.jpg",
      title: { en: "First Dance", ar: "الرقصة الأولى" },
      text: {
        en: "Soft live music for the couple’s first dance.",
        ar: "موسيقى هادئة حيّة لرقصة العرسان الأولى."
      }
    },
    {
      src: "/images/zayyan3.jpg",
      title: { en: "Dabkeh Energy", ar: "طاقة الدبكة" },
      text: {
        en: "Family and friends filling the floor with dabkeh.",
        ar: "أهل وأصدقاء يعمّروا ساحة الرقص بالدبكة."
      }
    },
    {
      src: "/images/zayyan4.jpg",
      title: { en: "Drum Show", ar: "عرض الطبلة" },
      text: {
        en: "Rhythms that keep everyone dancing all night.",
        ar: "إيقاعات تخلي الجميع يرقصوا لآخر السهرة."
      }
    }
  ];

  return (
    <div
      className="min-h-screen bg-[#f7f0e6] text-[#1f2333]"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* 🌟 GLOBAL NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <main className="pt-28 pb-16 px-4 sm:px-6">
        {/* HEADER */}
        <section className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t.pageTitle[lang]}
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg text-[#4f4944] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t.pageSubtitle[lang]}
          </motion.p>
        </section>

        {/* STORY CARD */}
        <section className="max-w-4xl mx-auto mt-16">
          <motion.div
            className="bg-[#fdf7ee] p-8 rounded-3xl shadow-md border border-[#ecdac7]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold mb-3">{t.storyTitle[lang]}</h2>
            <p className="text-sm leading-relaxed text-[#6b5a4a]">
              {t.storyText[lang]}
            </p>
          </motion.div>
        </section>

        {/* HORIZONTAL MOMENTS CAROUSEL */}
        <section className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-center">
            {t.momentsTitle[lang]}
          </h2>
          <p className="text-xs sm:text-sm text-[#6b5a4a] text-center mb-4">
            {t.momentsSubtitle[lang]}
          </p>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 sm:gap-6 snap-x snap-mandatory">
              {moments.map((m, idx) => (
                <motion.div
                  key={idx}
                  className="min-w-[230px] sm:min-w-[260px] bg-[#fdf7ee] rounded-3xl shadow-md border border-[#ecdac7] snap-center flex-shrink-0 overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className="h-44 sm:h-52 overflow-hidden">
                    <img
                      src={m.src}
                      alt={m.title[lang]}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-1">
                      {m.title[lang]}
                    </h3>
                    <p className="text-xs text-[#6b5a4a] leading-relaxed">
                      {m.text[lang]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO FEATURE */}
        <section className="max-w-5xl mx-auto mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t.videoTitle[lang]}
          </h2>
          <p className="text-sm text-[#6b5a4a] mb-6">
            {t.videoSubtitle[lang]}
          </p>

          <div className="rounded-3xl overflow-hidden shadow-lg border border-[#e9d8c4]">
            <video
              src="/videos/highlight1.mp4"
              controls
              className="w-full h-[300px] sm:h-[420px] object-cover"
            />
          </div>
        </section>

        {/* GALLERY */}
        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">
            {t.galleryTitle[lang]}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <img
              src="/images/zayyan1.jpg"
              className="rounded-xl shadow-md object-cover h-40 sm:h-48"
            />
            <img
              src="/images/zayyan2.jpg"
              className="rounded-xl shadow-md object-cover h-40 sm:h-48"
            />
            <img
              src="/images/zayyan3.jpg"
              className="rounded-xl shadow-md object-cover h-40 sm:h-48"
            />
            <img
              src="/images/zayyan4.jpg"
              className="rounded-xl shadow-md object-cover h-40 sm:h-48"
            />
          </div>
        </section>

        {/* INSTAGRAM LINK */}
        <section className="max-w-6xl mx-auto mt-20 mb-10 text-center">
          <div className="bg-[#fdf7ee] border border-[#ecdac7] rounded-3xl py-6 px-6 shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {t.instaTitle[lang]}
            </h2>
            <p className="text-sm text-[#6b5a4a] mb-4">
              {t.instaText[lang]}
            </p>

            <a
              href="https://instagram.com/YOUR_PAGE_HERE"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#b46b5c] hover:bg-[#c47c6d] text-[#fdf7ee] px-6 py-3 rounded-full font-semibold text-sm transition-all"
            >
              {t.instaButton[lang]}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
