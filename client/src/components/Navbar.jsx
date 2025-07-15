import React from "react";
import { FaShopify } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import reactLogo from "../assets/react.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [query, setQuery] = useState("");

  const handleNav = () => {
    setNav(!nav);
  };

  const items = [
    {
      nama: "Ayam",
      desc: "Ini adalah ayam",
      img: reactLogo,
    },
    {
      nama: "Sapi",
      desc: "Ini adalah sapi",
      img: reactLogo,
    },
    {
      nama: "Babi",
      desc: "Ini adalah babi",
      img: reactLogo,
    },
  ];

  const filteredData = items.filter((item) => {
    return item.nama.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="flex justify-between items-center max-w-[1240px] h-20 px-4 mx-auto">
      <div className="flex items-center">
        <h1 className="text-2xl flex items-center font-bold text-yellow-500">
          <FaShopify className="mr-3" />
          Shop
        </h1>
        <div className="relative">
          <input
            className="border border-yellow-500 text-md ml-6 px-2 py-1 rounded-lg w-xs"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            name=""
            id=""
            placeholder="Search..."
          />
          {query && (
            <div className="absolute left-6 top-10 w-xs rounded-lg bg-white shadow">
              {filteredData.map((item) => (
                <div className="flex items-center justify-between hover:bg-slate-100 p-2 rounded-lg">
                  <div className="flex items-center">
                    <img src={reactLogo} alt="" className="mr-3 w-8 h-8" />
                    <p className="font-bold">{item.nama}</p>
                  </div>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <ul className="hidden md:flex">
        <li>
          <a
            href=""
            className="bg-yellow-500 px-4 py-2 text-white rounded-lg text-center mr-3 hover:bg-white hover:border hover:border-yellow-500 hover:text-yellow-500"
          >
            Login
          </a>
        </li>
        <li>
          <a
            href=""
            className="px-4 py-2 text-yellow-500 border border-yellow-500 rounded-lg text-center hover:bg-yellow-500 hover:text-white"
          >
            Register
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose className="text-yellow-500" size={20} />
        ) : (
          <AiOutlineMenu className="text-yellow-500" size={20} />
        )}
      </div>
      <div
        className={`${
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-yellow-500 bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        } md:hidden`}
      >
        <h1 className="text-2xl flex items-center font-bold text-yellow-500 m-4">
          <FaShopify className="mr-3" />
          Shop
        </h1>
        <ul className="flex flex-col p-4">
          <li className="mb-5">
            <a
              href=""
              className="bg-yellow-500 px-4 py-2 text-white rounded-lg text-center hover:bg-white hover:border hover:border-yellow-500 hover:text-yellow-500"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href=""
              className="px-4 py-2 text-yellow-500 border border-yellow-500 rounded-lg text-center hover:bg-yellow-500 hover:text-white"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
