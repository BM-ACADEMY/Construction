import React, { useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

const GoogleTranslate = () => {
  useEffect(() => {
    // 1. Initialize Google Translate
    if (!document.querySelector("#google-translate-script")) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ar,ta,fr,es,de,zh-CN",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-orange-100 transition-colors cursor-pointer text-[#00224D] hover:text-orange-600 group">

      {/* Visual Icon */}
      <FaGlobe className="text-xl z-0 pointer-events-none" />

      {/* Invisible Clickable Widget */}
      <div
        id="google_translate_element"
        className="absolute inset-0 w-full h-full z-10 opacity-0 overflow-visible"
      ></div>

      {/* ✅ CSS FIXES (Hides the bar WITHOUT breaking functionality) */}
      <style>{`
        /* 1. HIDE the Top Bar (But keep it in DOM so translate works) */
        .goog-te-banner-frame.skiptranslate {
            display: none !important;
        }

        /* 2. FORCE Body to Top */
        body {
            top: 0px !important;
        }

        /* 3. HIDE "Original Text" Popup */
        .goog-te-balloon-frame {
            display: none !important;
        }

        /* 4. HIDE Hover Tooltips */
        .goog-text-highlight {
            background: none !important;
            box-shadow: none !important;
        }

        #goog-gt-tt {
            display: none !important;
            visibility: hidden !important;
        }

        /* 5. MAKE WIDGET CLICKABLE */
        .goog-te-gadget-simple {
            width: 100% !important;
            height: 100% !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            opacity: 0 !important;
            cursor: pointer !important;
        }

        /* 6. ENSURE DROPDOWN IS VISIBLE & CLICKABLE */
        .goog-te-menu-frame {
            z-index: 99999999 !important;
            position: fixed !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslate;
