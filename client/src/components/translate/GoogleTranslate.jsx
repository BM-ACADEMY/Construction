import { useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

const STORAGE_KEY = "site_lang";

// Accept a specific ID as a prop
const GoogleTranslatePremium = ({ targetId = "google_translate_element" }) => {
  useEffect(() => {
    // Function to initialize the widget for a specific ID
    const initWidget = () => {
      const mount = document.getElementById(targetId);
      if (!mount) return;

      // Check if widget is already inside to prevent duplicates in React re-renders
      if (mount.innerHTML !== "") return;

      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ta,hi,ar,fr,de,es,zh-CN",
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          targetId
        );

        // Restore saved language
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setLanguage(saved);
      }
    };

    // 1. If script is already loaded, just initialize this specific instance
    if (window.__gt_loaded__) {
      initWidget();
    } else {
      // 2. If script is NOT loaded, set up the global callback and load script
      window.__gt_loaded__ = true;

      // We assign a global function, but inside it we only init if elements exist
      window.googleTranslateElementInit = () => {
        // Trigger a custom event so all mounted components know script is ready
        window.dispatchEvent(new Event("google-translate-ready"));
      };

      const s = document.createElement("script");
      s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    }

    // Listen for the custom event (fired when script first loads)
    const handleScriptReady = () => initWidget();
    window.addEventListener("google-translate-ready", handleScriptReady);

    // Watch for language changes
    const observer = new MutationObserver(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.addEventListener("change", (e) => {
          localStorage.setItem(STORAGE_KEY, e.target.value);
        });
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("google-translate-ready", handleScriptReady);
      observer.disconnect();
    };
  }, [targetId]); // Re-run if ID changes

  const setLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (!select) return;
    if (select.value !== lang) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
        <FaGlobe className="text-[#00224D]" />
        <span className="text-sm font-semibold text-[#00224D] ml-2">
  Language
</span>
        {/* Use the dynamic targetId here */}
        <div id={targetId} className="absolute inset-0 opacity-0" />
      </div>

      <style>{`
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        body { top: 0px !important; }
        .goog-te-gadget-simple {
          width: 100% !important;
          height: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
          position: absolute !important;
          top: 0; left: 0;
          cursor: pointer;
          border: 0 !important;
          background: transparent !important;
        }
        .goog-te-gadget-simple img, .goog-te-gadget-simple span { display: none !important; }
        .goog-te-menu-frame {
          z-index: 2147483647 !important;
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: 92vw !important;
          max-width: 420px !important;
          border-radius: 14px !important;
          box-shadow: 0 20px 60px rgba(0,0,0,.35) !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslatePremium;
