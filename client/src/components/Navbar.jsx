import React from "react";
import { FaShopify } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import reactLogo from "../assets/react.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [query, setQuery] = useState("");
  const [profileDropdown, setDropdown] = useState(false);

  const handleProfileDropdown = () => {
    setDropdown(!profileDropdown);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const isLoggedIn = true;

  const user = {
    name: "Bez",
    image: reactLogo,
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
    <div className="sticky top-0 w-full bg-white">
      <div className=" flex justify-between items-center max-w-[1240px] h-20 px-4 mx-auto ">
        <div className="flex items-center">
          <a
            className="text-2xl flex items-center font-bold text-yellow-500"
            href="/"
          >
            <FaShopify className="mr-3" />
            Shop
          </a>
          <a href="" className="ml-5 px-2 text-yellow-400">
            Home
          </a>
          <a href="" className="px-2">
            Explore
          </a>
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
            <div
              className={`absolute left-6 top-10 w-xs rounded-lg bg-white shadow transition-all duration-200 ease-out transform
              ${
                query
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between hover:bg-slate-100 p-2 rounded-lg"
                >
                  <div className="flex items-center">
                    <img src={reactLogo} alt="" className="mr-3 w-8 h-8" />
                    <p>{item.nama}</p>
                  </div>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isLoggedIn ? (
          <div className="relative">
            <div
              className="hidden md:flex md:items-center justify-center cursor-pointer"
              onClick={handleProfileDropdown}
            >
              <div className="h-8 w-8 rounded-[50%] mr-2 overflow-hidden">
                <img src={user.image} alt="" />
              </div>
              <h1 className="flex items-center justify-center text-md">
                Hello, <span className="font-bold ml-2">{user.name}</span>
                <RiArrowDropDownLine className="text-2xl" />
              </h1>
            </div>
            {/* <div className={`${profileDropdown ? "absolute top-9 bg-white w-full shadow rounded-2xl" : "top-[-100%]"`}> */}
            <div
              className={`absolute right-0 mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden z-50 transition-all duration-300 transform ${
                profileDropdown
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <ul className="py-2 w-full">
                <li className="py-2 px-4 hover:bg-slate-100">
                  <a href="#">Profile</a>
                </li>
                <li className="py-2 px-4 hover:bg-slate-100">
                  <a href="#">Favorites</a>
                </li>
                <li className="py-2 px-4 hover:bg-slate-100">
                  <a href="#">My Cart</a>
                </li>
                <li className="py-2 px-4 hover:bg-slate-100">
                  <a href="#">Order</a>
                </li>
                <li className="py-2 px-4 hover:bg-slate-100">
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <ul className="hidden md:flex">
            <li>
              <a
                href=""
                className="px-4 py-2 text-yellow-500 border mr-3 border-yellow-500 rounded-lg text-center hover:text-yellow-400"
              >
                Register
              </a>
            </li>
            <li>
              <a
                href=""
                className="bg-yellow-500 px-4 py-2 text-white rounded-lg text-center  hover:bg-yellow-400"
              >
                Login
              </a>
            </li>
          </ul>
        )}

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
          {isLoggedIn ? (
            <div className="flex flex-col p-4">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-[50%] mr-2 overflow-hidden">
                  <img src={user.image} alt="" />
                </div>
                <h1 className="text-md">
                  Hello, <span className="font-bold ml-2">{user.name}</span>
                </h1>
              </div>
              <ul className="py-2 w-full">
                <li className="py-2 px-4 hover:bg-slate-100">
                  <a href="#">Profile</a>
                </li>
                <li className="py-2 px-4 hover:bg-slate-100">
                  <a href="#">Favorites</a>
                </li>
                <li className="py-2 px-4 hover:bg-slate-100">
                  <a href="#">My Cart</a>
                </li>
                <li className="py-2 px-4 hover:bg-slate-100">
                  <a href="#">Order</a>
                </li>
                <li className="py-2 px-4 hover:bg-slate-100">
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <ul className="flex flex-col p-4">
              <li className="mb-5">
                <a
                  href=""
                  className="px-4 py-2 text-yellow-500 border border-yellow-500 rounded-lg text-center hover:text-yellow-400"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="bg-yellow-500 px-4 py-2 text-white rounded-lg text-center hover:bg-yellow-400"
                >
                  Login
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
