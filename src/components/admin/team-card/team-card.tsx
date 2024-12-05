const TeamActivity: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <h3 className="text-xl font-semibold">Team Activity</h3>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span>Overall Activity</span>
          <span className="text-green-400">+4%</span>
        </div>
        <div className="mt-2">
          <div className="w-full bg-gray-500 h-2 rounded-full">
            <div
              className="h-2 bg-orange-500 rounded-full"
              style={{ width: "97%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamActivity;
