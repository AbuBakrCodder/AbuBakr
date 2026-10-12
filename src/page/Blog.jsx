import { useState, useEffect } from "react";
import { fetchPosts } from "../../public/github";

function BlogCard({ post }) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const close = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 250);
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group flex w-full max-w-xl cursor-pointer items-center justify-between rounded-2xl border border-gray-200 bg-white px-6 py-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl"
      >
        <div>
          <h3 className="text-2xl font-semibold">{post.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{post.date}</p>
        </div>
        <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </button>

      {/* To'liq ekran oyna */}
      {open && (
        <div
          className={`fixed inset-0 z-50 overflow-y-auto bg-white ${
            closing ? "modal-out" : "modal-in"
          }`}
        >
          {/* X tugma: fixed, scroll qilsa ham joyida turadi */}
          <button
            onClick={close}
            aria-label="Yopish"
            className="fixed top-5 right-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black text-2xl text-white shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            ✕
          </button>

          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="content-in text-sm tracking-widest text-gray-500 uppercase">
              {post.date}
            </p>
            <h2
              className="content-in mt-3 text-5xl leading-tight font-bold"
              style={{ animationDelay: "0.1s" }}
            >
              {post.title}
            </h2>

            <p
              className="content-in mt-8 text-xl leading-relaxed whitespace-pre-line text-gray-700"
              style={{ animationDelay: "0.2s" }}
            >
              {post.text}
            </p>

            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="content-in mt-10 w-full rounded-3xl object-cover shadow-xl"
                style={{ animationDelay: "0.3s" }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function Blog() {
  return (
    <div>
      {/* Animatsiyalar */}
      <style>{`     
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.98) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
        @keyframes modalOut {
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(0.98) translateY(10px); }
}
        @keyframes contentIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .modal-in  { animation: modalIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .modal-out { animation: modalOut 0.25s ease forwards; }
        .content-in { opacity: 0; animation: contentIn 0.5s ease forwards; animation-delay: 0.15s; }
      `}</style>

      <div className="ml-30">
        <div className="flex flex-col justify-center gap-3">
          <h1 className="text-4xl font-semibold">Sobitov Abu Bakr</h1>
          <h2 className="text-2xl font-semibold">Qisqacha ma' lumot</h2>
          <p className="w-200 text-lg font-medium">
            Salom. Mening ismim Abu Bakr. Men hozirda Front end dasturchiman.
            Men HTML, CSS, JAVA SCRIPT, API, Firebase, REACT va juda ko'p
            kutubxonalarni bilaman. Hozirda men real proekt qilish ustida
            ishlavomman
          </p>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
