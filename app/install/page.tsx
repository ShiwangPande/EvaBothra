"use client";

import { useEffect, useState } from "react";

export default function InstallPage() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [installable, setInstallable] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    console.log(msg);
    setLogs((prev) => [...prev, msg]);
  };

  useEffect(() => {
    addLog("✅ Page loaded — waiting for 'beforeinstallprompt' event...");

    // Log manifest presence
    fetch("/manifest.ts")
      .then((res) => {
        if (res.ok) addLog("🟢 manifest.json found");
        else addLog("🔴 manifest.json missing or invalid");
      })
      .catch(() => addLog("🔴 manifest.json not reachable"));

    // Check for service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => {
          if (regs.length > 0) {
            addLog(`🟢 Service worker registered (${regs.length})`);
          } else {
            addLog("🔴 No service worker registered yet");
          }
        })
        .catch(() => addLog("🔴 Service worker check failed"));
    } else {
      addLog("🔴 Service workers not supported in this browser");
    }

    // Debug install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setInstallable(true);
      addLog("🟢 'beforeinstallprompt' event fired");
    };

    const handleAppInstalled = () => {
      addLog("🟢 App installed successfully (appinstalled event)");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      addLog("⚠️ Install prompt not available");
      return;
    }

    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    addLog(`🟢 User response: ${choice.outcome}`);
    if (choice.outcome === "accepted") {
      addLog("🎉 User accepted install prompt");
    } else {
      addLog("❌ User dismissed install prompt");
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">🧩 Install Debug Page</h1>
      <p className="mb-4 text-gray-700">
        {installable
          ? "✅ App is installable!"
          : "❌ Not installable yet — check logs below"}
      </p>
      {installable && (
        <button
          onClick={handleInstallClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow mb-4"
        >
          Install App
        </button>
      )}

      <div className="w-full max-w-xl bg-white p-4 rounded-lg shadow border border-gray-200">
        <h2 className="font-semibold mb-2">🪵 Debug Logs</h2>
        <div className="font-mono text-sm text-gray-800 space-y-1 max-h-[300px] overflow-y-auto">
          {logs.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
