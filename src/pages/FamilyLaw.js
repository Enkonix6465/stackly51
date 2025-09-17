// Import your image at the top
import litigationImg from '../images/service3.jpg';
import { motion } from "framer-motion";
import video from "../images/law-services.mp4";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Translation object for all static content
const translations = {
  en: {
    heroTitle: "Family & Mediation Law: Support for Every Step",
    heroDesc: "Our compassionate legal team provides expert guidance, mediation, and advocacy for families. We help you navigate sensitive matters with care, clarity, and a focus on peaceful resolutions.",
    whyTitle: "Why Choose Us for Family & Mediation Law?",
    familyFeatures: [
      "Compassionate family law experts",
      "Personalized solutions for families",
      "Support through every stage of family matters",
      "Proven results in sensitive cases",
      "Client-focused mediation and advocacy",
      "Skilled negotiation for peaceful resolutions"
    ],
    processTitle: "How Our Family & Mediation Law Process Works",
    processDesc: "A step-by-step guide to our approach for resolving family law matters with care and expertise.",
    processSteps: [
      { title: "Initial Consultation", desc: "We listen to your family concerns and goals to determine the best approach." },
      { title: "Information Gathering", desc: "All relevant documents and details are reviewed to understand your situation." },
      { title: "Strategy & Planning", desc: "We develop a personalized legal or mediation strategy for your family." },
      { title: "Documentation & Communication", desc: "All filings and communications are handled with care and transparency." },
      { title: "Negotiation & Mediation", desc: "We pursue peaceful solutions through skilled negotiation and mediation." },
      { title: "Court Representation", desc: "Strong advocacy and representation in family court if needed." },
      { title: "Resolution & Support", desc: "Achieve resolution and ongoing support for your family's future." }
    ],
    servicesTitle: "Our Family & Mediation Law Services",
    services: [
      { title: "Divorce & Separation", desc: "Compassionate guidance through divorce, separation, and related matters." },
      { title: "Child Custody & Support", desc: "Expert support for child custody, visitation, and support arrangements." },
      { title: "Mediation & Negotiation", desc: "Peaceful resolution of family disputes through mediation and negotiation." },
      { title: "Adoption & Guardianship", desc: "Legal assistance for adoption, guardianship, and family formation." },
      { title: "Domestic Violence Protection", desc: "Protection and advocacy for victims of domestic violence." },
      { title: "Prenuptial & Postnuptial Agreements", desc: "Drafting and review of prenuptial and postnuptial agreements." }
    ],
    expertiseTitle: "Expert Family & Mediation Law Solutions",
    expertiseDesc: "Our team delivers compassionate advocacy and proven results in sensitive family law matters. We combine deep legal expertise, innovative solutions, and a client-focused approach to protect your interests and support your family's well-being.",
    expertiseList: [
      "Comprehensive Family Assessment",
      "Strategic Mediation & Negotiation",
      "Court Representation & Advocacy",
      "Ongoing Family Support"
    ],
    ctaTitle: "Ready to Support Your Family?",
    ctaDesc: "Take the first step toward a peaceful resolution. Our expert family law team is here to guide you through every stage of your family law journey with care, clarity, and results.",
    ctaBtn: "Request a Consultation"
  },
  ar: {
    heroTitle: "قانون الأسرة والوساطة: دعم في كل خطوة",
    heroDesc: "يقدم فريقنا القانوني المتعاطف إرشادًا وخبرة في الوساطة والدفاع عن الأسر. نساعدك في التعامل مع القضايا الحساسة بعناية ووضوح وتركيز على الحلول السلمية.",
    whyTitle: "لماذا تختارنا لقانون الأسرة والوساطة؟",
    familyFeatures: [
      "خبراء قانون الأسرة المتعاطفون",
      "حلول مخصصة للعائلات",
      "دعم في جميع مراحل قضايا الأسرة",
      "نتائج مثبتة في القضايا الحساسة",
      "وساطة ودفاع يركز على العميل",
      "مهارة في التفاوض لحلول سلمية"
    ],
    processTitle: "كيف تعمل عملية قانون الأسرة والوساطة لدينا",
    processDesc: "دليل خطوة بخطوة لنهجنا في حل قضايا الأسرة بعناية وخبرة.",
    processSteps: [
      { title: "الاستشارة الأولية", desc: "نستمع إلى مخاوفك وأهدافك الأسرية لتحديد أفضل نهج." },
      { title: "جمع المعلومات", desc: "نراجع جميع الوثائق والتفاصيل ذات الصلة لفهم وضعك." },
      { title: "الاستراتيجية والتخطيط", desc: "نطور استراتيجية قانونية أو وساطة مخصصة لعائلتك." },
      { title: "التوثيق والتواصل", desc: "يتم التعامل مع جميع الملفات والتواصل بعناية وشفافية." },
      { title: "التفاوض والوساطة", desc: "نسعى لحلول سلمية من خلال التفاوض والوساطة الماهرة." },
      { title: "التمثيل في المحكمة", desc: "دفاع قوي وتمثيل في محكمة الأسرة إذا لزم الأمر." },
      { title: "الحل والدعم", desc: "تحقيق الحل والدعم المستمر لمستقبل عائلتك." }
    ],
    servicesTitle: "خدماتنا في قانون الأسرة والوساطة",
    services: [
      { title: "الطلاق والانفصال", desc: "إرشاد متعاطف خلال الطلاق والانفصال والمسائل ذات الصلة." },
      { title: "حضانة الأطفال والدعم", desc: "دعم خبير في حضانة الأطفال وزياراتهم وترتيبات الدعم." },
      { title: "الوساطة والتفاوض", desc: "حل سلمي للنزاعات الأسرية من خلال الوساطة والتفاوض." },
      { title: "التبني والوصاية", desc: "مساعدة قانونية في التبني والوصاية وتكوين الأسرة." },
      { title: "حماية من العنف الأسري", desc: "حماية ودفاع عن ضحايا العنف الأسري." },
      { title: "اتفاقيات ما قبل وبعد الزواج", desc: "صياغة ومراجعة اتفاقيات ما قبل وبعد الزواج." }
    ],
    expertiseTitle: "حلول متخصصة لقانون الأسرة والوساطة",
    expertiseDesc: "يقدم فريقنا دفاعًا متعاطفًا ونتائج مثبتة في قضايا الأسرة الحساسة. نجمع بين الخبرة القانونية العميقة والحلول المبتكرة ونهج يركز على العميل لحماية مصالحك ودعم رفاهية عائلتك.",
    expertiseList: [
      "تقييم شامل للأسرة",
      "وساطة وتفاوض استراتيجي",
      "تمثيل ودفاع في المحكمة",
      "دعم أسري مستمر"
    ],
    ctaTitle: "جاهز لدعم عائلتك؟",
    ctaDesc: "اتخذ الخطوة الأولى نحو حل سلمي. فريقنا القانوني الخبير هنا لإرشادك في كل مرحلة من رحلتك القانونية الأسرية بعناية ووضوح ونتائج.",
    ctaBtn: "طلب استشارة"
  },
  he: {
    heroTitle: "דיני משפחה וגישור: תמיכה בכל שלב",
    heroDesc: "צוות המשפטנים שלנו מעניק ייעוץ, גישור וייצוג למשפחות ברגישות ובבהירות, עם דגש על פתרונות שלווים.",
    whyTitle: "למה לבחור בנו לדיני משפחה וגישור?",
    familyFeatures: [
      "מומחי דיני משפחה אמפתיים",
      "פתרונות מותאמים אישית למשפחות",
      "ליווי בכל שלב בענייני משפחה",
      "תוצאות מוכחות במקרים רגישים",
      "גישור וייצוג ממוקדי לקוח",
      "משא ומתן מקצועי לפתרונות שלווים"
    ],
    processTitle: "איך עובד תהליך דיני המשפחה והגישור שלנו",
    processDesc: "מדריך שלב-אחר-שלב לגישתנו לפתרון ענייני משפחה ברגישות ובמקצועיות.",
    processSteps: [
      { title: "פגישת ייעוץ ראשונית", desc: "אנו מקשיבים לחששותיך ולמטרותיך המשפחתיות כדי לקבוע את הגישה הטובה ביותר." },
      { title: "איסוף מידע", desc: "כל המסמכים והפרטים הרלוונטיים נבדקים להבנת מצבך." },
      { title: "אסטרטגיה ותכנון", desc: "אנו מפתחים אסטרטגיה משפטית או גישור מותאמת אישית למשפחתך." },
      { title: "תיעוד ותקשורת", desc: "כל ההגשות והתקשורת מטופלות ברגישות ובשקיפות." },
      { title: "משא ומתן וגישור", desc: "אנו פועלים לפתרונות שלווים באמצעות משא ומתן וגישור מקצועי." },
      { title: "ייצוג בבית המשפט", desc: "ייצוג חזק בבית המשפט לענייני משפחה במידת הצורך." },
      { title: "פתרון וליווי", desc: "השגת פתרון וליווי מתמשך לעתיד המשפחה." }
    ],
    servicesTitle: "השירותים שלנו בדיני משפחה וגישור",
    services: [
      { title: "גירושין והפרדה", desc: "הכוונה אמפתית בגירושין, הפרדה ונושאים קשורים." },
      { title: "משמורת ילדים ותמיכה", desc: "תמיכה מקצועית במשמורת ילדים, ביקורים והסדרי תמיכה." },
      { title: "גישור ומשא ומתן", desc: "פתרון של סכסוכי משפחה בגישור ומשא ומתן." },
      { title: "אימוץ ואפוטרופסות", desc: "סיוע משפטי באימוץ, אפוטרופסות והקמת משפחה." },
      { title: "הגנה מאלימות במשפחה", desc: "הגנה וייצוג לנפגעי אלימות במשפחה." },
      { title: "הסכמי ממון לפני ואחרי נישואין", desc: "עריכת ובדיקת הסכמי ממון לפני ואחרי נישואין." }
    ],
    expertiseTitle: "פתרונות מומחים לדיני משפחה וגישור",
    expertiseDesc: "הצוות שלנו מעניק ייצוג אמפתי ותוצאות מוכחות בענייני משפחה רגישים. אנו משלבים מומחיות משפטית עמוקה, פתרונות חדשניים וגישה ממוקדת לקוח להגנה על האינטרסים שלך ולרווחת המשפחה.",
    expertiseList: [
      "הערכת משפחה מקיפה",
      "גישור ומשא ומתן אסטרטגי",
      "ייצוג בבית המשפט",
      "ליווי משפחתי מתמשך"
    ],
    ctaTitle: "מוכן לתמוך במשפחה שלך?",
    ctaDesc: "עשה את הצעד הראשון לפתרון שליו. צוות דיני המשפחה שלנו כאן ללוות אותך בכל שלב ברגישות, בהירות ותוצאות.",
    ctaBtn: "בקש ייעוץ"
  }
};

function FamilyLaw() {
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
          {t.familyFeatures.slice(0, 3).map((feature, idx) => (
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
        <img src={litigationImg} alt="Family and Mediation Law" className="rounded-2xl shadow-xl w-full max-w-xs h-72 object-cover border-4 border-black dark:border-white" />
      </div>
      {/* Right features */}
      <div className="flex flex-col gap-8">
          {t.familyFeatures.slice(3).map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#25be85] text-white dark:bg:white text-white dark:text-black font-bold text-lg rounded-xl p-6 shadow-lg flex items-center justify-center text-center border-2 border-[#25be85]"
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
    {/* Modern Family & Mediation Law Expertise Section (end of page) */}
    <section className="w-full py-16 px-4 bg-white dark:bg-black flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Left: Image */}
        <div className="flex items-center justify-center h-full">
          <img src={litigationImg} alt="Family Law Expertise" className="rounded-2xl shadow-xl w-full max-w-md h-full min-h-[320px] object-cover border-4 border-[#25be85]" style={{aspectRatio: '1.7/1'}} />
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
export default FamilyLaw;
