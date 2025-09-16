export async function getSafeImageSrc(url?: string, fallback = "/default.png"): Promise<string> {
  if (!url) return fallback;
  try {
    const u = new URL(url, "http://_base");
    const isValid = u.protocol === "http:" || u.protocol === "https:" || url.startsWith("/");
    if (!isValid) return fallback;
    if (u.protocol === "http:" || u.protocol === "https:") {
      const res = await fetch(url);
      
      if (!res.ok || res.status === 404) {
        return fallback;
      }
    }
    return url;
  } catch (error) {
    return fallback;
  }
}