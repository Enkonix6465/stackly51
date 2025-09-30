// Import your image at the top
import litigationImg from '../images/service4.jpg';
import { motion } from "framer-motion";
import video from "../images/law-hero.mp4";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Translation object for all static content
const translations = {
  en: {
    heroTitle: "Real Estate Law: Trusted Property Solutions",
    heroDesc: "Our experienced attorneys provide expert guidance, strategic advocacy, and unwavering commitment to property transactions and real estate matters for individuals and businesses alike.",
    whyTitle: "Why Choose Us for Real Estate Law?",
    features: [
      "Experienced real estate attorneys",
      "Strategic property transaction support",
      "Guidance through every stage of real estate deals",
      "Proven track record in complex property matters",
      "Client-focused property solutions",
      "Skilled negotiation and contract drafting"
    ],
    processTitle: "How Our Real Estate Law Process Works",
    processDesc: "A step-by-step guide to our approach for resolving real estate matters with clarity and expertise.",
    processSteps: [
      { title: "Property Evaluation", desc: "We assess your property details and objectives to determine the best legal strategy." },
      { title: "Document Review", desc: "All relevant property documents and contracts are analyzed to protect your interests." },
      { title: "Strategy Planning", desc: "We develop a tailored legal strategy for your property transaction or dispute." },
      { title: "Documentation & Communication", desc: "All filings and communications are handled and you are kept informed at every stage." },
      { title: "Negotiation & Transaction", desc: "We pursue favorable outcomes through skilled negotiation and transaction support." },
      { title: "Property Dispute Resolution", desc: "Strong advocacy and representation in property disputes and litigation." },
      { title: "Resolution & Support", desc: "Achieve resolution and ongoing support for your property needs." }
    ],
    servicesTitle: "Our Real Estate Law Services",
    services: [
      { title: "Property Purchase & Sale", desc: "Comprehensive support for buying and selling residential and commercial properties." },
      { title: "Lease & Rental Agreements", desc: "Expert drafting and review of lease and rental contracts." },
      { title: "Title Search & Due Diligence", desc: "Thorough title search and due diligence for secure transactions." },
      { title: "Property Dispute Resolution", desc: "Efficient resolution of property disputes and litigation matters." },
      { title: "Land Development & Zoning", desc: "Legal guidance for land development, zoning, and regulatory compliance." },
      { title: "Mortgage & Financing", desc: "Support for mortgage, financing, and property investment transactions." }
    ],
    expertiseTitle: "Expert Real Estate Law Solutions",
    expertiseDesc: "Our team delivers strategic advocacy and proven results in complex real estate matters. We combine deep legal expertise, innovative solutions, and a client-focused approach to protect your interests and achieve favorable outcomes in property transactions and disputes.",
    expertiseList: [
      "Comprehensive Property Assessment",
      "Strategic Negotiation & Transaction Support",
      "Property Dispute Resolution & Advocacy",
      "Ongoing Property Support"
    ],
    ctaTitle: "Ready to Secure Your Property?",
    ctaDesc: "Take the first step toward a successful property transaction or resolution. Our expert real estate law team is here to guide you through every stage with clarity, confidence, and results.",
    ctaBtn: "Request a Consultation"
  },
  ar: {
    heroTitle: "قانون العقارات: حلول موثوقة للعقارات",
    heroDesc: "يقدم محامونا ذوو الخبرة إرشادًا خبيرًا ودفاعًا استراتيجيًا والتزامًا لا يتزعزع في معاملات العقارات والمسائل العقارية للأفراد والشركات.",
    whyTitle: "لماذا تختارنا لقانون العقارات؟",
    features: [
      "محامون خبراء في العقارات",
      "دعم استراتيجي في معاملات العقارات",
      "إرشاد في جميع مراحل الصفقات العقارية",
      "سجل نجاح مثبت في القضايا العقارية المعقدة",
      "حلول عقارية تركز على العميل",
      "مهارة في التفاوض وصياغة العقود"
    ],
    processTitle: "كيف تعمل عملية قانون العقارات لدينا",
    processDesc: "دليل خطوة بخطوة لنهجنا في حل القضايا العقارية بوضوح وخبرة.",
    processSteps: [
      { title: "تقييم العقار", desc: "نقيم تفاصيل العقار وأهدافك لتحديد أفضل استراتيجية قانونية." },
      { title: "مراجعة الوثائق", desc: "يتم تحليل جميع الوثائق والعقود العقارية ذات الصلة لحماية مصالحك." },
      { title: "تخطيط الاستراتيجية", desc: "نطور استراتيجية قانونية مخصصة لمعاملتك أو نزاعك العقاري." },
      { title: "التوثيق والتواصل", desc: "يتم التعامل مع جميع الملفات ويتم إعلامك في كل مرحلة." },
      { title: "التفاوض والمعاملات", desc: "نسعى لتحقيق نتائج إيجابية من خلال التفاوض والدعم في المعاملات." },
      { title: "حل النزاعات العقارية", desc: "دفاع قوي وتمثيل في النزاعات العقارية والتقاضي." },
      { title: "الحل والدعم", desc: "تحقيق الحل والدعم المستمر لاحتياجاتك العقارية." }
    ],
    servicesTitle: "خدماتنا في قانون العقارات",
    services: [
      { title: "شراء وبيع العقارات", desc: "دعم شامل لشراء وبيع العقارات السكنية والتجارية." },
      { title: "اتفاقيات الإيجار والتأجير", desc: "صياغة ومراجعة عقود الإيجار والتأجير باحترافية." },
      { title: "بحث الملكية والعناية الواجبة", desc: "بحث ملكية شامل وعناية واجبة لضمان المعاملات الآمنة." },
      { title: "حل النزاعات العقارية", desc: "حل فعال للنزاعات العقارية والمسائل القضائية." },
      { title: "تطوير الأراضي والتنظيم", desc: "إرشاد قانوني لتطوير الأراضي والتنظيم والامتثال." },
      { title: "الرهن العقاري والتمويل", desc: "دعم في معاملات الرهن العقاري والتمويل والاستثمار العقاري." }
    ],
    expertiseTitle: "حلول متخصصة لقانون العقارات",
    expertiseDesc: "يقدم فريقنا دفاعًا استراتيجيًا ونتائج مثبتة في القضايا العقارية المعقدة. نجمع بين الخبرة القانونية العميقة والحلول المبتكرة ونهج يركز على العميل لحماية مصالحك وتحقيق نتائج إيجابية في معاملات ونزاعات العقارات.",
    expertiseList: [
      "تقييم شامل للعقار",
      "تفاوض استراتيجي ودعم المعاملات",
      "حل النزاعات العقارية والدفاع",
      "دعم عقاري مستمر"
    ],
    ctaTitle: "جاهز لتأمين عقارك؟",
    ctaDesc: "اتخذ الخطوة الأولى نحو صفقة عقارية ناجحة أو حل نزاع. فريقنا القانوني الخبير هنا لإرشادك في كل مرحلة بوضوح وثقة ونتائج.",
    ctaBtn: "طلب استشارة"
  },
  he: {
    heroTitle: "דיני מקרקעין: פתרונות אמינים לנכסים",
    heroDesc: "עורכי הדין המנוסים שלנו מעניקים ייעוץ מומחה, ייצוג אסטרטגי ומחויבות מלאה לעסקאות נדל\"ן ולענייני מקרקעין ליחידים ולעסקים.",
    whyTitle: "למה לבחור בנו לדיני מקרקעין؟",
    features: [
      "עורכי דין מנוסים במקרקעין",
      "תמיכה אסטרטגית בעסקאות נדל\"ן",
      "ליווי בכל שלב בעסקאות נדל\"ן",
      "הצלחה מוכחת בתיקים מורכבים",
      "פתרונות נדל\"ן ממוקדי לקוח",
      "משא ומתן ועריכת חוזים מקצועית"
    ],
    processTitle: "איך עובד תהליך דיני המקרקעין שלנו",
    processDesc: "מדריך שלב-אחר-שלב לגישתנו לפתרון ענייני מקרקעין בבירור ובמקצועיות.",
    processSteps: [
      { title: "הערכת נכס", desc: "אנו מעריכים את פרטי הנכס והמטרות שלך כדי לקבוע את האסטרטגיה המשפטית הטובה ביותר." },
      { title: "בדיקת מסמכים", desc: "כל המסמכים והחוזים הרלוונטיים נבדקים להגנה על האינטרסים שלך." },
      { title: "תכנון אסטרטגי", desc: "אנו מפתחים אסטרטגיה משפטית מותאמת לעסקה או סכסוך נדל\"ן." },
      { title: "תיעוד ותקשורת", desc: "כל ההגשות והתקשורת מטופלות ואתה מעודכן בכל שלב." },
      { title: "משא ומתן ועסקאות", desc: "אנו פועלים להשגת תוצאות מיטביות באמצעות משא ומתן ותמיכה בעסקאות." },
      { title: "יישוב סכסוכי מקרקעין", desc: "ייצוג חזק בסכסוכי מקרקעין וליטיגציה." },
      { title: "פתרון וליווי", desc: "השגת פתרון וליווי מתמשך לצרכי הנדל\"ן שלך." }
    ],
    servicesTitle: "השירותים שלנו בדיני מקרקעין",
    services: [
      { title: "רכישה ומכירת נכסים", desc: "תמיכה מלאה ברכישה ומכירה של נכסים למגורים ולעסקים." },
      { title: "הסכמי שכירות והשכרה", desc: "עריכת ובדיקת חוזי שכירות והשכרה מקצועית." },
      { title: "בדיקת בעלות ובדיקת נאותות", desc: "בדיקת בעלות יסודית ובדיקת נאותות לעסקאות בטוחות." },
      { title: "יישוב סכסוכי מקרקעין", desc: "פתרון יעיל של סכסוכי מקרקעין וליטיגציה." },
      { title: "פיתוח קרקע ותכנון", desc: "ייעוץ משפטי לפיתוח קרקע, תכנון וציות רגולטורי." },
      { title: "משכנתאות ומימון", desc: "תמיכה בעסקאות משכנתא, מימון והשקעות נדל\"ן." }
    ],
    expertiseTitle: "פתרונות מומחים לדיני מקרקעין",
    expertiseDesc: "הצוות שלנו מעניק ייצוג אסטרטגי ותוצאות מוכחות בענייני מקרקעין מורכבים. אנו משלבים מומחיות משפטית עמוקה, פתרונות חדשניים וגישה ממוקדת לקוח להגנה על האינטרסים שלך ולהשגת תוצאות חיוביות בעסקאות ובסכסוכים.",
    expertiseList: [
      "הערכת נכס מקיפה",
      "משא ומתן אסטרטגי ותמיכה בעסקאות",
      "יישוב סכסוכי מקרקעין וייצוג",
      "ליווי נדל\"ן מתמשך"
    ],
    ctaTitle: "מוכן להגן על הנכס שלך?",
    ctaDesc: "עשה את הצעד הראשון לעסקה מוצלחת או פתרון סכסוך. צוות דיני המקרקעין שלנו כאן ללוות אותך בכל שלב בבירור, ביטחון ותוצאות.",
    ctaBtn: "בקש ייעוץ"
  }
};

function RealEstate() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const handleLangChange = (e) => {
      setLanguage(e.detail || localStorage.getItem("language") || "en");
    };
    window.addEventListener("languageChange", handleLangChange);
    return () => window.removeEventListener("languageChange", handleLangChange);
  }, []);

  const t = translations[language] || translations.en;

  return (
    <div className="w-screen min-h-screen bg-white dark:bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-screen h-screen overflow-hidden bg-white dark:bg-black mb-10">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay (light & dark mode) */}
        <div className="absolute inset-0 w-full h-full bg-black/50 transition-colors duration-500"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-2xl max-w-3xl text-white drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t.heroDesc}
          </motion.p>

          
        </div>
      </section>

  <section className="w-full py-16 px-4 bg-white dark:bg:black">
    <h2 className="text-4xl font-extrabold text-center mb-10 text-black dark:text-white">{t.whyTitle}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
      {/* Left features */}
      <div className="flex flex-col gap-8">
        {t.features.slice(0, 3).map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#25be85] text-white font-bold text-lg rounded-xl p-6 shadow-lg flex items-center justify-center text-center"
          >
            {feature}
          </motion.div>
        ))}
      </div>
      {/* Center image */}
      <div className="flex items-center justify-center">
        <img src={litigationImg} alt="Real Estate Law" className="rounded-2xl shadow-xl w-full max-w-xs h-72 object-cover border-4 border-black dark:border-white" />
      </div>
      {/* Right features */}
      <div className="flex flex-col gap-8">
        {t.features.slice(3).map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#25be85] text-white  text:white  font-bold text-lg rounded-xl p-6 shadow-lg flex items-center justify-center text-center border-2 border-[#25be85]"
          >
            {feature}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  <section className="w-full py-16 px-4 bg-white dark:bg-black">
  <h2 className="text-4xl font-extrabold text-center mb-4 text-black dark:text-white">{t.processTitle}</h2>
  <p className="text-lg text-center text-black/80 dark:text-white/80 mb-12 max-w-3xl mx-auto opacity-80">
    {t.processDesc}
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 max-w-7xl mx-auto">
    {t.processSteps.map((step, idx) => (
      <div key={step.title} className="flex flex-col items-center text-center">
        {/* Circle with white border, no inner circle */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{
            backgroundColor: idx % 2 === 0 ? '#25be85' : 'black',
            border: '3px solid #fff'
          }}
        >
          <span className="text-xl font-bold text-white">{String(idx+1).padStart(2, '0')}</span>
        </div>
        <h3 className="font-bold text-black dark:text-white mb-2">{step.title}</h3>
        <p className="text-black/80 dark:text-white/80 text-sm">{step.desc}</p>
      </div>
    ))}
  </div>
</section>

<section className="w-full py-16 px-4" style={{backgroundColor: '#25be85'}}>
  <h2 className="text-4xl font-extrabold text-center mb-12 text-white tracking-tight">
    {t.servicesTitle}
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {t.services.map((service, idx) => (
      <motion.div
        key={service.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: idx * 0.15 }}
        viewport={{ once: true }}
        className="bg-[#f7f3e8] rounded-2xl shadow-lg flex flex-col p-8"
      >
        <div className="text-2xl font-extrabold text-[#0a2342] mb-2">{String(idx+1).padStart(2, '0')}</div>
        <h3 className="text-lg font-bold text-[#0a2342] mb-2">{service.title}</h3>
        <p className="text-[#0a2342] text-base opacity-80">{service.desc}</p>
      </motion.div>
    ))}
  </div>
</section>
    {/* Modern Real Estate Law Expertise Section (end of page) */}
    <section className="w-full py-16 px-4 bg-white dark:bg-black flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Left: Image */}
        <div className="flex items-center justify-center h-full">
          <img src={litigationImg} alt="Real Estate Law Expertise" className="rounded-2xl shadow-xl w-full max-w-md h-full min-h-[320px] object-cover border-4 border-[#25be85]" style={{aspectRatio: '1.7/1'}} />
        </div>
        {/* Right: Content */}
        <div className="flex flex-col justify-center h-full min-h-[320px]">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-4">{t.expertiseTitle}</h2>
          <p className="text-lg text-black/80 dark:text-white/80 mb-6">
            {t.expertiseDesc}
          </p>
          <ul className="space-y-3">
            {t.expertiseList.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{backgroundColor: '#25be85'}}>
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-black dark:text-white font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* CTA Section - End of Page */}
    <section className="w-full py-16 px-4 bg-[#25be85] flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{t.ctaTitle}</h2>
        <p className="text-lg text-white/90 mb-8">
          {t.ctaDesc}
        </p>
        <button className="px-8 py-4 rounded-full font-bold text-[#25be85] bg-white shadow-lg hover:bg-black hover:text-white transition text-lg" onClick={() => navigate('/contact')}>
          {t.ctaBtn}
        </button>
      </div>
    </section>
    {/* End Modern Section */}
    </div>
     )
    }
export default RealEstate;
