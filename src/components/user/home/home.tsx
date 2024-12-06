"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const HeroSection = () => {
  const { MId }: { MId: string } = useParams();
  return (
    <div className="min-h-screen text-white  pt-12 px-6 md:px-16  lg:px-28 overflow-y-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left side content */}
        <div className="text-center md:text-left space-y-6 max-w-lg md:max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            OLINO{" "}
            <span className="text-4xl sm:text-5xl font-bold">UNIFORMS</span>
          </h1>
          <p className="text-lg sm:text-xl">
            More vibrant lifestyle starts with DOO-DO! Embrace the purity of
            nature with our exquisite line of natural juices!
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href={`/M/${MId}/works`}
              className="inline-block px-8 py-3 mt-6 bg-white text-green-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            >
              View Works
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/home2.png"
            alt="Juice Bottles"
            width={400}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
