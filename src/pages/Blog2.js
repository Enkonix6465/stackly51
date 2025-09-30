import React, { useState, useEffect } from "react";

// Translation object for all static content
const translations = {
  en: {
    disputeTitle: "Core Dispute Resolution Methods",
    disputeDesc: "Effective dispute resolution relies on choosing the right method for the situation. Each approach offers unique advantages for resolving conflicts efficiently and fairly.",
    disputeMethods: [
      { title: "Negotiation", desc: "Direct discussion between parties to reach a mutually acceptable agreement." },
      { title: "Mediation", desc: "A neutral third party facilitates communication and helps parties find common ground." },
      { title: "Arbitration", desc: "A binding decision is made by an impartial arbitrator after hearing both sides." }
    ],
    outcomeTitle: "Enhancing Resolution Outcomes",
    outcomeDesc: "Successful dispute resolution is built on preparation, communication, and adaptability. Our approach focuses on empowering clients and fostering positive outcomes.",
    outcomeMethods: [
      { title: "Thorough Preparation", desc: "Understanding all aspects of the dispute and preparing evidence strengthens your position." },
      { title: "Clear Communication", desc: "Open, honest dialogue helps clarify issues and build trust between parties." },
      { title: "Flexible Solutions", desc: "Adapting strategies to changing circumstances leads to more effective resolutions." }
    ]
  },
  ar: {
    disputeTitle: "طرق حل النزاعات الأساسية",
    disputeDesc: "يعتمد حل النزاعات الفعال على اختيار الطريقة المناسبة للموقف. كل نهج يوفر مزايا فريدة لحل النزاعات بكفاءة وعدالة.",
    disputeMethods: [
      { title: "التفاوض", desc: "مناقشة مباشرة بين الأطراف للوصول إلى اتفاق مقبول للطرفين." },
      { title: "الوساطة", desc: "طرف ثالث محايد يسهل التواصل ويساعد الأطراف على إيجاد أرضية مشتركة." },
      { title: "التحكيم", desc: "يتخذ محكم محايد قرارًا ملزمًا بعد الاستماع للطرفين." }
    ],
    outcomeTitle: "تعزيز نتائج الحل",
    outcomeDesc: "يعتمد نجاح حل النزاعات على التحضير والتواصل والمرونة. نهجنا يركز على تمكين العملاء وتحقيق نتائج إيجابية.",
    outcomeMethods: [
      { title: "التحضير الشامل", desc: "فهم جميع جوانب النزاع وتحضير الأدلة يعزز موقفك." },
      { title: "التواصل الواضح", desc: "الحوار المفتوح والصادق يساعد في توضيح القضايا وبناء الثقة بين الأطراف." },
      { title: "حلول مرنة", desc: "تكييف الاستراتيجيات مع الظروف المتغيرة يؤدي إلى حلول أكثر فعالية." }
    ]
  },
  he: {
    disputeTitle: "שיטות מרכזיות ליישוב סכסוכים",
    disputeDesc: "יישוב סכסוכים יעיל תלוי בבחירת השיטה הנכונה למצב. לכל גישה יתרונות ייחודיים לפתרון סכסוכים במהירות ובצדק.",
    disputeMethods: [
      { title: "משא ומתן", desc: "דיון ישיר בין הצדדים להשגת הסכם מקובל על כולם." },
      { title: "גישור", desc: "צד שלישי ניטרלי מסייע בתקשורת ומסייע לצדדים למצוא מכנה משותף." },
      { title: "בוררות", desc: "בורר בלתי תלוי מקבל החלטה מחייבת לאחר שמיעת שני הצדדים." }
    ],
    outcomeTitle: "שיפור תוצאות היישוב",
    outcomeDesc: "הצלחה ביישוב סכסוכים מבוססת על הכנה, תקשורת וגמישות. הגישה שלנו מתמקדת בהעצמת לקוחות והשגת תוצאות חיוביות.",
    outcomeMethods: [
      { title: "הכנה יסודית", desc: "הבנת כל היבטי הסכסוך והכנת ראיות מחזקת את עמדתך." },
      { title: "תקשורת ברורה", desc: "דיאלוג פתוח וכנה מסייע להבהיר סוגיות ולבנות אמון בין הצדדים." },
      { title: "פתרונות גמישים", desc: "התאמת אסטרטגיות לנסיבות משתנות מובילה לפתרונות יעילים יותר." }
    ]
  }
};

const Blog2 = () => {
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
      {/* Section 1: Core Dispute Resolution Methods */}
      <section className="w-full py-16 px-4 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black dark:text-white">{t.disputeTitle}</h2>
          <p className="text-lg text-black/80 dark:text-white/80 mb-8">
            {t.disputeDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.disputeMethods.map((item, idx) => (
              <div key={item.title} className={`${idx % 2 === 0 ? "bg-[#25be85]" : "bg-black"} text-white rounded-xl p-6 shadow-lg`}>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 2: Enhancing Resolution Outcomes */}
      <section className="w-full py-16 px-4 bg-[#25be85] dark:bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">{t.outcomeTitle}</h2>
          <p className="text-lg text-white/80 mb-8">
            {t.outcomeDesc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.outcomeMethods.map((item, idx) => (
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

export default Blog2;
