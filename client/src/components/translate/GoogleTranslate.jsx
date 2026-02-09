import React, { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";

const GoogleTranslate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("site_lang") || "en"
  );

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;
      
      if(document.getElementById("google_translate_element")) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              // ✅ LIMIT TO ONLY ENGLISH AND ARABIC
              includedLanguages: "en,ar",
              autoDisplay: false,
            },
            "google_translate_element"
          );
      }
    };

    if (!document.getElementById("google_translate_script")) {
      const script = document.createElement("script");
      script.id = "google_translate_script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }

  }, []);

  const handleLanguageChange = (e) => {
    const langCode = e.target.value;
    setSelectedLanguage(langCode);
    localStorage.setItem("site_lang", langCode);

    const googleCombo = document.querySelector(".goog-te-combo");
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="relative flex items-center bg-white border border-slate-200 rounded-full px-3 py-2 shadow-sm hover:shadow-md transition-all">
        <FaGlobe className="text-[#00224D] text-lg" />
        
        {/* ✅ ADDED 'notranslate' CLASS SO THIS TEXT NEVER CHANGES */}
        <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="notranslate appearance-none bg-transparent border-none text-sm font-semibold text-[#00224D] ml-2 focus:outline-none cursor-pointer w-full"
            style={{ WebkitAppearance: "none", MozAppearance: "none" }}
        >
            {/* We show both English and Native names so anyone can read it */}
            <option value="en">English</option>
            <option value="ar">Arabic (العربية)</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#00224D]">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>

        <div 
            id="google_translate_element" 
            className="absolute opacity-0 w-0 h-0 overflow-hidden" 
            style={{ pointerEvents: 'none' }}
        ></div>

        <style>{`
            .goog-te-banner-frame.skiptranslate { display: none !important; }
            body { top: 0px !important; }
            #google_translate_element { display: none !important; }
            .goog-tooltip { display: none !important; }
            .goog-te-gadget { line-height: 0 !important; color: transparent !important; }
            font { background-color: transparent !important; box-shadow: none !important; }
        `}</style>
    </div>
  );
};

export default GoogleTranslate;