import React, { useState, useEffect } from "react";

// Translation object for all static content
const translations = {
  en: {
    techTitle: "Emerging Legal Technologies",
    techDesc: "In 2025, technology continues to reshape the legal landscape. Firms are adopting AI-powered research, automated document review, and secure cloud platforms to improve efficiency and client service.",
    techItems: [
      { title: "AI Legal Research", desc: "Advanced algorithms deliver faster, more accurate case law analysis and predictions." },
      { title: "Automated Review", desc: "Machine learning streamlines contract analysis and due diligence processes." },
      { title: "Cloud Security", desc: "Secure cloud platforms protect sensitive data and enable remote collaboration." }
    ],
    practiceTitle: "Evolving Practice Areas",
    practiceDesc: "Legal practice in 2025 is expanding into new domains. Firms are focusing on data privacy, environmental law, and international compliance to meet emerging client needs.",
    practiceItems: [
      { title: "Data Privacy", desc: "Advising clients on compliance with global data protection regulations and cybersecurity." },
      { title: "Environmental Law", desc: "Guiding organizations through sustainability initiatives and regulatory changes." },
      { title: "International Compliance", desc: "Helping businesses navigate complex cross-border legal requirements." }
    ]
  },
  ar: {
    techTitle: "التقنيات القانونية الناشئة",
    techDesc: "في عام 2025، تستمر التكنولوجيا في إعادة تشكيل المشهد القانوني. تعتمد الشركات البحث القانوني المدعوم بالذكاء الاصطناعي، والمراجعة الآلية للوثائق، ومنصات السحابة الآمنة لتحسين الكفاءة وخدمة العملاء.",
    techItems: [
      { title: "البحث القانوني بالذكاء الاصطناعي", desc: "الخوارزميات المتقدمة توفر تحليلًا أسرع وأكثر دقة للأحكام القانونية والتوقعات." },
      { title: "المراجعة الآلية", desc: "تعزز تقنيات التعلم الآلي تحليل العقود وعمليات العناية الواجبة." },
      { title: "أمان السحابة", desc: "منصات السحابة الآمنة تحمي البيانات الحساسة وتتيح التعاون عن بُعد." }
    ],
    practiceTitle: "مجالات الممارسة المتطورة",
    practiceDesc: "في عام 2025، تتوسع الممارسة القانونية إلى مجالات جديدة. تركز الشركات على خصوصية البيانات، والقانون البيئي، والامتثال الدولي لتلبية احتياجات العملاء المتغيرة.",
    practiceItems: [
      { title: "خصوصية البيانات", desc: "إرشاد العملاء للامتثال للوائح حماية البيانات العالمية والأمن السيبراني." },
      { title: "القانون البيئي", desc: "توجيه المؤسسات في مبادرات الاستدامة والتغيرات التنظيمية." },
      { title: "الامتثال الدولي", desc: "مساعدة الشركات في التعامل مع المتطلبات القانونية عبر الحدود." }
    ]
  },
  he: {
    techTitle: "טכנולוגיות משפטיות מתקדמות",
    techDesc: "בשנת 2025, הטכנולוגיה ממשיכה לשנות את עולם המשפט. משרדים מאמצים מחקר משפטי מבוסס בינה מלאכותית, סקירת מסמכים אוטומטית ופלטפורמות ענן מאובטחות לשיפור יעילות ושירות.",
    techItems: [
      { title: "מחקר משפטי בינה מלאכותית", desc: "אלגוריתמים מתקדמים מספקים ניתוח מהיר ומדויק יותר של פסיקה וחיזויים." },
      { title: "סקירה אוטומטית", desc: "למידת מכונה מייעלת בדיקת חוזים ותהליכי בדיקת נאותות." },
      { title: "אבטחת ענן", desc: "פלטפורמות ענן מאובטחות מגנות על מידע רגיש ומאפשרות שיתוף פעולה מרחוק." }
    ],
    practiceTitle: "תחומי עיסוק מתפתחים",
    practiceDesc: "המשפט בשנת 2025 מתרחב לתחומים חדשים. משרדים מתמקדים בפרטיות מידע, משפט סביבתי וציות בינלאומי כדי לענות על צרכי לקוחות מתפתחים.",
    practiceItems: [
      { title: "פרטיות מידע", desc: "ייעוץ ללקוחות בציות לתקנות הגנת מידע גלובליות ואבטחת סייבר." },
      { title: "משפט סביבתי", desc: "ליווי ארגונים ביוזמות קיימות ושינויים רגולטוריים." },
      { title: "ציות בינלאומי", desc: "סיוע לעסקים בהתמודדות עם דרישות משפטיות חוצות גבולות." }
    ]
  }
};

const Blog3 = () => {
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
      {/* Section 1: Emerging Legal Technologies */}
      <section className="w-full py-16 px-4 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black dark:text-white">{t.techTitle}</h2>
          <p className="text-lg text-black/80 dark:text-white/80 mb-8">
            {t.techDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.techItems.map((item, idx) => (
              <div key={item.title} className={`${idx % 2 === 0 ? "bg-[#25be85]" : "bg-black"} text-white rounded-xl p-6 shadow-lg`}>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 2: Evolving Practice Areas */}
      <section className="w-full py-16 px-4 bg-[#25be85] dark:bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">{t.practiceTitle}</h2>
          <p className="text-lg text-white/80 mb-8">
            {t.practiceDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.practiceItems.map((item, idx) => (
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

export default Blog3;
