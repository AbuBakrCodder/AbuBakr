import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="flex w-full flex-col items-center justify-start gap-6 text-center md:flex-row md:text-left">
        <img
          src="/images/home_image.png"
          alt="Abu Bakr Sobitov"
          className="h-auto w-36 rounded-lg object-cover sm:w-48"
          data-aos="fade-right"
          data-aos-duration="800"
        />
        <div className="flex flex-col items-center justify-center gap-3 md:items-start">
          <h1
            className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-6xl"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Abu Bakr Sobitov
          </h1>
          <p
            className="text-xl font-semibold text-gray-500 sm:text-2xl md:text-3xl"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            Front-End Developer
          </p>
          <div
            className="flex items-center gap-5"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 transition-transform duration-200 hover:scale-125 hover:text-gray-900"
              href="https://www.instagram.com/abubakr.s14/"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 transition-transform duration-200 hover:scale-125 hover:text-gray-900"
              href="https://github.com/AbuBakrCodder"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 transition-transform duration-200 hover:scale-125 hover:text-gray-900"
              href="https://t.me/ABUBAKR_WEB"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
      <div
        className="mt-2 flex flex-col justify-center gap-3 px-2 sm:mt-6"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
          O'zim haqimda
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
          Salom. Mening ismim Abu Bakr. Men front-end dasturchiman. Men
          front-end ni 3 yilda tugatdim. Men HTML, CSS, JavaScript, API, Firebase, React va
          React dagi ko'plab kutubxonalarni juda yaxshi bilaman. Men hozirda 3
          ta real loyihani qilganman.
        </p>
        <button className="w-full rounded-2xl border-2 border-blue-600 bg-blue-300 px-5 py-3 text-lg font-semibold text-white sm:w-52 sm:text-xl">
          <Link to="/blog">Mening Blogim</Link>
        </button>
      </div>
      <div
        className="mt-6 flex flex-col justify-center gap-5 px-2 sm:mt-6"
        data-aos="fade-right"
        data-aos-delay="900"
      >
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
          Proektlarim
        </h2>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-4 text-white">
          <div className="flex w-full max-w-sm flex-col justify-center gap-5 overflow-hidden rounded-2xl bg-gray-900">
            <img
              className="h-48 w-full object-cover sm:h-50"
              src="./images/projects/blist_logo.png"
              alt="Blist loyiha logotipi"
            />
            <div className="flex flex-col justify-center gap-3 px-5 py-3">
              <h3 className="text-xl font-medium sm:text-2xl">
                Blist - bozor ro'yxati
              </h3>
              <p>
                Bu saytda shopping qilayotganda olmoqchi bo'lgan narsalaringizni
                yozasiz summasini yozasiz. Agar esingizdan chiqsa shu saytdan
                nima olmoqchi bo'lganingizni ko'rsangiz bo'ladi
              </p>
              <a
                className="mt-2 mb-3 w-full rounded-xl bg-white/20 px-5 py-3 text-center text-base text-white transition-all hover:scale-105 hover:bg-white/30 sm:w-auto sm:text-lg"
                href="https://blistuz.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Saytni ko'rish
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
