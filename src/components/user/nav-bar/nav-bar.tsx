"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const { MId }: { MId: string } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClick = () => {
    alert("Logout successfully");
    router.push(`/signin`);
  };

  const handleLogout = () => {
    alert("Logout successfully");
    toggleMenu();
    router.push(`/signin`);
  };

  return (
    <nav className="bg-transparent shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-3xl font-bold text-green-600">
            <Link href={`/M/${MId}/home`}>Logo</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {/* <Link href="#about" className="text-gray-600 hover:text-green-600">
              About
            </Link> */}
            <Link
              href={`/M/${MId}/works`}
              className="text-gray-600 hover:text-green-600"
            >
              Works
            </Link>
            <Link
              href={`/M/${MId}/orders`}
              className="text-gray-600 hover:text-green-600"
            >
              Orders
            </Link>
            {/* <Link href="#stores" className="text-gray-600 hover:text-green-600">
              Stores
            </Link> */}
            <div
              className="text-gray-600 hover:text-green-600 cursor-pointer"
              onClick={handleClick}
            >
              Logout
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-[#c8bb9c]  p-4 space-y-4 `}
        >
          {/* <Link
            href="#about"
            className="block text-gray-600 hover:text-green-600"
            onClick={toggleMenu}
          >
            About
          </Link> */}
          <Link
            href={`/M/${MId}/works`}
            className="block text-gray-600 hover:text-green-600"
            onClick={toggleMenu}
          >
            Works
          </Link>
          <Link
            href={`/M/${MId}/orders`}
            className="block text-gray-600 hover:text-green-600"
            onClick={toggleMenu}
          >
            Orders
          </Link>
          {/* <Link
            href="#stores"
            className="block text-gray-600 hover:text-green-600"
            onClick={toggleMenu}
          >
            Stores
          </Link> */}
          <div
            className="block text-gray-600 hover:text-green-600"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
