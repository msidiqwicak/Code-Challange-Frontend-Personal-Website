import { listProyek } from "../data";
export default function Project() {
  return (
    <div className="project mt-32 py-10 px-15" id="project">
      <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
      <p className="text-base/loose text-center opacity-50">
        Berikut ini beberapa project yang telah saya buat
      </p>
      <div className="project-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {listProyek.map((proyek) => (
          <div key={proyek.id} className="p-5 bg-zinc-900 rounded-md">
            <img
              src={proyek.gambar}
              alt="Project Image"
              className="w-full object-cover rounded-md"
            />
            <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p
                    className="py-1 px-3 border border-zinc-500 bg-zinc-700 rounded-md font-semibold"
                    key={index}
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a
                  href="#"
                  className="bg-blue-950 p-3 rounded-lg block border border-zinc-500 hover:bg-zinc-900"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
