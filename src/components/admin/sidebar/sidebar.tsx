import Link from "next/link";
import { FaTachometerAlt, FaTasks, FaUsers, FaCog } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/6 bg-gray-800 text-white p-6 z-10">
      <h2 className="text-2xl font-bold mb-8">Olino Uniforms</h2>
      <ul className="space-y-6">
        <li className="flex items-center space-x-2">
          <FaTachometerAlt />
          <Link href={`/admin/home`}>Dashboard</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaTasks />
          <Link href={`/admin/works`}>Works</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaUsers />
          <Link href={`/admin/profiles`}>Profiles</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaCog />
          <Link href={`/admin/home`}>Settings</Link>
        </li>
      </ul>
      {/* <h3 className="mt-8 text-lg font-semibold">Teams</h3> */}
      {/* <ul className="space-y-4">
        <li className="text-purple-400">Sales</li>
        <li className="text-green-400">Marketing</li>
        <li className="text-blue-400">Add project</li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
