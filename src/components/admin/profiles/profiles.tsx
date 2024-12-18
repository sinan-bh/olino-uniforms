"use client";

import React, { useState, useEffect } from "react";
import { users } from "@/const/data-set";
import AddMemberPopup from "./add-members";
import Link from "next/link";

interface MemberDetails {
  id: number;
  memberId: string;
  name: string;
  email: string;
  role: string;
  profileImage: string;
  joinDate: string;
  isBlocked?: boolean;
}

const Members: React.FC = () => {
  const [members, setMembers] = useState<MemberDetails[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMembers(users);
  }, []);

  const toggleBlockStatus = (id: number) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === id ? { ...member, isBlocked: !member.isBlocked } : member
      )
    );
  };

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.memberId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container p-4 h-screen bg-black">
      <div>
        <h1 className="text-2xl font-semibold mb-4 text-white mt-14 sm:mt-0">
          Member Profiles
        </h1>
        <div className="flex items-center gap-2">
          <div>
            <AddMemberPopup />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search by Name or Mid"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 hover:bg-gray-900"
            />
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-[75vh] overflow-y-auto">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <div key={member.id} className="p-4 rounded-lg bg-gray-800">
              <Link href={`/admin/profiles/${member.memberId}`}>
                <h2 className="text-lg font-medium text-white">
                  {member.name}
                </h2>
                <p className="text-gray-400 text-sm py-1">
                  <strong>Mid:</strong> {member.memberId}
                </p>
                <p className="text-gray-400 text-sm py-1">
                  <strong>E-Mail:</strong> {member.email}
                </p>
                <p className="text-gray-400 text-sm py-1">
                  <strong>Role:</strong> {member.role}
                </p>
                <p className="text-gray-400 text-sm py-1">
                  <strong>Join Date:</strong> {member.joinDate}
                </p>
              </Link>
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
            </div>
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
