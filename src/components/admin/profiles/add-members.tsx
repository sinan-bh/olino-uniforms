import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path as needed

const AddMemberPopup: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberName, setMemberName] = useState("");
  const [memberWork, setMemberWork] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddMember = () => {
    // Handle member submission logic here
    console.log("Adding Member:", {
      name: memberName,
      work: memberWork,
    });
    // Reset fields
    setMemberName("");
    setMemberWork("");
    toggleModal();
  };

  return (
    <div className="p-4">
      {/* Add Member Button */}
      <Button className="border" variant="default" onClick={toggleModal}>
        Add Member
      </Button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4">Add New Member</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddMember();
              }}
              className="space-y-4"
            >
              {/* Member Name */}
              <div>
                <label
                  htmlFor="memberName"
                  className="block text-sm font-medium"
                >
                  Member Name
                </label>
                <input
                  id="memberName"
                  type="text"
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter member name"
                  required
                />
              </div>

              {/* Member Work */}
              <div>
                <label
                  htmlFor="memberWork"
                  className="block text-sm font-medium"
                >
                  Assigned Work
                </label>
                <input
                  id="memberWork"
                  type="text"
                  value={memberWork}
                  onChange={(e) => setMemberWork(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter assigned work"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2">
                <Button variant="ghost" onClick={toggleModal}>
                  Cancel
                </Button>
                <Button variant="default" type="submit">
                  Add
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMemberPopup;
