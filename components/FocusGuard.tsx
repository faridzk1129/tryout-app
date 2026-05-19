"use client";

import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";

export default function FocusGuard() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const showAlert = () => {
      setShowWarning(true);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        showAlert();
      }
    };

    const handleWindowBlur = () => {
      showAlert();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  return (
    <>
      {showWarning && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal */}
          <div className="relative z-10 bg-white max-w-md w-full rounded-3xl p-8 shadow-2xl text-center animate-in fade-in zoom-in duration-300 scale-85 lg:scale-100">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
              <AlertTriangle size={40} className="text-red-600" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-black text-slate-800 mb-3">Tolong Fokus Pada Tryout</h2>

            {/* Description */}
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              Mohon tetap fokus mengerjakan tryout.
            </p>

            {/* Button */}
            <button
              onClick={() => setShowWarning(false)}
              className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all"
            >
              Saya Akan Fokus
            </button>
          </div>
        </div>
      )}
    </>
  );
}
