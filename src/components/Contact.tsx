export default function Contact() {
  return (
    <div className="contact hero min-h-screen bg-zinc-800 mt-32 sm:p-10 p-1" id="contact">
      <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
      <p className="text-base/loose text-center mb-10 opacity-50">
        Let's connect with me!
      </p>
      <form
        action="https://formsubmit.co/saya@gmail.com"
        method="POST"
        className="bg-zinc-900 p-30 sm:w-fit w-full mx-auto rounded-md"
        autoComplete="off"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              className="border border-zinc-400 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              className="border border-zinc-400 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={75}
              rows={6}
              placeholder="Enter your message..."
              className="border border-zinc-400 p-2 rounded-md"
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <button
              type="submit"
              className="bg-blue-950 hover:bg-zinc-700 p-3 rounded-lg w-full cursor-pointer block border border-0 hover:bg-blue-950"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
