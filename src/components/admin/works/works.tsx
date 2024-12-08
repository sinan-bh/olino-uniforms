"use client";

import React, { useState } from "react";
import Link from "next/link";
import { uniforms } from "@/const/uniform";
import Image from "next/image";

const Works: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter works based on search query
  const filteredWorks = uniforms.filter((work) =>
    work.materialName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-semibold text-white sm:mt-0 mt-14">
        Work Details
      </h1>
      <div className="flex justify-between items-center mb-4 mt-3">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by School Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 hover:bg-gray-900"
        />
      </div>

      {/* Grid View */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-[75vh] overflow-y-auto">
        {filteredWorks.length > 0 ? (
          filteredWorks?.map((work) => (
            <Link
              href={`/admin/works/${work.id}`}
              key={work.id}
              className="p-4 rounded-lg bg-gray-800"
            >
              {/* <h2 className="text-lg font-medium text-white">
                {work.schoolName}
              </h2>
              <p className="text-gray-200 pt-2 text-sm">
                Address: {work.schoolAddress}
              </p>
              <p className="text-gray-200 pt-1 text-sm">
                Uniform Color:{" "}
                <span className="font-semibold">{work.uniformColor}</span>
              </p> */}
              {/* <p className="text-gray-200 pt-1 text-sm">
                Assigned Member ID:{" "}
                <span className="font-semibold">{work?.assignedMemberId}</span>
              </p> */}
              {/* Display Uniform Details */}
              <div className="mt-4">
                <Image
                  src={work.materialImage}
                  alt={work.materialName}
                  width={100}
                  height={150}
                  className="w-full h-44 object-cover rounded-md"
                />
                <h3 className="text-white mt-2 font-medium">
                  {work.materialName}
                </h3>
                <p className="text-gray-200 text-sm">
                  Description: {work.description}
                </p>
                <div className="text-gray-200 text-sm mt-1">
                  Sizes:
                  <ul className="ml-4">
                    <li>Small: {work.sizes.small}</li>
                    <li>Medium: {work.sizes.medium}</li>
                    <li>Large: {work.sizes.large}</li>
                    <li>Extra Large: {work.sizes.extraLarge}</li>
                  </ul>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-400 text-sm col-span-full">
            No works found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Works;
