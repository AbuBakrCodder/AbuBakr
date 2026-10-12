import { useState, useEffect } from "react";
import { getPostsFile, savePosts, uploadImage } from "../public/github";


export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem("gh_token") || "");
  const [tokenInput, setTokenInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [sha, setSha] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const load = async (t = token) => {
    try {
      const data = await getPostsFile(t);
      setPosts(data.posts);
      setSha(data.sha);
    } catch (e) {
      setStatus(e.message);
      localStorage.removeItem("gh_token");
      setToken("");
    }
  };

  useEffect(() => {
    if (token) load();
  }, [token]);

  const saveToken = () => {
    localStorage.setItem("gh_token", tokenInput.trim());
    setToken(tokenInput.trim());
  };

  const addPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Yuklanmoqda...");
    try {
      const image = file ? await uploadImage(token, file) : "";
      const date = new Date().toLocaleDateString("uz-UZ", {
        day: "numeric", month: "long", year: "numeric",
      });
      const newPost = { id: Date.now(), title, date, text, image };
      const updated = [newPost, ...posts];
      await savePosts(token, updated, sha, `post: ${title}`);
      setTitle(""); setText(""); setFile(null);
      setStatus("Post qo'shildi ✅");
      await load();
    } catch (err) {
      setStatus(err.message);
    }
    setLoading(false);
  };

  const removePost = async (id) => {
    if (!confirm("O'chirilsinmi?")) return;
    try {
      await savePosts(token, posts.filter((p) => p.id !== id), sha, "post o'chirildi");
      await load();
    } catch (err) {
      setStatus(err.message);
    }
  };

  // Token yo'q bo'lsa
  if (!token) {
    return (
      <div className="mx-auto max-w-md p-8">
        <h1 className="mb-4 text-2xl font-semibold">Admin</h1>
        <input
          type="password"
          placeholder="GitHub token"
          value={tokenInput}
          onChange={(e) => setTokenInput(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
        <button onClick={saveToken} className="mt-3 w-full rounded-xl bg-black p-3 text-white">
          Kirish
        </button>
        {status && <p className="mt-3 text-red-500">{status}</p>}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Yangi blog</h1>
        <button
          onClick={() => { localStorage.removeItem("gh_token"); setToken(""); }}
          className="text-sm text-gray-500 underline"
        >
          Chiqish
        </button>
      </div>

      <form onSubmit={addPost} className="flex flex-col gap-3">
        <input
          required placeholder="Sarlavha" value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-xl border p-3 text-lg"
        />
        <textarea
          required placeholder="Matn (yangi abzats uchun bo'sh qator qoldiring)"
          value={text} onChange={(e) => setText(e.target.value)} rows={8}
          className="rounded-xl border p-3"
        />
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        <button disabled={loading} className="rounded-xl bg-black p-3 text-white disabled:opacity-50">
          {loading ? "Yuklanmoqda..." : "Publish"}
        </button>
        {status && <p className="text-sm">{status}</p>}
      </form>

      <h2 className="mt-10 mb-3 text-xl font-semibold">Bloglar</h2>
      <div className="flex flex-col gap-2">
        {posts.map((p) => (
          <div key={p.id} className="flex items-center justify-between rounded-xl border p-3">
            <span>{p.title}</span>
            <button onClick={() => removePost(p.id)} className="text-red-500">O'chirish</button>
          </div>
        ))}
      </div>
    </div>
  );
}