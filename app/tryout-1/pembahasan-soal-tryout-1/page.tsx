"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, BookOpenCheck, Menu, X, Home } from "lucide-react";

import { questions } from "@/lib/questions";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import { KatexOptions } from "katex";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const TOTAL_SOAL = 110;

export default function PembahasanSoalTryout1() {
  const router = useRouter();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { selected: string; points: number }>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- PROTEKSI & LOAD JAWABAN TO TERAKHIR USER ---
  useEffect(() => {
    const session = localStorage.getItem("user_session");
    if (!session) {
      router.push("/");
      return;
    }

    const storedResults = localStorage.getItem("last_to_result");
    if (storedResults) {
      const parsed = JSON.parse(storedResults);
      // Mengambil objek answers berisi jawaban TO terakhir user dari database
      setAnswers(parsed.answers || {});
    } else {
      router.push("/tryout-1");
    }
  }, [router]);

  // --- HASH NAVIGATION ---
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

  const navigateSoal = (step: number) => {
    const next = currentIdx + step;
    if (next >= 0 && next < TOTAL_SOAL) {
      window.location.hash = `#${next + 1}`;
    }
  };

  // ===========================================================
  // /* PERUBAHAN: Ambil data soal tunggal dari array questions */
  // ===========================================================
  const currentQuestion = questions[currentIdx] || questions[0];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden">
      {/* --- HEADER (TIDAK MEMILIKI TIMER) --- */}
      <header className="bg-white border-b border-slate-200 px-4 md:px-6 py-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center shadow-sm h-18">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-emerald-600 p-2 rounded-lg text-white">
            <BookOpenCheck size={20} />
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold text-slate-800">Pembahasan SKD #1</h1>
            <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">
              {currentQuestion?.category}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-100"
        >
          <Menu size={24} />
        </button>
      </header>

      <div className="flex flex-1 relative mt-18">
        {/* --- KONTEN UTAMA SOAL & JAWABAN (KIRI) --- */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-8 mb-6">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold">
                Soal No. {currentIdx + 1}
              </span>

              {/* Konten Pertanyaan */}
              <div className="space-y-4 my-6">
                {currentQuestion?.content.map((item, i) =>
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

              {/* Opsi Jawaban (Terisi Jawaban User dari DB) */}
              <div className="space-y-3">
                {currentQuestion?.options.map((opt, i) => {
                  const isSelectedByUser = answers[currentIdx + 1]?.selected === opt.label;
                  return (
                    <div
                      key={i}
                      className={`w-full text-left p-4 rounded-2xl border-2 flex items-start gap-4 ${isSelectedByUser ? "border-indigo-600 bg-indigo-50/70 text-indigo-900 shadow-sm" : "border-slate-100 bg-slate-50 text-slate-600"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${isSelectedByUser ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-400"}`}
                      >
                        {opt.label}
                      </div>
                      <div className="space-y-4">
                        {opt.text && !opt.image && (
                          <div className="text-sm md:text-base font-medium">
                            <ReactMarkdown
                              remarkPlugins={[remarkMath]}
                              rehypePlugins={[rehypeKatex]}
                            >
                              {opt.text}
                            </ReactMarkdown>
                          </div>
                        )}
                        {opt.image && (
                          <img
                            src={opt.image}
                            alt={`Opsi ${opt.label}`}
                            className="md:h-28 h-24 max-w-full object-contain rounded-lg border border-slate-200"
                          />
                        )}
                        {isSelectedByUser && (
                          <span className="text-[10px] font-black  text-indigo-600 tracking-wider">
                            Jawaban Anda (Poin: {opt.points})
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ======================================================== */}
              {/* {/* TAMBAHKAN: Box Konten Pembahasan (Teks dan/atau Gambar) */}
              {/* ======================================================== */}
              <div className="mt-8 pt-6 border-t border-slate-100 bg-emerald-50/50 rounded-2xl p-4 md:p-6 border border-emerald-100">
                <h3 className="text-sm font-black text-emerald-800 uppercase tracking-wider mb-3">
                  Pembahasan Soal:
                </h3>
                <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed text-left">
                  {currentQuestion?.explanation ? (
                    currentQuestion.explanation.map((exp, idx) =>
                      exp.type === "text" ? (
                        <ReactMarkdown
                          key={idx}
                          remarkPlugins={[remarkMath]}
                          rehypePlugins={[rehypeKatex]}
                        >
                          {exp.value}
                        </ReactMarkdown>
                      ) : (
                        <img
                          key={idx}
                          src={exp.value}
                          alt="Pembahasan Gambar"
                          className="max-w-full rounded-xl border border-slate-200 shadow-sm object-contain max-h-64 bg-white"
                        />
                      ),
                    )
                  ) : (
                    <p className="text-slate-400 italic">Materi pembahasan belum diunggah.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Navigasi Tombol Bawah */}
            <div className="flex items-center justify-between gap-4 mb-10">
              <div className="flex gap-2 w-full md:w-auto">
                {currentIdx > 0 && (
                  <button
                    onClick={() => navigateSoal(-1)}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white hover:bg-slate-200 border border-slate-200 text-slate-600 px-4 py-3 rounded-xl font-bold text-sm"
                  >
                    <ChevronLeft size={18} /> <span>Sebelumnya</span>
                  </button>
                )}
              </div>

              <div>
                {currentIdx < TOTAL_SOAL - 1 ? (
                  <button
                    onClick={() => navigateSoal(1)}
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg"
                  >
                    Selanjutnya <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    onClick={() => router.push("/tryout-1/hasil-tryout-1")}
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg"
                  >
                    <Home size={18} /> Selesai
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- NAVIGASI NOMOR KANAN (SIDEBAR) --- */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <aside
          className={`rounded-lg rounded-r-none  fixed lg:sticky top-0 right-0 lg:top-[73px] z-[70] lg:z-40 w-80 h-full lg:h-[calc(100vh-73px)] bg-white border border-slate-200   flex flex-col  transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}
        >
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-black text-slate-800">Navigasi Review</h2>
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

                // LOGIKA WARNA PEMBAHASAN:
                // 1. Default: Belum dijawab (Abu-abu)
                let bgColor = "bg-slate-200 text-slate-500";

                // 2. Jika sudah dijawab
                if (ans?.selected) {
                  // Jika jawaban benar (poin maksimal, misal 5)
                  if (ans.points === 5) {
                    bgColor = "bg-emerald-500 text-white";
                  }
                  // Jika jawaban salah (poin < 5)
                  else {
                    bgColor = "bg-red-500 text-white";
                  }
                }

                // 3. Highlight Soal Aktif (Override semua warna di atas dengan Ring & Warna Indigo)
                const activeStyles = isCurrent
                  ? "ring-4 ring-indigo-600 ring-inset text-indigo-900"
                  : "";

                return (
                  <button
                    key={i}
                    onClick={() => {
                      window.location.hash = `#${qNum}`;
                      setIsSidebarOpen(false);
                    }}
                    // Gabungkan bgColor dengan activeStyles
                    className={`aspect-square rounded-xl font-bold text-xs transition-all flex items-center justify-center ${bgColor} ${activeStyles}`}
                  >
                    {qNum}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 bg-slate-50 mt-auto rounded-lg">
            <button
              onClick={() => router.push("/tryout-1/hasil-tryout-1")}
              className="w-full bg-white text-emerald-600 border border-emerald-200 py-3 rounded-xl text-sm font-black hover:bg-emerald-600 hover:text-white transition-all text-center block"
            >
              Selesai Review
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
