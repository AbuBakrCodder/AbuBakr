export default function Proects() {
    return (
        <div className="min-h-screen py-10 px-4">
            <div className="flex flex-col justify-center items-center gap-6 max-w-5xl mx-auto">
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 text-center"
                    data-aos="fade-down"
                >
                    Real loyihalarim
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-6 mt-4 w-full">
                    <div
                        className="w-full max-w-sm flex flex-col justify-center overflow-hidden gap-5 bg-gray-900 text-white rounded-2xl shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <img
                            className="w-full h-48 sm:h-52 object-cover"
                            src="./images/projects/blist_logo.png"
                            alt="Blist loyiha logotipi"
                        />
                        <div className="flex p-5 justify-center gap-3 flex-col">
                            <h3 className="text-xl sm:text-2xl font-medium text-white">
                                Blist - bozor ro'yxati
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base">
                                Bu saytda shopping qilayotganda olmoqchi bo'lgan narsalaringizni va summasini yozasiz. Agar esingizdan chiqsa shu saytdan nima olmoqchi bo'lganingizni ko'rsangiz bo'ladi.
                            </p>
                            <a
                                className="bg-white/20 hover:bg-white/30 text-white px-5 py-3 w-full sm:w-auto text-center rounded-xl text-base sm:text-lg hover:scale-105 transition-all mt-2"
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
    )
}