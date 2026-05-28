"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoading } from "@/components/LoadingProvider"; // 1. IMPORT HOOK LOADING
import {
  BookOpen,
  Clock,
  FileText,
  CheckCircle2,
  ChevronRight,
  LogOut,
  Lock, // Ikon gembok untuk status segera
} from "lucide-react";

export default function Beranda() {
  const router = useRouter();
  const { setIsLoading } = useLoading();

  // {/* TAMBAHKAN: State untuk simpan data user */}
  const [userData, setUserData] = useState<{ username: string; to_access_limit: number } | null>(
    null,
  );

  useEffect(() => {
    // Ambil data session
    const session = localStorage.getItem("user_session");
    if (!session) {
      router.push("/"); // Proteksi halaman: Balik ke login jika tidak ada session
    } else {
      setUserData(JSON.parse(session));
    }
  }, [router]);

  // Data dummy untuk 5 card tryout
  const tryoutList = [
    { id: 1, title: "Tryout 1", slug: "tryout-1", status: "Tersedia" },
    { id: 2, title: "Tryout 2", slug: "tryout-2", status: "Segera" },
    { id: 3, title: "Tryout 3", slug: "tryout-3", status: "Segera" },
    { id: 4, title: "Tryout 4", slug: "tryout-4", status: "Segera" },
    { id: 5, title: "Tryout 5", slug: "tryout-5", status: "Segera" },
    { id: 6, title: "Tryout 6", slug: "tryout-6", status: "Segera" },
    { id: 7, title: "Tryout 7", slug: "tryout-7", status: "Segera" },
  ];

  const handleLogout = () => {
    setIsLoading(true); // 3. NYALAKAN LOADING SAAT LOGOUT
    localStorage.removeItem("user_session"); // {/* TAMBAHKAN: Hapus session saat logout */}
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 py-12 px-6 shadow-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-white relative z-10">
          {/* Header Bar */}
          <div className="flex justify-start mb-8">
            <button
              onClick={handleLogout}
              className="group flex items-center gap-2  bg-white/10 hover:bg-red-500 text-white px-4 py-2 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-red-500/40"
            >
              {/* Icon sekarang di kiri dan diputar 180 derajat agar panah ke kiri */}
              <LogOut
                size={20}
                className="rotate-180 group-hover:-translate-x-1 transition-transform"
              />

              {/* Teks di sebelah kanan */}
              <span className="text-xs md:text-sm font-bold">Keluar</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
                Siap Taklukkan <span className="text-yellow-400">SKD CPNS?</span>
              </h1>
              <p className="text-indigo-100 max-w-2xl text-sm md:text-lg leading-relaxed opacity-90 mx-auto md:mx-0">
                Asah kemampuanmu dengan simulasi soal standar BKN terbaru. Fokus, teliti, dan raih
                passing grade impianmu!
              </p>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-white opacity-10 blur-3xl rounded-full"></div>
              <BookOpen size={120} className="relative text-indigo-200/50 rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="text-white" size={20} />
            </div>
            Daftar Tryout Tersedia
          </h2>
          {/* {/* PERUBAHAN: Badge info akses */}
          <span className="text-sm font-medium text-indigo-700 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
            Akses: {userData?.to_access_limit} Paket TO
          </span>
        </div>

        {/* --- TRYOUT LIST --- */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {tryoutList.map((item) => {
            // {/* PERUBAHAN: Logic Akses Berdasarkan Database */}
            const isAvailable = userData ? item.id <= userData.to_access_limit : false;

            return (
              <div
                key={item.id}
                className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] ${
                  !isAvailable ? "cursor-not-allowed" : ""
                }`}
              >
                <Link
                  href={isAvailable ? `/${item.slug}` : "#"}
                  onClick={(e) => !isAvailable && e.preventDefault()}
                  className={`group relative block h-full transition-all duration-300 ${
                    isAvailable ? "hover:-translate-y-2" : "opacity-70"
                  }`}
                >
                  <div
                    className={`bg-white border rounded-[2rem] p-6 h-full flex flex-col justify-between overflow-hidden relative transition-all ${
                      isAvailable
                        ? "border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300"
                        : "border-slate-200 bg-slate-50/50 grayscale"
                    }`}
                  >
                    {/* Status Badge */}
                    <div className="relative z-10 flex justify-between items-start mb-4">
                      <div
                        className={`p-3 rounded-2xl ${isAvailable ? "bg-indigo-100 text-indigo-700" : "bg-slate-200 text-slate-400"}`}
                      >
                        <FileText size={24} />
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase flex items-center gap-1 ${
                          isAvailable
                            ? "bg-green-100 text-green-600"
                            : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {isAvailable ? <CheckCircle2 size={10} /> : <Lock size={10} />}
                        {isAvailable ? "Terbuka" : "Terkunci"}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3
                        className={`text-xl font-bold mb-2 ${isAvailable ? "text-slate-800" : "text-slate-400"}`}
                      >
                        {item.title}
                      </h3>
                      <div className="space-y-2 mb-6 mt-4">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock size={14} /> 100 Menit
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircle2 size={14} /> 110 Soal
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mt-auto">
                      <button
                        disabled={!isAvailable}
                        className={`w-full font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 border transition-all duration-300 ${
                          isAvailable
                            ? "bg-slate-100 text-slate-600 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-blue-700 group-hover:text-white border-transparent"
                            : "bg-slate-200 text-slate-400 border-slate-200 cursor-not-allowed"
                        }`}
                      >
                        {isAvailable ? "Mulai Sekarang" : "Belum Tersedia"}
                        {isAvailable && (
                          <ChevronRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ornament Background */}
      <div className="fixed bottom-0 left-0 -z-10 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl opacity-50"></div>
      <div className="fixed top-1/2 right-0 -z-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50"></div>
    </main>
  );
}
