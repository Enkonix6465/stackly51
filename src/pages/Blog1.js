import React, { useState, useEffect } from "react";

// Translation object for all static content
const translations = {
  en: {
    challengesTitle: "Key Challenges in Complex Litigation",
    challengesDesc: "Complex litigation cases often involve multiple parties, intricate legal issues, and extensive documentation. Navigating these challenges requires strategic planning, expert analysis, and a deep understanding of procedural law.",
    challenges: [
      {
        title: "Multi-Party Disputes",
        desc: "Coordinating between various stakeholders and legal teams can complicate case management and resolution."
      },
      {
        title: "Extensive Evidence",
        desc: "Handling large volumes of evidence and documentation demands meticulous organization and review."
      },
      {
        title: "Procedural Complexity",
        desc: "Understanding and applying complex procedural rules is essential for effective litigation strategy."
      }
    ],
    strategiesTitle: "Proven Strategies for Success",
    strategiesDesc: "Successful navigation of complex litigation cases relies on a combination of thorough preparation, expert collaboration, and adaptive legal tactics. Our team leverages technology, experience, and innovative approaches to deliver results.",
    strategies: [
      {
        title: "Early Case Assessment",
        desc: "Identifying strengths, weaknesses, and key issues early helps shape effective litigation strategy."
      },
      {
        title: "Expert Collaboration",
        desc: "Working with subject matter experts and consultants enhances case analysis and presentation."
      },
      {
        title: "Tech-Driven Solutions",
        desc: "Utilizing legal technology streamlines document review, evidence management, and case tracking."
      }
    ]
  },
  ar: {
    challengesTitle: "التحديات الرئيسية في التقاضي المعقد",
    challengesDesc: "غالبًا ما تتضمن قضايا التقاضي المعقدة أطرافًا متعددة ومسائل قانونية دقيقة ووثائق كثيرة. يتطلب تجاوز هذه التحديات تخطيطًا استراتيجيًا وتحليلًا خبيرًا وفهمًا عميقًا للإجراءات القانونية.",
    challenges: [
      {
        title: "نزاعات متعددة الأطراف",
        desc: "تنسيق العمل بين أصحاب المصلحة والفرق القانونية المختلفة يعقد إدارة القضية وحلها."
      },
      {
        title: "أدلة ووثائق كثيرة",
        desc: "التعامل مع كميات كبيرة من الأدلة والوثائق يتطلب تنظيمًا ومراجعة دقيقة."
      },
      {
        title: "تعقيد الإجراءات",
        desc: "فهم وتطبيق القواعد الإجرائية المعقدة ضروري لوضع استراتيجية تقاضي فعالة."
      }
    ],
    strategiesTitle: "استراتيجيات مثبتة للنجاح",
    strategiesDesc: "يعتمد النجاح في التقاضي المعقد على التحضير الجيد، التعاون مع الخبراء، وتكتيكات قانونية متطورة. فريقنا يستفيد من التكنولوجيا والخبرة والأساليب المبتكرة لتحقيق النتائج.",
    strategies: [
      {
        title: "تقييم القضية المبكر",
        desc: "تحديد نقاط القوة والضعف والقضايا الرئيسية مبكرًا يساعد في وضع استراتيجية فعالة."
      },
      {
        title: "التعاون مع الخبراء",
        desc: "العمل مع خبراء ومتخصصين يعزز تحليل القضية وعرضها."
      },
      {
        title: "حلول تقنية",
        desc: "استخدام التكنولوجيا القانونية يسهل مراجعة الوثائق وإدارة الأدلة وتتبع القضية."
      }
    ]
  },
  he: {
    challengesTitle: "אתגרים מרכזיים בליטיגציה מורכבת",
    challengesDesc: "תיקים משפטיים מורכבים כוללים לעיתים צדדים רבים, סוגיות משפטיות מסובכות וכמות מסמכים גדולה. התמודדות עם אתגרים אלו דורשת תכנון אסטרטגי, ניתוח מקצועי והבנה מעמיקה של דיני הפרוצדורה.",
    challenges: [
      {
        title: "סכסוכים מרובי צדדים",
        desc: "תיאום בין בעלי עניין וצוותים משפטיים שונים מסבך את ניהול התיק והפתרון."
      },
      {
        title: "ראיות ומסמכים רבים",
        desc: "טיפול בכמות גדולה של ראיות ומסמכים דורש ארגון ובקרה קפדניים."
      },
      {
        title: "מורכבות פרוצדורלית",
        desc: "הבנה ויישום כללי פרוצדורה מורכבים חיוניים לאסטרטגיה משפטית אפקטיבית."
      }
    ],
    strategiesTitle: "אסטרטגיות מוכחות להצלחה",
    strategiesDesc: "הצלחה בליטיגציה מורכבת נשענת על הכנה יסודית, שיתוף פעולה עם מומחים וטקטיקות משפטיות מתקדמות. הצוות שלנו משלב טכנולוגיה, ניסיון וחדשנות להשגת תוצאות.",
    strategies: [
      {
        title: "הערכת תיק מוקדמת",
        desc: "זיהוי חוזקות, חולשות ונושאים מרכזיים בשלב מוקדם מסייע לבניית אסטרטגיה אפקטיבית."
      },
      {
        title: "שיתוף פעולה עם מומחים",
        desc: "עבודה עם מומחים ויועצים משפרת את ניתוח התיק והצגתו."
      },
      {
        title: "פתרונות טכנולוגיים",
        desc: "שימוש בטכנולוגיה משפטית מייעל את בדיקת המסמכים, ניהול הראיות ומעקב התיק."
      }
    ]
  }
};

const Blog1 = () => {
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
    <main className="min-h-screen bg-white dark:bg-black mt-10">
      {/* Section 1: Key Challenges in Complex Litigation */}
      <section className="w-full py-16 px-4 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black dark:text-white">{t.challengesTitle}</h2>
          <p className="text-lg text-black/80 dark:text-white/80 mb-8">
            {t.challengesDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.challenges.map((item, idx) => (
              <div key={item.title} className={`${idx % 2 === 0 ? "bg-[#25be85]" : "bg-black"} text-white rounded-xl p-6 shadow-lg`}>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 2: Proven Strategies for Success */}
      <section className="w-full py-16 px-4 bg-[#25be85] dark:bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">{t.strategiesTitle}</h2>
          <p className="text-lg text-white/80 mb-8">
            {t.strategiesDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.strategies.map((item, idx) => (
              <div key={item.title} className={`${idx % 2 === 0 ? "bg-white text-black" : "bg-black text-white"} rounded-xl p-6 shadow-lg`}>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog1;
