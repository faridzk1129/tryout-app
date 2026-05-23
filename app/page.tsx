"use client";
import {
  LockKeyhole,
  User,
  ArrowRight,
  Sparkles,
  Loader2,
  Target,
  Award,
  BookOpen,
  AlertCircle,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      const isMobile = window.innerWidth < 1024;
      if (!isMobile) return;

      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT") {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 300);
      }
    };

    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // {/* TAMBAHKAN: Simpan data user ke localStorage */}
        localStorage.setItem("user_session", JSON.stringify(data.user));
        router.push("/beranda");
      } else {
        setError(data.message || "Gagal masuk ke sistem.");
      }
    } catch (err: any) {
      setError("Koneksi gagal. Periksa jaringan anda.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <main className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-6 relative overflow-x-hidden">
      {/* Floating Notification (Toast) */}
      <div
        className={`fixed top-5 right-5 z-[100] transition-all duration-500 transform ${
          error ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="bg-white border-l-4 border-red-500 shadow-2xl rounded-xl p-4 flex items-center gap-4 min-w-[300px]">
          <div className="bg-red-100 p-2 rounded-full text-red-600">
            <AlertCircle size={20} />
          </div>
          <div className="flex-1">
            <p className="text-xs text-slate-400 font-medium">Terjadi Kesalahan</p>
            <p className="text-sm text-slate-800 font-bold">{error}</p>
          </div>
          <button
            onClick={() => setError("")}
            className="text-slate-300 hover:text-slate-500 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
        {/* Bagian Kiri*/}
        <div className="relative p-8 lg:p-10 flex flex-col bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
          <div className="relative z-10 flex flex-col h-full gap-8 justify-center items-center lg:items-start">
            <div className="flex items-center gap-2 mb-2 md:mb-6">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                <Target className="text-white" size={12} />
              </div>
              <span className="text-md font-bold tracking-tight">Pejuang NIP 2026</span>
            </div>

            <div className="space-y-4 md:space-y-8 flex flex-col items-center lg:items-start ">
              <h1 className="text-xl lg:text-4xl font-extrabold leading-tight">
                Siap Menjadi ASN <br />
              </h1>

              <div className="space-y-4 md:space-y-8">
                <div className="hidden md:flex items-start gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10  ">
                  <Sparkles className="text-yellow-300 mt-1" size={30} />
                  <p className="text-sm lg:text-lg leading-relaxed">
                    "Selamat datang di Tryout CPNS! Latih terus kemampuanmu, kuasai materi, dan
                    jadilah yang terbaik di seleksi tahun ini."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm bg-indigo-500/30 py-2 px-3 rounded-full">
                    <Award size={16} /> 110 Soal
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-indigo-500/30 py-2 px-3 rounded-full">
                    <BookOpen size={16} /> Standar BKN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Kanan: Login Form */}
        <div className="p-8 lg:p-10 lg:py-14 flex flex-col bg-white ">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="mb-8 text-center lg:text-left flex flex-col gap-2 self-start w-full ">
              <h2 className="text-3xl font-bold text-indigo-700 hidden lg:block ">Portal Masuk</h2>
              <p className="text-indigo-600 font-semibold text-sm lg:text-base">
                Silahkan login dengan akun terdaftar
              </p>
            </div>

            <form className="space-y-2 w-full flex flex-col" onSubmit={handleLogin}>
              <div className="space-y-4">
                <label className="text-sm font-semibold text-indigo-700 ml-1">Username</label>
                <div className="relative group mt-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    name="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Contoh: farid123"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-4 mt-1">
                <label className="text-sm font-semibold text-indigo-700 ml-1">Password</label>
                <div className="relative group mt-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                    <LockKeyhole size={18} />
                  </div>
                  <input
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full bg-gradient-to-br from-indigo-600 to-blue-700 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group mt-6 md:mt-8"
              >
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    Masuk
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>

            <div className="pt-4 pb-2 lg:pb-0 relative top-4 border-t border-slate-100 text-center">
              <p className="text-slate-500 text-sm">
                Belum memiliki akses?{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-bold">
                  Hubungi Admin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
