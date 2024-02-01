import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import logo from "../../../public/assets/logo.jpg";
import { LoginButton, LogoutButton } from "./buttons/UserButton";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-screen h-20 px-4 text-white bg-white fixed nav z-50">
      <div>
        <h1 className="flex text-5xl font-signature ml-2 items-center">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={logo}
              alt="logo"
              width={70}
              height={70}
              className="p-2 object-contain"
            />
          </a>
          <a className="block text-green-500 py-4 ">Track to Ceylon</a>
        </h1>
      </div>

      <ul className=" hidden md:flex justify-between ps-1">
        <Link
          href="/"
          className="mx-2 px-3 shadow-sm rounded-xl text-white bg-yellow-700 hover:bg-yellow-800 transition flex items-center"
        >
          <span className="text-lg">Explore</span>
          <MdOutlineExplore className="hidden xs:block ml-2" />
        </Link>
        <li className="mx-2 px-3 shadow-sm rounded-xl text-white bg-yellow-500 text-sm hover:bg-yellow-800 transition flex items-center">
          <LoginButton />
        </li>
        <li
          className="relative bg-yellow-500 text-white rounded-full hover:bg-yellow-800 cursor-pointer mx-2 transition shadow-sm flex items-center justify-center w-9 h-9"
        >
          <HiOutlineShoppingBag size="1.6rem" />
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-rose-600 border-2 border-[--theme-color] rounded-full -top-2 -right-2 ">
            1
          </div>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
