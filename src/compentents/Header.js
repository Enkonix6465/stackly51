import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import sun from "../images/sun.png";
import moon from "../images/moon.png";
import logo from "../images/logo.png";

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact Us",
    logout: "Logout",
    dashboard: "Dashboard",
  },
  ar: {
    home: "الرئيسية",
    about: "معلومات عنا",
    services: "الخدمات",
    blog: "مدونة",
    contact: "اتصل بنا",
    logout: "تسجيل خروج",
    dashboard: "لوحة التحكم",
  },
  he: {
    home: "בית",
    about: "עלינו",
    services: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    logout: "התנתק",
    dashboard: "לוח בקרה",
  },
};

const Header = ({ toggleTheme, isDark }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [initials, setInitials] = useState("");
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const avatarRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Get user initials
  const getUserInitials = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");
    const currentUser = users.find((user) => user.email === loggedInEmail);

    if (currentUser) {
      const firstInitial =
        currentUser.firstName?.trim().charAt(0).toUpperCase() || "";
      const lastInitial =
        currentUser.lastName?.trim().charAt(0).toUpperCase() || "";
      return firstInitial + lastInitial;
    }
    return "";
  };

  useEffect(() => {
    setInitials(getUserInitials());
    const handleStorage = () => setInitials(getUserInitials());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [location.pathname]);

  // Close avatar dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Responsive nav close - updated for tablet view
  useEffect(() => {
    const handleResize = () => {
      // Close mobile nav only on large screens (1024px and above)
      if (window.innerWidth >= 1024 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileNavOpen]);

  useEffect(() => {
    if (language === "ar" || language === "he") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
    window.dispatchEvent(new CustomEvent("languageChange", { detail: language }));
    localStorage.setItem("language", language);
  }, [language]);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleMainClick = (page) => {
    navigate(`/${page}`);
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const getActiveLink = () => {
    if (location.pathname === "/" || location.pathname === "/home1" || location.pathname === "/home2")
      return "home";
    if (location.pathname === "/about") return "about";
    if (
      [
        "/services",
        "/litigation-dispute",
        "/corporate-commercial",
        "/family-law",
        "/real-estate",
        "/tax-law",
        "/international-law",
        
      ].includes(location.pathname)
    )
      return "services";
    if (location.pathname === "/blog") return "blog";
    if (location.pathname === "/contact") return "contact";
    if (location.pathname === "/admin") return "dashboard";
    return "";
  };

  const activeLink = getActiveLink();

  const toggleAvatarDropdown = () => setAvatarDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    setAvatarDropdownOpen(false);
    navigate("/welcome");
  };

  const handleDashboardClick = () => {
    setAvatarDropdownOpen(false);
    navigate("/admin");
  };

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black text-black dark:text-gray-100 flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700 z-50">
      {/* Logo */}
      <nav className="flex-shrink-0">
        <Link to="/home1">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </nav>

      {/* Nav Links - Hidden on mobile and tablet, visible only on large screens */}
      <nav
        className={`${
          mobileNavOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row lg:items-center lg:gap-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white dark:bg-black lg:bg-transparent px-6 py-4 lg:p-0 shadow lg:shadow-none`}
      >
        {/* Home */}
        <div className="relative">
          <span
            className={`cursor-pointer font-medium ${
              activeLink === "home" ? "text-[#25be85] dark:text-[#25be85]" : ""
            }`}
            onClick={() => handleMainClick("home1")}
          >
            {translations[language].home}
          </span>
          <span
            className="ml-1 text-xs cursor-pointer"
            onClick={() => toggleDropdown("home")}
          >
            ▼
          </span>
          {activeDropdown === "home" && (
            <div className="absolute left-0 mt-2 flex flex-col bg-gray-100 dark:bg-gray-800 rounded shadow-md min-w-[160px] z-50">
              <Link
                to="/home1"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Home1
              </Link>
              <Link
                to="/home2"
                onClick={handleLinkClick}
                className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Home 2
              </Link>
            </div>
          )}
        </div>

        {/* About */}
        <Link
          to="/about"
          onClick={handleLinkClick}
          className={`font-medium ${
            activeLink === "about" ? "text-[#25be85] dark:text-[#25be85]" : ""
          }`}
        >
          {translations[language].about}
        </Link>

        {/* Services */}
        <div className="relative">
          <span
            className={`cursor-pointer font-medium ${
              activeLink === "services" ? "text-[#25be85] dark:text-[#25be85]" : ""
            }`}
            onClick={() => handleMainClick("services")}
          >
            {translations[language].services}
          </span>
          <span
            className="ml-1 text-xs cursor-pointer"
            onClick={() => toggleDropdown("services")}
          >
            ▼
          </span>
          {activeDropdown === "services" && (
            <div className="absolute left-0 mt-2 flex flex-col bg-gray-100 dark:bg-gray-800 rounded shadow-md min-w-[200px] z-50">
              {[
                { to: "/litigation-dispute", label: "Litigation & Dispute" },
                { to: "/corporate-commercial", label: "Corporate & Commercial" },
                { to: "/family-law", label: "Family Law" },
                { to: "/real-estate", label: "Real Estate" },
                { to: "/tax-law", label: "Tax Law" },
                { to: "/international-law", label: "International Law" },
                
                { to: "/services", label: "Services" }
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={handleLinkClick}
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Blog */}
        <Link
          to="/blog"
          onClick={handleLinkClick}
          className={`font-medium ${
            activeLink === "blog" ? "text-[#25be85] dark:text-[#25be85]" : ""
          }`}
        >
          {translations[language].blog}
        </Link>

        {/* Contact */}
        <Link
          to="/contact"
          onClick={handleLinkClick}
          className={`font-medium ${
            activeLink === "contact" ? "text-[#25be85] dark:text-[#25be85]" : ""
          }`}
        >
          {translations[language].contact}
        </Link>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative w-auto">
        {/* Language Dropdown */}
        <select
          value={language}
          onChange={e => setLanguage(e.target.value)}
          className="border rounded px-2 py-1 bg-white dark:bg-black text-black dark:text-white"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="he">עברית</option>
        </select>
        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="w-8 h-8">
          <img
            src={isDark ? sun : moon}
            alt={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="w-full h-full object-contain cursor-pointer"
          />
        </button>
        {/* Avatar */}
        <div ref={avatarRef} className="relative z-10">
          <div
            className="w-10 h-10 text-white flex items-center justify-center rounded-full font-bold cursor-pointer"
            style={{ backgroundColor: "#25be85" }}
            onClick={toggleAvatarDropdown}
          >
            {initials || "AD"}
          </div>
          {avatarDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md min-w-[120px] z-50">
              <button
                onClick={handleDashboardClick}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600"
              >
                {translations[language].dashboard}
              </button>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {translations[language].logout}
              </button>
            </div>
          )}
        </div>
        {/* Hamburger (mobile and tablet only) - visible on screens smaller than 1024px */}
        <div className="flex-1 flex justify-end items-center lg:hidden">
          <button
            className="flex flex-col gap-1.5 ml-2"
            aria-label="Toggle menu"
            onClick={toggleMobileNav}
          >
            <span className="w-6 h-0.5 bg-black dark:bg-white block mb-1 rounded"></span>
            <span className="w-6 h-0.5 bg-black dark:bg-white block mb-1 rounded"></span>
            <span className="w-6 h-0.5 bg-black dark:bg-white block rounded"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;