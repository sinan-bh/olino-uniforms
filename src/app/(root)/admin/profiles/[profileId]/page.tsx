import React from "react";
import EditProfilePopup from "@/components/admin/profiles/profile-by-id";

export default function Page() {
  return (
    <div className="h-screen  bg-black w-full flex flex-col justify-center">
      <div className="ml-20">
        <div className="text-white text-3xl font-semibold mb-8">Profile</div>
      </div>
      <div>
        <EditProfilePopup />
      </div>
    </div>
  );
}
