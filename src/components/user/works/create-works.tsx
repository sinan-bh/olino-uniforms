"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { uniforms } from "@/const/uniform";

interface FormData {
  id: number;
  uId: string;
  uniformColor: string;
  material: string;
  schoolName: string;
  schoolAddress: string;
  assignedMemberId: string;
  status: string;
  sizes: { [key: string]: string | number };
  orderDate: Date;
}

const schoolAddresses = [
  "123 Elm Street, Springfield",
  "456 Oak Street, Springfield",
  "789 Pine Avenue, Springfield",
  "101 Maple Drive, Springfield",
];

const sizes = ["Small", "Medium", "Large", "X-Large"];

const AddWorkForm = () => {
  const { MId, wId }: { MId: string; wId: string } = useParams();
  const [formData, setFormData] = useState<FormData>({
    id: Date.now(),
    uId: wId,
    uniformColor: "",
    material: "",
    schoolName: "",
    schoolAddress: "",
    assignedMemberId: MId,
    status: "pending",
    sizes: sizes.reduce((acc, size) => ({ ...acc, [size]: "" }), {}),
    orderDate: new Date(),
  });

  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const uniform = uniforms.find((u) => u.id.toString() === wId);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "schoolAddress") {
      setFilteredSuggestions(
        schoolAddresses.filter((address) =>
          address.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleSizeChange = (size: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      sizes: {
        ...prev.sizes,
        [size]: parseInt(value, 10) || 0,
      },
    }));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setFormData((prev) => ({
      ...prev,
      schoolAddress: suggestion,
    }));
    setFilteredSuggestions([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const savedData = JSON.parse(localStorage.getItem("uniformOrders") || "[]");
    savedData.push(formData);
    localStorage.setItem("uniformOrders", JSON.stringify(savedData));

    alert("Work assigned successfully!");
    setFormData({
      ...formData,
      schoolName: "",
      schoolAddress: "",
      sizes: sizes.reduce((acc, size) => ({ ...acc, [size]: 0 }), {}),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add Work - Uniform Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Display uniform image, material, and size */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={uniform?.materialImage || ""}
                alt={uniform?.materialName || ""}
                width={60}
                height={40}
                className="h-14 object-cover"
              />
              <div className="ml-4">
                <h3 className="text-gray-700 font-semibold">
                  {uniform?.materialName || "N/A"}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* School Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">School Name:</label>
          <input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* School Address */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">School Address:</label>
          <input
            type="text"
            name="schoolAddress"
            value={formData.schoolAddress}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
          {filteredSuggestions.length > 0 && (
            <ul className="border border-gray-300 mt-2 bg-white rounded-md shadow-sm">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Uniform Sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Uniform Sizes:</label>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {sizes.map((size) => (
              <div key={size} className="flex items-center gap-2">
                <label className="font-semibold">{size}:</label>
                <input
                  type="text"
                  name={`size-${size}`}
                  value={formData.sizes[size] || ""}
                  onChange={(e) => handleSizeChange(size, e.target.value)}
                  className="w-20 border border-gray-300 rounded-md p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md py-2 mt-6 hover:bg-blue-700 transition"
        >
          Assign Work
        </button>
      </form>
    </div>
  );
};

export default AddWorkForm;
