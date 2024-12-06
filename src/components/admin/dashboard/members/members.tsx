"use client";

import React, { useState } from "react";

const members = [
  {
    id: "M1",
    name: "Juan M.",
    status: "In Progress",
    project: "Crimson Studio",
  },
  { id: "M2", name: "Alice J.", status: "Completed", project: "Green Tech" },
  { id: "M3", name: "David P.", status: "On Hold", project: "Project X" },
  {
    id: "M4",
    name: "Sarah L.",
    status: "In Progress",
    project: "Creative Agency",
  },
  {
    id: "M5",
    name: "Mike B.",
    status: "Completed",
    project: "Tech Innovations",
  },
  { id: "M6", name: "Linda W.", status: "On Hold", project: "Market Leaders" },
  {
    id: "M7",
    name: "John D.",
    status: "In Progress",
    project: "Branding Solutions",
  },
  {
    id: "M8",
    name: "Sophia R.",
    status: "Completed",
    project: "Web Development",
  },
  { id: "M9", name: "Chris K.", status: "On Hold", project: "Design Studio" },
  { id: "M10", name: "Emma S.", status: "In Progress", project: "UI/UX Team" },
  // Add more members as needed
];

const MemberList: React.FC = () => {
  const [view, setView] = useState("list"); // 'list' or 'grid'
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Filter members based on search term
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-2 h-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <input
            type="text"
            placeholder="Search members"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 rounded-md text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={() => setView(view === "list" ? "grid" : "list")}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
          >
            {view === "grid" ? "Grid View" : "List View"}
          </button>
        </div>
      </div>

      <div
        className={`grid gap-4 ${
          view === "grid" ? "grid-cols-3" : "grid-cols-1"
        }`}
      >
        {filteredMembers
          .slice(0, showAll ? filteredMembers.length : 5)
          .map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-4  rounded-lg bg-gray-800 "
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-black">{member.name[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-white">{member.name}</div>
                  <div className="text-sm text-white">{member.id}</div>
                  <div className="text-sm text-white">{member.project}</div>
                </div>
              </div>
              <div>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    member.status === "In Progress"
                      ? "bg-yellow-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {member.status}
                </span>
              </div>
            </div>
          ))}
      </div>

      {!showAll && filteredMembers.length > 5 && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default MemberList;
