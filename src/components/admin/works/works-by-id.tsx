"use client";

import { Sizes, uniforms } from "@/const/uniform";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const WorkDetails = () => {
  const { workId }: { workId: string } = useParams();

  // Find the uniform details
  const uniform = uniforms?.find((u) => u.id.toString() === workId);

  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({
    materialName: uniform?.materialName || "",
    description: uniform?.description || "",
    sizes: uniform?.sizes || { small: 0, medium: 0, large: 0, extraLarge: 0 },
  });

  const handleEditClick = () => setIsEditing(true);

  const handleInputChange = (field: string, value: string) => {
    setEditableData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSizeChange = (size: keyof Sizes, value: string) => {
    setEditableData((prev) => ({
      ...prev,
      sizes: {
        ...prev.sizes,
        [size]: value,
      },
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here (e.g., update state or send data to backend)
    console.log("Updated Data:", editableData);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        Uniform Details
      </h1>

      <div className=" border-gray-300 rounded-lg p-6 mb-6 shadow-md bg-gray-800 text-white">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Uniform Information </h2>
          <div>
            {!isEditing && (
              <button className="text-blue-400 ml-2" onClick={handleEditClick}>
                ✏️ Edit
              </button>
            )}
          </div>
        </div>
        <div>
          <Image
            src={uniform?.materialImage || ""}
            alt={uniform?.materialName || ""}
            width={100}
            height={100}
            className="h-16"
          />
        </div>
        <p className="mb-2 mt-2">
          <span className="font-medium">Material Name:</span>{" "}
          {isEditing ? (
            <input
              type="text"
              className="bg-gray-700 text-white p-1 rounded"
              value={editableData.materialName}
              onChange={(e) =>
                handleInputChange("materialName", e.target.value)
              }
            />
          ) : (
            editableData.materialName
          )}
        </p>

        <p className="mb-2">
          <span className="font-medium">Description:</span>{" "}
          {isEditing ? (
            <textarea
              className="bg-gray-700 text-white p-1 rounded w-full"
              value={editableData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          ) : (
            editableData.description
          )}
        </p>

        <div className="mt-4">
          <h3 className="font-semibold">Sizes:</h3>
          <ul className="ml-4 text-gray-300">
            {(["small", "medium", "large", "extraLarge"] as const).map(
              (size) => (
                <li key={size} className="py-2">
                  <span className="capitalize">{size}:</span>{" "}
                  {isEditing ? (
                    <input
                      type="text"
                      className="bg-gray-700 text-white p-1 rounded"
                      value={editableData.sizes[size]}
                      onChange={(e) => handleSizeChange(size, e.target.value)}
                    />
                  ) : (
                    editableData.sizes[size]
                  )}
                </li>
              )
            )}
          </ul>
        </div>

        {isEditing && (
          <button
            className="mt-4 bg-gray-600 text-white py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkDetails;
