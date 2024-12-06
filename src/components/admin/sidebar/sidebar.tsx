"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaTachometerAlt,
  FaTasks,
  FaUsers,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      <button
        onClick={toggleSidebar}
        className="block md:hidden text-white bg-gray-800 p-3 rounded-full fixed top-4 left-4 z-20"
        aria-label="Toggle Sidebar"
      >
        <FaBars />
      </button>

      <div
        className={`fixed md:relative top-0 left-0 h-full bg-gray-800 text-white p-6 z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:fixed `}
      >
        <h2 className="text-2xl font-bold mb-8 mt-10 sm:mt-0  text-center w-full">
          Olino Uniforms
        </h2>
        <ul className="space-y-6">
          <li className="flex items-center space-x-2">
            <FaTachometerAlt />
            <Link href={`/admin/home`}>Dashboard</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaTasks />
            <Link href={`/admin/works`}>Works</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaUsers />
            <Link href={`/admin/profiles`}>Profiles</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaCog />
            <Link href={`/admin/home`}>Settings</Link>
          </li>
          <li className="flex items-center space-x-2">
            <CiLogout size={20} className="font-bold" />
            <Link href={`/signin`}>Logout</Link>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div onClick={toggleSidebar} className="fixed  z-10 md:hidden" />
      )}
    </div>
  );
};

export default Sidebar;
