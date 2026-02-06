import React, { useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

const GoogleTranslate = ({ id }) => {
  useEffect(() => {
    // Helper function to initialize THIS specific widget
    const initWidget = () => {
      if (window.google && window.google.translate) {
        const element = document.getElementById(id);
        // Only initialize if the element exists and is empty (prevents duplicates)
        if (element && element.children.length === 0) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,ar,ta,fr,es,de,zh-CN",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            id
          );
        }
      }
    };

    // 1. If Google Translate is ALREADY loaded (e.g., opening mobile menu), run init immediately
    if (window.google && window.google.translate) {
      initWidget();
    } else {
      // 2. If script is NOT loaded yet, hook into the global callback
      const oldInit = window.googleTranslateElementInit;

      window.googleTranslateElementInit = () => {
        if (oldInit) oldInit(); // Run previous callbacks if any
        initWidget();
      };

      // Inject the script if it's not there
      if (!document.querySelector("script[src*='translate.google.com']")) {
        const script = document.createElement("script");
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [id]);

  return (
    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-orange-100 transition-colors cursor-pointer text-[#00224D] hover:text-orange-600 group z-50">

      {/* Visual Icon - pointer-events-none ensures clicks pass through to the div below */}
      <FaGlobe className="text-xl z-0 pointer-events-none" />

      {/* Invisible Clickable Widget - Uses Dynamic ID */}
      <div
        id={id}
        className="absolute inset-0 w-full h-full z-10 opacity-0"
      ></div>

      {/* ✅ CSS FIXES - "Shotgun Approach" to force interactivity */}
      <style>{`
        /* 1. HIDE the Top Bar */
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

        /* 5. MAKE WIDGET CLICKABLE - Target EVERY internal element */
        .goog-te-gadget-simple {
            width: 100% !important;
            height: 100% !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            display: block !important;
            cursor: pointer !important;
        }

        /* Force the inner Google span/image to fill the area too */
        .goog-te-gadget-simple .goog-te-menu-value,
        .goog-te-gadget-simple .goog-te-menu-value span,
        .goog-te-gadget-simple img {
            width: 100% !important;
            height: 100% !important;
            position: absolute !important;
            top: 0;
            left: 0;
            opacity: 0;
        }

        /* 6. ENSURE DROPDOWN IS VISIBLE & CLICKABLE */
        .goog-te-menu-frame {
            z-index: 99999999 !important;
            position: fixed !important;
            bottom: auto !important; /* Fix for some mobile layouts */
            box-shadow: 0 10px 30px rgba(0,0,0,0.2) !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslate;
