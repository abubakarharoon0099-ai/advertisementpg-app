import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = Number(url.searchParams.get("page") ?? 1);
  const limit = Number(url.searchParams.get("limit") ?? 21);
  const p = path.join(process.cwd(), "public", "ads_data.json");
  const raw = await fs.readFile(p, "utf8");
  const ads = JSON.parse(raw);
  const start = (page - 1) * limit;
  const end = start + limit;
  const pageItems = ads.slice(start, end);
  const totalPages = Math.ceil(ads.length / limit);
  return NextResponse.json({
    items: pageItems,
    totalPages,
    currentPage: page,
  });
}
