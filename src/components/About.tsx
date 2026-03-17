import DataImage from "../data";
import { listTools } from "../data";
export default function About() {
  return (
    <div className="about bg-zinc-800 mt-32 px-15 py-10" id="about">
      <div className="xl:w-2/3 lg:w-3/4 w-full w-2/3 mx-auto p-7  bg-blue-950 border border-zinc-900 rounded-lg">
        <img
          src={DataImage.HeroImage}
          alt="Image"
          className="w-12 rounded-md mb-10 sm:hidden"
        />
        <p className="text-base/loose mb-10 ">
          I'm a Baker experienced 12 years, I am a professional in the field of
          Hospitaliy, especially Bakery Products. But now I study Software
          Development, who focuses on developing creative and effective
          solutions. I enjoy learning new things, working collaboratively, and
          consistently striving to deliver the best results in every opportunity
        </p>
        <div className="flex items-center justify-between">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-full sm:block hidden"
          />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                10<span className="text-blue-500">+</span>
              </h1>
              <p>Project</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                12<span className="text-blue-500">+</span>
              </h1>
              <p>Years Experienced as Baker</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tools mt-32 px-10">
        <h1 className="text-4xl/snug font-bold mb-4 text-center">Tools</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-full text-base/loose opacity-50 mx-auto text-center">
          Here are some tools that I commonly use for creating websites or
          designs
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 cursor-pointer">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-7 border border-zinc-700 rounded-r-full  hover:bg-zinc-900 group transition-all"
              key={tool.id}
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-900 p-2 rounded-md group-hover:bg-zinc-700"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
