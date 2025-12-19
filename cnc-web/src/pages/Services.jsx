// src/pages/Services.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import Navbar from "../components/Navbar";

export default function Services() {
  const { lang } = useLanguage();
  const [activeService, setActiveService] = useState(null);

  // --------- TEXT + DATA ---------
  const t = {
    pageTitle: {
      en: "Services for Your Wedding Night",
      ar: "خدمات لحفلة زفافكم",
    },
    pageSubtitle: {
      en: "Choose the mix of entrances, live music, and dance energy that fits your style.",
      ar: "اختاروا المزيج اللي بناسبكم من الزفّة، الموسيقى الحيّة، وأجواء الرقص.",
    },
    ctaText: {
      en: "Tell us your date and venue, and we’ll help you build the perfect music plan.",
      ar: "خبرونا عن تاريخ الزفاف والمكان، ومنبني معكم برنامج موسيقي يناسبكم.",
    },
    ctaButton: {
      en: "Contact Us to Plan the Night",
      ar: "تواصلوا معنا لتنظيم السهرة",
    },
    modalClose: {
      en: "Close",
      ar: "إغلاق",
    },
    modalAskButton: {
      en: "Ask About This Service",
      ar: "اسأل عن هذه الخدمة",
    },
  };

  // Main services
  const services = [
    {
      id: "zaffeh",
      title: { en: "1. Zaffeh", ar: "١- الزفّة" },
      short: {
        en: "Traditional or modern entrance with drums and live music for the couple’s walk-in.",
        ar: "زفّة تقليدية أو عصرية مع طبول وموسيقى حيّة لدخلة العرسان.",
      },
      long: {
        en: "From classic Palestinian zaffeh to modern entrances with lighting and drums, we design the entrance to match your personality and venue. We can coordinate with your photographer and planner so the timing and music hit perfectly.",
        ar: "من زفّة فلسطينية كلاسيكية إلى دخلة عصرية مع إضاءة وطبول، منجهّز الزفّة على ذوقكم وحسب طبيعة القاعة. مننسّق مع المصوّر ومنظّم الحفل عشان اللحظة تكون كاملة من أوّل خطوة.",
      },
      bullets: {
        en: [
          "Choice of traditional or modern entrance style",
          "Live drums + recorded or live music",
          "Custom song for the entrance if you prefer",
        ],
        ar: [
          "اختيار أسلوب الزفّة: تراثية أو عصرية",
          "طبول حيّة + موسيقى مسجّلة أو فرقة حيّة",
          "إمكانية اختيار أغنية خاصة لدخلة العرسان",
        ],
      },
      video: "/videos/zaffeh.mp4", // TODO: put real file OR leave empty
    },
    {
      id: "drum-show",
      title: { en: "2. Drum Show", ar: "٢- عرض الطبلة" },
      short: {
        en: "High-energy drum show to light up the dance floor and start the party.",
        ar: "عرض طبول مليء بالطاقة يحمّس المعازيم ويفتح ساحة الرقص.",
      },
      long: {
        en: "Our drum show is designed to turn the night up. We move through the crowd, interact with guests, and build drops that make everyone jump in. Perfect for after-dinner or to restart the dance floor.",
        ar: "عرض الطبلة مصمَّم ليولّع السهرة. منمشي بين المعازيم، منتفاعل معهم، ومنبني إيقاعات توقف وبعدين ترجع بقوّة عشان الكل يدخل بالجو. مثالي بعد العشاء أو لما تحبوا ترجعوا تفتحوا ساحة الرقص.",
      },
      bullets: {
        en: [
          "Solo or multiple drummers available",
          "Works with DJ or live band",
          "Can be synced with CO₂, sparklers, or lights",
        ],
        ar: [
          "إمكانية عازف واحد أو أكثر",
          "يناسب الـDJ أو الفرقة الحيّة",
          "ممكن يتزامن مع مؤثرات مثل الإضاءة أو الفاير ووركس",
        ],
      },
      video: "/videos/drumshow.mp4",
    },
    {
      id: "live-music",
      title: { en: "3. Live Music", ar: "٣- موسيقى حيّة" },
      short: {
        en: "Live band playing Arabic classics, modern hits, and international songs.",
        ar: "فرقة حيّة تعزف طرب عربي، أغانٍ حديثة، وموسيقى عالمية.",
      },
      long: {
        en: "We shape the energy of the night with sets that move from soft, romantic songs to high-energy dance tracks. You can share your favorite artists and we’ll build the set list around your taste.",
        ar: "منتحكّم بجوّ السهرة من خلال فقرات تبدأ بموسيقى هادئة ورومانسية وبعدين تتحوّل لأغاني راقصة مليانة طاقة. بتقدروا تبعتولنا أسمـاء فنّانين أو أغانٍ بتحبوها ومنبني البرنامج على ذوقكم.",
      },
      bullets: {
        en: [
          "Arabic + international repertoire",
          "Can include first dance, cake, and slow sets",
          "Flexible band size (duo, trio, full band)",
        ],
        ar: [
          "ريبرتوار عربي وعالمي",
          "يشمل الرقصة الأولى، فقرة الكيك، وفقـرات هادئة",
          "إمكانية اختيار حجم الفرقة (ديو، تريو، فرقة كاملة)",
        ],
      },
      video: "/videos/livemusic.mp4",
    },
    {
      id: "dabkeh",
      title: { en: "4. Dabkeh", ar: "٤- الدبكة" },
      short: {
        en: "Dabkeh sets with powerful rhythms for traditional dancing with family and friends.",
        ar: "فقرات دبكة على إيقاعات قوية للرقص مع الأهل والأصدقاء.",
      },
      long: {
        en: "We create dabkeh sections that mix classic lines everybody knows with modern variations. Great for big families that love to dance in circles and take the floor together.",
        ar: "منجهّز فقرات دبكة تمزج بين الخطوات الكلاسيكية اللي الكل بعرفها مع لمسات عصرية. مثالية للعائلات الكبيرة اللي بتحب ترقص سوا وتعمّر ساحة القاعة.",
      },
      bullets: {
        en: [
          "Can be led by a main dancer or by the band",
          "Choice of traditional or remix dabkeh tracks",
          "Perfect to connect both sides of the family",
        ],
        ar: [
          "إمكانية وجود قائد للدبكة أو تكون عفوية مع الفرقة",
          "اختيار بين دبكة تراثية أو ريمكسات عصرية",
          "مثالية لدمج أهل العريس والعروس في نفس الحلقة",
        ],
      },
      video: "/videos/dabkeh.mp4",
    },
    {
      id: "solo-drummer",
      title: { en: "5. Solo Drummer", ar: "٥- عازف طبلة منفرد" },
      short: {
        en: "Solo drummer to join the DJ or band, perfect for transitions and dance moments.",
        ar: "عازف طبلة منفرد مع الـDJ أو الفرقة، مثالي لفترات الرقص والانتقالات.",
      },
      long: {
        en: "If you already have a DJ, adding a live drummer brings the music to life. We play on top of the tracks, build drops, and interact with your guests during hyped moments.",
        ar: "إذا عندكم DJ جاهز، إضافة عازف طبلة حيّ بتخلي الأغاني تعيش أكثر. مننعزف فوق التراكات، منعمل دروبس، ومنتفاعل مع المعازيم في اللحظات الحماسية.",
      },
      bullets: {
        en: [
          "Works with your existing DJ",
          "Perfect for entrances and dance breaks",
          "Compact setup – fits any venue",
        ],
        ar: [
          "يعمل مع الـDJ اللي عندكم أصلاً",
          "ممتاز للدخلات وفترات الرقص القصيرة",
          "تجهيزات بسيطة تناسب أي قاعة",
        ],
      },
      video: "/videos/solodrummer.mp4",
    },
  ];

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <div className="min-h-screen bg-[#f7f0e6] text-[#1f2333]" dir={dir}>
      {/* Global navbar */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="pt-28 pb-16 px-4 sm:px-6">
        {/* HEADER */}
        <section className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.pageTitle[lang]}
          </h1>
          <p className="text-sm sm:text-lg text-[#4f4944] max-w-3xl mx-auto">
            {t.pageSubtitle[lang]}
          </p>
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className="text-left bg-[#fdf7ee] rounded-3xl shadow-md border border-[#ecdac7] p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
            >
              <h2 className="text-lg font-semibold mb-2">
                {service.title[lang]}
              </h2>
              <p className="text-sm text-[#6b5a4a]">{service.short[lang]}</p>
              <p className="mt-3 text-xs text-[#b46b5c] underline">
                {lang === "en" ? "Tap to see details" : "اضغط لعرض التفاصيل"}
              </p>
            </button>
          ))}
        </section>

        {/* CTA BELOW GRID */}
        <section className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-sm sm:text-base text-[#4f4944] mb-4">
            {t.ctaText[lang]}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full
                       bg-[#b46b5c] hover:bg-[#c47c6d] text-[#fdf7ee] text-sm font-semibold
                       transition-colors"
          >
            {t.ctaButton[lang]}
          </Link>
        </section>
      </main>

      {/* MODAL – details for one service */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-3xl w-full max-h-[90vh] bg-[#fdf7ee] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
              dir={dir}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-3 right-4 text-[#3e3247] text-xl font-bold"
                aria-label={t.modalClose[lang]}
              >
                ×
              </button>

              {/* VIDEO */}
              {activeService.video ? (
                <video
                  src={activeService.video}
                  controls
                  className="w-full h-52 sm:h-64 object-cover bg-black"
                />
              ) : (
                <div className="w-full h-40 sm:h-52 bg-[#d9c7aa] flex items-center justify-center text-sm text-[#4f4944]">
                  {lang === "en"
                    ? "Preview video coming soon"
                    : "فيديو توضيحي سيتم إضافته قريباً"}
                </div>
              )}

              {/* TEXT CONTENT – scrollable */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                  {activeService.title[lang]}
                </h2>

                <p className="text-sm text-[#6b5a4a] mb-4">
                  {activeService.long[lang]}
                </p>

                <ul className="list-disc text-sm text-[#6b5a4a] pl-5 space-y-1 mb-6">
                  {activeService.bullets[lang].map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 justify-between items-center">
                  <button
                    onClick={() => setActiveService(null)}
                    className="px-4 py-2 rounded-full border border-[#b46b5c] text-[#b46b5c] text-xs sm:text-sm hover:bg-[#f6e2da] transition-colors"
                  >
                    {t.modalClose[lang]}
                  </button>

                  <Link
                    to="/contact"
                    state={{ serviceId: activeService.id }}
                    className="px-5 py-2 rounded-full bg-[#b46b5c] hover:bg-[#c47c6d] text-[#fdf7ee] text-xs sm:text-sm font-semibold transition-colors"
                  >
                    {t.modalAskButton[lang]}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
