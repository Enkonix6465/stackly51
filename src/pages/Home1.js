import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import video from "../images/law-hero.mp4";

// Translations for all Home1 content
const translations = {
  en: {
    heroTitle: "Trusted Legal Solutions for Your Success",
    heroDesc: "Our experienced attorneys provide expert guidance, strategic advocacy, and unwavering commitment to justice for individuals and businesses alike.",
    getStarted: "Get Started",
    aboutYears: "25 Years Experience",
    aboutFirm: "About Our Firm",
    aboutTitle: "Dedicated to Justice, Integrity, and Results",
    aboutDesc: "For over 25 years, our law firm has provided trusted legal counsel and representation to individuals, families, and businesses. Our experienced attorneys are committed to upholding the highest standards of integrity and professionalism, ensuring every client receives personalized attention and strategic solutions.",
    aboutList: [
      "Expertise in civil, criminal, family, and corporate law",
      "Client-focused approach with clear communication",
      "Proven track record of successful outcomes",
      "Compassionate advocacy and ethical guidance"
    ],
    aboutBtn: "About Us",
    approachTitle: "Our Legal Approach",
    approachDesc: "We follow a meticulous process designed to achieve optimal results for our clients through every stage of legal representation.",
    steps: [
      {
        title: "Initial Consultation",
        description: "We begin with a comprehensive discussion to understand your legal needs and objectives.",
        icon: "🗣️"
      },
      {
        title: "Case Evaluation",
        description: "Our legal team thoroughly analyzes your situation to develop the optimal strategy.",
        icon: "📊"
      },
      {
        title: "Strategic Planning",
        description: "We craft a detailed plan tailored to your specific circumstances and goals.",
        icon: "📝"
      },
      {
        title: "Execution & Representation",
        description: "Our attorneys vigorously advocate for your interests throughout the legal process.",
        icon: "⚖️"
      },
      {
        title: "Resolution & Follow-up",
        description: "We ensure satisfactory outcomes and provide ongoing counsel as needed.",
        icon: "✅"
      }
    ],
    excellenceTitle: "Excellence in Legal Representation",
    excellenceDesc: "With over three decades of combined experience, our team has successfully represented clients in complex legal matters across various practice areas.",
    stats: [
      { number: "95%", label: "Case Success Rate", desc: "Across all practice areas and case types" },
      { number: "500+", label: "Cases Resolved", desc: "Successful outcomes for our clients" },
      { number: "30+", label: "Years Experience", desc: "Collective legal expertise" },
      { number: "99%", label: "Client Satisfaction", desc: "Based on client feedback surveys" }
    ],
    testimonialsTitle: "Client Testimonials",
    testimonialsDesc: "Hear from our clients about their experiences with our legal team and the results we've achieved together.",
    testimonials: [
      {
        quote: "“The attorneys at this firm were incredibly knowledgeable and supportive throughout my case. Their dedication led to a successful outcome beyond my expectations.”",
        name: "Alexandra P.",
        role: "Business Owner",
        initial: "A"
      },
      {
        quote: "“Professional, compassionate, and results-driven. I felt truly heard and represented every step of the way. Highly recommend their services!”",
        name: "Michael S.",
        role: "Family Law Client",
        initial: "M"
      },
      {
        quote: "“Their strategic approach and attention to detail made all the difference in my case. I am grateful for their expertise and support.”",
        name: "Sarah L.",
        role: "Litigation Client",
        initial: "S"
      }
    ],
    ctaTitle: "Ready to Discuss Your Case?",
    ctaDesc: "Contact us today for a confidential consultation. Our team is here to guide you every step of the way.",
    ctaBtn: "Get Your Free Consultation"
  },
  ar: {
    heroTitle: "حلول قانونية موثوقة لنجاحك",
    heroDesc: "يقدم محامونا ذوو الخبرة إرشادات خبيرة ودفاعًا استراتيجيًا والتزامًا لا يتزعزع بالعدالة للأفراد والشركات على حد سواء.",
    getStarted: "ابدأ الآن",
    aboutYears: "25 سنة خبرة",
    aboutFirm: "عن شركتنا",
    aboutTitle: "ملتزمون بالعدالة والنزاهة والنتائج",
    aboutDesc: "على مدار 25 عامًا، قدم مكتبنا القانوني المشورة القانونية والتمثيل الموثوق للأفراد والعائلات والشركات. يلتزم محامونا ذوو الخبرة بأعلى معايير النزاهة والاحترافية، لضمان حصول كل عميل على اهتمام شخصي وحلول استراتيجية.",
    aboutList: [
      "خبرة في القانون المدني والجنائي والأسري والشركات",
      "نهج يركز على العميل مع تواصل واضح",
      "سجل حافل بالنجاحات",
      "دفاع متعاطف وإرشاد أخلاقي"
    ],
    aboutBtn: "معلومات عنا",
    approachTitle: "نهجنا القانوني",
    approachDesc: "نتبع عملية دقيقة تهدف لتحقيق أفضل النتائج لعملائنا في كل مرحلة من مراحل التمثيل القانوني.",
    steps: [
      {
        title: "الاستشارة الأولية",
        description: "نبدأ بنقاش شامل لفهم احتياجاتك وأهدافك القانونية.",
        icon: "🗣️"
      },
      {
        title: "تقييم القضية",
        description: "يقوم فريقنا القانوني بتحليل وضعك بدقة لوضع الاستراتيجية المثلى.",
        icon: "📊"
      },
      {
        title: "التخطيط الاستراتيجي",
        description: "نضع خطة مفصلة مصممة خصيصًا لظروفك وأهدافك.",
        icon: "📝"
      },
      {
        title: "التنفيذ والتمثيل",
        description: "يدافع محامونا بقوة عن مصالحك طوال العملية القانونية.",
        icon: "⚖️"
      },
      {
        title: "الحل والمتابعة",
        description: "نضمن تحقيق النتائج المرضية ونقدم المشورة المستمرة حسب الحاجة.",
        icon: "✅"
      }
    ],
    excellenceTitle: "التميز في التمثيل القانوني",
    excellenceDesc: "بخبرة تزيد عن ثلاثة عقود، نجح فريقنا في تمثيل العملاء في قضايا قانونية معقدة عبر مجالات ممارسة متنوعة.",
    stats: [
      { number: "95%", label: "نسبة النجاح في القضايا", desc: "في جميع المجالات وأنواع القضايا" },
      { number: "500+", label: "قضايا تم حلها", desc: "نتائج ناجحة لعملائنا" },
      { number: "30+", label: "سنوات الخبرة", desc: "خبرة قانونية جماعية" },
      { number: "99%", label: "رضا العملاء", desc: "استنادًا إلى استطلاعات آراء العملاء" }
    ],
    testimonialsTitle: "آراء العملاء",
    testimonialsDesc: "استمع إلى عملائنا حول تجاربهم مع فريقنا القانوني والنتائج التي حققناها معًا.",
    testimonials: [
      {
        quote: "“كان المحامون في هذا المكتب على درجة عالية من المعرفة والدعم طوال قضيتي. أدى تفانيهم إلى نتيجة ناجحة فاقت توقعاتي.”",
        name: "ألكسندرا ب.",
        role: "صاحبة عمل",
        initial: "أ"
      },
      {
        quote: "“محترفون، متعاطفون، وملتزمون بالنتائج. شعرت أنني مسموع وممثل في كل خطوة. أنصح بخدماتهم بشدة!”",
        name: "مايكل س.",
        role: "عميل قانون الأسرة",
        initial: "م"
      },
      {
        quote: "“أسلوبهم الاستراتيجي واهتمامهم بالتفاصيل أحدثا فرقًا كبيرًا في قضيتي. أنا ممتن لخبرتهم ودعمهم.”",
        name: "سارة ل.",
        role: "عميلة التقاضي",
        initial: "س"
      }
    ],
    ctaTitle: "جاهز لمناقشة قضيتك؟",
    ctaDesc: "اتصل بنا اليوم للحصول على استشارة سرية. فريقنا هنا لإرشادك في كل خطوة.",
    ctaBtn: "احصل على استشارتك المجانية"
  },
  he: {
    heroTitle: "פתרונות משפטיים אמינים להצלחתך",
    heroDesc: "העורכים המנוסים שלנו מעניקים ייעוץ מומחה, ייצוג אסטרטגי ומחויבות בלתי מתפשרת לצדק ליחידים ולעסקים.",
    getStarted: "התחל עכשיו",
    aboutYears: "25 שנות ניסיון",
    aboutFirm: "על המשרד שלנו",
    aboutTitle: "מחויבים לצדק, יושרה ותוצאות",
    aboutDesc: "במשך יותר מ-25 שנה, משרדנו מעניק ייעוץ וייצוג משפטי אמין ליחידים, משפחות ועסקים. עורכי הדין המנוסים שלנו מחויבים לסטנדרטים הגבוהים ביותר של יושרה ומקצועיות, ומבטיחים שכל לקוח יקבל יחס אישי ופתרונות אסטרטגיים.",
    aboutList: [
      "מומחיות בדיני אזרחי, פלילי, משפחה וחברות",
      "גישה ממוקדת לקוח עם תקשורת ברורה",
      "היסטוריה מוכחת של הצלחות",
      "ייצוג אמפתי והכוונה אתית"
    ],
    aboutBtn: "עלינו",
    approachTitle: "הגישה המשפטית שלנו",
    approachDesc: "אנו פועלים בתהליך מדוקדק שנועד להשיג תוצאות מיטביות עבור לקוחותינו בכל שלב של הייצוג המשפטי.",
    steps: [
      {
        title: "ייעוץ ראשוני",
        description: "אנו מתחילים בדיון מקיף להבנת צרכיך ומטרותיך המשפטיות.",
        icon: "🗣️"
      },
      {
        title: "הערכת תיק",
        description: "הצוות המשפטי שלנו מנתח את מצבך לעומק כדי לפתח אסטרטגיה מיטבית.",
        icon: "📊"
      },
      {
        title: "תכנון אסטרטגי",
        description: "אנו בונים תוכנית מפורטת המותאמת לנסיבותיך ולמטרותיך.",
        icon: "📝"
      },
      {
        title: "ביצוע וייצוג",
        description: "עורכי הדין שלנו פועלים בנחישות למען האינטרסים שלך לאורך כל ההליך המשפטי.",
        icon: "⚖️"
      },
      {
        title: "סיום ומעקב",
        description: "אנו דואגים לתוצאות מספקות ומעניקים ייעוץ מתמשך לפי הצורך.",
        icon: "✅"
      }
    ],
    excellenceTitle: "מצוינות בייצוג משפטי",
    excellenceDesc: "עם ניסיון מצטבר של מעל שלושה עשורים, הצוות שלנו ייצג בהצלחה לקוחות במקרים משפטיים מורכבים במגוון תחומים.",
    stats: [
      { number: "95%", label: "שיעור הצלחה בתיקים", desc: "בכל התחומים וסוגי התיקים" },
      { number: "500+", label: "תיקים שנפתרו", desc: "תוצאות מוצלחות ללקוחותינו" },
      { number: "30+", label: "שנות ניסיון", desc: "מומחיות משפטית מצטברת" },
      { number: "99%", label: "שביעות רצון לקוחות", desc: "בהתבסס על סקרי משוב לקוחות" }
    ],
    testimonialsTitle: "המלצות לקוחות",
    testimonialsDesc: "קראו מהלקוחות שלנו על החוויה עם הצוות המשפטי שלנו והתוצאות שהשגנו יחד.",
    testimonials: [
      {
        quote: "“העורכים במשרד היו מקצועיים ותומכים לאורך כל התהליך. המסירות שלהם הביאה לתוצאה מוצלחת מעבר לציפיותיי.”",
        name: "אלכסנדרה פ.",
        role: "בעלת עסק",
        initial: "א"
      },
      {
        quote: "“מקצועיים, אמפתיים וממוקדי תוצאה. הרגשתי שמקשיבים לי ומייצגים אותי בכל שלב. ממליץ בחום!”",
        name: "מיכאל ס.",
        role: "לקוח דיני משפחה",
        initial: "מ"
      },
      {
        quote: "“הגישה האסטרטגית ותשומת הלב לפרטים עשו את ההבדל בתיק שלי. אני מודה להם על המקצועיות והתמיכה.”",
        name: "שרה ל.",
        role: "לקוחת ליטיגציה",
        initial: "ס"
      }
    ],
    ctaTitle: "מוכן לדון בתיק שלך?",
    ctaDesc: "צור קשר היום לייעוץ דיסקרטי. הצוות שלנו כאן ללוות אותך בכל שלב.",
    ctaBtn: "קבל ייעוץ חינם"
  }
};

const Home1 = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const navigate = useNavigate();

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
        {/* Overlay */}
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
          {/* Call to Action Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <button
              className="px-6 py-3 rounded-full font-medium text-white shadow-lg transition"
              style={{ backgroundColor: '#25be85' }}
              onClick={() => navigate('/about')}
            >
              {t.getStarted}
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full pt-10 pb-20 bg-gradient-to-br from-[#f8f6f2] to-white dark:from-black dark:to-black px-4 md:px-8 mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 items-center px-0 mx-auto">
          {/* Left: Image */}
          <motion.div
            className="flex flex-col items-center relative w-full"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-6 w-full flex justify-center">
              <motion.span
                className="absolute left-1/2 -translate-x-1/2 -top-10 bg-white dark:bg-black text-[#25be85] font-extrabold text-4xl px-8 py-4 rounded-xl shadow-xl border border-[#25be85]"
                style={{ zIndex: 2 }}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {t.aboutYears}
              </motion.span>
              <motion.img
                src={require('../images/law-about.jpg')}
                alt="About Us"
                className="rounded-3xl shadow-2xl border-4 border-[#25be85] object-cover w-full h-[520px] max-w-none"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(37,190,133,0.15)" }}
              />
            </div>
          </motion.div>
          {/* Right: Content */}
          <motion.div
            className="flex flex-col justify-center px-8 md:px-16 w-full"
            style={{ height: '520px' }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="uppercase text-base font-semibold text-[#25be85] mb-5 tracking-widest">{t.aboutFirm}</span>
            <h2 className="text-5xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-7 leading-tight font-serif">{t.aboutTitle}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-3 font-medium ">
              {t.aboutDesc}
            </p>
            <ul className="mb-4 list-disc list-inside text-gray-700 dark:text-gray-200">
              {t.aboutList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <button className="px-8 py-3 font-bold rounded-xl shadow-xl transition w-fit text-lg tracking-wide border-2" style={{ backgroundColor: '#25be85', color: 'white', borderColor: '#25be85' }} onClick={() => navigate('/about')}>{t.aboutBtn}</button>
          </motion.div>
        </div>
      </section>

      {/* Third section - Our Legal Approach */}
      <section className="w-full py-16 bg-gradient-to-b from-[#e6fff5] to-[#f8f6f2] dark:from-black dark:to-black px-4 md:px-8 mx-auto">
        <div className="w-full px-0 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-[#25be85] dark:text-[#25be85] mb-4">{t.approachTitle}</h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.approachDesc}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Process steps */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="absolute left-8 top-10 bottom-10 w-1 bg-[#25be85] dark:bg-[#25be85] -z-10"></div>
                {t.steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-start mb-8 transition-all duration-300 ${activeStep === index ? 'scale-105' : 'opacity-80'}`}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl
                      ${activeStep === index
                        ? 'bg-[#25be85] text-white shadow-lg'
                        : 'bg-white dark:bg-gray-700 text-[#25be85] shadow-md'}`}>
                      {step.icon}
                    </div>
                    <div className="ml-6">
                      <h3 className={`text-xl font-semibold mb-2 ${activeStep === index
                        ? 'text-[#25be85]'
                        : 'text-slate-800 dark:text-white'}`}>
                        {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual representation */}
            <div className="lg:w-2/5">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-[#25be85] dark:border-[#25be85]">
                <div className="text-[#25be85] dark:text-[#25be85] text-6xl mb-6 text-center">{t.steps[activeStep].icon}</div>
                <h3 className="text-2xl font-serif font-bold text-center text-slate-800 dark:text-white mb-4">
                  {t.steps[activeStep].title}
                </h3>
                <p className="text-slate-600 dark:text-gray-300 text-center">
                  {t.steps[activeStep].description}
                </p>
                <div className="flex justify-center mt-8">
                  {t.steps.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full mx-1 ${activeStep === index
                        ? 'bg-[#25be85]'
                        : 'bg-[#b2f2d6]'}`}
                      onClick={() => setActiveStep(index)}
                      aria-label={`Go to step ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Statistics and Achievements Section */}
        <motion.section
          className="py-16 px-4 md:px-8 dark:bg-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: '#25be85' }}>{t.excellenceTitle}</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-white">
                {t.excellenceDesc}
              </p>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              viewport={{ once: true }}
            >
              {t.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-xl border-2 dark:bg-gray-900 text-center"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 40 },
                    visible: { opacity: 1, scale: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  style={{ borderColor: '#25be85' }}
                >
                  <div className="text-center">
                    <span className="stat-number text-4xl font-bold" style={{ color: '#25be85' }}>{stat.number}</span>
                    <h3 className="text-xl font-semibold mt-4" style={{ color: '#25be85' }}>{stat.label}</h3>
                    <p className="text-gray-600 mt-2 dark:text-white">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </section>

      {/* Testimonials Section */}
      <motion.section
        className="py-10 px-4 md:px-8 bg-gradient-to-br from-[#f8f6f2] to-white dark:from-black dark:to-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: '#25be85' }}>{t.testimonialsTitle}</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-200">
              {t.testimonialsDesc}
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25
                }
              }
            }}
            viewport={{ once: true }}
          >
            {t.testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border-t-4"
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                style={{ borderColor: '#25be85' }}
              >
                <p className="text-lg italic text-gray-800 dark:text-gray-100 mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25be85] flex items-center justify-center text-white font-bold text-xl">{testimonial.initial}</div>
                  <div>
                    <span className="block font-semibold text-gray-900 dark:text-white">{testimonial.name}</span>
                    <span className="block text-sm text-gray-500">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      {/* Call to Action Section */}
      <section className="py-10 bg-black dark:from-[#25be85]/20 dark:via-black dark:to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-white">{t.ctaTitle}</h2>
            <p className="text-xl text-white dark:text-gray-300 mb-8 leading-relaxed">
              {t.ctaDesc}
            </p>
            <button
              className="inline-block px-8 py-4 rounded-full font-semibold text-white bg-[#25be85] shadow-lg transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-[#25be85] dark:hover:text-[#25be85]"
              onClick={() => navigate('/contact')}
            >
              {t.ctaBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home1;