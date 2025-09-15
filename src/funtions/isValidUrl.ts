export function getImageSrc(url?: string, fallback = "/default.png"): string {
  if (!url) return fallback;
  try {
    const u = new URL(url, "http://_base"); 
    const isHttp = u.protocol === "http:" || u.protocol === "https:";
    const isRootRelative = !isHttp && url.startsWith("/");
    return isHttp || isRootRelative ? url : fallback;
  } catch {
    return fallback;
  }
}