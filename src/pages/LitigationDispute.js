// Import your image at the top
import litigationImg from '../images/law-about.jpg';
import { motion } from "framer-motion";
import video from "../images/law-hero.mp4";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Translation object for all static content
const translations = {
  en: {
    heroTitle: "Disputes Demanded a Fight. We Delivered a Resolution.",
    heroDesc: "Our litigation team steps into the fray with unwavering confidence and a track record of success.",
    whyTitle: "Why Choose Us for Litigation & Dispute Resolution?",
    litigationFeatures: [
      "Well Experienced litigation attorneys are thoroughly prepared",
      "Strategic approach to dispute resolution",
      "Support through every stage of the legal process",
      "Proven track record in complex cases",
      "Client-focused advocacy your goals, our priority, always",
      "Skilled negotiation and mediation to resolve disputes effectively"
    ],
    processTitle: "How Our Litigation & Dispute Process Works",
    processDesc: "A step-by-step guide to our approach for resolving litigation and dispute matters with clarity and expertise.",
    processSteps: [
      { title: "Case Evaluation", desc: "We assess your case details and goals to determine the best legal strategy." },
      { title: "Evidence Review", desc: "All relevant documents and evidence are analyzed to build a strong case." },
      { title: "Strategy Planning", desc: "We develop a tailored litigation or dispute resolution strategy for your needs." },
      { title: "Filing", desc: "All filings are handled and you are kept informed at every stage for clarity." },
      { title: "Negotiation", desc: "We pursue amicable solutions through negotiation and mediation." },
      { title: "Representation", desc: "Strong advocacy and representation in court if needed to prove the case." },
      { title: "Resolution", desc: "Achieve resolution and ongoing support for your future." }
    ],
    servicesTitle: "Our Litigation & Dispute Services",
    services: [
      { title: "Case Assessment & Strategy", desc: "Thorough evaluation and strategic planning for your dispute or litigation." },
      { title: "Court Representation", desc: "Experienced advocacy in all levels of courts and tribunals." },
      { title: "Settlement Negotiation", desc: "Skilled negotiation to achieve favorable settlements efficiently." },
      { title: "Arbitration & Mediation", desc: "Alternative dispute resolution for faster, cost-effective outcomes." },
      { title: "Appeals & Reviews", desc: "Expert handling of appeals and judicial reviews for complex cases." },
      { title: "Enforcement of Judgments", desc: "Effective strategies to enforce court orders and recover assets." }
    ],
    expertiseTitle: "Expert Litigation & Dispute Resolution",
    expertiseDesc: "Our team delivers strategic advocacy and proven results in complex litigation and dispute matters. We combine deep legal expertise, innovative solutions, and a client-focused approach to protect your interests and achieve favorable outcomes.",
    expertiseList: [
      "Comprehensive Case Assessment",
      "Strategic Negotiation & Mediation",
      "Court Representation & Advocacy",
      "Enforcement of Judgments"
    ],
    ctaTitle: "Ready to Resolve Your Dispute?",
    ctaDesc: "Take the first step toward a successful resolution. Our expert litigation team is here to guide you through every stage of the process with clarity, confidence, and results.",
    ctaBtn: "Request a Consultation"
  },
  ar: {
    heroTitle: "النزاعات تتطلب المواجهة. نحن حققنا الحل.",
    heroDesc: "فريق التقاضي لدينا يدخل المعركة بثقة لا تتزعزع وسجل نجاح مثبت.",
    whyTitle: "لماذا تختارنا لحل النزاعات والتقاضي؟",
    litigationFeatures: [
      "محامون ذوو خبرة في التقاضي",
      "نهج استراتيجي لحل النزاعات",
      "دعم في جميع مراحل العملية القانونية",
      "سجل نجاح مثبت في القضايا المعقدة",
      "دفاع يركز على العميل",
      "مهارة في التفاوض والوساطة"
    ],
    processTitle: "كيف تعمل عملية التقاضي وحل النزاعات لدينا",
    processDesc: "دليل خطوة بخطوة لنهجنا في حل قضايا التقاضي والنزاعات بوضوح وخبرة.",
    processSteps: [
      { title: "تقييم القضية", desc: "نقيم تفاصيل قضيتك وأهدافك لتحديد أفضل استراتيجية قانونية." },
      { title: "مراجعة الأدلة", desc: "يتم تحليل جميع الوثائق والأدلة ذات الصلة لبناء قضية قوية." },
      { title: "تخطيط الاستراتيجية", desc: "نطور استراتيجية تقاضي أو حل نزاع مخصصة لاحتياجاتك." },
      { title: "التقديم والتواصل", desc: "يتم التعامل مع جميع الملفات ويتم إعلامك في كل مرحلة." },
      { title: "التفاوض", desc: "نسعى لحلول ودية من خلال التفاوض والوساطة." },
      { title: "التمثيل في المحكمة", desc: "دفاع قوي وتمثيل في المحكمة إذا لزم الأمر." },
      { title: "الحل والدعم", desc: "تحقيق الحل والدعم المستمر لمستقبلك." }
    ],
    servicesTitle: "خدماتنا في التقاضي وحل النزاعات",
    services: [
      { title: "تقييم القضية والاستراتيجية", desc: "تقييم شامل وتخطيط استراتيجي لنزاعك أو قضيتك." },
      { title: "التمثيل في المحكمة", desc: "دفاع ذو خبرة في جميع مستويات المحاكم والهيئات القضائية." },
      { title: "التفاوض على التسوية", desc: "تفاوض ماهر لتحقيق تسويات مرضية بكفاءة." },
      { title: "التحكيم والوساطة", desc: "حل نزاعات بديل لنتائج أسرع وبتكلفة أقل." },
      { title: "الاستئناف والمراجعات", desc: "إدارة الاستئنافات والمراجعات القضائية للقضايا المعقدة." },
      { title: "تنفيذ الأحكام", desc: "استراتيجيات فعالة لتنفيذ أوامر المحكمة واسترداد الأصول." }
    ],
    expertiseTitle: "خبرة في التقاضي وحل النزاعات",
    expertiseDesc: "يقدم فريقنا دفاعًا استراتيجيًا ونتائج مثبتة في قضايا التقاضي والنزاعات المعقدة. نجمع بين الخبرة القانونية العميقة والحلول المبتكرة ونهج يركز على العميل لحماية مصالحك وتحقيق نتائج إيجابية.",
    expertiseList: [
      "تقييم شامل للقضية",
      "تفاوض واستراتيجية وساطة",
      "تمثيل ودفاع في المحكمة",
      "تنفيذ الأحكام"
    ],
    ctaTitle: "جاهز لحل نزاعك؟",
    ctaDesc: "اتخذ الخطوة الأولى نحو الحل الناجح. فريقنا الخبير في التقاضي هنا لإرشادك في كل مرحلة من العملية بوضوح وثقة ونتائج.",
    ctaBtn: "طلب استشارة"
  },
  he: {
    heroTitle: "סכסוכים דרשו מאבק. אנחנו הבאנו פתרון.",
    heroDesc: "צוות הליטיגציה שלנו נכנס לעימות בביטחון מלא ובעל הישגים מוכחים.",
    whyTitle: "למה לבחור בנו לליטיגציה ויישוב סכסוכים?",
    litigationFeatures: [
      "עורכי דין מנוסים בליטיגציה",
      "גישה אסטרטגית ליישוב סכסוכים",
      "ליווי בכל שלב בתהליך המשפטי",
      "הצלחה מוכחת בתיקים מורכבים",
      "ייצוג ממוקד לקוח",
      "משא ומתן וגישור מקצועי"
    ],
    processTitle: "איך עובד תהליך הליטיגציה ויישוב הסכסוכים שלנו",
    processDesc: "מדריך שלב-אחר-שלב לגישתנו לפתרון תיקים משפטיים וסכסוכים בבירור ובמקצועיות.",
    processSteps: [
      { title: "הערכת תיק", desc: "אנו מעריכים את פרטי התיק והמטרות שלך כדי לקבוע את האסטרטגיה המשפטית הטובה ביותר." },
      { title: "סקירת ראיות", desc: "כל המסמכים והראיות הרלוונטיים נבדקים לבניית תיק חזק." },
      { title: "תכנון אסטרטגיה", desc: "אנו מפתחים אסטרטגיה מותאמת לליטיגציה או יישוב סכסוך לפי הצורך." },
      { title: "הגשה ותקשורת", desc: "כל ההגשות מטופלות ואתה מעודכן בכל שלב." },
      { title: "משא ומתן", desc: "אנו פועלים לפתרונות ידידותיים באמצעות משא ומתן וגישור." },
      { title: "ייצוג בבית המשפט", desc: "ייצוג חזק בבית המשפט במידת הצורך." },
      { title: "פתרון וליווי", desc: "השגת פתרון וליווי מתמשך לעתידך." }
    ],
    servicesTitle: "השירותים שלנו בליטיגציה ויישוב סכסוכים",
    services: [
      { title: "הערכת תיק ואסטרטגיה", desc: "הערכה יסודית ותכנון אסטרטגי לסכסוך או תיק משפטי." },
      { title: "ייצוג בבית המשפט", desc: "ייצוג מנוסה בכל ערכאות המשפט והטריבונלים." },
      { title: "משא ומתן להסדרים", desc: "משא ומתן מקצועי להשגת הסדרים מיטביים ביעילות." },
      { title: "בוררות וגישור", desc: "יישוב סכסוכים חלופי לתוצאות מהירות וחסכוניות." },
      { title: "ערעורים וביקורות", desc: "טיפול מקצועי בערעורים וביקורות שיפוטיות לתיקים מורכבים." },
      { title: "אכיפת פסקי דין", desc: "אסטרטגיות יעילות לאכיפת פסקי דין והשבת נכסים." }
    ],
    expertiseTitle: "מומחיות בליטיגציה ויישוב סכסוכים",
    expertiseDesc: "הצוות שלנו מעניק ייצוג אסטרטגי ותוצאות מוכחות בתיקים מורכבים. אנו משלבים מומחיות משפטית עמוקה, פתרונות חדשניים וגישה ממוקדת לקוח להגנה על האינטרסים שלך ולהשגת תוצאות חיוביות.",
    expertiseList: [
      "הערכת תיק מקיפה",
      "משא ומתן וגישור אסטרטגי",
      "ייצוג בבית המשפט",
      "אכיפת פסקי דין"
    ],
    ctaTitle: "מוכן לפתור את הסכסוך שלך?",
    ctaDesc: "עשה את הצעד הראשון לפתרון מוצלח. צוות הליטיגציה שלנו כאן ללוות אותך בכל שלב בבירור, ביטחון ותוצאות.",
    ctaBtn: "בקש ייעוץ"
  }
};

function LitigationDispute() {
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
        {t.litigationFeatures.slice(0, 3).map((feature, idx) => (
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
        <img src={litigationImg} alt="Litigation and Dispute" className="rounded-2xl shadow-xl w-full max-w-xs h-72 object-cover border-4 border-black dark:border-white" />
      </div>
      {/* Right features */}
      <div className="flex flex-col gap-8">
        {t.litigationFeatures.slice(3).map((feature, idx) => (
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
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${idx % 2 === 0 ? 'bg-[#25be85]' : 'bg-black'}`}>
            <span className="text-lg font-bold text-white">{String(idx+1).padStart(2, '0')}</span>
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
    {/* Modern Litigation & Dispute Expertise Section (end of page) */}
    <section className="w-full py-16 px-4 bg-white dark:bg-black flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Left: Image */}
        <div className="flex items-center justify-center h-full">
          <img src={litigationImg} alt="Litigation Expertise" className="rounded-2xl shadow-xl w-full max-w-md h-full min-h-[320px] object-cover border-4 border-[#25be85]" style={{aspectRatio: '1.7/1'}} />
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
export default LitigationDispute;