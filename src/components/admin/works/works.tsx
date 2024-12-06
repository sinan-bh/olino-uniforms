"use client";

import React, { useState } from "react";
import { mockData } from "@/const/data-set";
import Link from "next/link";

const Works: React.FC = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredWorks = mockData.filter((work) => {
    const matchesSearch = work.schoolName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || work.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container p-4">
      <h1 className="text-2xl font-semibold text-white">Work Details</h1>
      <div className="flex flex-wrap justify-between items-center mb-4 mt-3">
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          {isGridView ? "Switch to List View" : "Switch to Grid View"}
        </button>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by School Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 hover:bg-gray-900"
          />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white hover:bg-gray-900"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="progressing">Progressing</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
      <div
        className={`grid gap-4 ${
          isGridView ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""
        } max-h-[75vh] overflow-y-auto`}
      >
        {filteredWorks.length > 0 ? (
          filteredWorks.map((work) => (
            <Link
              href={`/admin/works/${work.id}`}
              key={work.id}
              className={`p-4 rounded-lg ${
                isGridView ? "bg-gray-800" : "bg-gray-800"
              }`}
            >
              <h2 className="text-lg font-medium text-white">
                {work.schoolName}
              </h2>
              <p className="text-gray-200 pt-2 text-sm">
                Address: {work.schoolAddress}
              </p>
              <p className="text-gray-200 pt-1 text-sm">
                Uniform Color:{" "}
                <span className="font-semibold">{work.uniformColor}</span>
              </p>
              <p className="text-gray-200 pt-1 text-sm">
                Assigned Member ID:{" "}
                <span className="font-semibold">{work.assignedMemberId}</span>
              </p>
              <p className="text-gray-200 pt-1 text-sm">
                Status:{" "}
                <span
                  className={`font-semibold capitalize ${
                    work.status === "pending"
                      ? "text-yellow-500"
                      : work.status === "completed"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                >
                  {work.status}
                </span>
              </p>
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
