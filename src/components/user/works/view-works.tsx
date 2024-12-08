"use client";

import React from "react";
import { uniforms } from "@/const/uniform";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const UniformPage: React.FC = () => {
  const { MId }: { MId: string } = useParams();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="py-4">
        <h1 className="text-3xl font-bold text-gray-600">Uniform Collection</h1>
      </div>

      {uniforms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {uniforms.map((uniform) => (
            <Link
              href={`/M/${MId}/works/${uniform.id}`}
              key={uniform.id}
              className=" border-gray-200 rounded-lg p-4 shadow-md bg-transparent hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="space-y-3">
                <Image
                  src={uniform.materialImage}
                  alt={uniform.materialName}
                  width={100}
                  height={100}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {uniform.materialName}
                </h2>
                <p className="text-gray-600">
                  <span className="font-semibold">Description:</span>{" "}
                  {uniform.description}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Available Sizes:</span> Small,
                  Medium, Large, Extra Large
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No uniforms available.</p>
      )}
    </div>
  );
};

export default UniformPage;
