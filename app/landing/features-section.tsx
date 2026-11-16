
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
        className="rounded-lg px-2 py-1 text-left text-sm text-slate-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
      >
        Pricing – Free
      </button>

      {visible && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[60] flex max-w-sm items-center gap-3 rounded-xl border border-emerald-200 bg-white p-4 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-emerald-300 hover:shadow-2xl motion-reduce:transform-none motion-reduce:transition-none"
        >
          <span className="text-xl text-emerald-600">✓</span>

          <p className="flex-1 text-sm font-medium text-slate-700">
            ATScV is completely free. No subscriptions or paywalls!
          </p>

          <button
            onClick={() => setVisible(false)}
            className="rounded-md px-1 text-xl text-slate-400 transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transition-none"
            aria-label="Close notice"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
