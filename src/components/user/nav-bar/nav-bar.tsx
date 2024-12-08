"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const { MId }: { MId: string } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogout = () => {
    alert("Logout successfully");
    setIsMenuOpen(false);
    router.push(`/signin`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-transparent shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold text-gray-600">
            <Link href={`/M/${MId}/home`}>Logo</Link>
          </div>

          <div className="hidden md:flex space-x-8 font-bold">
            <Link
              href={`/M/${MId}/home`}
              className="text-gray-600 hover:text-gray-500"
            >
              Home
            </Link>
            <Link
              href={`/M/${MId}/works`}
              className="text-gray-600 hover:text-gray-500"
            >
              Cloths
            </Link>
            <Link
              href={`/M/${MId}/orders`}
              className="text-gray-600 hover:text-gray-500"
            >
              Orders
            </Link>
            <div
              className="text-gray-600 hover:text-gray-500 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              ref={toggleButtonRef}
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

        {/* Dropdown Box */}
        <div
          ref={dropdownRef}
          className={`absolute top-17 right-5 bg-blue-200 shadow-lg rounded-md p-4 w-48 z-50 transition-all duration-500 ease-in ${
            isMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <Link
            href={`/M/${MId}/home`}
            className="block text-gray-600 hover:text-gray-500 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href={`/M/${MId}/works`}
            className="block text-gray-600 hover:text-gray-500 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Cloths
          </Link>
          <Link
            href={`/M/${MId}/orders`}
            className="block text-gray-600 hover:text-gray-500 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Orders
          </Link>
          <div
            className="block text-gray-600 hover:text-gray-500 py-2 cursor-pointer"
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
