// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaPhone, FaCommentDots, FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { lang } = useLanguage(); // ⭐ global language (en/ar)

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(null);

  const t = {
    leftTitle: {
      en: "Let’s Talk About Your Wedding",
      ar: "خلّينا نحكي عن زفافكم",
    },
    leftText: {
      en: "Share your date, venue, and the feeling you want for the night. We’ll help you create a live music plan that fits your style.",
      ar: "احكولنا عن موعد الزفاف، مكان الحفل، والأجواء اللي بتحبوها. منساعدكم تبنوا برنامج موسيقي يناسبكم.",
    },
    leftList1: {
      en: "Custom entrances & first dances",
      ar: "دخلة خاصة ورقصة أولى مميّزة",
    },
    leftList2: {
      en: "Dabke / traditional sets + modern hits",
      ar: "دبكة وفقـرات تراثية مع أغانٍ حديثة",
    },
    leftList3: {
      en: "Arabic + international repertoire",
      ar: "مزيج من الأغاني العربية والعالمية",
    },
    leftList4: {
      en: "Flexible band size for any venue",
      ar: "تشكيلة مرنة للفرقة حسب حجم القاعة",
    },
    whatsappLabel: {
      en: "Prefer WhatsApp?",
      ar: "بتفضّلوا واتساب؟",
    },
    whatsappButton: {
      en: "Chat with us on WhatsApp",
      ar: "تواصل معنا على واتساب",
    },

    rightTitle: {
      en: "Contact Zayyan Band",
      ar: "تواصل مع فرقة زيّان",
    },
    rightSubtitle: {
      en: "We’ll reply with our availability and details as soon as possible.",
      ar: "منرجعلكم بأقرب وقت بالتفاصيل والتوفّر.",
    },

    namePlaceholder: { en: "Full Name", ar: "الاسم الكامل" },
    phonePlaceholder: { en: "Phone Number", ar: "رقم الهاتف" },
    emailPlaceholder: {
      en: "Email (optional)",
      ar: "الإيميل (اختياري)",
    },
    messagePlaceholder: {
      en: "Wedding date, venue, approximate time, and any special requests.",
      ar: "تاريخ الزفاف، القاعة، التوقيت التقريبي، وأي تفاصيل أو طلبات خاصة.",
    },
    submitButton: {
      en: "Send Request",
      ar: "إرسال الطلب",
    },
    successMsg: {
      en: "✅ Your message has been sent. We’ll contact you soon.",
      ar: "✅ تم إرسال رسالتك. سنتواصل معك قريباً.",
    },
    errorMsg: {
      en: "❌ Something went wrong. Please try again later.",
      ar: "❌ حدث خطأ ما. حاول مرة أخرى لاحقاً.",
    },
    requiredAlert: {
      en: "Name and phone number are required.",
      ar: "الاسم ورقم الهاتف حقول مطلوبة.",
    },
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert(t.requiredAlert[lang]);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setSuccess(false);
    }
  };

  const whatsappNumber = "0000000000"; // TODO: put your real number here
  const whatsappMessage =
    lang === "en"
      ? "Hi Zayyan Band, I’d like to ask about wedding music."
      : "مرحباً فرقة زيّان، حابب أستفسر عن موسيقى الزفاف.";

  return (
    <div
      className="min-h-screen bg-[#f7f0e6] text-[#1f2333]"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* 🌟 Global navbar (with EN | AR switch) */}
      <Navbar />

      {/* CONTENT */}
      <main className="pt-28 pb-16 px-4">
        <section className="max-w-6xl mx-auto">
          <motion.div
            className="
              bg-[#fdf7ee] rounded-3xl shadow-xl border border-[#f0d9c7]
              overflow-hidden grid grid-cols-1 md:grid-cols-2
            "
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* LEFT PANEL */}
            <div className="bg-gradient-to-br from-[#fbe4e4] via-[#f7d7c0] to-[#f9efe2] text-[#4a3232] p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
                  {t.leftTitle[lang]}
                </h1>
                <p className="text-sm sm:text-base text-[#5a3d3d] mb-5">
                  {t.leftText[lang]}
                </p>

                <ul className="space-y-2 text-sm text-[#5a3d3d]">
                  <li>• {t.leftList1[lang]}</li>
                  <li>• {t.leftList2[lang]}</li>
                  <li>• {t.leftList3[lang]}</li>
                  <li>• {t.leftList4[lang]}</li>
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-wide mb-2 text-[#704848]">
                  {t.whatsappLabel[lang]}
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                             bg-[#25D366] text-[#0f1a10] text-xs font-semibold 
                             hover:brightness-110 transition"
                >
                  <FaWhatsapp />
                  {t.whatsappButton[lang]}
                </a>
              </div>
            </div>

            {/* RIGHT PANEL – FORM */}
            <div className="p-8 bg-[#fdf7ee]">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center md:text-left">
                {t.rightTitle[lang]}
              </h2>
              <p className="text-xs sm:text-sm text-[#6b5a4a] mb-6 text-center md:text-left">
                {t.rightSubtitle[lang]}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="flex items-center border border-[#f0d9c7] rounded-xl px-3 py-2 bg-white/90">
                  <FaUser className="text-[#b3896d] mr-2" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder[lang]}
                    className="flex-1 bg-transparent outline-none text-sm"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex items-center border border-[#f0d9c7] rounded-xl px-3 py-2 bg-white/90">
                  <FaPhone className="text-[#b3896d] mr-2" />
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={t.phonePlaceholder[lang]}
                    className="flex-1 bg-transparent outline-none text-sm"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex items-center border border-[#f0d9c7] rounded-xl px-3 py-2 bg-white/90">
                  <FaEnvelope className="text-[#b3896d] mr-2" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder[lang]}
                    className="flex-1 bg-transparent outline-none text-sm"
                  />
                </div>

                {/* Message */}
                <div className="flex items-start border border-[#f0d9c7] rounded-xl px-3 py-2 bg-white/90">
                  <FaCommentDots className="text-[#b3896d] mr-2 mt-2" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder[lang]}
                    className="flex-1 bg-transparent outline-none min-h-[90px] text-sm"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#b46b5c] hover:bg-[#c47c6d] text-[#fdf7ee] py-2.5 
                             rounded-full font-semibold text-sm tracking-wide transition-all"
                >
                  {t.submitButton[lang]}
                </button>

                {success === true && (
                  <p className="text-green-700 text-center mt-2 text-sm">
                    {t.successMsg[lang]}
                  </p>
                )}
                {success === false && (
                  <p className="text-red-600 text-center mt-2 text-sm">
                    {t.errorMsg[lang]}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
