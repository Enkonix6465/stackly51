// Import your image at the top
import litigationImg from '../images/service5.jpg';
import { motion } from "framer-motion";
import video from "../images/law-hero.mp4";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Translation object for all static content
const translations = {
  en: {
    heroTitle: "Tax Law: Expert Guidance for Compliance & Savings",
    heroDesc: "Our experienced tax attorneys provide expert guidance, strategic planning, and unwavering commitment to compliance and savings for individuals and businesses alike.",
    whyTitle: "Why Choose Us for Tax Law?",
    taxFeatures: [
      "Experienced tax law attorneys",
      "Strategic tax planning and compliance",
      "Support through every stage of tax matters",
      "Proven track record in complex tax cases",
      "Client-focused tax solutions",
      "Skilled negotiation with tax authorities"
    ],
    processTitle: "How Our Tax Law Process Works",
    processDesc: "A step-by-step guide to our approach for resolving tax matters with clarity and expertise.",
    processSteps: [
      { title: "Tax Assessment", desc: "We assess your tax situation and objectives to determine the best strategy." },
      { title: "Document Review", desc: "All relevant tax documents and filings are analyzed to protect your interests." },
      { title: "Strategy Planning", desc: "We develop a tailored tax strategy for compliance, savings, or dispute resolution." },
      { title: "Documentation & Communication", desc: "All filings and communications are handled and you are kept informed at every stage." },
      { title: "Negotiation & Resolution", desc: "We pursue favorable outcomes through skilled negotiation and dispute resolution." },
      { title: "Tax Dispute Representation", desc: "Strong advocacy and representation in tax disputes and litigation." },
      { title: "Resolution & Support", desc: "Achieve resolution and ongoing support for your tax needs." }
    ],
    servicesTitle: "Our Tax Law Services",
    services: [
      { title: "Tax Planning & Compliance", desc: "Comprehensive support for tax planning, compliance, and savings." },
      { title: "Tax Dispute Resolution", desc: "Efficient resolution of tax disputes and litigation matters." },
      { title: "Audit Representation", desc: "Expert representation during tax audits and investigations." },
      { title: "International Taxation", desc: "Guidance for cross-border tax matters and global compliance." },
      { title: "Business & Corporate Tax", desc: "Support for business and corporate tax planning and filings." },
      { title: "Individual Tax Solutions", desc: "Personalized tax solutions for individuals and families." }
    ],
    expertiseTitle: "Expert Tax Law Solutions",
    expertiseDesc: "Our team delivers strategic advocacy and proven results in complex tax matters. We combine deep legal expertise, innovative solutions, and a client-focused approach to protect your interests and achieve favorable outcomes in tax planning, compliance, and disputes.",
    expertiseList: [
      "Comprehensive Tax Assessment",
      "Strategic Tax Planning & Negotiation",
      "Tax Dispute Resolution & Advocacy",
      "Ongoing Tax Support"
    ],
    ctaTitle: "Ready to Optimize Your Taxes?",
    ctaDesc: "Take the first step toward tax compliance and savings. Our expert tax law team is here to guide you through every stage with clarity, confidence, and results.",
    ctaBtn: "Request a Consultation"
  },
  ar: {
    heroTitle: "قانون الضرائب: إرشاد خبير للامتثال والتوفير",
    heroDesc: "يقدم محامونا ذوو الخبرة إرشادًا استراتيجيًا والتزامًا قويًا بالامتثال والتوفير للأفراد والشركات.",
    whyTitle: "لماذا تختارنا لقانون الضرائب؟",
    taxFeatures: [
      "محامون خبراء في قانون الضرائب",
      "تخطيط ضريبي استراتيجي وامتثال",
      "دعم في جميع مراحل القضايا الضريبية",
      "سجل نجاح مثبت في القضايا الضريبية المعقدة",
      "حلول ضريبية تركز على العميل",
      "مهارة في التفاوض مع السلطات الضريبية"
    ],
    processTitle: "كيف تعمل عملية قانون الضرائب لدينا",
    processDesc: "دليل خطوة بخطوة لنهجنا في حل القضايا الضريبية بوضوح وخبرة.",
    processSteps: [
      { title: "تقييم ضريبي", desc: "نقيم وضعك الضريبي وأهدافك لتحديد أفضل استراتيجية." },
      { title: "مراجعة الوثائق", desc: "يتم تحليل جميع الوثائق الضريبية ذات الصلة لحماية مصالحك." },
      { title: "تخطيط الاستراتيجية", desc: "نطور استراتيجية ضريبية مخصصة للامتثال أو التوفير أو حل النزاعات." },
      { title: "التوثيق والتواصل", desc: "يتم التعامل مع جميع الملفات ويتم إعلامك في كل مرحلة." },
      { title: "التفاوض والحل", desc: "نسعى لتحقيق نتائج إيجابية من خلال التفاوض وحل النزاعات." },
      { title: "تمثيل في النزاعات الضريبية", desc: "دفاع قوي وتمثيل في النزاعات الضريبية والتقاضي." },
      { title: "الحل والدعم", desc: "تحقيق الحل والدعم المستمر لاحتياجاتك الضريبية." }
    ],
    servicesTitle: "خدماتنا في قانون الضرائب",
    services: [
      { title: "تخطيط وامتثال ضريبي", desc: "دعم شامل للتخطيط الضريبي والامتثال والتوفير." },
      { title: "حل النزاعات الضريبية", desc: "حل فعال للنزاعات الضريبية والمسائل القضائية." },
      { title: "تمثيل في التدقيق الضريبي", desc: "تمثيل خبير أثناء التدقيقات والتحقيقات الضريبية." },
      { title: "الضرائب الدولية", desc: "إرشاد في القضايا الضريبية العابرة للحدود والامتثال العالمي." },
      { title: "ضرائب الشركات والأعمال", desc: "دعم في تخطيط وتقديم الضرائب للشركات والأعمال." },
      { title: "حلول ضريبية للأفراد", desc: "حلول ضريبية مخصصة للأفراد والعائلات." }
    ],
    expertiseTitle: "حلول متخصصة لقانون الضرائب",
    expertiseDesc: "يقدم فريقنا دفاعًا استراتيجيًا ونتائج مثبتة في القضايا الضريبية المعقدة. نجمع بين الخبرة القانونية العميقة والحلول المبتكرة ونهج يركز على العميل لحماية مصالحك وتحقيق نتائج إيجابية في التخطيط الضريبي والامتثال وحل النزاعات.",
    expertiseList: [
      "تقييم ضريبي شامل",
      "تخطيط ضريبي استراتيجي وتفاوض",
      "حل النزاعات الضريبية والدفاع",
      "دعم ضريبي مستمر"
    ],
    ctaTitle: "جاهز لتحسين ضرائبك؟",
    ctaDesc: "اتخذ الخطوة الأولى نحو الامتثال الضريبي والتوفير. فريقنا القانوني الخبير هنا لإرشادك في كل مرحلة بوضوح وثقة ونتائج.",
    ctaBtn: "طلب استشارة"
  },
  he: {
    heroTitle: "דיני מסים: ייעוץ מומחה לציות וחיסכון",
    heroDesc: "עורכי הדין המנוסים שלנו מעניקים ייעוץ אסטרטגי ומחויבות מלאה לציות ולחיסכון ליחידים ולעסקים.",
    whyTitle: "למה לבחור בנו לדיני מסים؟",
    taxFeatures: [
      "עורכי דין מנוסים בדיני מסים",
      "תכנון מס אסטרטגי וציות",
      "ליווי בכל שלב בענייני מס",
      "הצלחה מוכחת בתיקים מורכבים",
      "פתרונות מס ממוקדי לקוח",
      "משא ומתן מקצועי מול רשויות המס"
    ],
    processTitle: "איך עובד תהליך דיני המסים שלנו",
    processDesc: "מדריך שלב-אחר-שלב לגישתנו לפתרון ענייני מס בבירור ובמקצועיות.",
    processSteps: [
      { title: "הערכת מס", desc: "אנו מעריכים את מצבך ומטרותיך כדי לקבוע את האסטרטגיה הטובה ביותר." },
      { title: "בדיקת מסמכים", desc: "כל המסמכים והדיווחים הרלוונטיים נבדקים להגנה על האינטרסים שלך." },
      { title: "תכנון אסטרטגיה", desc: "אנו מפתחים אסטרטגיה מותאמת לציות, חיסכון או פתרון סכסוכים." },
      { title: "תיעוד ותקשורת", desc: "כל ההגשות והתקשורת מטופלות ואתה מעודכן בכל שלב." },
      { title: "משא ומתן ופתרון", desc: "אנו פועלים להשגת תוצאות מיטביות באמצעות משא ומתן ופתרון סכסוכים." },
      { title: "ייצוג בסכסוכי מס", desc: "ייצוג חזק בסכסוכי מס וליטיגציה." },
      { title: "פתרון וליווי", desc: "השגת פתרון וליווי מתמשך לצרכי המס שלך." }
    ],
    servicesTitle: "השירותים שלנו בדיני מסים",
    services: [
      { title: "תכנון וציות מס", desc: "תמיכה מלאה בתכנון מס, ציות וחיסכון." },
      { title: "פתרון סכסוכי מס", desc: "פתרון יעיל של סכסוכי מס וליטיגציה." },
      { title: "ייצוג בביקורת מס", desc: "ייצוג מקצועי בביקורות ובדיקות מס." },
      { title: "מיסוי בינלאומי", desc: "ייעוץ בענייני מס חוצי גבולות וציות גלובלי." },
      { title: "מיסוי עסקים וחברות", desc: "תמיכה בתכנון והגשת מסים לעסקים וחברות." },
      { title: "פתרונות מס ליחידים", desc: "פתרונות מס מותאמים ליחידים ולמשפחות." }
    ],
    expertiseTitle: "פתרונות מומחים לדיני מסים",
    expertiseDesc: "הצוות שלנו מעניק ייצוג אסטרטגי ותוצאות מוכחות בענייני מס מורכבים. אנו משלבים מומחיות משפטית עמוקה, פתרונות חדשניים וגישה ממוקדת לקוח להגנה על האינטרסים שלך ולהשגת תוצאות חיוביות בתכנון, ציות ופתרון סכסוכים.",
    expertiseList: [
      "הערכת מס מקיפה",
      "תכנון מס אסטרטגי ומשא ומתן",
      "פתרון סכסוכי מס וייצוג",
      "ליווי מס מתמשך"
    ],
    ctaTitle: "מוכן לשפר את המסים שלך؟",
    ctaDesc: "עשה את הצעד הראשון לציות וחיסכון במס. צוות דיני המסים שלנו כאן ללוות אותך בכל שלב בבירור, ביטחון ותוצאות.",
    ctaBtn: "בקש ייעוץ"
  }
};

function TaxLaw() {
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

  <section className="w-full py-16 px-4 bg-white dark:bg-black">
    <h2 className="text-4xl font-extrabold text-center mb-10 text-black dark:text-white">{t.whyTitle}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
      {/* Left features */}
      <div className="flex flex-col gap-8">
        {t.taxFeatures.slice(0, 3).map((feature, idx) => (
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
        <img src={litigationImg} alt="Tax Law" className="rounded-2xl shadow-xl w-full max-w-xs h-72 object-cover border-4 border-black dark:border-white" />
      </div>
      {/* Right features */}
      <div className="flex flex-col gap-8">
        {t.taxFeatures.slice(3).map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#25be85] text-white  text-white  font-bold text-lg rounded-xl p-6 shadow-lg flex items-center justify-center text-center border-2 border-[#25be85]"
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
    {/* Modern Tax Law Expertise Section (end of page) */}
    <section className="w-full py-16 px-4 bg-white dark:bg-black flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Left: Image */}
        <div className="flex items-center justify-center h-full">
          <img src={litigationImg} alt="Tax Law Expertise" className="rounded-2xl shadow-xl w-full max-w-md h-full min-h-[320px] object-cover border-4 border-[#25be85]" style={{aspectRatio: '1.7/1'}} />
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
export default TaxLaw;
