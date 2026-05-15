"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Trophy, BookOpenCheck, ArrowLeft, Award } from "lucide-react";

const SubTestBar = ({
  label,
  score,
  pg,
  max,
}: {
  label: string;
  score: number;
  pg: number;
  max: number;
}) => {
  const percentage = (score / max) * 100;
  const pgPercentage = (pg / max) * 100;
  const isPassed = score >= pg;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-end mb-2">
        <div>
          <span className="text-lg font-black text-slate-800">{label}</span>
          <span
            className={`ml-3 text-xs font-bold px-2 py-0.5 rounded-full ${isPassed ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
          >
            {isPassed ? "LULUS PASSING GRADE" : "TIDAK LULUS"}
          </span>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-indigo-600">{score}</span>
          <span className="text-slate-400 text-sm font-bold"> / {max}</span>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="relative h-4 w-full bg-slate-100 rounded-full border border-slate-200 mb-6">
        <div
          className={`absolute top-0 left-0 h-full transition-all duration-1000 ease-out rounded-full ${isPassed ? "bg-indigo-500" : "bg-orange-400"}`}
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Penanda Garis Merah (Passing Grade) */}
        <div
          className="absolute top-0 h-full w-0.5 bg-red-500 z-10"
          style={{ left: `${pgPercentage}%` }}
        >
          {/* Bulatan Merah di atas garis */}
          <div className="absolute -top-1 -left-[5px] w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>

          {/* TEKS PASSING GRADE: Diletakkan di dalam div yang sama agar ikut bergeser */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
            <p className="text-[9px] font-black text-red-500 uppercase tracking-tighter leading-none">
              Passing Grade: {pg}
            </p>
          </div>
        </div>
      </div>

      {/* Label Statis di Bawah */}
      <div className="flex justify-between mt-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        <span>0</span>
        <span>{max}</span>
      </div>
    </div>
  );
};
export default function HasilTryout() {
  const router = useRouter();
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    {
      /* PERUBAHAN: Proteksi Halaman */
    }
    const session = localStorage.getItem("user_session");
    if (!session) {
      router.push("/");
      return;
    }

    const storedResults = localStorage.getItem("last_to_result");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      router.push("/beranda");
    }
  }, [router]);

  if (!results) return null;

  {
    /* LOGIC: Circle Chart SVG */
  }
  const totalMax = 550;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (results.totalScore / totalMax) * circumference;

  const isLolosSemua = results.scoreTwk >= 65 && results.scoreTiu >= 80 && results.scoreTkp >= 166;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-700 pt-16 pb-32 px-6 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-white text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">
            Hasil <span className="text-yellow-400">Tryout Anda</span>
          </h1>
          <p className="text-indigo-100 font-medium">
            Evaluasi hasil pengerjaanmu dan teruslah berlatih!
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-slate-100">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="96" cy="96" r={radius} stroke="#f1f5f9" strokeWidth="16" fill="none" />
                <circle
                  cx="96"
                  cy="96"
                  r={radius}
                  stroke="#4f46e5"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={circumference}
                  style={{
                    strokeDashoffset: offset,
                    transition: "stroke-dashoffset 1.5s ease-in-out",
                  }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute text-center">
                <p className="text-4xl font-black text-slate-800">{results.totalScore}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Skor Total
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div
                className={`${isLolosSemua ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"} p-6 rounded-3xl border flex items-center gap-4`}
              >
                <div
                  className={`${isLolosSemua ? "bg-green-600" : "bg-red-600"} p-3 rounded-2xl text-white`}
                >
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase">Status</p>
                  <p
                    className={`text-lg md:text-xl font-black ${isLolosSemua ? "text-green-900" : "text-red-900"}`}
                  >
                    {isLolosSemua ? "Lolos Passing Grade 🎉" : "Belum Lolos Passing Grade"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <SubTestBar
              label="TWK (Wawasan Kebangsaan)"
              score={results.scoreTwk}
              pg={65}
              max={150}
            />
            <SubTestBar
              label="TIU (Intelegensia Umum)"
              score={results.scoreTiu}
              pg={80}
              max={175}
            />
            <SubTestBar
              label="TKP (Karakteristik Pribadi)"
              score={results.scoreTkp}
              pg={166}
              max={225}
            />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push("/beranda")}
              className="flex-1 bg-slate-100 text-slate-600 font-bold py-5 px-8 rounded-2xl hover:bg-slate-200 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={20} /> Kembali ke Beranda
            </button>
            <button className="flex-[2] bg-indigo-600 text-white font-bold py-5 px-8 rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
              <BookOpenCheck size={20} /> Lihat Pembahasan Soal
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
