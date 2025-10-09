import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import linkedin from "../images/linkedinl.png";
import twitter from "../images/twitterl.png";
import facebook from "../images/facebook l.png";
import gmail from "../images/google.png";

const translations = {
  en: {
    about: "Stackly empowers businesses with cutting-edge cloud, AI, and cybersecurity solutions to transform your digital future.",
    quickLinks: "Quick Links",
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    servicesTitle: "Services",
    LitigationDispute: "Litigation & Dispute",
    CorporateCommercial: "Corporate & Commercial",
    FamilyLaw: "Family Law",
    RealEstate: "Real Estate",
    TaxLaw: "Tax Law",
    InternationalLaw: "International Law",
    connect: "Connect with us",
    email: "Email: support@stackly.com",
    phone: "Phone: +1 (800) 123-4567",
    copyright: `© ${new Date().getFullYear()} Stackly. All rights reserved By ESS.`
  },
  ar: {
    about: "تمكّن Stackly الشركات بحلول سحابية وذكاء اصطناعي وأمن سيبراني متقدمة لتحويل مستقبلك الرقمي.",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    aboutUs: "من نحن",
    services: "الخدمات",
    blog: "المدونة",
    contact: "تواصل",
    servicesTitle: "الخدمات",
    LitigationDispute: "التقاضي وحل النزاعات",
    CorporateCommercial: "الشركات والتجاري",
    FamilyLaw: "قانون الأسرة",
    RealEstate: "العقارات",
    TaxLaw: "قانون الضرائب",
    InternationalLaw: "القانون الدولي",
    connect: "تواصل معنا",
    email: "البريد الإلكتروني: support@stackly.com",
    phone: "الهاتف: +1 (800) 123-4567",
    copyright: `© ${new Date().getFullYear()} Stackly. جميع الحقوق محفوظة بواسطة ESS.`
  },
  he: {
    about: "Stackly מעניקה לעסקים פתרונות ענן, AI ואבטחת מידע מתקדמים לשינוי העתיד הדיגיטלי שלך.",
    quickLinks: "קישורים מהירים",
    home: "בית",
    aboutUs: "אודות",
    services: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    servicesTitle: "שירותים",
    LitigationDispute: "ליטיגציה ויישוב סכסוכים",
    CorporateCommercial: "חברות ומסחר",
    FamilyLaw: "דיני משפחה",
    RealEstate: "מקרקעין",
    TaxLaw: "דיני מסים",
    InternationalLaw: "משפט בינלאומי",
    connect: "התחברו איתנו",
    email: "אימייל: support@stackly.com",
    phone: "טלפון: +1 (800) 123-4567",
    copyright: `© ${new Date().getFullYear()} Stackly. כל הזכויות שמורות ל-ESS.`
  }
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const t = translations[language] || translations["en"];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    // Listen for language changes from header
    const syncLanguage = () => {
      const lang = localStorage.getItem("language") || "en";
      setLanguage(lang);
      document.documentElement.dir = (lang === "ar" || lang === "he") ? "rtl" : "ltr";
    };
    window.addEventListener("storage", syncLanguage);
    const customLangChange = (e) => {
      const lang = e.detail || localStorage.getItem("language") || "en";
      setLanguage(lang);
      document.documentElement.dir = (lang === "ar" || lang === "he") ? "rtl" : "ltr";
    };
    window.addEventListener("languageChange", customLangChange);
    syncLanguage();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", customLangChange);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-white text-black dark:bg-black py-12 px-5 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {/* Logo and About */}
        <div className="flex flex-col items-start">
          <img 
            src={logo}
            alt="Stackly Logo" 
            className="w-36 mb-2 mt-2" 
          />
          <p className="text-sm text-black dark:text-gray-300 mt-3">
            {t.about}
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-base font-medium mb-3 text-black dark:text-gray-300">{t.quickLinks}</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><Link to="/home1" className="text-black dark:text-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-colors no-underline">{t.home}</Link></li>
            <li className="mb-2"><Link to="/about" className="text-black dark:text-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-colors no-underline">{t.aboutUs}</Link></li>
            <li className="mb-2"><Link to="/services" className="text-black dark:text-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-colors no-underline">{t.services}</Link></li>
            <li className="mb-2"><Link to="/blog" className="text-black dark:text-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-colors no-underline">{t.blog}</Link></li>
            <li className="mb-2"><Link to="/contact" className="text-black dark:text-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-colors no-underline">{t.contact}</Link></li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h4 className="text-base font-medium mb-3 text-black dark:text-gray-300">{t.servicesTitle}</h4>
          <ul className="list-none p-0 m-0">
            <li className="mb-2"><Link to="/litigation-dispute" className="text-black dark:text-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-colors no-underline">{t.LitigationDispute}</Link></li>
            <li className="mb-2"><Link to="/corporate-commercial" className="text-black dark:text-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-colors no-underline">{t.CorporateCommercial}</Link></li>
            <li className="mb-2"><Link to="/family-law" className="text-black dark:text-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-colors no-underline">{t.FamilyLaw}</Link></li>
            <li className="mb-2"><Link to="/real-estate" className="text-black dark:text-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-colors no-underline">{t.RealEstate}</Link></li>
            <li className="mb-2"><Link to="/tax-law" className="text-black dark:text-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-colors no-underline">{t.TaxLaw}</Link></li>
            <li className="mb-2"><Link to="/international-law" className="text-black dark:text-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-colors no-underline">{t.InternationalLaw}</Link></li>
          </ul>
        </div>
        {/* Social & Contact */}
        <div>
          <h4 className="text-base font-medium mb-3 text-black dark:text-gray-300">{t.connect}</h4>
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.linkedin.com/login"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://mail.google.com"
              aria-label="Gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={gmail}
                alt="Gmail"
                className="w-6 h-6"
              />
            </a>
          </div>
          <p className="text-sm text-black dark:text-gray-300 mt-3">
            {t.email}<br />
            {t.phone}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative text-center py-3 mt-8 bg-white dark:bg-black text-black dark:text-white">
        <p>{t.copyright}</p>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-800 transition-all z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;