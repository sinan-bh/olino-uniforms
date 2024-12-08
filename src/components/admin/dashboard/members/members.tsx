"use client";

import React, { useState } from "react";
import { users } from "@/const/data-set";

const MemberList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.memberId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.workDetails.some((work) =>
          work.schoolName.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )
    .slice(0, showAll ? undefined : 5);

  return (
    <div className="mt-2 max-w-7xl mx-auto">
      <div className="flex justify-start mb-6">
        <input
          type="text"
          placeholder="Search users"
          className="px-4 py-2 bg-gray-800 hover:bg-gray-900 rounded-md focus:outline-none text-white max-w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[450px]  overflow-y-auto">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="flex flex-col items-start ">
              <div className="flex items-center w-full py-2">
                <div className="w-10 h-10 font-bold text-4xl flex justify-center items-center bg-gray-500 text-black rounded-full overflow-hidden border-2 border-gray-500">
                  {user.name[0]}
                </div>

                <div className="text-lg font-semibold text-gray-200 pl-3">
                  {user.name}
                </div>
              </div>
              <div className="text-sm text-gray-400">ID: {user.memberId}</div>
              <div className="text-sm text-gray-400">Email: {user.email}</div>

              <div className="mt-2 text-sm text-gray-300">
                <strong>Schools:</strong>
                <ul className="list-disc ml-4">
                  {user.workDetails.map((work) => (
                    <li key={work.workId}>{work.schoolName}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && users.length > 5 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default MemberList;
