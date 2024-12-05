"use client";

import React, { useState } from "react";
import { mockMembers, Member } from "@/const/data-set";
import AddMemberPopup from "./add-members";
import Link from "next/link";

const Members: React.FC = () => {
  const [members, setMembers] = useState<Member[]>(mockMembers);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleBlockStatus = (id: number) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, isBlocked: !member.isBlocked } : member
      )
    );
  };

  // Filter members based on the search query
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.memberId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container p-4 h-screen bg-black">
      <div>
        <h1 className="text-2xl font-semibold mb-4 text-white">
          Member Profiles
        </h1>
        <div className="flex justify-between items-center gap-4 mb-4">
          <div>
            <AddMemberPopup />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search by Name or Mid"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded bg-gray-800 text-white placeholder-gray-400 "
            />
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-[75vh]  overflow-y-auto">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <Link
              href={`/admin/profiles/${member.memberId}`}
              key={member.id}
              className="p-4 rounded-lg   bg-gray-800"
            >
              <h2 className="text-lg font-medium text-white">{member.name}</h2>
              <p className="text-gray-400 text-sm">
                <strong>Mid:</strong> {member.memberId}
              </p>
              <p className="text-gray-400 text-sm">
                <strong>Work Assigned:</strong>{" "}
                {member.workAssigned.length > 0
                  ? member.workAssigned.join(", ")
                  : "No work assigned"}
              </p>
              <button
                onClick={() => toggleBlockStatus(member.id)}
                className={`mt-4 w-full py-2 rounded ${
                  member.isBlocked
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {member.isBlocked ? "Unblock" : "Block"}
              </button>
            </Link>
          ))
        ) : (
          <p className="text-gray-400 text-sm col-span-full">
            No members found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Members;
