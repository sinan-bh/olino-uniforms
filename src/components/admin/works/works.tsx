"use client";

import React, { useState } from "react";
import { mockData } from "@/const/data-set";

const Works: React.FC = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter works based on school name
  const filteredWorks = mockData.filter((work) =>
    work.schoolName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-semibold text-white">Work Details</h1>
      <div className="flex justify-between items-center mb-4 mt-3">
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isGridView ? "Switch to List View" : "Switch to Grid View"}
        </button>
        <div>
          <input
            type="text"
            placeholder="Search by School Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div
        className={`grid gap-4 ${
          isGridView ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""
        } overflow-y-auto`}
      >
        {filteredWorks.length > 0 ? (
          filteredWorks.map((work) => (
            <div
              key={work.id}
              className={`p-4 rounded-lg ${
                isGridView ? "bg-gray-800" : "bg-gray-800"
              }`}
            >
              <h2 className="text-lg font-medium text-white">
                {work.schoolName}
              </h2>
              <p className="text-gray-400 text-sm">
                Address: {work.schoolAddress}
              </p>
              <p className="text-gray-400 text-sm">
                Uniform Color:{" "}
                <span className="font-semibold">{work.uniformColor}</span>
              </p>
              <p className="text-gray-400 text-sm">
                Assigned Member ID:{" "}
                <span className="font-semibold">{work.assignedMemberId}</span>
              </p>
            </div>
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
