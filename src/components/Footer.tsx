export default function Footer() {
  return (
    <div className="mt-32 py-4 px-10 relative flex items-center bg-zinc-800">
      <h1 className="text-2xl font-bold">Portofolio</h1>

      <div className="absolute left-1/2 -translate-x-1/2 flex gap-7">
        <a href="#home">Back on Top</a>
       
      </div>

      <div className="ml-auto flex items-center gap-3">
        <a href="#">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
}
