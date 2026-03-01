import DataImage from "../data";
export default function Hero() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center px-15 xl:gap-0 gap-6 grid-cols-1" >
        <div className=" animate__animated animate__fadeInDown animate__delay-2s">
          <div className="flex border-1 border-zinc-700 items-center gap-3 mb-6 bg-zinc-900 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-[50%] h-auto max-w-lg"
            />
            <q>kode yang indah, lahir dari ketekunan</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">
            Hi, Saya Diki !
          </h1>
          <p className="text-base/normal mp-6 opacity-50">
            Nama lengkap saya Muhamad Sidiq Wicaksono. Saya adalah seorang Baker, bekerja sebagai baker kurang lebih sudah
            hampir 12 tahun, dan sekarang saya adalah seorang student Software
            Development, saya mempunyai ketertarikan dunia digital khususnya
            dalam bidang programmer. Saya coba menggabungkan kreativitas dapur
            dengan logika code untuk menciptakan karya yang baik dan solusi
            digital yang inovatif
          </p>
          <br />
          <br />
          <div className="flex items-center gap-5 ">
            <a
              href="#contact"
              className="bg-blue-900 p-3 rounded-2xl hover:bg-blue-800"
            >
              Contact Me <i className="ri-phone-fill ri-md"></i>
            </a>
            <a
              href="#project"
              className="bg-zinc-900 p-3 rounded-2xl hover:bg-blue-800 border-1 border-zinc-700"
            >
              See Project <i className="ri-eye-line ri-md"></i>
            </a>
          </div>
        </div>
        <div className="px-4">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[400px] ml-25 rounded-b-full mask-b-from-5% border-x-4 border-zinc-600 transition-all duration-300 rounded-base cursor-pointer filter grayscale hover:grayscale-0  animate__animated animate__fadeInDown animate__delay-3s"
          />
        </div>
      </div>
    </>
  );
}
