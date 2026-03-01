

export default function Contact() {
  return (
    <div className="kontak mt-32 sm:p-10 p-0" id="contact">
      <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
      <p className="text-base/loose text-center mb-10 opacity-50">
        Mari terhubung dengan saya
      </p>
      <form
        action="https://formsubmit.co/saya@gmail.com"
        method="POST"
        className="bg-zinc-900 p-10 sm:w-fit w-full mx-auto rounded-md"
        autoComplete="off"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              placeholder="Masukan Nama"
              className="border border-zinc-400 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Masukan Email..."
              className="border border-zinc-400 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">
              Pesan
            </label>
            <textarea
              name="pesan"
              id="pesan"
              cols="45"
              rows="7"
              placeholder="Pesan..."
              className="border border-zinc-400 p-2 rounded-md"
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <button
              type="submit"
              className="bg-blue-950 p-3 rounded-lg w-full cursor-pointer block border border-zinc-600 hover:bg-blue-950"
            >
              Kirim Pesan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
