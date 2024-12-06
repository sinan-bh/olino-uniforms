"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { mockData } from "@/const/data-set";
import AddWorkForm from "@/components/user/works/create-works";
import PopupWrapper from "@/utils/popup-wrap";

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
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center py-3 h-fit">
        <h1 className="text-2xl font-bold mb-4">Assigned Works</h1>
        <div
          className="rounded-xl p-3 border bg-gray-500 text-white cursor-pointer"
          onClick={handleOpenPopup}
        >
          Assign New Work
        </div>
      </div>

      {filteredWorks.length > 0 ? (
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">ID</th>
              <th className="p-2 border border-gray-300">Uniform Color</th>
              <th className="p-2 border border-gray-300">School Name</th>
              <th className="p-2 border border-gray-300">School Address</th>
              <th className="p-2 border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredWorks.map((work, index) => (
              <tr key={work.id} className="hover:bg-gray-100">
                <td className="p-2 border border-gray-300">{index + 1}</td>
                <td className="p-2 border border-gray-300">
                  {work.uniformColor}
                </td>
                <td className="p-2 border border-gray-300">
                  {work.schoolName}
                </td>
                <td className="p-2 border border-gray-300">
                  {work.schoolAddress}
                </td>
                <td className="p-2 border border-gray-300">{work.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No works assigned to this member.</p>
      )}

      {/* Popup Component */}
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
