"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Clock, ChevronLeft, ChevronRight, Flag, Send, FileText, Menu, X } from "lucide-react";
import { questions, Question } from "@/lib/questions";

// --- PERUBAHAN DI SINI: Import Library Math Rendering ---
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
// -------------------------------------------------------

const TOTAL_SOAL = 110;
const DURATION_SECONDS = 100 * 60; // 100 Menit (Standar SKD)

export default function SesiSoalTryout1() {
  const router = useRouter();

  // --- STATES ---
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [answers, setAnswers] = useState<
    Record<number, { selected: string; points: number; isRagu: boolean }>
  >({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- PROTEKSI HALAMAN ---
  useEffect(() => {
    const session = localStorage.getItem("user_session");
    if (!session) {
      router.push("/");
    }
  }, [router]);

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
      handleFinalSubmit(true);
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

  // --- LOGIC: LOAD ANSWERS ---
  useEffect(() => {
    const saved = localStorage.getItem("tryout_1_progress");
    if (saved) setAnswers(JSON.parse(saved));
  }, []);

  const handleSelectOption = (optLabel: string, points: number) => {
    const qId = currentIdx + 1;
    const newAnswers = {
      ...answers,
      [qId]: {
        selected: optLabel,
        points: points,
        isRagu: answers[qId]?.isRagu || false,
      },
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

  const handleFinalSubmit = async (isAuto = false) => {
    if (!isAuto && !confirm("Apakah anda yakin ingin mengakhiri tryout?")) return;

    setIsSubmitting(true);

    let scoreTwk = 0;
    let scoreTiu = 0;
    let scoreTkp = 0;

    questions.forEach((q) => {
      const userAns = answers[q.id];
      const point = userAns ? userAns.points : 0;
      if (q.category === "TWK") scoreTwk += point;
      if (q.category === "TIU") scoreTiu += point;
      if (q.category === "TKP") scoreTkp += point;
    });

    const totalScore = scoreTwk + scoreTiu + scoreTkp;
    const session = JSON.parse(localStorage.getItem("user_session") || "{}");

    const payload = {
      userId: session.id,
      tryoutId: 1,
      scoreTwk,
      scoreTiu,
      scoreTkp,
      totalScore,
      answers: answers,
    };

    try {
      const res = await fetch("/api/submit-tryout", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        localStorage.setItem("last_to_result", JSON.stringify(payload));
        localStorage.removeItem("tryout_1_timer");
        localStorage.removeItem("tryout_1_progress");
        router.push("/tryout-1/hasil-tryout-1");
      }
    } catch (err) {
      alert("Gagal menyimpan hasil. Silahkan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const currentQuestion = questions[currentIdx];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
      {/* --- HEADER --- */}
      <header className="bg-white border-b border-slate-200 px-4 md:px-6 py-4 sticky top-0 z-50 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:block bg-indigo-600 p-2 rounded-lg text-white">
            <FileText size={20} />
          </div>
          <div>
            <h1 className="text-xs md:text-base font-bold text-slate-800">Tryout SKD #1</h1>
            <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">
              {currentQuestion.category}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl border-2 transition-colors ${timeLeft !== null && timeLeft < 300 ? "border-red-500 bg-red-50 text-red-600 animate-pulse" : "border-indigo-100 bg-indigo-50 text-indigo-700"}`}
          >
            <Clock size={18} className="md:w-5 md:h-5" />
            <span className="font-mono text-sm md:text-lg font-black leading-none">
              {timeLeft !== null ? formatTime(timeLeft) : "--:--:--"}
            </span>
          </div>

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

              {/* --- PERUBAHAN DI SINI: Render Konten Soal --- */}
              <div className="space-y-4 mb-8">
                {currentQuestion.content.map((item, i) =>
                  item.type === "text" ? (
                    <div
                      key={i}
                      className="text-slate-800 text-base md:text-lg leading-relaxed font-medium prose prose-slate max-w-none"
                    >
                      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                        {item.value}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <img
                      key={i}
                      src={item.value}
                      alt="Soal"
                      className="md:h-32 h-28 max-w-full object-contain rounded-lg border border-slate-200"
                    />
                  ),
                )}
              </div>
              {/* ------------------------------------------------------------- */}

              {/* --- PERBAIKAN DI SINI: Render Opsi Jawaban --- */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt, i) => {
                  const isSelected = answers[currentIdx + 1]?.selected === opt.label;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(opt.label, opt.points)}
                      // PERUBAHAN: items-start untuk menyelaraskan label ke atas jika ada gambar
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-4 group ${isSelected ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm" : "border-slate-100 bg-slate-50 text-slate-600 hover:border-indigo-200"}`}
                    >
                      <div
                        // PERUBAHAN: mt-1 agar label sejajar dengan baris pertama teks/gambar
                        className={`w-8 h-8 rounded-lg  flex items-center justify-center font-bold text-sm   ${isSelected ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-400"}`}
                      >
                        {opt.label}
                      </div>
                      <div className="flex flex-col gap-4 w-full overflow-hidden mt-[2px] ">
                        {/* PERUBAHAN: Tambahkan kondisi !opt.image agar teks hanya tampil jika TIDAK ADA gambar */}
                        {opt.text && !opt.image && (
                          <div className="text-sm md:text-base font-medium prose prose-slate max-w-none">
                            <ReactMarkdown
                              remarkPlugins={[remarkMath]}
                              rehypePlugins={[rehypeKatex]}
                            >
                              {opt.text}
                            </ReactMarkdown>
                          </div>
                        )}
                        {/* --------------------------- */}

                        {/* Gambar Opsi */}
                        {opt.image && (
                          <div className="flex justify-start">
                            <img
                              src={opt.image}
                              alt={`Opsi ${opt.label}`}
                              className="md:h-28 h-24  max-w-full object-contain rounded-lg border border-slate-200 bg-white"
                            />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              {/* ------------------------------------------- */}
            </div>

            {/* Tombol Navigasi Bawah */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
              <div className="flex gap-2 w-full md:w-auto">
                {currentIdx > 0 && (
                  <button
                    onClick={() => navigateSoal(-1)}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white hover:bg-slate-200 border border-slate-200 text-slate-600 px-4 py-3 rounded-xl font-bold text-sm"
                  >
                    <ChevronLeft size={18} /> <span>Sebelumnya</span>
                  </button>
                )}
                <button
                  onClick={toggleRagu}
                  className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm border-2 ${answers[currentIdx + 1]?.isRagu ? "bg-amber-500 border-amber-500 text-white" : "bg-white hover:bg-amber-100 border-amber-500 text-amber-500"}`}
                >
                  <Flag size={18} fill={answers[currentIdx + 1]?.isRagu ? "white" : "none"} />{" "}
                  Ragu-ragu
                </button>
              </div>

              <div className="w-full md:w-auto">
                {currentIdx < TOTAL_SOAL - 1 ? (
                  <button
                    onClick={() => navigateSoal(1)}
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-100"
                  >
                    Selanjutnya <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    disabled={isSubmitting}
                    onClick={() => handleFinalSubmit()}
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg disabled:opacity-50"
                  >
                    <Send size={18} /> {isSubmitting ? "Sabar..." : "Selesaikan Ujian"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT: SIDEBAR NAVIGASI --- */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <aside
          className={`fixed lg:sticky top-0 right-0 lg:top-[73px] z-[70] lg:z-40 w-80 h-full lg:h-[calc(100vh-73px)] bg-white border-l border-slate-200 flex flex-col transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}
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
                      setIsSidebarOpen(false);
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
            <button
              onClick={() => handleFinalSubmit()}
              className="w-full bg-white text-red-600 border border-red-100 py-3 rounded-xl text-sm font-black hover:bg-red-600 hover:text-white transition-all"
            >
              Hentikan Ujian
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
