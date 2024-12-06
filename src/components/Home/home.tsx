"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-r bg-gradient-to-r from-blue-400 via-blue-200 to-gray-200  flex flex-col justify-center items-center text-white">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex justify-between px-14 items-center">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold leading-tight">
              Welcome to <span className="text-yellow-300">Olino Uniforms</span>
            </h1>
            <p className="text-xl mt-4">
              Your trusted partner in quality uniforms for every occasion.
            </p>
          </header>
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
        <div className="mt-12">
          <a
            href="/signin"
            className="px-8 py-3 bg-dark text-white font-bold text-xl rounded-full shadow-lg hover:bg-gray-700 transition-all"
          >
            Login <span className="animate-move-right">{">>"}</span>
          </a>
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center px-28 h-auto mt-32">
        <div
          ref={sectionRef}
          className={`transition-all transform duration-1000 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
          <p className="text-lg leading-relaxed">
            Olino Uniforms is a leading manufacturer of high-quality uniforms,
            dedicated to providing comfortable and stylish apparel for
            professionals, schools, and institutions. With over a decade of
            experience in the industry, we pride ourselves on our commitment to
            quality, customer satisfaction, and innovation.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Whether you&apos;re looking for custom work uniforms, school attire,
            or corporate clothing, Olino Uniforms is here to deliver top-notch
            products tailored to your needs.
          </p>
        </div>
      </section>

      <footer className="mt-20 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Olino Uniforms. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}