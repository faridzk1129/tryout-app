import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, tryoutId, scoreTwk, scoreTiu, scoreTkp, totalScore, answers } = body;

    const { data, error } = await supabase
      .from("tryout_results")
      .insert([
        {
          user_id: userId,
          tryout_id: tryoutId,
          score_twk: scoreTwk,
          score_tiu: scoreTiu,
          score_tkp: scoreTkp,
          total_score: totalScore,
          answers: answers,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ message: "Berhasil simpan", id: data.id }, { status: 200 });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ message: error.message || "Gagal simpan skor" }, { status: 500 });
  }
}
