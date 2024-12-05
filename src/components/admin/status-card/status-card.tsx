const StatsCard: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <h3 className="text-xl font-semibold">Overall Information</h3>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-yellow-400 text-gray-800 p-4 rounded-lg text-center">
          <h4>28 Projects</h4>
        </div>
        <div className="bg-teal-500 text-white p-4 rounded-lg text-center">
          <h4>17 In Progress</h4>
        </div>
        <div className="bg-orange-500 text-white p-4 rounded-lg text-center">
          <h4>11 Completed</h4>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
