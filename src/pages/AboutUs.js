import { motion } from "framer-motion";
import video from "../images/about-law.mp4";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";
import team4 from "../images/team4.jpg";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// If you have a custom Button component, import it here:
// import Button from '../components/Button';
const translations = {
  en: {
    heroTitle: "Relentless Advocacy. Measurable Results.",
    heroDesc: "Our philosophy is simple: achieve the best possible outcome for our clients.",
    missionTitle: "Our Mission & Values",
    mission: "To deliver justice through uncompromising excellence, integrity, and client-centered legal representation.",
    guidingPrinciples: "Our Guiding Principles",
    coreValues: "Core Values",
    ourCommitment: "Our Commitment",
    ourCommitmentDesc: "We pledge to uphold these values in every case we handle and every client we serve.",
    legalApproachTitle: "Our Legal Approach",
    legalApproachDesc: "A meticulous process designed to achieve optimal results for our clients",
    commitmentTitle: "Our Commitment to Clients",
    commitmentDesc: "The promises we make and keep for every client we represent",
    pledgeTitle: "Our Pledge to You",
    pledgeDesc: "We are committed to providing exceptional legal representation that not only meets but exceeds your expectations. Your success is our success, and we measure our achievements by the results we obtain for our clients.",
    teamTitle: "Meet Our Legal Team",
    teamDesc: "Experienced. Trusted. Results-driven.",
    ctaTitle: "Ready to Discuss Your Case?",
    ctaDesc: "Contact us today for a confidential consultation. Our team is here to guide you every step of the way.",
    ctaBtn: "Get Your Free Consultation",
    teamMembers: [
      {
        name: 'John Doe',
        role: 'Senior Partner – Corporate Law',
        image: team1,
        bio: 'With over 20 years of legal expertise, John leads our corporate law department, advising Fortune 500 companies and startups alike.',
      },
      {
        name: 'Jane Smith',
        role: 'Head of Litigation',
        image: team2,
        bio: 'Jane is a seasoned litigator known for her sharp courtroom strategy and client advocacy.',
      },
      {
        name: 'Michael Lee',
        role: 'Associate – Family Law',
        image: team3,
        bio: 'Michael brings compassion and clarity to complex family law cases, ensuring client needs are always prioritized.',
      },
      {
        name: 'Emily Carter',
        role: 'Legal Consultant – International Law',
        image: team4,
        bio: 'Emily has a global perspective on legal matters, offering expertise in cross-border corporate and compliance issues.',
      },
    ],
    commitments: [
      {
        title: "Transparent Communication",
        description: "We maintain open, honest dialogue about your case progress, strategies, and potential outcomes.",
        percentage: 100
      },
      {
        title: "Personalized Attention",
        description: "Every client receives dedicated attention from experienced attorneys who understand their unique situation.",
        percentage: 100
      },
      {
        title: "Aggressive Advocacy",
        description: "We pursue your objectives with determination and skill, leveraging our expertise for your benefit.",
        percentage: 100
      },
      {
        title: "Ethical Excellence",
        description: "Our practice is guided by the highest ethical standards and professional integrity.",
        percentage: 100
      }
    ],
    missionData: {
      title: "Our Guiding Principles",
      mission: "To deliver justice through uncompromising excellence, integrity, and client-centered legal representation.",
      principles: [
        {
          title: "Integrity First",
          description: "We uphold the highest ethical standards in all our interactions and legal representations.",
          icon: "⚖️"
        },
        {
          title: "Client Empowerment",
          description: "We believe in educating and empowering our clients to make informed decisions about their legal matters.",
          icon: "💪"
        },
        {
          title: "Innovative Solutions",
          description: "We leverage cutting-edge legal strategies and technology to achieve optimal outcomes for our clients.",
          icon: "🚀"
        },
        {
          title: "Community Impact",
          description: "We're committed to using our legal expertise to positively impact our community and beyond.",
          icon: "🌍"
        }
      ],
      coreValues: [
        {
          title: "Justice",
          description: "Pursuing fair outcomes for all our clients regardless of their background or circumstances."
        },
        {
          title: "Excellence",
          description: "Striving for the highest quality in every aspect of our legal practice."
        },
        {
          title: "Courage",
          description: "Fearlessly advocating for our clients' rights and interests."
        },
        {
          title: "Compassion",
          description: "Understanding our clients' situations and providing empathetic support."
        }
      ]
    },
    steps: [
      {
        title: "Initial Consultation",
        description: "We begin by thoroughly understanding your legal needs and objectives in a detailed free consultation.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25be85] text-white text-2xl shadow-lg">⚖️</span>
        )
      },
      {
        title: "Case Analysis",
        description: "Our legal team conducts comprehensive research and analysis to build a strong foundation for your case.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-[#25be85] text-2xl shadow-lg">📑</span>
        )
      },
      {
        title: "Strategy Development",
        description: "We craft a tailored legal strategy designed specifically to achieve your desired outcome.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25be85] text-white text-2xl shadow-lg">🧠</span>
        )
      },
      {
        title: "Execution & Representation",
        description: "Our experienced attorneys vigorously represent your interests through negotiation or litigation.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-[#25be85] text-2xl shadow-lg">🤝</span>
        )
      },
      {
        title: "Resolution & Follow-up",
        description: "We ensure proper implementation of outcomes and provide ongoing counsel to protect your interests.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25be85] text-white text-2xl shadow-lg">✅</span>
        )
      }
    ]
  },
  ar: {
    heroTitle: "الدفاع بلا هوادة. نتائج قابلة للقياس.",
    heroDesc: "فلسفتنا بسيطة: تحقيق أفضل نتيجة ممكنة لعملائنا.",
    missionTitle: "مهمتنا وقيمنا",
    mission: "تقديم العدالة من خلال التميز والنزاهة والتمثيل القانوني الذي يركز على العميل.",
    guidingPrinciples: "مبادئنا التوجيهية",
    coreValues: "القيم الأساسية",
    ourCommitment: "التزامنا",
    ourCommitmentDesc: "نتعهد بالالتزام بهذه القيم في كل قضية نتولاها وكل عميل نخدمه.",
    legalApproachTitle: "نهجنا القانوني",
    legalApproachDesc: "عملية دقيقة مصممة لتحقيق أفضل النتائج لعملائنا",
    commitmentTitle: "التزامنا تجاه العملاء",
    commitmentDesc: "الوعود التي نقدمها ونفي بها لكل عميل نمثله",
    pledgeTitle: "تعهدنا لك",
    pledgeDesc: "نلتزم بتقديم تمثيل قانوني استثنائي لا يقتصر على تلبية توقعاتك بل يتجاوزها. نجاحك هو نجاحنا، ونقيس إنجازاتنا بالنتائج التي نحققها لعملائنا.",
    teamTitle: "تعرف على فريقنا القانوني",
    teamDesc: "ذو خبرة. موثوق. يركز على النتائج.",
    ctaTitle: "جاهز لمناقشة قضيتك؟",
    ctaDesc: "اتصل بنا اليوم للحصول على استشارة سرية. فريقنا هنا لإرشادك في كل خطوة.",
    ctaBtn: "احصل على استشارتك المجانية",
    teamMembers: [
      {
        name: 'جون دو',
        role: 'شريك أول – القانون التجاري',
        image: team1,
        bio: 'بخبرة قانونية تزيد عن 20 عامًا، يقود جون قسم القانون التجاري لدينا، ويقدم المشورة للشركات الكبرى والشركات الناشئة.',
      },
      {
        name: 'جين سميث',
        role: 'رئيسة قسم التقاضي',
        image: team2,
        bio: 'جين محامية ذات خبرة معروفة باستراتيجيتها الحادة في المحكمة والدفاع عن العملاء.',
      },
      {
        name: 'مايكل لي',
        role: 'مساعد – قانون الأسرة',
        image: team3,
        bio: 'مايكل يجلب التعاطف والوضوح لقضايا قانون الأسرة المعقدة، ويضمن دائمًا أولوية احتياجات العملاء.',
      },
      {
        name: 'إميلي كارتر',
        role: 'استشارية قانونية – القانون الدولي',
        image: team4,
        bio: 'إميلي لديها منظور عالمي في المسائل القانونية، وتقدم خبرة في القضايا التجارية والامتثال عبر الحدود.',
      },
    ],
    commitments: [
      {
        title: "التواصل الشفاف",
        description: "نحافظ على حوار مفتوح وصادق حول تقدم قضيتك واستراتيجياتها والنتائج المحتملة.",
        percentage: 100
      },
      {
        title: "الاهتمام الشخصي",
        description: "يتلقى كل عميل اهتمامًا مخصصًا من محامين ذوي خبرة يفهمون وضعهم الفريد.",
        percentage: 100
      },
      {
        title: "الدفاع الحازم",
        description: "نسعى لتحقيق أهدافك بعزم ومهارة، مستفيدين من خبرتنا لصالحك.",
        percentage: 100
      },
      {
        title: "التميز الأخلاقي",
        description: "توجه ممارستنا أعلى المعايير الأخلاقية والنزاهة المهنية.",
        percentage: 100
      }
    ],
    missionData: {
      title: "مبادئنا التوجيهية",
      mission: "تقديم العدالة من خلال التميز والنزاهة والتمثيل القانوني الذي يركز على العميل.",
      principles: [
        {
          title: "النزاهة أولاً",
          description: "نحن نتمسك بأعلى المعايير الأخلاقية في جميع تعاملاتنا وتمثيلاتنا القانونية.",
          icon: "⚖️"
        },
        {
          title: "تمكين العميل",
          description: "نؤمن بأهمية تثقيف وتمكين عملائنا لاتخاذ قرارات مستنيرة بشأن مسائلهم القانونية.",
          icon: "💪"
        },
        {
          title: "حلول مبتكرة",
          description: "نستخدم استراتيجيات قانونية وتكنولوجيا متطورة لتحقيق أفضل النتائج لعملائنا.",
          icon: "🚀"
        },
        {
          title: "أثر مجتمعي",
          description: "نحن ملتزمون باستخدام خبرتنا القانونية لإحداث تأثير إيجابي في مجتمعنا وما وراءه.",
          icon: "🌍"
        }
      ],
      coreValues: [
        {
          title: "العدالة",
          description: "السعي لتحقيق نتائج عادلة لجميع عملائنا بغض النظر عن خلفياتهم أو ظروفهم."
        },
        {
          title: "التميز",
          description: "السعي لأعلى جودة في كل جانب من جوانب ممارستنا القانونية."
        },
        {
          title: "الشجاعة",
          description: "الدفاع بلا خوف عن حقوق ومصالح عملائنا."
        },
        {
          title: "التعاطف",
          description: "فهم حالات عملائنا وتقديم الدعم العاطفي."
        }
      ]
    },
    steps: [
      {
        title: "الاستشارة الأولية",
        description: "نبدأ بفهم احتياجاتك القانونية وأهدافك بشكل شامل في استشارة مجانية مفصلة.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25be85] text-white text-2xl shadow-lg">⚖️</span>
        )
      },
      {
        title: "تحليل القضية",
        description: "يقوم فريقنا القانوني بإجراء بحث شامل وتحليل لبناء أساس قوي لقضيتك.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-[#25be85] text-2xl shadow-lg">📑</span>
        )
      },
      {
        title: "تطوير الاستراتيجية",
        description: "نقوم بصياغة استراتيجية قانونية مصممة خصيصًا لتحقيق النتيجة المرغوبة.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25be85] text-white text-2xl shadow-lg">🧠</span>
        )
      },
      {
        title: "التنفيذ والتمثيل",
        description: "يمثل محامونا ذوو الخبرة مصالحك بقوة من خلال التفاوض أو التقاضي.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-[#25be85] text-2xl shadow-lg">🤝</span>
        )
      },
      {
        title: "التحليل والمتابعة",
        description: "نضمن التنفيذ السليم للنتائج ونقدم المشورة المستمرة لحماية مصالحك.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25be85] text-white text-2xl shadow-lg">✅</span>
        )
      }
    ]
  },
  he: {
    heroTitle: "ייצוג ללא פשרות. תוצאות מדידות.",
    heroDesc: "הפילוסופיה שלנו פשוטה: להשיג את התוצאה הטובה ביותר עבור לקוחותינו.",
    missionTitle: "המשימה והערכים שלנו",
    mission: "להעניק צדק באמצעות מצוינות בלתי מתפשרת, יושרה וייצוג משפטי ממוקד לקוח.",
    guidingPrinciples: "העקרונות המנחים שלנו",
    coreValues: "ערכים מרכזיים",
    ourCommitment: "המחויבות שלנו",
    ourCommitmentDesc: "אנו מתחייבים לשמור על ערכים אלו בכל תיק ובכל לקוח.",
    legalApproachTitle: "הגישה המשפטית שלנו",
    legalApproachDesc: "תהליך קפדני שנועד להשיג תוצאות מיטביות עבור לקוחותינו",
    commitmentTitle: "המחויבות שלנו ללקוחות",
    commitmentDesc: "ההבטחות שאנו נותנים ומקיימים לכל לקוח שאנו מייצגים",
    pledgeTitle: "ההתחייבות שלנו אליך",
    pledgeDesc: "אנו מחויבים לייצוג משפטי יוצא דופן שלא רק עומד בציפיותיך אלא גם עולה עליהן. הצלחתך היא הצלחתנו, ואנו מודדים את הישגינו לפי התוצאות שאנו משיגים ללקוחותינו.",
    teamTitle: "הכירו את צוות המשפטנים שלנו",
    teamDesc: "מנוסים. אמינים. ממוקדי תוצאות.",
    ctaTitle: "מוכן לדון במקרה שלך?",
    ctaDesc: "צור קשר היום לייעוץ חסוי. הצוות שלנו כאן ללוות אותך בכל שלב.",
    ctaBtn: "קבל ייעוץ חינם",
    teamMembers: [
      {
        name: 'ג\'ון דו',
        role: 'שותף בכיר – משפט עסקי',
        image: team1,
        bio: 'עם ניסיון משפטי של מעל 20 שנה, ג\'ון מוביל את מחלקת המשפט העסקי שלנו ומייעץ לחברות גדולות וסטארטאפים.',
      },
      {
        name: 'ג\'יין סמית',
        role: 'ראש מחלקת ליטיגציה',
        image: team2,
        bio: 'ג\'יין היא ליטיגטורית מנוסה הידועה באסטרטגיה חדה ובייצוג לקוחות.',
      },
      {
        name: 'מייקל לי',
        role: 'עוזר – דיני משפחה',
        image: team3,
        bio: 'מייקל מביא חמלה ובהירות לתיקי משפחה מורכבים, ודואג לצרכי הלקוח.',
      },
      {
        name: 'אמילי קרטר',
        role: 'יועצת משפטית – משפט בינלאומי',
        image: team4,
        bio: 'אמילי בעלת ראייה גלובלית ומומחיות בנושאים חוצי גבולות.',
      },
    ],
    commitments: [
      {
        title: "תקשורת שקופה",
        description: "אנו שומרים על דיאלוג פתוח וכנה לגבי התקדמות המקרה שלך, אסטרטגיות ותוצאות פוטנציאליות.",
        percentage: 100
      },
      {
        title: "תשומת לב אישית",
        description: "כל לקוח מקבל תשומת לב מיוחדת מעורכי דין מנוסים המבינים את המצב הייחודי שלו.",
        percentage: 100
      },
      {
        title: "הגנה אגרסיבית",
        description: "אנו רודפים אחרי המטרות שלך בנחישות ובמיומנות, מנצלים את המומחיות שלנו לטובתך.",
        percentage: 100
      },
      {
        title: "מצוינות אתית",
        description: "הפרקטיקה שלנו מונחית על ידי הסטנדרטים האתיים הגבוהים ביותר והיושרה המקצועית.",
        percentage: 100
      }
    ],
    missionData: {
      title: "העקרונות המנחים שלנו",
      mission: "להעניק צדק באמצעות מצוינות בלתי מתפשרת, יושרה וייצוג משפטי ממוקד לקוח.",
      principles: [
        {
          title: "יושרה קודם כל",
          description: "אנו מקפידים על הסטנדרטים האתיים הגבוהים ביותר בכל האינטראקציות והייצוגים המשפטיים שלנו.",
          icon: "⚖️"
        },
        {
          title: "העצמת לקוחות",
          description: "אנו מאמינים בחשיבות החינוך וההעצמה של לקוחותינו לקבלת החלטות מושכלות לגבי ענייניהם המשפטיים.",
          icon: "💪"
        },
        {
          title: "פתרונות חדשניים",
          description: "אנו משתמשים באסטרטגיות משפטיות ובטכנולוגיה מתקדמת להשגת תוצאות מיטביות עבור לקוחותינו.",
          icon: "🚀"
        },
        {
          title: "השפעה קהילתית",
          description: "אנו מחויבים להשתמש במומחיות המשפטית שלנו כדי להשפיע לטובה על הקהילה שלנו ומעבר לה.",
          icon: "🌍"
        }
      ],
      coreValues: [
        {
          title: "צדק",
          description: "רדיפה אחרי תוצאות הוגנות לכל לקוחותינו ללא קשר לרקע או לנסיבות שלהם."
        },
        {
          title: "מצוינות",
          description: "שאיפה לאיכות הגבוהה ביותר בכל היבט של הפרקטיקה המשפטית שלנו."
        },
        {
          title: "אומץ",
          description: "הגנה ללא פחד על זכויות הלקוחות ואינטרסים."
        },
        {
          title: "חמלה",
          description: "הבנת מצבי הלקוחות שלנו ומתן תמיכה אמפתית."
        }
      ]
    },
    steps: [
      {
        title: "התייעצות ראשונית",
        description: "אנו מתחילים בהבנה מעמיקה של הצרכים והיעדים המשפטיים שלך בהתייעצות חינם מפורטת.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25be85] text-white text-2xl shadow-lg">⚖️</span>
        )
      },
      {
        title: "ניתוח תיק",
        description: "צוות המשפטנים שלנו מבצע מחקר מעמיק וניתוח כדי לבנות בסיס חזק לתיק שלך.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-[#25be85] text-2xl shadow-lg">📑</span>
        )
      },
      {
        title: "פיתוח אסטרטגיה",
        description: "אנו מכינים אסטרטגיה משפטית מותאמת אישית שנועדה במיוחד להשגת התוצאה הרצויה שלך.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25be85] text-white text-2xl shadow-lg">🧠</span>
        )
      },
      {
        title: "ביצוע וייצוג",
        description: "עורכי הדין המנוסים שלנו מייצגים בנחישות את האינטרסים שלך דרך משא ומתן או הליך משפטי.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-[#25be85] text-2xl shadow-lg">🤝</span>
        )
      },
      {
        title: "פתרון ומעקב",
        description: "אנו מבטיחים יישום נכון של התוצאות ומספקים ייעוץ מתמשך להגנת האינטרסים שלך.",
        icon: (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25be85] text-white text-2xl shadow-lg">✅</span>
        )
      }
    ]
  }
};

const AboutUs = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [animatedPercentages, setAnimatedPercentages] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    const handleLangChange = (e) => {
      setLanguage(e.detail || localStorage.getItem("language") || "en");
    };
    window.addEventListener("languageChange", handleLangChange);
    return () => window.removeEventListener("languageChange", handleLangChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % translations[language].steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervals = translations[language].commitments.map((commitment, index) => {
        return setInterval(() => {
          setAnimatedPercentages(prev => {
            const newPercentages = [...prev];
            if (newPercentages[index] < commitment.percentage) {
              newPercentages[index] += 1;
            }
            return newPercentages;
          });
        }, 30);
      });
      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [isVisible]);

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
      <section className="py-10 dark:bg-black relative overflow-hidden">

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#25be85] dark:bg-black rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black dark:bg-[#25be85] rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-black dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {t.missionTitle}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.mission}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Guiding Principles */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between h-full bg-white dark:bg-black p-8 rounded-2xl shadow-xl border border-[#25be85] dark:border-white"
              style={{ minHeight: '100%' }}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-8 pb-4 border-b border-[#25be85] dark:border-white flex items-center">
                <span className="bg-[#25be85] text-white p-2 rounded-lg mr-3">📜</span>
                {t.guidingPrinciples}
              </h3>

              <div className="space-y-6">
                {t.missionData.principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl transition-all duration-300 cursor-pointer border border-[#25be85] dark:border-white ${activePrinciple === index
                      ? 'bg-gradient-to-r from-[#25be85] via-emerald-600 to-black dark:from-black dark:via-[#25be85] dark:to-[#25be85] text-white shadow-2xl scale-[1.03]'
                      : 'bg-white dark:bg-black hover:bg-[#25be85]/10 dark:hover:bg-[#25be85]/20 text-black dark:text-white'
                      }`}
                    whileHover={{ y: -5, scale: 1.04, boxShadow: '0 8px 32px rgba(37,190,133,0.25)' }}
                    whileTap={{ scale: 0.98, filter: 'brightness(0.95)' }}
                    onClick={() => setActivePrinciple(index)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start">
                      <span className="text-3xl mr-4">{principle.icon}</span>
                      <div>
                        <h4 className={`font-bold text-xl mb-2 ${activePrinciple === index ? 'text-white drop-shadow-lg' : 'text-black dark:text-white'}`}>
                          {principle.title}
                        </h4>
                        <p className={activePrinciple === index ? 'text-white text-base font-medium' : 'text-gray-600 dark:text-gray-300'}>
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Core Values */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between h-full bg-white dark:bg-black p-8 rounded-2xl shadow-xl border border-[#25be85] dark:border-white"
              style={{ minHeight: '100%' }}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-8 pb-4 border-b border-[#25be85] dark:border-white flex items-center">
                <span className="bg-[#25be85] text-white p-2 rounded-lg mr-3">⭐</span>
                {t.coreValues}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {t.missionData.coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-black p-6 rounded-xl border border-[#25be85] dark:border-white text-center transition-colors duration-300 hover:bg-[#25be85]/10 dark:hover:bg-[#25be85]/20 hover:text-[#25be85] dark:hover:text-[#25be85]"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-14 h-14 bg-[#25be85] dark:bg-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <span className="text-xl text-white dark:text-[#25be85]">{index + 1}</span>
                    </div>
                    <h4 className="font-semibold text-black dark:text-white mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{value.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Mission Statement Highlight */}
              <motion.div
                className="mt-10 p-6 bg-gradient-to-r from-[#25be85] to-black dark:from-black dark:to-[#25be85] rounded-xl text-white text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-2">{t.ourCommitment}</h4>
                <p className="text-[#25be85] dark:text-black">
                  {t.ourCommitmentDesc}
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative Bottom Element */}
          {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-white dark:bg-black rounded-full shadow-lg">
            <div className="w-2 h-2 bg-[#25be85] rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-black dark:bg-[#25be85] rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-[#25be85] rounded-full mx-1"></div>
          </div>
        </motion.div> */}
        </div>
      </section>
      <section className="py-10  dark:bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-6 text-gray-800 dark:text-white">{t.legalApproachTitle}</h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
            {t.legalApproachDesc}
          </p>

          <div className="max-w-5xl mx-auto">
            {/* Process flow line */}
            <div className="relative h-2 bg-gray-300 dark:bg-gray-700 rounded-full mb-16">
              <div
                className="absolute top-0 left-0 h-full bg-[#25be85] rounded-full transition-all duration-1000"
                style={{ width: `${(activeStep + 1) * 20}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {t.steps.map((step, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-700 ${activeStep === index
                      ? 'scale-110 -translate-y-4'
                      : 'scale-100 opacity-80'
                    }`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="mb-4">
                    {step.icon}
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 transition-all duration-500 ${activeStep === index ? 'text-black dark:text-white' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm transition-all duration-500 ${activeStep === index ? 'text-[#25be85]' : 'text-black dark:text-gray-400'
                    }`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>
      {/* Commitments Section */}
      <section ref={sectionRef} className="py-10 text-white" style={{ backgroundColor: "#25be85" }}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-6">{t.commitmentTitle}</h2>
          <p className="text-xl text-center text-white max-w-3xl mx-auto mb-16">
            {t.commitmentDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {t.commitments.map((commitment, index) => (
              <div key={index} className="bg-white dark:bg-black p-6 rounded-xl border border-[#25be85] shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-black dark:text-white">{commitment.title}</h3>
                  <span className="text-2xl font-bold text-[#25be85]">{animatedPercentages[index]}%</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{commitment.description}</p>
                <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-2.5">
                  <div
                    className="bg-[#25be85] h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${animatedPercentages[index]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="bg-white dark:bg-black p-8 rounded-xl border border-[#25be85] shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">{t.pledgeTitle}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t.pledgeDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="bg-gray-50 dark:bg-black py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-2">{t.teamTitle}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">
            {t.teamDesc}
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-medium text-gray-800 dark:text-white">{member.name}</h3>
                <p className="text-black-700 dark:text-white font-semibold text-sm mt-1">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-20 bg-black dark:from-[#25be85]/20 dark:via-black dark:to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-white">{t.ctaTitle}</h2>
            <p className="text-xl text-white dark:text-gray-300 mb-8 leading-relaxed">
              {t.ctaDesc}
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-block px-8 py-4 rounded-full font-semibold text-white bg-[#25be85] shadow-lg transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-[#25be85] dark:hover:text-[#25be85]"
            >
              {t.ctaBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;

