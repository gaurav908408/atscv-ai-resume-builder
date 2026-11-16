
"use client";

import { useEffect, useState } from "react";

export default function FeaturesSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <>
      <button
        onClick={() => setVisible(true)}
        className="text-left text-sm text-slate-500 transition hover:text-emerald-600"
      >
        Pricing – Free
      </button>

      {visible && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[60] flex max-w-sm items-center gap-3 border border-emerald-200 bg-white p-4 shadow-xl"
        >
          <span className="text-xl text-emerald-600">✓</span>

          <p className="flex-1 text-sm font-medium text-slate-700">
            ATScV is completely free. No subscriptions or paywalls!
          </p>

          <button
            onClick={() => setVisible(false)}
            className="text-xl text-slate-400"
            aria-label="Close notice"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
