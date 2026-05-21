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
  Menu,
  X,
  AlertCircle,
} from "lucide-react";
import { questions, Question } from "@/lib/questions";
import FocusGuard from "@/components/FocusGuard";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";


const TOTAL_SOAL = 110;
const DURATION_SECONDS = 100 * 60; 

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

  {
    /* State untuk Modal Confirm & Error Toast */
  }
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

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
    // Jika bukan auto-submit dan modal belum dikonfirmasi, tampilkan modal
    if (!isAuto && !showConfirm) {
      setShowConfirm(true);
      return;
    }

    setIsSubmitting(true);
    setShowConfirm(false);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        localStorage.setItem("last_to_result", JSON.stringify(payload));
        localStorage.removeItem("tryout_1_timer");
        localStorage.removeItem("tryout_1_progress");
        router.push("/tryout-1/hasil-tryout-1");
      } else {
        // Ganti alert dengan setError toast
        setError("Gagal menyimpan hasil. Silahkan coba lagi.");
      }
    } catch (err) {
      setError("Koneksi gagal. Periksa jaringan anda.");
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
      <FocusGuard />
      {/* Toast Error */}
      <div
        className={`fixed top-5 right-5 z-[100] transition-all duration-500 transform ${error ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <div className="bg-white border-l-4 border-red-500 shadow-2xl rounded-xl p-4 flex items-center gap-4 min-w-[300px]">
          <div className="bg-red-100 p-2 rounded-full text-red-600">
            <AlertCircle size={20} />
          </div>
          <div className="flex-1">
            <p className="text-xs text-slate-400 font-medium">Terjadi Kesalahan</p>
            <p className="text-sm text-slate-800 font-bold">{error}</p>
          </div>
          <button onClick={() => setError("")}>
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Modal Confirm */}
      {showConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setShowConfirm(false)}
          />
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative z-10 text-center">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-2">Konfirmasi Selesai</h3>
            <p className="text-slate-500 mb-8 font-medium">
              Apakah anda yakin ingin mengakhiri tryout ini sekarang?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-3 rounded-xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                Batal
              </button>
              <button
                onClick={() => handleFinalSubmit()}
                className="flex-1 py-3 rounded-xl font-bold bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Iya, Selesai
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wrapper Blur jika Modal Muncul */}
      <div
        className={`transition-all duration-300 ${showConfirm ? "blur-sm pointer-events-none" : ""}`}
      >
        {/* --- HEADER --- */}
        <header className="bg-white border-b border-slate-200 px-4 md:px-6 py-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center shadow-sm h-18">
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

        {/* SOAL DAN NAVIGATION SECTION */}
        <div className="flex flex-1 relative mt-18">
          {/* --- LEFT: SOAL SECTION --- */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8 mb-6">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">
                    Soal No. {currentIdx + 1}
                  </span>
                </div>

                {/* --- Render Konten Soal --- */}
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
                        className="md:h-32 h-28 max-w-full object-contain rounded-lg"
                      />
                    ),
                  )}
                </div>
                {/* ------------------------------------------------------------- */}

                {/* --- Render Opsi Jawaban --- */}
                <div className="space-y-3">
                  {currentQuestion.options.map((opt, i) => {
                    const isSelected = answers[currentIdx + 1]?.selected === opt.label;
                    return (
                      <button
                        key={i}
                        onClick={() => handleSelectOption(opt.label, opt.points)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-4 group ${isSelected ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm" : "border-slate-100 bg-slate-50 text-slate-600 hover:border-indigo-200"}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg  flex items-center justify-center font-bold text-sm   ${isSelected ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-400"}`}
                        >
                          {opt.label}
                        </div>
                        <div className="flex flex-col gap-4 w-full overflow-hidden mt-[2px] ">
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
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg disabled:opacity-50"
                    >
                      <Send size={18} /> {isSubmitting ? "Tunggu..." : "Selesaikan Ujian"}
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
            className={` rounded-lg rounded-r-none  border border-slate-200 fixed lg:sticky top-0 right-0 lg:top-[73px] z-[70] lg:z-40 w-80 h-full lg:h-[calc(100vh-73px)] bg-white border-l border-slate-200 flex flex-col transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}
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
            <div className="flex-1 overflow-y-auto p-4 ">
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: TOTAL_SOAL }, (_, i) => {
                  const qNum = i + 1;
                  const ans = answers[qNum];
                  const isCurrent = currentIdx === i;

                  let bgColor = "bg-slate-100 text-slate-400"; //
                  if (ans?.selected) bgColor = "bg-emerald-500 text-white";
                  if (ans?.isRagu) bgColor = "bg-amber-500 text-white";

                  const activeClass = isCurrent ? "ring-4 ring-indigo-600 ring-inset" : "";

                  const activeTextClass =
                    isCurrent && !ans?.selected && !ans?.isRagu
                      ? "text-indigo-700 bg-indigo-50"
                      : "";

                  return (
                    <button
                      key={i}
                      onClick={() => {
                        window.location.hash = `#${qNum}`;
                        setIsSidebarOpen(false);
                      }}
                      className={`aspect-square rounded-xl font-bold text-xs transition-all flex items-center justify-center 
        ${bgColor} 
        ${activeClass} 
        ${activeTextClass}`}
                    >
                      {qNum}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="p-4 bg-slate-50 mt-auto rounded-lg">
              <button
                onClick={() => handleFinalSubmit()}
                className="w-full bg-white text-red-600 border border-red-100 py-3 rounded-xl text-sm font-black hover:bg-red-600 hover:text-white transition-all"
              >
                Hentikan Ujian
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
