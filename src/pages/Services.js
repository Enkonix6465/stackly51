import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import video from "../images/services-law.mp4";
import { useNavigate } from "react-router-dom";

// Translation object for all static content
const translations = {
  en: {
    heroTitle: "Comprehensive Legal Solutions. Strategic Advocacy.",
    heroDesc: "We deliver end-to-end solutions tailored to your unique challenges and objectives.",
    servicesTitle: "Our Legal Services",
    servicesDesc: "Comprehensive legal solutions for individuals, businesses, and organizations.",
    lawServices: [
      {
        img: require('../images/service1.jpg'),
        title: 'Litigation & Dispute Resolution',
        desc: 'Expert representation in civil, commercial, and criminal cases. Protecting your rights in and out of court.'
      },
      {
        img: require('../images/service2.jpg'),
        title: 'Corporate & Commercial Law',
        desc: 'Business formation, contracts, mergers, acquisitions, and regulatory compliance for companies of all sizes.'
      },
      {
        img: require('../images/service3.jpg'),
        title: 'Family Law & Mediation',
        desc: 'Compassionate guidance for divorce, child custody, adoption, and family disputes.'
      },
      {
        img: require('../images/service4.jpg'),
        title: 'Real Estate Law',
        desc: 'Comprehensive support for property transactions, leasing, zoning, and land use matters.'
      },
      {
        img: require('../images/service5.jpg'),
        title: 'Tax Law & Planning',
        desc: 'Strategic tax advice, compliance, and dispute resolution for individuals and businesses.'
      },
      {
        img: require('../images/service6.jpg'),
        title: 'International Law',
        desc: 'Cross-border transactions, compliance, and dispute resolution for global clients.'
      }
    ],
    expertiseTitle: "Our Expertise in Detail",
    expertise: [
      {
        title: "Family Law",
        img: require('../images/service3.jpg'),
        items: [
          "Divorce and separation",
          "Child custody and visitation",
          "Adoption and guardianship",
          "Domestic violence cases"
        ]
      },
      {
        title: "Criminal Law",
        img: require('../images/criminal.jpg'),
        items: [
          "Bail and anticipatory bail applications",
          "Trial and appeal representation",
          "White-collar crimes",
          "Juvenile offenses"
        ]
      },
      {
        title: "Civil Law",
        img: require('../images/civil.jpg'),
        items: [
          "Contract enforcement/disputes",
          "Property and real estate litigation",
          "Injunctions and recoveries"
        ]
      },
      {
        title: "Corporate Law",
        img: require('../images/corporate-law.jpg'),
        items: [
          "Business formation and advisory",
          "Mergers & acquisitions",
          "Contract drafting and disputes"
        ]
      }
    ],
    packagesTitle: "Law Firm Packages",
    packagesDesc: "Choose the perfect legal package for your needs. All packages include expert support and transparent pricing.",
    lawPackages: [
      {
        title: "Starter Package",
        desc: "Ideal for individuals and small businesses starting their legal journey.",
        features: [
          "Initial Consultation",
          "Basic Document Review",
          "Legal Guidance",
          "Monthly Updates"
        ],
        button: "Get Started",
        popular: false
      },
      {
        title: "Professional Package",
        desc: "Comprehensive legal support for growing businesses and families.",
        features: [
          "Contract Drafting & Review",
          "Dispute Resolution",
          "Compliance Advisory",
          "Priority Support"
        ],
        button: "Contact Us",
        popular: true
      },
      {
        title: "Enterprise Package",
        desc: "Full-service legal solutions for organizations and high-volume needs.",
        features: [
          "Dedicated Legal Team",
          "Custom Legal Strategies",
          "Risk Management",
          "Weekly Strategy Sessions"
        ],
        button: "Request Quote",
        popular: false
      }
    ],
    faqsTitle: "Law Firm FAQs",
    faqsDesc: "Get answers to common questions about our legal services and processes.",
    faqs: [
      {
        q: "How do I schedule a consultation?",
        a: "You can schedule a consultation by calling our office, using our online booking form, or emailing us directly. We offer flexible appointment times to suit your needs."
      },
      {
        q: "What areas of law do you specialize in?",
        a: "Our firm specializes in family law, criminal law, civil litigation, corporate law, real estate, and more. Contact us for details about your specific case."
      },
      {
        q: "How are legal fees determined?",
        a: "Fees depend on the complexity of your case and the services required. We provide transparent pricing and offer various packages to fit your needs."
      },
      {
        q: "Will my information remain confidential?",
        a: "Absolutely. Client confidentiality is a top priority, and all communications and documents are handled securely."
      },
      {
        q: "How long does a typical case take?",
        a: "The duration varies depending on the type and complexity of the case. We keep you informed at every stage and work efficiently to resolve matters."
      }
    ],
    ctaTitle: "Ready to Protect Your Interests?",
    ctaDesc: "Get started with our expert legal team and experience dedicated support, strategic solutions, and peace of mind. Contact us today for a confidential consultation.",
    ctaBtn: "Request Consultation"
  },
  ar: {
    heroTitle: "حلول قانونية شاملة. دفاع استراتيجي.",
    heroDesc: "نقدم حلولاً متكاملة مصممة لتناسب تحدياتك وأهدافك الفريدة.",
    servicesTitle: "خدماتنا القانونية",
    servicesDesc: "حلول قانونية شاملة للأفراد والشركات والمؤسسات.",
    lawServices: [
      {
        img: require('../images/service1.jpg'),
        title: 'التقاضي وتسوية النزاعات',
        desc: 'تمثيل خبير في القضايا المدنية والتجارية والجنائية. حماية حقوقك داخل وخارج المحكمة.'
      },
      {
        img: require('../images/service2.jpg'),
        title: 'القانون التجاري والشركات',
        desc: 'تأسيس الشركات، العقود، الاندماج والاستحواذ، والامتثال التنظيمي لجميع أنواع الشركات.'
      },
      {
        img: require('../images/service3.jpg'),
        title: 'قانون الأسرة والوساطة',
        desc: 'إرشاد متعاطف في الطلاق، حضانة الأطفال، التبني، ونزاعات الأسرة.'
      },
      {
        img: require('../images/service4.jpg'),
        title: 'قانون العقارات',
        desc: 'دعم شامل للمعاملات العقارية، التأجير، التنظيم، واستخدام الأراضي.'
      },
      {
        img: require('../images/service5.jpg'),
        title: 'قانون الضرائب والتخطيط',
        desc: 'استشارات ضريبية استراتيجية، الامتثال، وتسوية النزاعات للأفراد والشركات.'
      },
      {
        img: require('../images/service6.jpg'),
        title: 'القانون الدولي',
        desc: 'معاملات عبر الحدود، الامتثال، وتسوية النزاعات للعملاء العالميين.'
      }
    ],
    expertiseTitle: "خبراتنا بالتفصيل",
    expertise: [
      {
        title: "قانون الأسرة",
        img: require('../images/service3.jpg'),
        items: [
          "الطلاق والانفصال",
          "حضانة الأطفال وزياراتهم",
          "التبني والوصاية",
          "قضايا العنف الأسري"
        ]
      },
      {
        title: "القانون الجنائي",
        img: require('../images/criminal.jpg'),
        items: [
          "طلبات الكفالة والكفالة الت anticipatory",
          "التمثيل في المحاكم والاستئناف",
          "جرائم ذوي الياقات البيضاء",
          "جرائم الأحداث"
        ]
      },
      {
        title: "القانون المدني",
        img: require('../images/civil.jpg'),
        items: [
          "تنفيذ العقود/النزاعات",
          "التقاضي العقاري",
          "الأوامر القضائية والاسترداد"
        ]
      },
      {
        title: "القانون التجاري",
        img: require('../images/corporate-law.jpg'),
        items: [
          "تأسيس الشركات والاستشارات",
          "الاندماج والاستحواذ",
          "صياغة العقود والنزاعات"
        ]
      }
    ],
    packagesTitle: "باقات المكتب القانوني",
    packagesDesc: "اختر الباقة القانونية المثالية لاحتياجاتك. جميع الباقات تشمل دعم الخبراء وتسعير شفاف.",
    lawPackages: [
      {
        title: "باقة البداية",
        desc: "مثالية للأفراد والشركات الصغيرة في بداية رحلتهم القانونية.",
        features: [
          "استشارة أولية",
          "مراجعة المستندات الأساسية",
          "إرشاد قانوني",
          "تحديثات شهرية"
        ],
        button: "ابدأ الآن",
        popular: false
      },
      {
        title: "باقة المحترفين",
        desc: "دعم قانوني شامل للشركات المتنامية والعائلات.",
        features: [
          "صياغة ومراجعة العقود",
          "حل النزاعات",
          "استشارات الامتثال",
          "دعم أولوية"
        ],
        button: "اتصل بنا",
        popular: true
      },
      {
        title: "باقة المؤسسات",
        desc: "حلول قانونية متكاملة للمؤسسات وذوي الاحتياجات الكبيرة.",
        features: [
          "فريق قانوني مخصص",
          "استراتيجيات قانونية مخصصة",
          "إدارة المخاطر",
          "جلسات استراتيجية أسبوعية"
        ],
        button: "طلب عرض سعر",
        popular: false
      }
    ],
    faqsTitle: "الأسئلة الشائعة",
    faqsDesc: "احصل على إجابات لأكثر الأسئلة شيوعًا حول خدماتنا القانونية وإجراءاتنا.",
    faqs: [
      {
        q: "كيف يمكنني تحديد موعد استشارة؟",
        a: "يمكنك تحديد موعد استشارة عبر الاتصال بمكتبنا أو استخدام نموذج الحجز الإلكتروني أو البريد الإلكتروني المباشر."
      },
      {
        q: "ما هي مجالات القانون التي تتخصصون فيها؟",
        a: "نتخصص في قانون الأسرة، القانون الجنائي، التقاضي المدني، القانون التجاري، العقارات، والمزيد."
      },
      {
        q: "كيف يتم تحديد الرسوم القانونية؟",
        a: "تحدد الرسوم حسب تعقيد القضية والخدمات المطلوبة. نقدم تسعيرًا شفافًا وباقات متنوعة."
      },
      {
        q: "هل ستبقى معلوماتي سرية؟",
        a: "بالتأكيد. سرية العميل أولوية قصوى وجميع الاتصالات والمستندات تتم معالجتها بأمان."
      },
      {
        q: "كم تستغرق القضية عادة؟",
        a: "المدة تختلف حسب نوع القضية وتعقيدها. نبقيك على اطلاع في كل مرحلة ونعمل بكفاءة لحل الأمور."
      }
    ],
    ctaTitle: "جاهز لحماية مصالحك؟",
    ctaDesc: "ابدأ مع فريقنا القانوني الخبير واستمتع بالدعم المخصص والحلول الاستراتيجية وراحة البال. اتصل بنا اليوم لاستشارة سرية.",
    ctaBtn: "طلب استشارة"
  },
  he: {
    heroTitle: "פתרונות משפטיים מקיפים. ייצוג אסטרטגי.",
    heroDesc: "אנו מספקים פתרונות מקצה לקצה המותאמים לאתגרים ולמטרות הייחודיות שלך.",
    servicesTitle: "השירותים המשפטיים שלנו",
    servicesDesc: "פתרונות משפטיים מקיפים ליחידים, עסקים וארגונים.",
    lawServices: [
      {
        img: require('../images/service1.jpg'),
        title: 'ליטיגציה ויישוב סכסוכים',
        desc: 'ייצוג מומחה בתיקים אזרחיים, מסחריים ופליליים. הגנה על זכויותיך בבית המשפט ומחוצה לו.'
      },
      {
        img: require('../images/service2.jpg'),
        title: 'דיני חברות ומסחר',
        desc: 'הקמת עסקים, חוזים, מיזוגים ורכישות, וציות רגולטורי לכל סוגי החברות.'
      },
      {
        img: require('../images/service3.jpg'),
        title: 'דיני משפחה וגישור',
        desc: 'הכוונה אמפתית בגירושין, משמורת ילדים, אימוץ וסכסוכי משפחה.'
      },
      {
        img: require('../images/service4.jpg'),
        title: 'דיני מקרקעין',
        desc: 'תמיכה מקיפה בעסקאות נדל"ן, השכרה, תכנון ושימוש בקרקע.'
      },
      {
        img: require('../images/service5.jpg'),
        title: 'דיני מס ותכנון',
        desc: 'ייעוץ מס אסטרטגי, ציות ויישוב סכסוכים ליחידים ולעסקים.'
      },
      {
        img: require('../images/service6.jpg'),
        title: 'משפט בינלאומי',
        desc: 'עסקאות חוצות גבולות, ציות ויישוב סכסוכים ללקוחות גלובליים.'
      }
    ],
    expertiseTitle: "ההתמחויות שלנו בפירוט",
    expertise: [
      {
        title: "דיני משפחה",
        img: require('../images/service3.jpg'),
        items: [
          "גירושין והפרדה",
          "משמורת ילדים וביקורים",
          "אימוץ ואפוטרופסות",
          "תיקי אלימות במשפחה"
        ]
      },
      {
        title: "דין פלילי",
        img: require('../images/criminal.jpg'),
        items: [
          "בקשות ערבות וערבות anticipatory",
          "ייצוג במשפטים וערעורים",
          "פשעים כלכליים",
          "עבירות נוער"
        ]
      },
      {
        title: "דין אזרחי",
        img: require('../images/civil.jpg'),
        items: [
          "אכיפת חוזים/סכסוכים",
          "ליטיגציה נדל\"ן",
          "צו מניעה והשבה"
        ]
      },
      {
        title: "דיני חברות",
        img: require('../images/corporate-law.jpg'),
        items: [
          "הקמת עסקים וייעוץ",
          "מיזוגים ורכישות",
          "עריכת חוזים וסכסוכים"
        ]
      }
    ],
    packagesTitle: "חבילות המשרד המשפטי",
    packagesDesc: "בחר את החבילה המשפטית המושלמת לצרכים שלך. כל החבילות כוללות תמיכה מקצועית ותמחור שקוף.",
    lawPackages: [
      {
        title: "חבילת מתחילים",
        desc: "מתאימה ליחידים ולעסקים קטנים בתחילת הדרך המשפטית.",
        features: [
          "ייעוץ ראשוני",
          "סקירת מסמכים בסיסית",
          "הכוונה משפטית",
          "עדכונים חודשיים"
        ],
        button: "התחל",
        popular: false
      },
      {
        title: "חבילת מקצוענים",
        desc: "תמיכה משפטית מקיפה לעסקים מתפתחים ולמשפחות.",
        features: [
          "עריכת חוזים ובדיקתם",
          "יישוב סכסוכים",
          "ייעוץ ציות",
          "תמיכה בעדיפות"
        ],
        button: "צור קשר",
        popular: true
      },
      {
        title: "חבילת ארגונים",
        desc: "פתרונות משפטיים מלאים לארגונים ולצרכים גדולים.",
        features: [
          "צוות משפטי ייעודי",
          "אסטרטגיות משפטיות מותאמות",
          "ניהול סיכונים",
          "מפגשי אסטרטגיה שבועיים"
        ],
        button: "בקש הצעת מחיר",
        popular: false
      }
    ],
    faqsTitle: "שאלות נפוצות",
    faqsDesc: "קבל תשובות לשאלות נפוצות על השירותים המשפטיים שלנו והתהליכים.",
    faqs: [
      {
        q: "איך קובעים פגישת ייעוץ?",
        a: "ניתן לקבוע פגישה בטלפון, בטופס ההזמנה באתר או במייל. אנו מציעים זמני פגישה גמישים."
      },
      {
        q: "באילו תחומי משפט אתם מתמחים?",
        a: "המשרד מתמחה בדיני משפחה, פלילי, ליטיגציה אזרחית, חברות, נדל\"ן ועוד."
      },
      {
        q: "איך נקבעות העלויות המשפטיות?",
        a: "העלויות נקבעות לפי מורכבות התיק והשירותים הנדרשים. אנו מספקים תמחור שקוף וחבילות מגוונות."
      },
      {
        q: "האם המידע שלי יישאר חסוי?",
        a: "בהחלט. סודיות הלקוח היא בראש סדר העדיפויות וכל התקשורת והמסמכים מטופלים בבטחה."
      },
      {
        q: "כמה זמן לוקח תיק ממוצע?",
        a: "הזמן משתנה לפי סוג ומורכבות התיק. אנו מעדכנים אותך בכל שלב ופועלים ביעילות."
      }
    ],
    ctaTitle: "מוכן להגן על האינטרסים שלך?",
    ctaDesc: "התחל עם צוות המשפטנים שלנו ותהנה מתמיכה מקצועית, פתרונות אסטרטגיים ושקט נפשי. צור קשר לייעוץ חסוי.",
    ctaBtn: "בקש ייעוץ"
  }
};

const Services = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
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
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 w-full h-full bg-black/50 transition-colors duration-500"></div>
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
      {/* Law Firm Services Section */}
      <section className="w-full py-10 flex flex-col items-center bg-white dark:bg-black">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-[#25be85] dark:text-[#25be85]">
            {t.servicesTitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-10 text-center max-w-2xl mx-auto">
            {t.servicesDesc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {t.lawServices.map((service, idx) => (
              <div
                key={service.title}
                className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-[#25be85] hover:scale-105 transition-transform"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="mx-auto h-64 w-80 max-w-full rounded-xl mb-6 object-cover border-4 border-[#25be85] shadow-lg"
                />
                <h3 className="text-xl font-bold text-[#25be85] dark:text-[#25be85] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-base mb-4">
                  {service.desc}
                </p>
                <button
                  className="bg-[#25be85] text-white font-bold py-2 px-6 rounded-full shadow hover:bg-black dark:hover:bg-white hover:text-[#25be85] dark:hover:text-[#25be85] transition-all text-base mb-2"
                  onClick={() => {
                    const routes = [
                      '/litigation',
                      '/corporate',
                      '/family',
                      '/realestate',
                      '/tax',
                      '/international'
                    ];
                    navigate(routes[idx]);
                  }}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Expertise in Detail Section */}
      <section className="w-full py-16 px-4  dark:from-black dark:via-gray-900 dark:to-purple-950">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-black dark:text-white tracking-tight">{t.expertiseTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {t.expertise.map((area, idx) => (
            <div
              key={area.title}
              className="relative group rounded-2xl shadow-xl border border-purple-200 dark:border-white-700 overflow-hidden h-72 flex items-center justify-center transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <img src={area.img} alt={area.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/80 dark:bg-black/90">
                <h3 className="text-2xl font-bold mb-4 text-white text-center">{area.title}</h3>
                <ul className="space-y-3 w-full">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-center text-white text-base">
                      <svg className="h-5 w-5 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Law Firm Packages Section */}
      <section className="w-full py-20 px-4 bg-white dark:bg-black">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-black dark:text-white tracking-tight">{t.packagesTitle}</h2>
        <p className="text-lg text-center text-black/80 dark:text-white/80 mb-12 max-w-2xl mx-auto">{t.packagesDesc}</p>
        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center max-w-6xl mx-auto">
          {t.lawPackages.map((pkg, idx) => (
            <div
              key={pkg.title}
              className={`flex-1 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 shadow-lg border ${pkg.popular ? 'bg-[#25be85] text-white border-[#25be85] shadow-2xl' : 'bg-white dark:bg-black text-black dark:text-white border-[#25be85]'} flex flex-col items-center`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-1 text-sm font-bold rounded-b-lg" style={{marginTop: '-2.5rem'}}>
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-[#25be85]'}`}>{pkg.title}</h3>
              <p className={`mb-6 text-base ${pkg.popular ? 'text-white/90' : 'text-black/80 dark:text-white/80'}`}>{pkg.desc}</p>
              <ul className="mb-8 space-y-3 w-full">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-base">
                    <svg className="h-5 w-5 text-[#25be85] mr-2 flex-shrink-0" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className={pkg.popular ? 'text-white' : 'text-black dark:text-white'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'bg-white text-[#25be85] hover:bg-[#25be85] hover:text-white' : 'bg-[#25be85] text-white hover:bg-black dark:hover:bg-white hover:text-[#25be85] dark:hover:text-[#25be85]'}`}>{pkg.button}</button>
            </div>
          ))}
        </div>
      </section>
      {/* Law Firm FAQ Section */}
      <section className="w-full py-16 px-4 bg-white dark:bg-black">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-black dark:text-white tracking-tight">{t.faqsTitle}</h2>
        <p className="text-lg text-center text-black/80 dark:text-white/80 mb-10 max-w-2xl mx-auto">{t.faqsDesc}</p>
        <div className="max-w-2xl mx-auto space-y-5">
          {t.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-black border border-[#25be85] rounded-xl shadow transition">
              <button
                className="w-full text-left px-6 py-5 font-semibold text-lg text-[#25be85] flex justify-between items-center focus:outline-none"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
              >
                <span>{faq.q}</span>
                <svg className={`h-6 w-6 transition-transform ${openFaq === idx ? 'rotate-180' : ''} text-[#25be85]`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5 text-base text-black dark:text-white border-t border-[#25be85]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-20 flex items-center justify-center bg-black">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl">
            {t.ctaDesc}
          </p>
          <button className="bg-[#25be85] text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-white hover:text-[#25be85] transition-all text-lg" onClick={() => navigate('/contact')}>
            {t.ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
};
export default Services;