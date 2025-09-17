import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import video from "../images/law-hero.mp4";
import { useNavigate } from "react-router-dom";

// Translation object for all static content
const translations = {
  en: {
    heroTitle: "Trusted Legal Solutions for Your Success",
    heroDesc: "Our experienced attorneys provide expert guidance, strategic advocacy, and unwavering commitment to justice for individuals and businesses alike.",
    featuredTitle: "Featured Articles",
    featuredArticles: [
      {
        title: "Navigating Complex Litigation Cases",
        desc: "Explore strategies and insights for handling challenging litigation matters and achieving successful outcomes.",
        img: require('../images/law-about.jpg'),
        link: "/blog1"
      },
      {
        title: "Effective Dispute Resolution Techniques",
        desc: "Learn proven methods for resolving disputes efficiently, from negotiation to mediation and arbitration.",
        img: require('../images/blog2.jpg'),
        link: "/blog2"
      },
      {
        title: "Legal Trends in 2025",
        desc: "Stay updated on the latest trends and changes in the legal landscape that impact your business and rights.",
        img: require('../images/blog3.jpg'),
        link: "/blog3"
      }
    ],
    precautionsTitle: "Precautions by Age Group",
    precautions: [
      {
        title: "Below 18 Age",
        items: [
          "Inform parents or guardians about suspicious situations.",
          "Avoid sharing personal information online.",
          "Be cautious of strangers both online and offline.",
          "Know emergency contact numbers."
        ]
      },
      {
        title: "Adults",
        items: [
          "Use secure passwords and two-factor authentication online.",
          "Always carry identification documents when outside.",
          "Be aware of your surroundings and avoid risky areas.",
          "Seek legal advice immediately if suspected of crime involvement."
        ]
      },
      {
        title: "Senior Citizens",
        items: [
          "Avoid sharing financial information with unknown persons.",
          "Use trusted contacts for errands and travels.",
          "Install home security systems or alarms.",
          "Report scams or suspicious calls to authorities promptly."
        ]
      }
    ],
    latestTitle: "Latest Articles",
    allTopics: "All Topics",
    readMore: "Read More",
    ctaTitle: "Stay Informed with Legal Insights",
    ctaDesc: "Subscribe to our blog for the latest updates, expert tips, and actionable advice on law, business, and personal rights.",
    ctaBtn: "Subscribe Now"
  },
  ar: {
    heroTitle: "حلول قانونية موثوقة لنجاحك",
    heroDesc: "يقدم محامونا ذوو الخبرة إرشادًا خبيرًا ودفاعًا استراتيجيًا والتزامًا قويًا بالعدالة للأفراد والشركات.",
    featuredTitle: "مقالات مميزة",
    featuredArticles: [
      {
        title: "التعامل مع قضايا التقاضي المعقدة",
        desc: "اكتشف استراتيجيات ورؤى للتعامل مع القضايا الصعبة وتحقيق نتائج ناجحة.",
        img: require('../images/law-about.jpg'),
        link: "/blog1"
      },
      {
        title: "تقنيات فعالة لحل النزاعات",
        desc: "تعرف على طرق مثبتة لحل النزاعات بكفاءة، من التفاوض إلى الوساطة والتحكيم.",
        img: require('../images/blog2.jpg'),
        link: "/blog2"
      },
      {
        title: "اتجاهات قانونية في 2025",
        desc: "ابق على اطلاع بأحدث الاتجاهات والتغيرات في المشهد القانوني التي تؤثر على عملك وحقوقك.",
        img: require('../images/blog3.jpg'),
        link: "/blog3"
      }
    ],
    precautionsTitle: "احتياطات حسب الفئة العمرية",
    precautions: [
      {
        title: "أقل من 18 سنة",
        items: [
          "إبلاغ الوالدين أو الأوصياء عن المواقف المشبوهة.",
          "تجنب مشاركة المعلومات الشخصية عبر الإنترنت.",
          "الحذر من الغرباء سواء عبر الإنترنت أو خارجه.",
          "معرفة أرقام الطوارئ."
        ]
      },
      {
        title: "البالغون",
        items: [
          "استخدام كلمات مرور آمنة والمصادقة الثنائية عبر الإنترنت.",
          "حمل وثائق الهوية دائمًا عند الخروج.",
          "الانتباه للبيئة المحيطة وتجنب المناطق الخطرة.",
          "طلب المشورة القانونية فورًا إذا اشتبه في التورط بجريمة."
        ]
      },
      {
        title: "كبار السن",
        items: [
          "تجنب مشاركة المعلومات المالية مع أشخاص مجهولين.",
          "استخدام جهات اتصال موثوقة للمهام والتنقل.",
          "تركيب أنظمة أو أجهزة إنذار أمنية في المنزل.",
          "الإبلاغ عن عمليات الاحتيال أو المكالمات المشبوهة للسلطات فورًا."
        ]
      }
    ],
    latestTitle: "أحدث المقالات",
    allTopics: "كل المواضيع",
    readMore: "اقرأ المزيد",
    ctaTitle: "ابق على اطلاع بالمعرفة القانونية",
    ctaDesc: "اشترك في مدونتنا للحصول على آخر التحديثات والنصائح والخبرات العملية في القانون والأعمال والحقوق الشخصية.",
    ctaBtn: "اشترك الآن"
  },
  he: {
    heroTitle: "פתרונות משפטיים אמינים להצלחתך",
    heroDesc: "עורכי הדין המנוסים שלנו מעניקים ייעוץ מומחה, ייצוג אסטרטגי ומחויבות מלאה לצדק ליחידים ולעסקים.",
    featuredTitle: "מאמרים נבחרים",
    featuredArticles: [
      {
        title: "התמודדות עם תיקים משפטיים מורכבים",
        desc: "גלה אסטרטגיות ותובנות לטיפול בתיקים מאתגרים ולהשגת תוצאות מוצלחות.",
        img: require('../images/law-about.jpg'),
        link: "/blog1"
      },
      {
        title: "טכניקות יעילות ליישוב סכסוכים",
        desc: "למד שיטות מוכחות ליישוב סכסוכים ביעילות, ממשא ומתן ועד גישור ובוררות.",
        img: require('../images/blog2.jpg'),
        link: "/blog2"
      },
      {
        title: "מגמות משפטיות ב-2025",
        desc: "הישאר מעודכן במגמות ובשינויים האחרונים בעולם המשפט המשפיעים על העסק והזכויות שלך.",
        img: require('../images/blog3.jpg'),
        link: "/blog3"
      }
    ],
    precautionsTitle: "אמצעי זהירות לפי גיל",
    precautions: [
      {
        title: "מתחת לגיל 18",
        items: [
          "לעדכן הורים או אפוטרופוסים במצבים חשודים.",
          "להימנע משיתוף מידע אישי באינטרנט.",
          "להיזהר מזרים ברשת ומחוצה לה.",
          "לדעת מספרי חירום."
        ]
      },
      {
        title: "מבוגרים",
        items: [
          "להשתמש בסיסמאות מאובטחות ואימות דו-שלבי.",
          "לשאת מסמכי זיהוי תמיד ביציאה מהבית.",
          "להיות מודעים לסביבה ולהימנע מאזורים מסוכנים.",
          "לפנות לייעוץ משפטי מיד במקרה של חשד למעורבות בפשע."
        ]
      },
      {
        title: "אזרחים ותיקים",
        items: [
          "להימנע משיתוף מידע פיננסי עם אנשים לא מוכרים.",
          "להיעזר באנשים אמינים לסידורים ונסיעות.",
          "להתקין מערכות אבטחה או אזעקה בבית.",
          "לדווח על הונאות או שיחות חשודות לרשויות מיד."
        ]
      }
    ],
    latestTitle: "מאמרים אחרונים",
    allTopics: "כל הנושאים",
    readMore: "קרא עוד",
    ctaTitle: "הישאר מעודכן עם תובנות משפטיות",
    ctaDesc: "הירשם לבלוג שלנו לקבלת עדכונים, טיפים מקצועיים ועצות מעשיות על משפט, עסקים וזכויות אישיות.",
    ctaBtn: "הירשם עכשיו"
  }
};

const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Rights in a Personal Injury Case",
    excerpt: "Learn about your legal rights and what to expect when pursuing a personal injury claim.",
    category: "Personal Injury",
    date: "Sept 12, 2025",
    readTime: "5 min read",
    image: require('../images/blog11.avif')
  },
  {
    id: 2,
    title: "How to Protect Your Business with Proper Contracts",
    excerpt: "Essential contract elements every business owner should know to avoid future legal disputes.",
    category: "Business Law",
    date: "Sept 5, 2025",
    readTime: "7 min read",
    image: require('../images/blog12.avif')
  },
  {
    id: 3,
    title: "The Evolution of Intellectual Property Law in Digital Age",
    excerpt: "How recent court decisions are shaping the future of intellectual property rights online.",
    category: "Intellectual Property",
    date: "Aug 28, 2025",
    readTime: "10 min read",
    image: require('../images/blog13.avif')
  },
  {
    id: 4,
    title: "Navigating Divorce: What to Expect in 2025",
    excerpt: "Recent changes in divorce laws and how they might affect your separation process.",
    category: "Family Law",
    date: "Aug 20, 2025",
    readTime: "6 min read",
    image: require('../images/blog14.jpg')
  },
  {
    id: 5,
    title: "Real Estate Contract Pitfalls to Avoid",
    excerpt: "Common mistakes in real estate transactions and how to protect your investment.",
    category: "Real Estate",
    date: "Aug 15, 2025",
    readTime: "8 min read",
    image: require('../images/blog15.avif')
  },
  {
    id: 6,
    title: "Criminal Law Reform: Recent Changes and Impacts",
    excerpt: "Analysis of how recent criminal justice reforms are affecting prosecution and defense strategies.",
    category: "Criminal Law",
    date: "Aug 10, 2025",
    readTime: "12 min read",
    image: require('../images/blog16.avif')
  }
];

const categories = ["all", "Personal Injury", "Business Law", "Intellectual Property", "Family Law", "Real Estate", "Criminal Law"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-0 w-full">
      <section className="relative w-full h-screen overflow-hidden bg-white dark:bg-black mb-10">
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
      {/* Featured Articles Section */}
      <section className="w-full py-12 bg-white dark:bg-black">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-black dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {t.featuredTitle}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.featuredArticles.map((article, idx) => (
            <motion.div
              key={article.title}
              className="bg-white dark:bg-black rounded-2xl shadow-lg flex flex-col p-6 items-center border-2 border-[#25be85] cursor-pointer hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              onClick={() => navigate(article.link)}
            >
              <img src={article.img} alt={article.title} className="rounded-xl w-full h-40 object-cover mb-4 border-2 border-[#25be85]" />
              <h3 className="text-xl font-bold text-black dark:text-white mb-2 text-center">{article.title}</h3>
              <p className="text-black/80 dark:text-white/80 text-center mb-4">{article.desc}</p>
              <button className="px-5 py-2 rounded-full font-semibold text-white bg-[#25be85] hover:bg-black hover:text-white transition">
                {t.readMore}
              </button>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="w-full py-8 px-4 bg-white dark:bg-black">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-black dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {t.precautionsTitle}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.precautions.map((group, idx) => (
            <motion.div
              key={group.title}
              className="bg-white dark:bg-black rounded-2xl border-2 border-[#25be85] p-8 shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">{group.title}</h3>
              <ul className="list-disc list-inside text-black dark:text-white space-y-2">
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Section 2: Filterable Blog Grid */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-black dark:text-white pb-2 border-b-2 border-[#25be85] inline-block">{t.latestTitle}</h2>
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === category ? 'bg-[#25be85] text-white' : 'bg-white dark:bg-black text-black dark:text-white border border-[#25be85] hover:bg-[#25be85] hover:text-white'}`}
              >
                {category === 'all' ? t.allTopics : category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white dark:bg-black rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-[#25be85]">
              <div className="relative">
                <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#25be85] text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-black dark:text-white mb-2 opacity-70">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <a href="#" className="block text-xl font-semibold text-black dark:text-white hover:text-[#25be85] transition mb-2">{post.title}</a>
                <p className="text-black/80 dark:text-white/80 text-sm mb-4">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center text-sm font-medium text-[#25be85] hover:text-black dark:hover:text-white">
                  {t.readMore}
                  <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
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
    </div>
  );
};
export default Blog;
