import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar left-2/6 py-10 flex px-15" id="home">
      <div className="logo"></div>
      <h1 className="text-4xl font-bold p-1 md:text-white left-2/16 ">
        Portofolio
      </h1>
      <ul
        className={`menu flex items-center left-3/5 sm:gap-10 gap-4 md-static fixed -translate-x-1/2 md:-translate-x-0 md:opacity-100 md:top-4 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li>
          <a href="#home" className="sm:text-lg text-base font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="sm:text-lg text-base font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#project" className="sm:text-lg text-base font-medium">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="sm:text-lg text-base font-medium">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
