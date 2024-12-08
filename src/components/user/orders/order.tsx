"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { uniforms } from "@/const/uniform";
import { format } from "date-fns";
import Link from "next/link";
import { useParams } from "next/navigation";

interface OrderData {
  id: number;
  uId: string;
  uniformColor: string;
  material: string;
  schoolName: string;
  schoolAddress: string;
  assignedMemberId: string;
  status: string;
  sizes: { [key: string]: number };
  orderedDate: string;
}

const OrderedList = () => {
  const { MId }: { MId: string } = useParams();
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<OrderData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  // const [sortOrder, setSortOrder] = useState<string>("asc");

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("uniformOrders") || "[]"
    );
    setOrders(savedOrders);
    setFilteredOrders(savedOrders);
  }, []);

  // Handle search bar input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);

    // Filter orders by school name and ordered date
    const filtered = orders.filter(
      (order) =>
        order.schoolName.toLowerCase().includes(value.toLowerCase()) ||
        order.orderedDate.includes(value)
    );
    setFilteredOrders(filtered);
  };

  // Handle sorting by ordered date (ascending and descending)
  // const handleSortChange = () => {
  //   const sortedOrders = [...filteredOrders].sort((a, b) => {
  //     const dateA = new Date(a.orderedDate).getTime();
  //     const dateB = new Date(b.orderedDate).getTime();
  //     return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  //   });
  //   setFilteredOrders(sortedOrders);
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };

  return (
    <div className="p-6 space-y-6 ">
      <h2 className="text-3xl font-bold text-center">Ordered Uniforms</h2>

      {/* Search Bar */}
      <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="Search by School Name"
          value={searchQuery}
          onChange={handleSearchChange}
          className="max-w-1/6 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Sorting Button */}
      <div className="flex justify-center mb-6">
        {/* <button
          onClick={handleSortChange}
          className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
        >
          Sort by Date ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button> */}
      </div>

      {/* Display Orders in Card View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOrders.map((order, i) => {
          const uniform = uniforms.find((u) => u.id.toString() === order.uId);

          return (
            <Link
              href={`/M/${MId}/orders/${order.id}`}
              key={i}
              className="bg-transparent rounded-lg shadow-xl p-4 hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={uniform?.materialImage || "/default-image.png"}
                  alt={uniform?.materialName || "N/A"}
                  width={60}
                  height={60}
                  className="h-16 w-16 object-cover  mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {uniform?.materialName || "N/A"}
                  </h3>
                  <p className="text-gray-500">{order.material}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                School: {order.schoolName}
              </p>
              <p className="text-sm text-gray-600">
                Ordered Date: {new Date(order.orderedDate).toLocaleDateString()}
              </p>
              <div className="mt-4">
                <h4 className="font-semibold">Sizes:</h4>
                <ul className="text-sm text-gray-600">
                  {Object.keys(order.sizes).map((size) => (
                    <li key={size}>
                      {size}: {order.sizes[size]}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Status: {order.status}
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Order Date:{" "}
                {order.orderedDate &&
                  format(new Date(order.orderedDate), "dd-MM-yyyy")}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default OrderedList;
