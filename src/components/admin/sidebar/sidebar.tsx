import { FaTachometerAlt, FaTasks, FaUsers, FaCog } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">Assist</h2>
      <ul className="space-y-6">
        <li className="flex items-center space-x-2">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaTasks />
          <span>My Tasks</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaUsers />
          <span>Profiles</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaCog />
          <span>Settings</span>
        </li>
      </ul>
      <h3 className="mt-8 text-lg font-semibold">Teams</h3>
      <ul className="space-y-4">
        <li className="text-purple-400">Sales</li>
        <li className="text-green-400">Marketing</li>
        <li className="text-blue-400">Add project</li>
      </ul>
    </div>
  );
};

export default Sidebar;
