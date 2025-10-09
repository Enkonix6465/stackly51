import litigationImg from '../images/service6.jpg';
import { motion } from "framer-motion";
import video from "../images/law-service2.mp4";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Translation object for all static content
const translations = {
  en: {
    heroTitle: "International Law: Global Legal Solutions",
    heroDesc: "Our experienced attorneys provide expert guidance, strategic advocacy, and unwavering commitment to international law for individuals, businesses, and organizations worldwide.",
    whyTitle: "Why Choose Us for International Law?",
    features: [
      "Experienced international law attorneys",
      "Strategic cross-border legal solutions",
      "Support through every stage of international matters",
      "Proven track record in complex global cases",
      "Client-focused international advocacy",
      "Skilled negotiation and dispute resolution"
    ],
    processTitle: "How Our International Law Process Works",
    processDesc: "A step-by-step guide to our approach for resolving international law matters with clarity and expertise.",
    processSteps: [
      { title: "Global Needs Assessment", desc: "We assess your international legal needs and objectives to determine the strategy." },
      { title: "Document Review & Due Diligence", desc: "All relevant international documents and contracts are analyzed to protect your interests." },
      { title: "Strategy and Planning", desc: "We develop tailored legal strategies for cross-border transactions, compliance, disputes." },
      { title: "Documentation & Communication", desc: "All filings and communications are handled and you are informed every stage." },
      { title: "Negotiation & Transaction", desc: "We pursue favorable outcomes through skilled negotiation and transaction support." },
      { title: "International Dispute Resolution", desc: "Strong advocacy and representation in international disputes and litigation." },
      { title: "Resolution & Support", desc: "Achieve resolution and ongoing support for your international legal needs." }
    ],
    servicesTitle: "Our International Law Services",
    services: [
      { title: "Cross-Border Transactions", desc: "Comprehensive support for international business and property transactions." },
      { title: "International Dispute Resolution", desc: "Efficient resolution of international disputes and litigation matters." },
      { title: "Global Compliance & Regulation", desc: "Guidance for global compliance, regulatory matters, and risk management." },
      { title: "Immigration & Citizenship", desc: "Legal assistance for immigration, citizenship, and residency matters." },
      { title: "International Arbitration", desc: "Representation in international arbitration and mediation." },
      { title: "Human Rights & Advocacy", desc: "Protection and advocacy for international human rights issues." }
    ],
    expertiseTitle: "Expert International Law Solutions",
    expertiseDesc: "Our team delivers strategic advocacy and proven results in complex international law matters. We combine deep legal expertise, innovative solutions, and a client-focused approach to protect your interests and achieve favorable outcomes in global transactions and disputes.",
    expertiseList: [
      "Comprehensive Global Assessment",
      "Strategic International Negotiation",
      "International Dispute Resolution & Advocacy",
      "Ongoing Global Support"
    ],
    ctaTitle: "Ready to Resolve Your International Matter?",
    ctaDesc: "Take the first step toward a successful global resolution. Our expert international law team is here to guide you through every stage with clarity, confidence, and results.",
    ctaBtn: "Request a Consultation"
  },
  ar: {
    heroTitle: "القانون الدولي: حلول قانونية عالمية",
    heroDesc: "يقدم محامونا ذوو الخبرة إرشادًا خبيرًا ودفاعًا استراتيجيًا والتزامًا لا يتزعزع بالقانون الدولي للأفراد والشركات والمؤسسات حول العالم.",
    whyTitle: "لماذا تختارنا للقانون الدولي؟",
    features: [
      "محامون خبراء في القانون الدولي",
      "حلول قانونية استراتيجية عبر الحدود",
      "دعم في جميع مراحل القضايا الدولية",
      "سجل نجاح مثبت في القضايا العالمية المعقدة",
      "دفاع دولي يركز على العميل",
      "مهارة في التفاوض وحل النزاعات"
    ],
    processTitle: "كيف تعمل عملية القانون الدولي لدينا",
    processDesc: "دليل خطوة بخطوة لنهجنا في حل القضايا الدولية بوضوح وخبرة.",
    processSteps: [
      { title: "تقييم الاحتياجات العالمية", desc: "نقيم احتياجاتك القانونية الدولية وأهدافك لتحديد أفضل استراتيجية." },
      { title: "مراجعة الوثائق والعناية الواجبة", desc: "يتم تحليل جميع الوثائق والعقود الدولية ذات الصلة لحماية مصالحك." },
      { title: "تخطيط الاستراتيجية", desc: "نطور استراتيجيات قانونية مخصصة للمعاملات عبر الحدود والامتثال والنزاعات." },
      { title: "التوثيق والتواصل", desc: "يتم التعامل مع جميع الملفات والتواصل ويتم إعلامك في كل مرحلة." },
      { title: "التفاوض والمعاملات", desc: "نسعى لتحقيق نتائج إيجابية من خلال التفاوض والدعم في المعاملات." },
      { title: "حل النزاعات الدولية", desc: "دفاع قوي وتمثيل في النزاعات الدولية والتقاضي." },
      { title: "الحل والدعم", desc: "تحقيق الحل والدعم المستمر لاحتياجاتك القانونية الدولية." }
    ],
    servicesTitle: "خدماتنا في القانون الدولي",
    services: [
      { title: "المعاملات عبر الحدود", desc: "دعم شامل للمعاملات التجارية والعقارية الدولية." },
      { title: "حل النزاعات الدولية", desc: "حل فعال للنزاعات الدولية والمسائل القضائية." },
      { title: "الامتثال والتنظيم العالمي", desc: "إرشاد للامتثال العالمي والمسائل التنظيمية وإدارة المخاطر." },
      { title: "الهجرة والجنسية", desc: "مساعدة قانونية في الهجرة والجنسية والإقامة." },
      { title: "التحكيم الدولي", desc: "تمثيل في التحكيم والوساطة الدولية." },
      { title: "حقوق الإنسان والدفاع", desc: "حماية ودفاع عن قضايا حقوق الإنسان الدولية." }
    ],
    expertiseTitle: "حلول متخصصة للقانون الدولي",
    expertiseDesc: "يقدم فريقنا دفاعًا استراتيجيًا ونتائج مثبتة في القضايا الدولية المعقدة. نجمع بين الخبرة القانونية العميقة والحلول المبتكرة ونهج يركز على العميل لحماية مصالحك وتحقيق نتائج إيجابية في المعاملات والنزاعات العالمية.",
    expertiseList: [
      "تقييم عالمي شامل",
      "تفاوض دولي استراتيجي",
      "حل النزاعات الدولية والدفاع",
      "دعم عالمي مستمر"
    ],
    ctaTitle: "جاهز لحل قضيتك الدولية؟",
    ctaDesc: "اتخذ الخطوة الأولى نحو حل عالمي ناجح. فريقنا القانوني الدولي الخبير هنا لإرشادك في كل مرحلة بوضوح وثقة ونتائج.",
    ctaBtn: "طلب استشارة"
  },
  he: {
    heroTitle: "משפט בינלאומי: פתרונות משפטיים גלובליים",
    heroDesc: "עורכי הדין המנוסים שלנו מעניקים ייעוץ מומחה, ייצוג אסטרטגי ומחויבות מלאה למשפט בינלאומי ליחידים, עסקים וארגונים ברחבי העולם.",
    whyTitle: "למה לבחור בנו למשפט בינלאומי?",
    features: [
      "עורכי דין מנוסים במשפט בינלאומי",
      "פתרונות משפטיים אסטרטגיים חוצי גבולות",
      "ליווי בכל שלב בעניינים בינלאומיים",
      "הצלחה מוכחת בתיקים גלובליים מורכבים",
      "ייצוג בינלאומי ממוקד לקוח",
      "משא ומתן ויישוב סכסוכים מקצועי"
    ],
    processTitle: "איך עובד תהליך המשפט הבינלאומי שלנו",
    processDesc: "מדריך שלב-אחר-שלב לגישתנו לפתרון עניינים בינלאומיים בבירור ובמקצועיות.",
    processSteps: [
      { title: "הערכת צרכים גלובלית", desc: "אנו מעריכים את הצרכים והיעדים המשפטיים הבינלאומיים שלך כדי לקבוע את האסטרטגיה הטובה ביותר." },
      { title: "בדיקת מסמכים ובדיקת נאותות", desc: "כל המסמכים והחוזים הבינלאומיים נבדקים להגנה על האינטרסים שלך." },
      { title: "תכנון אסטרטגי", desc: "אנו מפתחים אסטרטגיות משפטיות מותאמות לעסקאות חוצות גבולות, ציות וסכסוכים." },
      { title: "תיעוד ותקשורת", desc: "כל ההגשות והתקשורת מטופלות ואתה מעודכן בכל שלב." },
      { title: "משא ומתן ועסקאות", desc: "אנו פועלים להשגת תוצאות מיטביות באמצעות משא ומתן ותמיכה בעסקאות." },
      { title: "יישוב סכסוכים בינלאומיים", desc: "ייצוג חזק בסכסוכים בינלאומיים וליטיגציה." },
      { title: "פתרון וליווי", desc: "השגת פתרון וליווי מתמשך לצרכים המשפטיים הבינלאומיים שלך." }
    ],
    servicesTitle: "השירותים שלנו במשפט בינלאומי",
    services: [
      { title: "עסקאות חוצות גבולות", desc: "תמיכה מלאה בעסקאות עסקיות ונדל\"ן בינלאומיות." },
      { title: "יישוב סכסוכים בינלאומיים", desc: "פתרון יעיל של סכסוכים בינלאומיים וליטיגציה." },
      { title: "ציות ורגולציה גלובלית", desc: "ייעוץ לציות גלובלי, רגולציה וניהול סיכונים." },
      { title: "הגירה ואזרחות", desc: "סיוע משפטי בהגירה, אזרחות ומעמד תושבות." },
      { title: "בוררות בינלאומית", desc: "ייצוג בבוררות וגישור בינלאומיים." },
      { title: "זכויות אדם וייצוג", desc: "הגנה וייצוג בנושאי זכויות אדם בינלאומיים." }
    ],
    expertiseTitle: "פתרונות מומחים למשפט בינלאומי",
    expertiseDesc: "הצוות שלנו מעניק ייצוג אסטרטגי ותוצאות מוכחות בעניינים בינלאומיים מורכבים. אנו משלבים מומחיות משפטית עמוקה, פתרונות חדשניים וגישה ממוקדת לקוח להגנה על האינטרסים שלך ולהשגת תוצאות חיוביות בעסקאות ובסכסוכים גלובליים.",
    expertiseList: [
      "הערכת גלובלית מקיפה",
      "משא ומתן בינלאומי אסטרטגי",
      "יישוב סכסוכים בינלאומיים וייצוג",
      "ליווי גלובלי מתמשך"
    ],
    ctaTitle: "מוכן לפתור את עניינך הבינלאומי?",
    ctaDesc: "עשה את הצעד הראשון לפתרון גלובלי מוצלח. צוות המשפט הבינלאומי שלנו כאן ללוות אותך בכל שלב בבירור, ביטחון ותוצאות.",
    ctaBtn: "בקש ייעוץ"
  }
};

function InternationalLaw() {
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

  <section className="w-full py-10 px-4 bg-white dark:bg-black">
    <h2 className="text-4xl font-extrabold text-center mb-10 text-black dark:text-white">{t.whyTitle}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
      {/* Left features with fade left animation */}
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
        <img src={litigationImg} alt="International Law" className="rounded-2xl shadow-xl w-full max-w-xs h-72 object-cover border-4 border-black dark:border-white" />
      </div>
      {/* Right features with fade right animation */}
      <div className="flex flex-col gap-8">
        {t.features.slice(3).map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#25be85] text-white dark:bg:white text:white dark:text:black font-bold text-lg rounded-xl p-6 shadow-lg flex items-center justify-center text-center border-2 border-[#25be85]"
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
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mb-4 bg-[#25be85]">
          <span className="text-lg font-bold text-white">01</span>
          <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0v4m0 4h.01" /></svg>
        </div>
        <h3 className="font-bold text-black dark:text-white mb-2">{t.processSteps[0].title}</h3>
        <p className="text-black/80 dark:text-white/80 text-sm">{t.processSteps[0].desc}</p>
      </div>
      {/* Step 2 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mb-4 bg-black">
          <span className="text-lg font-bold text-white">02</span>
          <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 8h8v8H8z" /></svg>
        </div>
        <h3 className="font-bold text-black dark:text-white mb-2">{t.processSteps[1].title}</h3>
        <p className="text-black/80 dark:text-white/80 text-sm">{t.processSteps[1].desc}</p>
      </div>
      {/* Step 3 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mb-4 bg-[#25be85]">
          <span className="text-lg font-bold text-white">03</span>
          <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
        </div>
        <h3 className="font-bold text-black dark:text-white mb-2">{t.processSteps[2].title}</h3>
        <p className="text-black/80 dark:text-white/80 text-sm">{t.processSteps[2].desc}</p>
      </div>
      {/* Step 4 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mb-4 bg-black">
          <span className="text-lg font-bold text-white">04</span>
          <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0l-4-4m4 4l-4 4" /><rect x="2" y="6" width="20" height="12" rx="2" /></svg>
        </div>
        <h3 className="font-bold text-black dark:text-white mb-2">{t.processSteps[3].title}</h3>
        <p className="text-black/80 dark:text-white/80 text-sm">{t.processSteps[3].desc}</p>
      </div>
      {/* Step 5 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mb-4 bg-[#25be85]">
          <span className="text-lg font-bold text-white">05</span>
          <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-8 4h8" /><rect x="4" y="4" width="16" height="16" rx="2" /></svg>
        </div>
        <h3 className="font-bold text-black dark:text-white mb-2">{t.processSteps[4].title}</h3>
        <p className="text-black/80 dark:text-white/80 text-sm">{t.processSteps[4].desc}</p>
      </div>
      {/* Step 6 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mb-4 bg-black">
          <span className="text-lg font-bold text-white">06</span>
          <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12" /><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
        </div>
        <h3 className="font-bold text-black dark:text-white mb-2">{t.processSteps[5].title}</h3>
        <p className="text-black/80 dark:text-white/80 text-sm">{t.processSteps[5].desc}</p>
      </div>
      {/* Step 7 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center mb-4 bg-[#25be85]">
          <span className="text-lg font-bold text-white">07</span>
          <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m0 0l4-4m-4 4l-4-4" /><circle cx="12" cy="12" r="10" /></svg>
        </div>
        <h3 className="font-bold text-black dark:text-white mb-2">{t.processSteps[6].title}</h3>
        <p className="text-black/80 dark:text-white/80 text-sm">{t.processSteps[6].desc}</p>
      </div>
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
        transition={{ duration: 0.7, delay: idx * 0.18 }}
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
    {/* Modern International Law Expertise Section (end of page) */}
    <section className="w-full py-10 px-4 bg-white dark:bg-black flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Left: Image */}
        <div className="flex items-center justify-center h-full">
          <img src={litigationImg} alt="International Law Expertise" className="rounded-2xl shadow-xl w-full max-w-md h-full min-h-[320px] object-cover border-4 border-[#25be85]" style={{aspectRatio: '1.7/1'}} />
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
export default InternationalLaw;
