import React from "react";

const stats = [
  {
    count: "28",
    label: "Projects",
    bgColor: "bg-yellow-400",
    textColor: "text-gray-800",
  },
  {
    count: "17",
    label: "In Progress",
    bgColor: "bg-teal-500",
    textColor: "text-white",
  },
  {
    count: "11",
    label: "Completed",
    bgColor: "bg-orange-500",
    textColor: "text-white",
  },
];

const StatsCard: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <h3 className="text-xl font-semibold">Overall Information</h3>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} ${stat.textColor} py-6  rounded-lg text-center text-sm`}
          >
            <h4>{stat.count}</h4>
            <h4>{stat.label}</h4>
          </div>
        ))}
      </div>
      <div className="my-4 flex justify-between">
        <div>Total Debited :</div>
        <div className="text-red-500">$57392343</div>
      </div>
      <div className="my-4 flex justify-between">
        <div>Total Credited :</div>
        <div className="text-orange-500">$57392343</div>
      </div>
      <hr />
      <div className="my-4 flex justify-between">
        <div>Total Revanue :</div>
        <div className="text-green-500">$57392343</div>
      </div>
    </div>
  );
};

export default StatsCard;
