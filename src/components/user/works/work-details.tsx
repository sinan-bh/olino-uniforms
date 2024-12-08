"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { uniforms } from "@/const/uniform";
import AddWorkForm from "./create-works";

const UniformDetailsPage: React.FC = () => {
  const { wId }: { MId: string; wId: string } = useParams();
  const [showPopup, setShowPopup] = useState(false);

  const uniformData = uniforms.find((item) => item.id.toString() === wId);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="p-6 mt-9 max-w-4xl mx-auto  rounded-lg shadow-md">
      {uniformData ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Uniform Details
            </h1>
            <button
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
              onClick={togglePopup}
            >
              Order
            </button>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Material Image */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <img
                src={uniformData.materialImage}
                alt={uniformData.materialName}
                className="w-32 h-32 object-cover rounded border"
              />
            </div>

            {/* Material Name */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <p>{uniformData.materialName}</p>
            </div>

            {/* Description */}
            <p className="text-lg">
              <span className="font-semibold text-gray-600">Description:</span>{" "}
              {uniformData.description}
            </p>

            {/* Sizes */}
            <div>
              <p className="text-lg font-semibold text-gray-600">Sizes:</p>
              <ul className="ml-4 list-disc">
                {Object.entries(uniformData.sizes).map(([key, value]) => (
                  <li key={key} className="text-gray-700">
                    <span className="font-semibold capitalize">{key}:</span>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Popup Modal */}
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded shadow-lg relative">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
                  onClick={togglePopup}
                >
                  ✖
                </button>
                <AddWorkForm />
              </div>
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-500 text-center mt-10">
          No uniform found with the specified ID.
        </p>
      )}
    </div>
  );
};

export default UniformDetailsPage;
