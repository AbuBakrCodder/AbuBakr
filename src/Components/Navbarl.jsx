import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="800"
      data-aos-delay="200"
      className="fixed top-0 left-0 z-50 w-full max-w-[1920px] bg-white/90 py-5"
    >
      <div className="flex items-center justify-between px-10 lg:px-30">
        <div>
          <Link to="/">
            <h1 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
              Abu Bakr's Blog
            </h1>
          </Link>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-0.5 w-6 bg-black" />
          <span className="h-0.5 w-6 bg-black" />
          <span className="h-0.5 w-6 bg-black" />
        </button>
        <ul
          className={`absolute top-full right-0 flex w-4/5 max-w-xs flex-col items-center gap-5 bg-white/95 py-6 shadow-md transition-all duration-300 md:static md:flex md:w-auto md:max-w-none md:flex-row md:bg-transparent md:py-0 md:shadow-none ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 md:translate-x-0 md:opacity-100"}`}
        >
          <li>
            <Link
              className="rounded-2xl px-5 py-3 text-xl font-semibold transition-all hover:border-2 hover:text-blue-500 hover:border-blue-500"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="rounded-2xl px-5 py-3 text-xl font-semibold transition-all hover:border-2 hover:text-blue-500 hover:border-blue-500"
              to="/blog"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="rounded-2xl px-5 py-3 text-xl font-semibold transition-all hover:border-2 hover:text-blue-500 hover:border-blue-500"
              to="/proects"
              onClick={() => setIsOpen(false)}
            >
              Proects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
