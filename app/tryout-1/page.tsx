"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  FileText,
  Target,
  Trophy,
  PlayCircle,
  BookOpenCheck,
  AlertCircle,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const PassingGradeChart = ({
  label,
  pg,
  max,
  colorClass,
}: {
  label: string;
  pg: number;
  max: number;
  colorClass: string;
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const percentage = (pg / max) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center group scale-110">
      <div className="relative w-32 h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        {/* Background Circle */}
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="10"
            fill="transparent"
            className="text-slate-200"
          />
          {/* Progress Circle */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            fill="transparent"
            className={`${colorClass} transition-all duration-1000 ease-out`}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-xl font-black text-slate-800">{pg}</span>
          <div className="w-8 h-[1px] bg-slate-300 my-0.5"></div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
            Max {max}
          </span>
        </div>
      </div>
      <h4 className="mt-1 font-bold text-slate-700 text-sm tracking-widest">{label}</h4>
    </div>
  );
};

export default function Tryout1() {
  const router = useRouter();

  const [isCompleted, setIsCompleted] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  useEffect(() => {
    const checkUserResult = async () => {
      const sessionStr = localStorage.getItem("user_session");
      if (!sessionStr) return;

      const session = JSON.parse(sessionStr);
      const { data, error } = await supabase
        .from("tryout_results")
        .select("*")
        .eq("user_id", session.id)
        .eq("tryout_id", 1)
        .order("created_at", { ascending: false })
        .limit(1); // Batasi hanya 1 data array yang ditarik

      if (data && data.length > 0) {
        const latestResult = data[0];
        setHasResult(true);
        setIsCompleted(true);

        // Sinkronkan ke local storage agar jika tombol diklik data sudah siap pakai
        localStorage.setItem("last_to_result", JSON.stringify(latestResult));
      }
    };

    checkUserResult();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 py-12 pb-24 px-6 shadow-lg relative overflow-hidden">
        {/* Animated Ornaments */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-white relative z-10">
          <div className="flex justify-start mb-8">
            <button
              onClick={() => router.push("/beranda")}
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-2xl border border-white/20 transition-all duration-300 backdrop-blur-md shadow-xl"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold tracking-wide">Kembali ke Beranda</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-yellow-400/30">
                <AlertCircle size={14} /> Fokus & Teliti Adalah Kunci
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight">
                Tryout <span className="text-yellow-400">SKD #1</span>
              </h1>
              <p className="text-indigo-100 max-w-xl text-sm md:text-lg leading-relaxed opacity-90 mx-auto md:mx-0 font-medium">
                Satu langkah lebih dekat menuju impianmu. Persiapkan mental, pastikan koneksi
                stabil, dan kerjakan dengan jujur.{" "}
                <span className="font-bold text-white italic">You've got this!</span>
              </p>
            </div>
            <div className="hidden lg:block animate-bounce-slow">
              <div className="bg-white/10 p-8 rounded-[3rem] backdrop-blur-sm border border-white/20">
                <Trophy
                  size={100}
                  className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFORMATION SECTION --- */}
      <div className="max-w-5xl mx-auto px-6 relative z-20 bottom-12">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-200/50 border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* General Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-indigo-50 rounded-[2rem] p-6 flex items-center gap-5 border border-indigo-100 hover:bg-indigo-100/50 transition-colors">
                <div className="bg-indigo-600 p-4 rounded-2xl text-white shadow-lg shadow-indigo-200">
                  <FileText size={22} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                    Jumlah Pertanyaan
                  </p>
                  <p className="text-xl font-black text-slate-800">110 Butir Soal</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-[2rem] p-6 flex items-center gap-5 border border-blue-100 hover:bg-blue-100/50 transition-colors">
                <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-blue-200">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                    Waktu Pengerjaan
                  </p>
                  <p className="text-xl font-black text-slate-800">100 Menit</p>
                </div>
              </div>
            </div>

            {/* Passing Grade Visualization */}
            <div className="text-center mb-10">
              <h3 className="text-xl font-black text-slate-800 mb-2 flex items-center justify-center gap-3">
                <Target className="text-indigo-600 hidden md:block" /> Passing Grade & Skor Maksimal
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <PassingGradeChart label="TWK" pg={65} max={150} colorClass="text-emerald-500" />
              <PassingGradeChart label="TIU" pg={80} max={175} colorClass="text-blue-500" />
              <PassingGradeChart label="TKP" pg={166} max={225} colorClass="text-orange-500" />
            </div>

            {/* Total Score Info */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-dashed border-slate-300 text-center mb-12">
              <p className="text-slate-600 font-bold">Total Nilai Kumulatif Tertinggi:</p>
              <p className="text-4xl font-black text-indigo-700">550</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* TAMBAHKAN/PERUBAHAN: Tombol Tampil di samping tombol utama jika user sudah pernah kerja */}

              {hasResult && (
                <button
                  onClick={() => router.push("/tryout-1/hasil-tryout-1")}
                  className="flex-1 bg-slate-100 text-slate-600 font-bold py-5 px-8 rounded-2xl hover:bg-slate-200 flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300"
                >
                  <BookOpenCheck size={24} />
                  Lihat Hasil Tryout
                </button>
              )}

              <button
                onClick={() => router.push("/tryout-1/sesi-soal-tryout-1")}
                className="flex-[2] flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white font-black py-5 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 hover:-translate-y-1"
              >
                Mulai Tryout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ornament Background Decor */}
      <div className="fixed bottom-0 right-0 -z-10 w-80 h-80 bg-indigo-100/40 rounded-full blur-[100px]"></div>
      <div className="fixed top-1/2 left-0 -z-10 w-64 h-64 bg-blue-100/40 rounded-full blur-[100px]"></div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(15deg);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}
