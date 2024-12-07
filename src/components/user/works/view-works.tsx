"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { mockData } from "@/const/data-set";
import AddWorkForm from "@/components/user/works/create-works";
import PopupWrapper from "@/utils/popup-wrap";
import Link from "next/link";

const AssignedWorkPage: React.FC = () => {
  const { MId }: { MId: string } = useParams();
  const [showPopup, setShowPopup] = useState(false);

  const filteredWorks = mockData?.filter(
    (work) => work?.assignedMemberId === MId
  );

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-4 max-w-full mx-auto ">
      <div className="flex justify-between px-6 items-center py-3">
        <h1 className="text-3xl font-bold text-gray-600">Works</h1>
        <div
          className="rounded-xl text-nowrap p-3 font-bold bg-gray-600 text-white cursor-pointer hover:bg-gray-700 transition"
          onClick={handleOpenPopup}
        >
          Add Work
        </div>
      </div>

      {filteredWorks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {filteredWorks.map((work) => (
            <Link
              href={`/M/${MId}/works/${work.id}`}
              key={work.id}
              className="border border-gray-300 rounded-lg p-4 shadow-lg bg-[#c8bb9c] hover:bg-gray-300 transition"
            >
              <div className="space-y-3">
                {/* <p className="text-lg font-semibold text-gray-700">
                  <span className="text-gray-500">ID:</span> {index + 1}
                </p> */}
                <p className="text-md text-gray-800">
                  <span className="font-semibold text-gray-500">
                    Uniform Color:
                  </span>{" "}
                  {work.uniformColor}
                </p>
                <p className="text-md text-gray-800">
                  <span className="font-semibold text-gray-500">
                    School Name:
                  </span>{" "}
                  {work.schoolName}
                </p>
                <p className="text-md text-gray-800">
                  <span className="font-semibold text-gray-500">
                    School Address:
                  </span>{" "}
                  {work.schoolAddress}
                </p>
                <p className="text-md text-gray-600">
                  <span className="font-semibold text-gray-500">Status:</span>{" "}
                  {work.status}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No works assigned to this member.</p>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <PopupWrapper onClose={handleClosePopup}>
            <AddWorkForm />
          </PopupWrapper>
        </div>
      )}
    </div>
  );
};

export default AssignedWorkPage;
