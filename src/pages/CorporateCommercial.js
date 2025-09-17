// Import your image at the top
import litigationImg from '../images/service2.jpg';
import { motion } from "framer-motion";
import video from "../images/service1.mp4";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Translation object for all static content
const translations = {
  en: {
    heroTitle: "Corporate & Commercial Law Solutions for Your Business",
    heroDesc: "Our experienced legal team provides expert guidance, strategic business advice, and unwavering commitment.",
    whyTitle: "Why Choose Us for Corporate & Commercial Law?",
    features: [
      "Expert corporate law advisors",
      "Business-focused legal strategies",
      "Support for mergers, acquisitions, and restructuring",
      "Proven success in complex transactions",
      "Client-centric commercial solutions",
      "Skilled contract negotiation & drafting"
    ],
    processTitle: "How Our Corporate & Commercial Law Process Works",
    processDesc: "A step-by-step guide to our approach for supporting your business with clarity and expertise.",
    processSteps: [
      { title: "Business Needs Assessment", desc: "We assess your business goals and legal requirements to determine the best strategy." },
      { title: "Due Diligence & Review", desc: "All relevant documents and contracts are analyzed to protect your interests." },
      { title: "Strategic Planning", desc: "We develop tailored legal strategies for transactions, compliance, and growth." },
      { title: "Documentation & Communication", desc: "All legal documentation is handled and you are kept informed at every stage." },
      { title: "Negotiation & Transaction", desc: "We pursue favorable outcomes through skilled negotiation and transaction support." },
      { title: "Regulatory Compliance", desc: "Ensuring your business meets all legal and regulatory requirements." },
      { title: "Ongoing Support & Growth", desc: "Achieve business growth and ongoing legal support for your future." }
    ],
    servicesTitle: "Our Corporate & Commercial Law Services",
    services: [
      { title: "Business Formation & Structuring", desc: "Expert guidance for company formation, restructuring, and governance." },
      { title: "Mergers & Acquisitions", desc: "Comprehensive support for business mergers, acquisitions, and joint ventures." },
      { title: "Contract Drafting & Negotiation", desc: "Skilled drafting and negotiation of commercial contracts and agreements." },
      { title: "Regulatory Compliance", desc: "Ensuring your business meets all legal and regulatory requirements." },
      { title: "Intellectual Property", desc: "Protection and management of trademarks, copyrights, and patents." },
      { title: "Dispute Resolution", desc: "Efficient resolution of commercial disputes and litigation matters." }
    ],
    expertiseTitle: "Expert Corporate & Commercial Law Solutions",
    expertiseDesc: "Our team delivers strategic business advice and proven results in complex corporate and commercial matters. We combine deep legal expertise, innovative solutions, and a client-focused approach to protect your interests and drive business growth.",
    expertiseList: [
      "Comprehensive Business Assessment",
      "Strategic Contract Negotiation",
      "Regulatory Compliance & Advice",
      "Dispute Resolution & Support"
    ],
    ctaTitle: "Ready to Elevate Your Business?",
    ctaDesc: "Take the first step toward business success. Our expert corporate law team is here to guide you through every stage of your commercial journey with clarity, confidence, and results.",
    ctaBtn: "Request a Consultation"
  },
  ar: {
    heroTitle: "حلول القانون التجاري والشركات لأعمالك",
    heroDesc: "يقدم فريقنا القانوني الخبير إرشادًا استراتيجيًا ونصائح تجارية والتزامًا لا يتزعزع.",
    whyTitle: "لماذا تختارنا للقانون التجاري والشركات؟",
    features: [
      "مستشارون خبراء في القانون التجاري",
      "استراتيجيات قانونية تركز على الأعمال",
      "دعم للاندماج والاستحواذ وإعادة الهيكلة",
      "نجاح مثبت في المعاملات المعقدة",
      "حلول تجارية تركز على العميل",
      "مهارة في التفاوض وصياغة العقود"
    ],
    processTitle: "كيف تعمل عملية القانون التجاري والشركات لدينا",
    processDesc: "دليل خطوة بخطوة لنهجنا في دعم أعمالك بوضوح وخبرة.",
    processSteps: [
      { title: "تقييم احتياجات الأعمال", desc: "نقيم أهداف عملك والمتطلبات القانونية لتحديد أفضل استراتيجية." },
      { title: "العناية الواجبة والمراجعة", desc: "يتم تحليل جميع الوثائق والعقود ذات الصلة لحماية مصالحك." },
      { title: "التخطيط الاستراتيجي", desc: "نطور استراتيجيات قانونية مخصصة للمعاملات والامتثال والنمو." },
      { title: "التوثيق والتواصل", desc: "يتم التعامل مع جميع الوثائق القانونية ويتم إعلامك في كل مرحلة." },
      { title: "التفاوض والمعاملات", desc: "نسعى لتحقيق نتائج إيجابية من خلال التفاوض والدعم في المعاملات." },
      { title: "الامتثال التنظيمي", desc: "ضمان امتثال عملك لجميع المتطلبات القانونية والتنظيمية." },
      { title: "الدعم المستمر والنمو", desc: "تحقيق نمو الأعمال والدعم القانوني المستمر لمستقبلك." }
    ],
    servicesTitle: "خدماتنا في القانون التجاري والشركات",
    services: [
      { title: "تأسيس الأعمال وهيكلتها", desc: "إرشاد خبير لتأسيس الشركات وإعادة الهيكلة والحوكمة." },
      { title: "الاندماج والاستحواذ", desc: "دعم شامل لعمليات الاندماج والاستحواذ والمشاريع المشتركة." },
      { title: "صياغة العقود والتفاوض", desc: "صياغة وتفاوض ماهر للعقود والاتفاقيات التجارية." },
      { title: "الامتثال التنظيمي", desc: "ضمان امتثال عملك لجميع المتطلبات القانونية والتنظيمية." },
      { title: "الملكية الفكرية", desc: "حماية وإدارة العلامات التجارية وحقوق التأليف وبراءات الاختراع." },
      { title: "حل النزاعات", desc: "حل فعال للنزاعات التجارية والمسائل القضائية." }
    ],
    expertiseTitle: "حلول قانونية تجارية وشركات متخصصة",
    expertiseDesc: "يقدم فريقنا نصائح تجارية استراتيجية ونتائج مثبتة في القضايا التجارية والشركات المعقدة. نجمع بين الخبرة القانونية العميقة والحلول المبتكرة ونهج يركز على العميل لحماية مصالحك ودفع نمو الأعمال.",
    expertiseList: [
      "تقييم شامل للأعمال",
      "تفاوض استراتيجي للعقود",
      "الامتثال والنصائح التنظيمية",
      "حل النزاعات والدعم"
    ],
    ctaTitle: "جاهز لتطوير أعمالك؟",
    ctaDesc: "اتخذ الخطوة الأولى نحو نجاح الأعمال. فريقنا القانوني الخبير هنا لإرشادك في كل مرحلة من رحلتك التجارية بثقة ووضوح ونتائج.",
    ctaBtn: "طلب استشارة"
  },
  he: {
    heroTitle: "פתרונות משפט מסחרי וחברות לעסק שלך",
    heroDesc: "צוות המשפטנים המנוסה שלנו מספק ייעוץ מומחה, אסטרטגיה עסקית ומחויבות מלאה.",
    whyTitle: "למה לבחור בנו למשפט מסחרי וחברות?",
    features: [
      "יועצים מומחים בדיני חברות",
      "אסטרטגיות משפטיות ממוקדות עסקים",
      "תמיכה במיזוגים, רכישות והתארגנות מחדש",
      "הצלחה מוכחת בעסקאות מורכבות",
      "פתרונות מסחריים ממוקדי לקוח",
      "משא ומתן ועריכת חוזים מקצועית"
    ],
    processTitle: "איך עובד תהליך המשפט המסחרי והחברות שלנו",
    processDesc: "מדריך שלב-אחר-שלב לגישתנו לתמיכה בעסק שלך בבירור ובמקצועיות.",
    processSteps: [
      { title: "הערכת צרכי העסק", desc: "אנו מעריכים את מטרות העסק והדרישות המשפטיות כדי לקבוע את האסטרטגיה הטובה ביותר." },
      { title: "בדיקות נאותות וביקורת", desc: "כל המסמכים והחוזים הרלוונטיים נבדקים להגנה על האינטרסים שלך." },
      { title: "תכנון אסטרטגי", desc: "אנו מפתחים אסטרטגיות משפטיות מותאמות לעסקאות, ציות וצמיחה." },
      { title: "תיעוד ותקשורת", desc: "כל התיעוד המשפטי מטופל ואתה מעודכן בכל שלב." },
      { title: "משא ומתן ועסקאות", desc: "אנו פועלים להשגת תוצאות מיטביות באמצעות משא ומתן ותמיכה בעסקאות." },
      { title: "ציות רגולטורי", desc: "הבטחת עמידה של העסק בכל הדרישות המשפטיות והרגולטוריות." },
      { title: "תמיכה מתמשכת וצמיחה", desc: "השגת צמיחה עסקית ותמיכה משפטית מתמשכת לעתידך." }
    ],
    servicesTitle: "השירותים המשפטיים שלנו בתחום החברות והמסחר",
    services: [
      { title: "הקמת עסקים והתארגנות", desc: "ייעוץ מומחה להקמת חברות, התארגנות מחדש וממשל תאגידי." },
      { title: "מיזוגים ורכישות", desc: "תמיכה מלאה במיזוגים, רכישות ושיתופי פעולה עסקיים." },
      { title: "עריכת חוזים ומשא ומתן", desc: "עריכת חוזים מסחריים ומשא ומתן מקצועי." },
      { title: "ציות רגולטורי", desc: "הבטחת עמידה של העסק בכל הדרישות המשפטיות והרגולטוריות." },
      { title: "קניין רוחני", desc: "הגנה וניהול סימני מסחר, זכויות יוצרים ופטנטים." },
      { title: "יישוב סכסוכים", desc: "פתרון יעיל של סכסוכים מסחריים וליטיגציה." }
    ],
    expertiseTitle: "פתרונות משפטיים מתקדמים לחברות ומסחר",
    expertiseDesc: "הצוות שלנו מספק ייעוץ עסקי אסטרטגי ותוצאות מוכחות בנושאים מסחריים ותאגידיים מורכבים. אנו משלבים מומחיות משפטית עמוקה, פתרונות חדשניים וגישה ממוקדת לקוח להגנה על האינטרסים שלך ולקידום העסק.",
    expertiseList: [
      "הערכת עסק מקיפה",
      "משא ומתן אסטרטגי לחוזים",
      "ציות רגולטורי וייעוץ",
      "יישוב סכסוכים ותמיכה"
    ],
    ctaTitle: "מוכן להצעיד את העסק שלך קדימה?",
    ctaDesc: "עשה את הצעד הראשון להצלחה עסקית. צוות המשפטנים שלנו כאן ללוות אותך בכל שלב בדרך העסקית בביטחון, בהירות ותוצאות.",
    ctaBtn: "בקש ייעוץ"
  }
};

function CorporateCommercial() {
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
        <img src={litigationImg} alt="Corporate and Commercial Law" className="rounded-2xl shadow-xl w-full max-w-xs h-72 object-cover border-4 border-black dark:border-white" />
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
              className="bg-[#25be85] text-white dark:bg-white text-white dark:text-black font-bold text-lg rounded-xl p-6 shadow-lg flex items-center justify-center text-center border-2 border-[#25be85]"
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
          {/* Keep icons as is, only change text */}
          <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center" style={{backgroundColor: idx % 2 === 0 ? '#25be85' : 'black'}}>
            <span className="text-xl font-bold text-white mb-1">{String(idx+1).padStart(2, '0')}</span>
            {/* You can keep the SVGs or customize per language if needed */}
            <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
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
    {/* Modern Corporate & Commercial Law Expertise Section (end of page) */}
    <section className="w-full py-16 px-4 bg-white dark:bg-black flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Left: Image */}
        <div className="flex items-center justify-center h-full">
          <img src={litigationImg} alt="Corporate Law Expertise" className="rounded-2xl shadow-xl w-full max-w-md h-full min-h-[320px] object-cover border-4 border-[#25be85]" style={{aspectRatio: '1.7/1'}} />
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
export default CorporateCommercial;
