"use client";

import React from "react";
import { users } from "@/const/data-set";
import { useParams } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ProfileProps {
  user: {
    name: string;
    email: string;
    joinDate: string;
    role: string;
    profileImage: string;
  };
}

const Profile: React.FC = () => {
  const { profileId }: { profileId: string } = useParams();
  const user = users.find((u) => u.memberId === profileId);
  console.log(user);

  return (
    <div className="text-white flex justify-center items-center">
      <div className="max-auto max-w-5xl bg-gray-800 container rounded-xl p-6">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <div>
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-400">{user?.email}</p>
            <p className="text-gray-400">
              <strong>Joined:</strong> {user?.joinDate}
            </p>
            <p className="text-gray-400">
              <strong>Role:</strong> {user?.role}
            </p>
          </div>
          <div className="w-24 h-24 font-bold text-4xl flex justify-center items-center bg-gray-500 text-black rounded-full overflow-hidden border-2 border-gray-500">
            {user?.name[0]}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Work Details</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
