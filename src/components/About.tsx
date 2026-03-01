import DataImage from "../data";
import { listTools } from "../data";
export default function About() {
  return (
    <div className="about mt-32 px-15 py-10" id="about">
      <div className="xl:w-2/3 lg:w-3/4 w-full w-2/3 mx-auto p-7 bg-zinc-800 border border-zinc-900 rounded-lg">
        <img
          src={DataImage.HeroImage}
          alt="Image"
          className="w-12 rounded-md mb-10 sm:hidden"
        />
        <p className="text-base/loose mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore
          magnam rerum error quae repudiandae, nesciunt nemo vero ipsum,
          recusandae possimus nihil a temporibus voluptas. Repudiandae deserunt
          sit vitae quasi!
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
                45<span className="text-blue-500">+</span>
              </h1>
              <p>Project</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                4<span className="text-blue-500">+</span>
              </h1>
              <p>Years Experienced</p>
            </div>
          </div>
        </div>
      </div>

      {/* tools */}
      <div className="tools mt-32 px-10">
        <h1 className="text-4xl/snug font-bold mb-4">Tools</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-full text-base/loose opacity-50">
          Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
          Website ataupun Design
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 cursor-pointer">
          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-zinc-700 rounded-md hover:bg-zinc-900 group transition-all" key={tool.id}>
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
