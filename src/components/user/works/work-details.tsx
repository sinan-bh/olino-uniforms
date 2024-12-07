"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { mockData } from "@/const/data-set";
import { FiEdit3, FiCheck } from "react-icons/fi";

const WorkDetailsPage: React.FC = () => {
  const { MId, wId }: { MId: string; wId: string } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [workData, setWorkData] = useState(() => {
    const work = mockData.find(
      (item) => item.assignedMemberId === MId && item.id.toString() === wId
    );
    return work || null;
  });

  // Handle field updates
  const handleInputChange = (field: string, value: string) => {
    if (workData) {
      setWorkData({ ...workData, [field]: value });
    }
  };

  // Toggle editing mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-6 mt-5 max-w-4xl mx-auto bg-[#ecdec4] border rounded-lg shadow-md">
      {workData ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Work Details
            </h1>
            <button
              className="text-gray-600 hover:text-gray-800 transition"
              onClick={toggleEditMode}
            >
              {isEditing ? (
                <FiCheck className="text-xl" title="Save" />
              ) : (
                <FiEdit3 className="text-xl" title="Edit" />
              )}
            </button>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <p className="text-lg">
                <span className="font-semibold text-gray-600">
                  School Name:
                </span>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={workData.schoolName}
                    onChange={(e) =>
                      handleInputChange("schoolName", e.target.value)
                    }
                    className="ml-2 border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                ) : (
                  workData.schoolName
                )}
              </p>
            </div>
            <p className="text-lg">
              <span className="font-semibold text-gray-600">
                School Address:
              </span>{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={workData.schoolAddress}
                  onChange={(e) =>
                    handleInputChange("schoolAddress", e.target.value)
                  }
                  className="ml-2 border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              ) : (
                workData.schoolAddress
              )}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-600">
                Uniform Color:
              </span>{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={workData.uniformColor}
                  onChange={(e) =>
                    handleInputChange("uniformColor", e.target.value)
                  }
                  className="ml-2 border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              ) : (
                workData.uniformColor
              )}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-600">Status:</span>{" "}
              {isEditing ? (
                <select
                  value={workData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  className="ml-2 border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <option value="pending">Pending</option>
                  <option value="progressing">Progressing</option>
                  <option value="completed">Completed</option>
                </select>
              ) : (
                <span
                  className={`font-semibold capitalize ${
                    workData.status === "pending"
                      ? "text-yellow-500"
                      : workData.status === "completed"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                >
                  {workData.status}
                </span>
              )}
            </p>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center mt-10">
          No work found with the specified ID.
        </p>
      )}
    </div>
  );
};

export default WorkDetailsPage;
