// src/Components/googleAnalytics/GoogleTagManager.js
import { useEffect } from "react";

const GoogleTagManager = ({ gtmId }) => {
  useEffect(() => {
    // Function to inject GTM script into the document head
    const injectGtmScript = () => {
      const scriptTag = document.createElement("script");
      scriptTag.async = true;
      scriptTag.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(scriptTag);

      // Initialize the dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });
    };

    // Function to inject GTM noscript iframe into the document body
    const injectGtmNoScript = () => {
      const noScriptTag = document.createElement("noscript");
      noScriptTag.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.appendChild(noScriptTag);
    };

    // Inject GTM script and noscript tags
    injectGtmScript();
    injectGtmNoScript();

    // Cleanup function to remove scripts when component unmounts (if necessary)
    return () => {
      // Optionally remove the injected elements
    };
  }, [gtmId]);

  return null; // This component does not render anything to the DOM
};

export default GoogleTagManager;
