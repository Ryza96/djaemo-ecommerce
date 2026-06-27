import { NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function GET() {
  const supabase = createSupabaseServer();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .limit(1);

  if (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }

  return NextResponse.json({
    success: true,
    data,
  });
}