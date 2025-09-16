export async function getSafeImageSrc(url?: string, fallback = "/default.png"): Promise<string> {
  if (!url) return fallback;
  try {
    const u = new URL(url, "http://_base");
    const isValid = u.protocol === "http:" || u.protocol === "https:" || url.startsWith("/");
    console.log("Checking URL:", url);  
    if (!isValid) {
      console.log("Invalid URL protocol:", url);  
      return fallback;
    }
    if (u.protocol === "http:" || u.protocol === "https:") {
      const res = await fetch(url, { method: "HEAD" });
      console.log("Response status:", res.status);  

      if (!res.ok || res.status === 404) {
        console.log("Image not found or error:", url);  
        return fallback;
      }
    }
    return url;
  } catch (error) {
    console.log("Error occurred:", error); 
    return fallback;
  }
}
