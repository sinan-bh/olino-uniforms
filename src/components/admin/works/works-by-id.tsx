"use client";

import { mockData, users, Work } from "@/const/data-set";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface WorkDetail {
  workId: number;
  schoolName: string;
  status: string;
  shippedDate?: string;
  deliveredDate?: string;
  creditedAmount?: number;
}

interface MemberDetails {
  name: string;
  email: string;
  role: string;
  profileImage: string;
  workDetails: WorkDetail[];
}

const WorkDetails = () => {
  const params = useParams();
  const workId = params?.workId as string;
  const [work, setWork] = useState<Work | null>(null);
  const [assignedMember, setAssignedMember] = useState<MemberDetails | null>(
    null
  );

  useEffect(() => {
    if (workId) {
      const selectedWork = mockData.find((work) => work.id === Number(workId));
      setWork(selectedWork || null);

      if (selectedWork) {
        const memberDetails = users.find(
          (user) => user.memberId === selectedWork.assignedMemberId
        );

        if (memberDetails) {
          const filteredWorkDetails = memberDetails.workDetails.filter(
            (workDetail) => workDetail.workId === Number(workId)
          );
          setAssignedMember({
            ...memberDetails,
            workDetails: filteredWorkDetails,
          });
        }
      }
    }
  }, [workId]);

  const isWorkSpace = assignedMember?.workDetails.map(
    (a) => a.workId === Number(workId)
  );

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        Work Details
      </h1>

      <div className="border border-gray-300 rounded-lg p-6 mb-6 shadow-md bg-gray-800 text-white">
        <h2 className="text-xl font-semibold mb-4">Work Information</h2>
        <p className="mb-2">
          <span className="font-medium">Uniform Color:</span>{" "}
          {work?.uniformColor}
        </p>
        <p className="mb-2">
          <span className="font-medium">School Name:</span> {work?.schoolName}
        </p>
        <p className="mb-2">
          <span className="font-medium">School Address:</span>{" "}
          {work?.schoolAddress}
        </p>
        <p className="mb-2">
          <span className="font-medium">Status:</span>{" "}
          <span
            className={`px-2 py-1 rounded ${
              work?.status.toLowerCase() === "completed"
                ? "bg-green-200 text-green-800"
                : work?.status.toLowerCase() === "progressing"
                ? "bg-yellow-200 text-yellow-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {work?.status}
          </span>
        </p>
      </div>

      <div className="border border-gray-300 rounded-lg p-6 shadow-md bg-gray-800 text-white">
        <h2 className="text-xl font-semibold mb-4">Assigned Member</h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-24 h-24 flex items-center justify-center text-4xl font-bold text-gray-800 bg-gray-300 rounded-full border-4 border-gray-400">
            {assignedMember?.name?.charAt(0) || "?"}
          </div>
          <div>
            <p className="text-lg font-medium">{assignedMember?.name}</p>
            <p className="text-gray-300">{assignedMember?.role}</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3">Work History</h3>
        {isWorkSpace ? (
          <ul className="list-disc list-inside space-y-2">
            {assignedMember?.workDetails.map((workDetail, index) => (
              <li key={index} className="text-gray-300">
                <span className="font-medium">{workDetail.schoolName}</span> -{" "}
                <span
                  className={`${
                    workDetail.status.toLowerCase() === "pending"
                      ? "text-yellow-300"
                      : workDetail.status.toLowerCase() === "shipped"
                      ? "text-green-400"
                      : "text-blue-400"
                  }`}
                >
                  {workDetail.status}
                </span>
                {workDetail.shippedDate && (
                  <div className="text-sm text-gray-400 ml-4">
                    <p>Shipped Date: {workDetail.shippedDate}</p>
                  </div>
                )}
                {workDetail.deliveredDate && (
                  <div className="text-sm text-gray-400 ml-4">
                    <p>Delivered Date: {workDetail.deliveredDate}</p>
                    <p>Credited Amount: {workDetail.creditedAmount || "N/A"}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No work history for this work ID.</p>
        )}
      </div>
    </div>
  );
};

export default WorkDetails;
