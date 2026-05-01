"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  Flag,
  Send,
  FileText,
  AlertCircle,
  Menu, // Icon Hamburger
  X, // Icon Close
} from "lucide-react";

const TOTAL_SOAL = 110;
const DURATION_SECONDS = 110 * 60;

const questionsData = Array.from({ length: TOTAL_SOAL }, (_, i) => ({
  id: i + 1,
  category: i < 30 ? "TWK" : i < 65 ? "TIU" : "TKP",
  question: `Ini adalah isi pertanyaan untuk nomor ${i + 1}. Materi terkait subtest ${i < 30 ? "TWK" : i < 65 ? "TIU" : "TKP"}.`,
  options: [
    "A. Pilihan jawaban pertama",
    "B. Pilihan jawaban kedua",
    "C. Pilihan jawaban ketiga",
    "D. Pilihan jawaban keempat",
    "E. Pilihan jawaban kelima",
  ],
}));

export default function SesiSoalTryout1() {
  const router = useRouter();

  // --- STATES ---
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(null); // Null awalnya untuk menghindari hydration error
  const [answers, setAnswers] = useState<Record<number, { selected: string; isRagu: boolean }>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default tertutup di mobile

  // --- LOGIC: PERSISTENT TIMER ---
  useEffect(() => {
    const savedTime = localStorage.getItem("tryout_1_timer");
    if (savedTime) {
      setTimeLeft(parseInt(savedTime));
    } else {
      setTimeLeft(DURATION_SECONDS);
      localStorage.setItem("tryout_1_timer", DURATION_SECONDS.toString());
    }
  }, []);

  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft <= 0) {
      handleAutoSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const nextTime = prev !== null ? prev - 1 : 0;
        localStorage.setItem("tryout_1_timer", nextTime.toString());
        return nextTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // --- LOGIC: HASH NAVIGATION ---
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const num = parseInt(hash);
      if (num >= 1 && num <= TOTAL_SOAL) setCurrentIdx(num - 1);
    };
    window.addEventListener("hashchange", handleHashChange);
    if (!window.location.hash) window.location.hash = "#1";
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // --- LOGIC: ANSWERS ---
  useEffect(() => {
    const saved = localStorage.getItem("tryout_1_progress");
    if (saved) setAnswers(JSON.parse(saved));
  }, []);

  const handleSelectOption = (option: string) => {
    const qId = currentIdx + 1;
    const newAnswers = {
      ...answers,
      [qId]: { selected: option, isRagu: answers[qId]?.isRagu || false },
    };
    setAnswers(newAnswers);
    localStorage.setItem("tryout_1_progress", JSON.stringify(newAnswers));
  };

  const toggleRagu = () => {
    const qId = currentIdx + 1;
    if (!answers[qId]) return;
    const newAnswers = {
      ...answers,
      [qId]: { ...answers[qId], isRagu: !answers[qId].isRagu },
    };
    setAnswers(newAnswers);
    localStorage.setItem("tryout_1_progress", JSON.stringify(newAnswers));
  };

  const navigateSoal = (step: number) => {
    const next = currentIdx + step;
    if (next >= 0 && next < TOTAL_SOAL) {
      window.location.hash = `#${next + 1}`;
    }
  };

  const handleAutoSubmit = () => {
    localStorage.removeItem("tryout_1_timer"); // Bersihkan timer saat selesai
    router.push("/selesai-tryout");
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
      {/* --- HEADER --- */}
      <header className="bg-white border-b border-slate-200 px-4 md:px-6 py-4 sticky top-0 z-50 flex justify-between items-center shadow-sm">
        {/* SISI KIRI: JUDUL */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:block bg-indigo-600 p-2 rounded-lg text-white">
            <FileText size={20} />
          </div>
          <div>
            <h1 className="text-xs md:text-base font-bold text-slate-800">Tryout SKD #1</h1>
            <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">
              {questionsData[currentIdx].category}
            </p>
          </div>
        </div>

        {/* SISI KANAN: TIMER & HAMBURGER (Dikelompokkan) */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Timer */}
          <div
            className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl border-2 transition-colors ${
              timeLeft !== null && timeLeft < 300
                ? "border-red-500 bg-red-50 text-red-600 animate-pulse"
                : "border-indigo-100 bg-indigo-50 text-indigo-700"
            }`}
          >
            <Clock size={18} className="md:w-5 md:h-5" />
            <span className="font-mono text-sm md:text-lg font-black leading-none">
              {timeLeft !== null ? formatTime(timeLeft) : "--:--:--"}
            </span>
          </div>

          {/* Hamburger Menu (Hanya muncul di mobile/tablet < lg) */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-100"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      <div className="flex flex-1 relative">
        {/* --- LEFT: SOAL SECTION --- */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8 mb-6">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">
                  Soal No. {currentIdx + 1}
                </span>
              </div>

              <p className="text-slate-800 text-base md:text-lg leading-relaxed font-medium mb-8">
                {questionsData[currentIdx].question}
              </p>

              <div className="space-y-3">
                {questionsData[currentIdx].options.map((opt, i) => {
                  const isSelected = answers[currentIdx + 1]?.selected === opt;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(opt)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-4 group ${isSelected ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm" : "border-slate-100 bg-slate-50 text-slate-600"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${isSelected ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-400"}`}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span className="text-sm md:text-base font-medium">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
              <div className="flex gap-2 w-full md:w-auto">
                {currentIdx > 0 && (
                  <button
                    onClick={() => navigateSoal(-1)}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-3 rounded-xl font-bold text-sm"
                  >
                    <ChevronLeft size={18} /> <span>Sebelumnya</span>
                  </button>
                )}
                <button
                  onClick={toggleRagu}
                  className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm border-2 ${answers[currentIdx + 1]?.isRagu ? "bg-amber-500 border-amber-500 text-white" : "bg-white border-amber-500 text-amber-500"}`}
                >
                  <Flag size={18} fill={answers[currentIdx + 1]?.isRagu ? "white" : "none"} /> Ragu-ragu
                </button>
              </div>

              <div className="w-full md:w-auto">
                {currentIdx < TOTAL_SOAL - 1 ? (
                  <button
                    onClick={() => navigateSoal(1)}
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-100"
                  >
                    Selanjutnya <ChevronRight size={18} />
                  </button>
                ) : (
                  <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg">
                    <Send size={18} /> Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT: TRACK SOAL (SIDEBAR) --- */}
        {/* Overlay untuk mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside
          className={`
            fixed lg:sticky top-0 right-0 lg:top-[73px] z-[70] lg:z-40
            w-80 h-full lg:h-[calc(100vh-73px)] 
            bg-white border-l border-slate-200 flex flex-col 
            transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
          `}
        >
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-black text-slate-800 flex items-center gap-2">Navigasi Soal</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: TOTAL_SOAL }, (_, i) => {
                const qNum = i + 1;
                const ans = answers[qNum];
                const isCurrent = currentIdx === i;

                let bgColor = "bg-slate-100 text-slate-400";
                if (ans?.selected) bgColor = "bg-emerald-500 text-white";
                if (ans?.isRagu) bgColor = "bg-amber-500 text-white";
                if (isCurrent)
                  bgColor = "ring-4 ring-indigo-600 ring-inset bg-indigo-50 text-indigo-700";

                return (
                  <button
                    key={i}
                    onClick={() => {
                      window.location.hash = `#${qNum}`;
                      setIsSidebarOpen(false); // Close sidebar on mobile after selection
                    }}
                    className={`aspect-square rounded-xl font-bold text-xs transition-all flex items-center justify-center ${bgColor}`}
                  >
                    {qNum}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 bg-slate-50 mt-auto">
            <button className="w-full bg-white text-red-600 border border-red-100 py-3 rounded-xl text-sm font-black hover:bg-red-600 hover:text-white transition-all">
              Hentikan Ujian
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
