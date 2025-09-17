import { motion } from "framer-motion";
import video from "../images/home2-law.mp4";
import { useState, useEffect } from "react";
import AwardCard from "../compentents/AwardCard";
import { useNavigate } from "react-router-dom";

// Translation object for all static content
const translations = {
    en: {
        heroTitle: "Your Shield in Legal Complexity",
        heroDesc: "When you face complex legal challenges, you need more than just a lawyer",
        whyTitle: "Why Choose Us?",
        whySubtitle: "Proven Results & Trusted Excellence",
        whyP1: "Our reputation is built on a foundation of successful case outcomes and unwavering commitment to our clients. We deliver strategic legal solutions, advocacy, and results that earn the trust of individuals and businesses alike.",
        whyP2: "From startups to established enterprises, we consistently provide measurable results that drive growth, security, and peace of mind. Our dedication to excellence is reflected in every case we undertake.",
        whyP3: "With expert attorneys, modern legal technology, and a client-first approach, we transform complex legal challenges into clear solutions. Our comprehensive suite of legal services ensures every client receives the highest standard of care and representation.",
        whyBtn: "Our Services",
        features: [
            { num: 1, title: "Expert Legal Guidance", desc: "Receive clear, strategic advice from attorneys with deep expertise in diverse practice areas." },
            { num: 2, title: "Personalized Solutions", desc: "Every client receives tailored strategies and transparent communication at every step." },
            { num: 3, title: "Robust Security & Confidentiality", desc: "Your data and legal matters are protected with strict confidentiality and secure processes." },
            { num: 4, title: "Seamless Case Management", desc: "Efficiently manage your legal journey with our integrated systems and dedicated support." }
        ],
        awardsTitle: "Awards & Recognitions",
        awardsDesc: "Our commitment to legal excellence has been recognized by prestigious organizations across the industry",
        seminarsTitle: "Upcoming Legal Seminars",
        seminars: [
            { date: "Oct 10, 2025", title: "Business Law Essentials", desc: "Learn the latest in commercial law and compliance.", icon: "📅" },
            { date: "Nov 5, 2025", title: "Property Law Deep Dive", desc: "Explore trends and best practices in real estate law.", icon: "🏢" },
            { date: "Dec 2, 2025", title: "IP Protection Strategies", desc: "Safeguard your intellectual property with expert advice.", icon: "💡" }
        ],
        registerBtn: "Register",
        registrationTitle: "Seminar Registration",
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        address: "Address",
        submitBtn: "Submit",
        cancelBtn: "Cancel",
        coreBenefitsTitle: "Core Benefits",
        coreBenefitsDesc: "Unlock the full potential of your legal journey with our firm. Experience seamless support, expert guidance, and future-ready solutions designed to deliver results.",
        benefits: [
            { icon: "⚖️", title: "Trusted Advocacy", desc: "Our attorneys fight for your rights with integrity and dedication, ensuring your interests are always protected." },
            { icon: "📚", title: "Legal Expertise", desc: "Benefit from deep knowledge across commercial, property, and family law, tailored to your unique needs." },
            { icon: "🔒", title: "Confidentiality & Security", desc: "Your case details and data are handled with strict confidentiality and advanced security protocols." },
            { icon: "🤝", title: "Personalized Service", desc: "Receive clear communication, transparent advice, and a client-first approach at every step." }
        ],
        ctaTitle: "Ready to Protect Your Interests?",
        ctaDesc: "Contact our expert legal team today for a free consultation and discover how we can help you achieve peace of mind and success.",
        ctaBtn: "Get Your Free Consultation"
    },
    ar: {
        heroTitle: "درعك في التعقيدات القانونية",
        heroDesc: "عندما تواجه تحديات قانونية معقدة، تحتاج إلى أكثر من مجرد محامٍ",
        whyTitle: "لماذا تختارنا؟",
        whySubtitle: "نتائج مثبتة وتميز موثوق",
        whyP1: "سمعتنا مبنية على نجاح القضايا والتزامنا الثابت تجاه عملائنا. نقدم حلول قانونية استراتيجية ودفاعًا ونتائج تكسب ثقة الأفراد والشركات.",
        whyP2: "من الشركات الناشئة إلى المؤسسات الكبيرة، نقدم دائمًا نتائج ملموسة تعزز النمو والأمان وراحة البال. يظهر التزامنا بالتميز في كل قضية نتولاها.",
        whyP3: "مع محامين خبراء وتقنيات قانونية حديثة ونهج يركز على العميل، نحول التحديات القانونية المعقدة إلى حلول واضحة. خدماتنا القانونية الشاملة تضمن لكل عميل أعلى مستوى من الرعاية والتمثيل.",
        whyBtn: "خدماتنا",
        features: [
            { num: 1, title: "إرشاد قانوني خبير", desc: "احصل على نصائح واضحة واستراتيجية من محامين ذوي خبرة في مجالات متنوعة." },
            { num: 2, title: "حلول مخصصة", desc: "كل عميل يحصل على استراتيجيات مخصصة وتواصل شفاف في كل خطوة." },
            { num: 3, title: "أمان وسرية قوية", desc: "يتم حماية بياناتك وقضاياك القانونية بسرية صارمة وإجراءات آمنة." },
            { num: 4, title: "إدارة قضايا سلسة", desc: "أدر رحلتك القانونية بكفاءة مع أنظمتنا المتكاملة ودعمنا المخصص." }
        ],
        awardsTitle: "الجوائز والتكريمات",
        awardsDesc: "تم الاعتراف بالتزامنا بالتميز القانوني من قبل منظمات مرموقة في الصناعة",
        seminarsTitle: "الندوات القانونية القادمة",
        seminars: [
            { date: "10 أكتوبر 2025", title: "أساسيات القانون التجاري", desc: "تعرف على أحدث ما في القانون التجاري والامتثال.", icon: "📅" },
            { date: "5 نوفمبر 2025", title: "تعمق في قانون العقارات", desc: "استكشف الاتجاهات وأفضل الممارسات في قانون العقارات.", icon: "🏢" },
            { date: "2 ديسمبر 2025", title: "استراتيجيات حماية الملكية الفكرية", desc: "احمِ ملكيتك الفكرية بنصائح الخبراء.", icon: "💡" }
        ],
        registerBtn: "سجل",
        registrationTitle: "تسجيل الندوة",
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        address: "العنوان",
        submitBtn: "إرسال",
        cancelBtn: "إلغاء",
        coreBenefitsTitle: "الفوائد الأساسية",
        coreBenefitsDesc: "اكتشف إمكانيات رحلتك القانونية مع مكتبنا. استمتع بالدعم السلس والإرشاد الخبير والحلول المستقبلية المصممة لتحقيق النتائج.",
        benefits: [
            { icon: "⚖️", title: "دفاع موثوق", desc: "محامونا يدافعون عن حقوقك بنزاهة والتزام، لضمان حماية مصالحك دائمًا." },
            { icon: "📚", title: "خبرة قانونية", desc: "استفد من معرفة عميقة في القانون التجاري والعقاري والأسري، مصممة حسب احتياجاتك." },
            { icon: "🔒", title: "السرية والأمان", desc: "يتم التعامل مع تفاصيل قضيتك وبياناتك بسرية تامة وبروتوكولات أمان متقدمة." },
            { icon: "🤝", title: "خدمة شخصية", desc: "احصل على تواصل واضح ونصائح شفافة ونهج يركز على العميل في كل خطوة." }
        ],
        ctaTitle: "جاهز لحماية مصالحك؟",
        ctaDesc: "تواصل مع فريقنا القانوني الخبير اليوم للحصول على استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق النجاح وراحة البال.",
        ctaBtn: "احصل على استشارتك المجانية"
    },
    he: {
        heroTitle: "המגן שלך במורכבות המשפטית",
        heroDesc: "כשאתה מתמודד עם אתגרים משפטיים מורכבים, אתה צריך יותר מעורך דין",
        whyTitle: "למה לבחור בנו?",
        whySubtitle: "תוצאות מוכחות ומצוינות אמינה",
        whyP1: "המוניטין שלנו מבוסס על הצלחות בתיקים ומחויבות בלתי מתפשרת ללקוחות. אנו מספקים פתרונות משפטיים אסטרטגיים, ייצוג ותוצאות שמקנות אמון ליחידים ולעסקים.",
        whyP2: "מסטארטאפים ועד חברות גדולות, אנו מספקים תוצאות מדידות שמקדמות צמיחה, ביטחון ושקט נפשי. המחויבות למצוינות ניכרת בכל תיק שאנו מטפלים בו.",
        whyP3: "עם עורכי דין מומחים, טכנולוגיה משפטית מתקדמת וגישה ממוקדת לקוח, אנו הופכים אתגרים משפטיים מורכבים לפתרונות ברורים. השירותים המשפטיים המקיפים שלנו מבטיחים לכל לקוח טיפול וייצוג ברמה הגבוהה ביותר.",
        whyBtn: "השירותים שלנו",
        features: [
            { num: 1, title: "הכוונה משפטית מקצועית", desc: "קבל ייעוץ ברור ואסטרטגי מעורכי דין בעלי ניסיון במגוון תחומים." },
            { num: 2, title: "פתרונות מותאמים אישית", desc: "כל לקוח מקבל אסטרטגיה מותאמת ותקשורת שקופה בכל שלב." },
            { num: 3, title: "אבטחה וסודיות חזקה", desc: "המידע שלך והתיקים המשפטיים מוגנים בסודיות מוחלטת ובנהלים מאובטחים." },
            { num: 4, title: "ניהול תיק חלק", desc: "נהל את המסע המשפטי שלך ביעילות עם מערכות משולבות ותמיכה מסורה." }
        ],
        awardsTitle: "פרסים והוקרות",
        awardsDesc: "המחויבות שלנו למצוינות משפטית זכתה להכרה מארגונים מובילים בענף",
        seminarsTitle: "סמינרים משפטיים קרובים",
        seminars: [
            { date: "10 אוקטובר 2025", title: "יסודות משפט עסקי", desc: "למד את העדכונים האחרונים במשפט עסקי וציות.", icon: "📅" },
            { date: "5 נובמבר 2025", title: "סקירה מעמיקה בדיני מקרקעין", desc: "גלה מגמות ושיטות מובילות בדיני מקרקעין.", icon: "🏢" },
            { date: "2 דצמבר 2025", title: "אסטרטגיות הגנה על קניין רוחני", desc: "הגן על הקניין הרוחני שלך עם ייעוץ מומחים.", icon: "💡" }
        ],
        registerBtn: "הרשמה",
        registrationTitle: "הרשמה לסמינר",
        name: "שם",
        email: "אימייל",
        phone: "טלפון",
        address: "כתובת",
        submitBtn: "שלח",
        cancelBtn: "ביטול",
        coreBenefitsTitle: "יתרונות מרכזיים",
        coreBenefitsDesc: "גלה את מלוא הפוטנציאל של המסע המשפטי שלך איתנו. קבל תמיכה מקצועית, הכוונה מומחית ופתרונות חדשניים שמביאים תוצאות.",
        benefits: [
            { icon: "⚖️", title: "ייצוג אמין", desc: "עורכי הדין שלנו נלחמים על זכויותיך ביושרה ומסירות, ודואגים לאינטרסים שלך." },
            { icon: "📚", title: "מומחיות משפטית", desc: "נצל ידע מעמיק במשפט עסקי, מקרקעין ומשפחה, בהתאמה אישית לצרכיך." },
            { icon: "🔒", title: "סודיות ואבטחה", desc: "פרטי התיק והמידע שלך נשמרים בסודיות מוחלטת ובאבטחה מתקדמת." },
            { icon: "🤝", title: "שירות אישי", desc: "קבל תקשורת ברורה, ייעוץ שקוף וגישה ממוקדת לקוח בכל שלב." }
        ],
        ctaTitle: "מוכן להגן על האינטרסים שלך?",
        ctaDesc: "צור קשר עם צוות המשפט המומחה שלנו לקבלת ייעוץ ראשוני חינם וגלה כיצד נוכל לעזור לך להשיג שקט נפשי והצלחה.",
        ctaBtn: "קבל ייעוץ ראשוני חינם"
    }
};

const awardsData = [
	{
		id: 1,
		title: "Webby Award Nominee",
		year: "2023",
		category: "Legal Excellence",
		description: "Recognized for outstanding achievement in legal website design and user experience.",
		presentedBy: "International Academy of Digital Arts & Sciences",
		hoverDescription: "Considered one of the highest honors in digital excellence, often referred to as 'the internet's highest honor' by The New York Times."
	},
	{
		id: 2,
		title: "AV Preeminent Rating",
		year: "2022-2023",
		category: "Legal Practice",
		description: "Highest peer rating standard signifying excellence in legal expertise and ethical standards.",
		presentedBy: "Martindale-Hubbell",
		hoverDescription: "This rating represents the pinnacle of professional excellence earned through a strenuous peer review process."
	},
	{
		id: 3,
		title: "Best Law Firm Websites",
		year: "2023",
		category: "Design & Usability",
		description: "Awarded for excellence in law firm website design and user experience.",
		presentedBy: "Lawyerist.com",
		hoverDescription: "Recognized among the top 1% of law firm websites for design innovation and user experience optimization."
	},
	{
		id: 4,
		title: "Super Lawyers",
		year: "2022-2023",
		category: "Legal Excellence",
		description: "Recognizing outstanding lawyers who have attained a high degree of peer recognition professional achievement.",
		presentedBy: "Thomson Reuters",
		hoverDescription: "No more than 5% of lawyers in each state are selected annually to receive this honor through a rigorous selection process."
	},
	{
		id: 5,
		title: "Gold Muse Award",
		year: "2023",
		category: "Creative Excellence",
		description: "Awarded for creative excellence in marketing and communications for the legal industry.",
		presentedBy: "American Marketing Association",
		hoverDescription: "The Muse Awards honor creativity and innovation in marketing and communications across all industries."
	},
	{
		id: 6,
		title: "Platinum AVA Award",
		year: "2022",
		category: "Digital Marketing",
		description: "Recognizing excellence in digital communication and content marketing for legal services.",
		presentedBy: "AVA Digital Awards",
		hoverDescription: "The AVA Awards celebrate excellence in digital communication by recognizing outstanding work in the industry."
	}
];

const caseCategories = [
	{
		title: "Commercial Litigation",
		outcomes: [
			"Won a $45M verdict in a breach of contract suit for a tech startup.",
			"Successfully defended a Fortune 500 company in a class-action lawsuit, resulting in a full dismissal.",
			"Secured a favorable settlement for a family-owned business in a complex partnership dispute.",
		],
		bgColor: "bg-blue-50",
		borderColor: "border-blue-500",
	},
	{
		title: "Intellectual Property",
		outcomes: [
			"Protected a patent portfolio valued at over $200M for an biotech innovator.",
			"Successfully litigated a trademark infringement case, securing a permanent injunction for our client.",
			"Navigated a complex copyright dispute for a media company, resulting in a lucrative licensing agreement.",
		],
		bgColor: "bg-amber-50",
		borderColor: "border-amber-500",
	},
	{
		title: "Real Estate & Land Use",
		outcomes: [
			"Secured zoning approvals for a $300M mixed-use development after a protracted municipal battle.",
			"Resolved a contentious boundary dispute that had stalled a major construction project for 18 months.",
			"Successfully represented a commercial landlord in a complex lease restructuring during economic downturn.",
		],
		bgColor: "bg-emerald-50",
		borderColor: "border-emerald-500",
	},
];
const Home2 = () => {
	const [activeCategory, setActiveCategory] = useState(0);
	const [activeAward, setActiveAward] = useState(null);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
	const [formEvent, setFormEvent] = useState("");
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

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const registrations = JSON.parse(localStorage.getItem("seminarRegistrations") || "[]");
		registrations.push({ ...formData, event: formEvent });
		localStorage.setItem("seminarRegistrations", JSON.stringify(registrations));
		setShowForm(false);
		setFormData({ name: "", email: "", phone: "", address: "" });
		setFormEvent("");
		alert("Registration successful!");
	};

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
			{/* Why Choose Us - Law Firm Section */}
			<section className="w-full bg-white dark:bg-black py-8 px-4 md:px-8 mx-auto">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-0 mx-auto">
					{/* Left: Text Content with Animation */}
					<motion.div
						className="text-left px-6 md:px-0"
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<motion.h2
							className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2"
							initial={{ opacity: 0, y: -30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true }}
						>
							{t.whyTitle}
						</motion.h2>
						<motion.h3
							className="text-2xl font-semibold text-[#25be85] mb-4"
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.2 }}
							viewport={{ once: true }}
						>
							{t.whySubtitle}
						</motion.h3>
						<motion.p
							className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.3 }}
							viewport={{ once: true }}
						>
							{t.whyP1}
						</motion.p>
						<motion.p
							className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.4 }}
							viewport={{ once: true }}
						>
							{t.whyP2}
						</motion.p>
						<motion.p
							className="text-base md:text-lg text-gray-700 dark:text-gray-200 mb-8"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.5 }}
							viewport={{ once: true }}
						>
							{t.whyP3}
						</motion.p>
						<motion.button
							className="px-6 py-3 bg-[#25be85] text-white rounded-lg font-semibold shadow hover:bg-[#1cae77] transition"
							whileHover={{ scale: 1.08 }}
							transition={{ type: "spring", stiffness: 300 }}
							onClick={() => navigate('/services')}
						>
							{t.whyBtn}
						</motion.button>
					</motion.div>

					{/* Right: Numbered Features with Animation */}
					<motion.div
						className="flex flex-col gap-8 px-6 md:px-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: {},
							visible: {
								transition: {
									staggerChildren: 0.25,
								},
							},
						}}
					>
						{t.features.map((item, idx) => (
							<motion.div
								key={item.num}
								className="flex items-start gap-4"
								initial={{ opacity: 0, scale: 0.8, y: 40 }}
								whileInView={{ opacity: 1, scale: 1, y: 0 }}
								transition={{ duration: 0.7, delay: 0.2 * idx }}
								viewport={{ once: true }}
							>
								<motion.div
									className="w-12 h-12 rounded-full bg-[#25be85] flex items-center justify-center text-white font-bold text-xl"
									whileHover={{ scale: 1.15, rotate: 8 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									{item.num}
								</motion.div>
								<div>
									<h4 className="font-semibold text-lg text-black dark:text-white mb-1">
										{item.title}
									</h4>
									<p className="text-gray-700 dark:text-gray-200">
										{item.desc}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			<section className="py-24 px-4 bg-[#f5faff] dark:bg-[#181818]">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
							{t.awardsTitle}
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							{t.awardsDesc}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{awardsData.map((award) => (
							<AwardCard
								key={award.id}
								award={award}
								isActive={activeAward === award.id}
								onHover={() => setActiveAward(award.id)}
								onLeave={() => setActiveAward(null)}
							/>
						))}
					</div>
				</div>
			</section>
			<section className="w-full py-10 flex flex-col items-center bg-white dark:bg-black">
				<div className="max-w-3xl w-full mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#25be85] dark:text-[#25be85]">{t.seminarsTitle}</h2>
					<div className="relative flex flex-col gap-12">
						<div className="absolute left-7 top-0 h-full w-1 bg-[#25be85] dark:bg-[#25be85] rounded-full"></div>
						{t.seminars.map((event, idx) => (
							<motion.div
								key={event.title}
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.7, delay: 0.1 + idx * 0.15 }}
								viewport={{ once: true }}
								className="relative flex items-center gap-6"
							>
								<div className="z-10 w-14 h-14 aspect-square rounded-full bg-[#25be85] flex items-center justify-center text-2xl font-bold text-white shadow-lg border-4 border-white dark:border-black">
									<span role="img" aria-label="calendar">{event.icon}</span>
								</div>
								<div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-[#25be85] dark:border-[#25be85] flex-1">
									<div className="text-[#25be85] dark:text-[#25be85] font-bold text-lg mb-2">{event.date}</div>
									<h3 className="font-bold text-xl mb-2 text-black dark:text-white">{event.title}</h3>
									<p className="text-gray-700 dark:text-gray-300 mb-4">{event.desc}</p>
									<button
										className="bg-[#25be85] text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-[#1cae77] transition"
										onClick={() => { setShowForm(true); setFormEvent(event.title); }}
									>
										{t.registerBtn}
									</button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			{/* Registration Modal */}
			{showForm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
					<form
						onSubmit={handleSubmit}
						className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md mx-auto"
					>
						<h2 className="text-2xl font-bold mb-4 text-[#25be85]">{t.registrationTitle}</h2>
						<div className="mb-3">
							<label className="block mb-1 font-medium">{t.name}</label>
							<input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
						</div>
						<div className="mb-3">
							<label className="block mb-1 font-medium">{t.email}</label>
							<input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
						</div>
						<div className="mb-3">
							<label className="block mb-1 font-medium">{t.phone}</label>
							<input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" />
						</div>
						<div className="mb-3">
							<label className="block mb-1 font-medium">{t.address}</label>
							<input type="text" name="address" required value={formData.address} onChange={handleChange} className="w-full border rounded px-3 py-2" />
						</div>
						<div className="flex gap-2 mt-4">
							<button type="submit" className="bg-[#25be85] text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-[#1cae77] transition w-full">
								{t.submitBtn}
							</button>
							<button type="button" className="bg-gray-300 text-black font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-400 transition w-full"
								onClick={() => setShowForm(false)}>
								{t.cancelBtn}
							</button>
						</div>
					</form>
				</div>
			)}
			<section className="w-full py-20 bg-[#f5faff] dark:bg-[#181818] flex flex-col items-center">
				<div className="max-w-6xl w-full mx-auto px-4">
					<motion.h2
						className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-black dark:text-white"
						initial={{ opacity: 0, y: -40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						{t.coreBenefitsTitle}
					</motion.h2>
					<motion.p
						className="text-lg text-center text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						viewport={{ once: true }}
					>
						{t.coreBenefitsDesc}
					</motion.p>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: {},
							visible: {
								transition: {
									staggerChildren: 0.25
								}
							}
						}}
					>
						{t.benefits.map((benefit, idx) => (
							<motion.div
								key={benefit.title}
								className="rounded-2xl p-8 shadow-2xl border border-[#25be85] bg-white/70 dark:bg-[#23272b] backdrop-blur-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
								initial={{ opacity: 0, y: 60, scale: 0.95 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								transition={{ duration: 0.7, delay: idx * 0.2 }}
								viewport={{ once: true }}
							>
								<motion.div
									className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25be85] via-[#1cae77] to-[#181818] flex items-center justify-center text-3xl mb-4 text-white shadow-lg"
									initial={{ scale: 0.8, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.2 * idx }}
									viewport={{ once: true }}
								>
									{benefit.icon}
								</motion.div>
								<h3 className="font-bold text-xl text-[#181818] dark:text-white mb-2">{benefit.title}</h3>
								<p className="text-gray-700 dark:text-gray-200 text-sm mb-2">{benefit.desc}</p>
								<motion.span
									className="block w-8 h-1 bg-[#25be85] rounded-full mt-4 animate-pulse"
									initial={{ scaleX: 0 }}
									whileInView={{ scaleX: 1 }}
									transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
									viewport={{ once: true }}
								></motion.span>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>
			<section className="w-full py-20 bg-gradient-to-r from-[#25be85] via-[#1cae77] to-[#181818] flex flex-col items-center relative overflow-hidden">
				<div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
				<div className="max-w-2xl w-full mx-auto px-4 text-center relative z-10">
					<motion.h2
						className="text-4xl md:text-5xl font-extrabold text-white mb-6"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						{t.ctaTitle}
					</motion.h2>
					<motion.p
						className="text-lg text-white/80 mb-8"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						viewport={{ once: true }}
					>
						{t.ctaDesc}
					</motion.p>
					<motion.button
						className="bg-white text-[#25be85] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#25be85] hover:text-white transition-all text-xl"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
						onClick={() => navigate('/contact')}
					>
						{t.ctaBtn}
					</motion.button>
				</div>
			</section>
		</div>
	);
};
export default Home2;