import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // 1. Validasi Input Kosong
    if (!username || !password) {
      return NextResponse.json({ message: "Username dan password wajib diisi" }, { status: 400 });
    }

    // 2. Query ke Supabase
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

    // 3. Validasi Keberadaan User & Password
    if (error || !user || user.password !== password) {
      return NextResponse.json({ message: "Username atau password salah" }, { status: 401 });
    }

    // 4. Berhasil Login
    return NextResponse.json(
      {
        message: "Login berhasil",
        user: { id: user.id, username: user.username },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}
