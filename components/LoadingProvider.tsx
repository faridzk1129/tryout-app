// components/LoadingProvider.tsx
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Buat tipe data untuk Context
interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  // OTOMATISASI: Matikan loading setiap kali rute/halaman berhasil berubah secara sempurna
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}

      {/* Tampilan UI Full-Screen Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white text-slate-800 p-6 rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col items-center gap-4 max-w-xs w-full mx-4 transform animate-scale-up">
            {/* Indikator Spinner Custom Senada Tema Indigo */}
            <div className="relative flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin"></div>
            </div>
            <div className="text-center">
              <p className="font-bold text-slate-800 text-base">Sedang Memproses</p>
              <p className="text-xs text-slate-400 mt-1">Mohon tunggu sebentar...</p>
            </div>
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
}

// Custom Hook untuk memanggil fungsi loading di halaman manapun
export const useLoading = () => useContext(LoadingContext);
