"use client";

import { useEffect, useState } from "react";

export default function InstallPage() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [installable, setInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the PWA install");
    } else {
      console.log("User dismissed the PWA install");
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Install this App</h1>
      {installable ? (
        <button
          onClick={handleInstallClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
        >
          Install App
        </button>
      ) : (
        <p className="text-gray-600">This app is already installed or not installable yet.</p>
      )}
    </div>
  );
}
