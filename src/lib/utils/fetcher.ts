import type { Ad } from "@/lib/types/ad";
export async function fetchAdsServer(page: number, limit: number) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; 
    const res = await fetch(`${baseUrl}/api/ads?page=${page}&limit=${limit}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch ads");
    return res.json() as Promise<{
      items: Ad[];
      totalPages: number;
      currentPage: number;
    }>;
  } catch (err) {
    console.error("fetchAdsServer error:", err);
    return { items: [], totalPages: 0, currentPage: 1 };
  }
}
