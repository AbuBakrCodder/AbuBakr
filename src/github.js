export const OWNER = "AbuBakrCodder";
export const REPO = "AbuBakr";
export const BRANCH = "main";
export const POSTS_PATH = "public/posts.json";

const API = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;

// Postlarni o'qish (token kerak emas)
export async function fetchPosts() {
  const res = await fetch(`${API}/${POSTS_PATH}?ref=${BRANCH}`, {
    headers: { Accept: "application/vnd.github.raw+json" },
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

// Admin uchun: fayl + sha olish
export async function getPostsFile(token) {
  const res = await fetch(`${API}/${POSTS_PATH}?ref=${BRANCH}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Token noto'g'ri yoki repo topilmadi");
  const data = await res.json();
  const text = decodeURIComponent(escape(atob(data.content.replace(/\n/g, ""))));
  return { posts: JSON.parse(text || "[]"), sha: data.sha };
}

export async function savePosts(token, posts, sha, message) {
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(posts, null, 2))));
  const res = await fetch(`${API}/${POSTS_PATH}`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ message, content, sha, branch: BRANCH }),
  });
  if (!res.ok) throw new Error("Saqlashda xatolik");
}

// Rasm yuklash, rasm havolasini qaytaradi
export async function uploadImage(token, file) {
  const base64 = await new Promise((resolve) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result.split(",")[1]);
    r.readAsDataURL(file);
  });
  const name = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
  const path = `public/blog-images/${name}`;
  const res = await fetch(`${API}/${path}`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ message: `rasm: ${name}`, content: base64, branch: BRANCH }),
  });
  if (!res.ok) throw new Error("Rasm yuklanmadi");
  return `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${path}`;
}