"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Home: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const adminUserName = process.env.NEXT_PUBLIC_ADMIN_USER_NAME || "";
  const adminUserPassword = process.env.NEXT_PUBLIC_ADMIN_USER_PASSWORD || "";
  const userName = process.env.NEXT_PUBLIC_USER_NAME || "";
  const userPassword = process.env.NEXT_PUBLIC_USER_PASSWORD || "";
  const MId = process.env.NEXT_PUBLIC_MID || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === adminUserName && password === adminUserPassword) {
      router.push("/admin/home");
    } else if (email === userName && password === userPassword) {
      router.push(`/M/${MId}`);
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="flex h-screen justify-between items-center bg-gradient-to-r from-blue-400 via-blue-200 to-gray-200">
      <div className="flex flex-col items-center w-full md:w-3/4 p-4">
        <h2 className="mb-6 text-xl md:text-2xl font-semibold text-gray-800 text-center">
          ✨ Welcome back
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[90%] md:max-w-[500px] flex flex-col gap-4"
        >
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 bg-white border border-black rounded-full focus:outline-none focus:ring-1 focus:ring-black"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              👤
            </span>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 bg-white border border-black rounded-full focus:outline-none focus:ring-1 focus:ring-black"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔒
            </span>
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm text-center mt-2">
              {errorMessage}
            </div>
          )}
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-black hover:underline">
              oops, forgot password?
            </a>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-black rounded-full hover:bg-white hover:border hover:border-black hover:text-black"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-sm text-center text-black pt-5">
          Don&apos;t have an account yet?{" "}
          <span>
            <a href="" className="hover:underline">
              Sign Up
            </a>
          </span>
        </div>
      </div>
      <div className="hidden md:flex w-full md:w-1/2 p-4">
        <Image
          src="/images/home2.png"
          alt="Illustration"
          width={400}
          height={400}
          className="rounded-xl animate-float"
          priority
        />
      </div>
    </div>
  );
};

export default Home;
