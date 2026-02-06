import React, { useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

const GoogleTranslate = () => {
  useEffect(() => {
    // Check if script is already there
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

      {/* 1. The Globe Icon (Visual Only) */}
      <FaGlobe className="text-xl z-0 pointer-events-none" />

      {/* 2. The Invisible Google Widget (Click Trigger) */}
      {/* ✅ FIX: Removed 'overflow-hidden' and ensured full coverage */}
      <div
        id="google_translate_element"
        className="absolute inset-0 w-full h-full z-10 opacity-0 overflow-visible"
      ></div>

      {/* 3. CSS Fixes */}
      <style>{`
        /* Hide the top 'Google Translate' bar */
        .goog-te-banner-frame { display: none !important; }
        body { top: 0px !important; }

        /* Hide Google Logo in the dropdown */
        .goog-logo-link { display: none !important; }
        .goog-te-gadget { color: transparent !important; }

        /* ✅ FORCE CLICK AREA: Make the inner Google button fill the whole circle */
        .goog-te-gadget-simple {
            width: 100% !important;
            height: 100% !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            opacity: 0 !important;
            cursor: pointer !important;
            display: block !important;
        }

        /* Ensure the dropdown menu is visible on top of everything */
        .goog-te-menu-frame {
            z-index: 999999 !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslate;
