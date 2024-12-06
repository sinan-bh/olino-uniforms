"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";

const schoolAddresses = [
  "123 Elm Street, Springfield",
  "456 Oak Street, Springfield",
  "789 Pine Avenue, Springfield",
  "101 Maple Drive, Springfield",
];

const AddWorkForm = () => {
  const { MId }: { MId: string } = useParams();
  const [formData, setFormData] = useState({
    id: "",
    uniformColor: "",
    material: "",
    schoolName: "",
    schoolAddress: "",
    assignedMemberId: { MId },
    status: "pending",
  });

  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

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

  const handleSuggestionClick = (suggestion: string) => {
    setFormData((prev) => ({
      ...prev,
      schoolAddress: suggestion,
    }));
    setFilteredSuggestions([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("work assigned");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add Work</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold">Uniform Color:</label>
          <input
            type="text"
            name="uniformColor"
            value={formData.uniformColor}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Material:</label>
          <select
            name="material"
            value={formData.material}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Select Material</option>
            <option value="Cotton">Cotton</option>
            <option value="Polyester">Polyester</option>
            <option value="Wool">Wool</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">School Name:</label>
          <input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">School Address:</label>
          <input
            type="text"
            name="schoolAddress"
            value={formData.schoolAddress}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
          {filteredSuggestions.length > 0 && (
            <ul className="border border-gray-300 mt-2 bg-white rounded-md">
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
        <div className="mb-4">
          <label className="block font-semibold">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white rounded-md py-2"
        >
          Add Work
        </button>
      </form>
    </div>
  );
};

export default AddWorkForm;
