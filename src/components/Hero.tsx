import DataImage from "../data";
export default function Hero() {
  return (
    <>
      <div className="hero grid hero min-h-screen bg-blue-950 md:grid-cols-2 items-center px-20 xl:gap-0 gap-6 grid-cols-1 pb-20" >
        <div className=" animate__animated animate__fadeInDown animate__delay-2s">
          <div className="flex border-1 border-zinc-700 items-center mb-20 bg-zinc-900 w-fit p-3 rounded-2xl">
           
            <q>Welcome to my profile website</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">
            Hi, my name is Diki !
          </h1>
          <p className="text-base/normal mp-6 opacity-50">
            My full name is Muhamad Sidiq Wicaksono. I am a baker and have been working as a baker for approximately almost 12 years. Currently, I am also a Software Development student. I have a strong interest in the digital world, especially in the field of programming. I try to combine kitchen creativity with coding logic to create good work and innovative digital solutions.
          </p>
          <br />
          <br />
          <div className="flex items-center gap-5 ">
            <a
              href="#contact"
              className="bg-blue-950 p-3 rounded-2xl hover:bg-zinc-900 border-1 border-zinc-700"
            >
              Contact Me <i className="ri-phone-fill ri-md"></i>
            </a>
            <a
              href="#project"
              className="bg-zinc-900 p-3 rounded-2xl hover:bg-zinc-700 border-0"
            >
              See Project <i className="ri-eye-line ri-md"></i>
            </a>
          </div>
        </div>
        <div className="px-4">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[400px] ml-25 rounded-t-4xl mask-b-from-5% border-zinc-600 animate__animated animate__fadeInDown animate__delay-3s"
          />
        </div>
      </div>
    </>
  );
}
