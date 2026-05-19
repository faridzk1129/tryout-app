import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ message: "Username dan password wajib diisi" }, { status: 400 });
    }

    const { data: user, error } = await supabase
      .from("users")
      .select("id, username, password, to_access_limit") // {/* PERUBAHAN: Ambil to_access_limit */}
      .eq("username", username)
      .single();

    if (error || !user || user.password !== password) {
      return NextResponse.json({ message: "Username atau password salah" }, { status: 401 });
    }

    return NextResponse.json(
      {
        message: "Login berhasil",
        user: {
          id: user.id,
          username: user.username,
          to_access_limit: user.to_access_limit,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}
