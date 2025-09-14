import React from "react";
import { AlignRight } from "lucide-react";

function AppNavbar() {
  return (
    <div className="navbar fixed top-0 left-0 w-full flex justify-between items-center lg:px-24 lg:py-6 md:px-10 md:py-4 sm:px-5 z-50">
      <a className="flex flex-col items-start ml-4" href="/">
        <img src="/logo.svg" alt="logo" className="h-10 w-auto" />
      </a>

      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          className="mr-5 text-white bg-transparent border-none transform transition-transform duration-100 hover:scale-110 cursor-pointer inline-block"
        >
          <AlignRight size={24} />
        </button>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow mt-2"
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About the Project</a>
          </li>
          <li>
            <a href="/image">Scan Photo</a>
          </li>
          <li>
            <a href="/">Scan Video</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppNavbar;
