"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { uniforms } from "@/const/uniform";
import { format } from "date-fns";
import Link from "next/link";

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
  orderDate: string;
}

const OrderedList = () => {
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
        order.orderDate.includes(value)
    );
    setFilteredOrders(filtered);
  };

  console.log(filteredOrders);

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
    <div className="p-6 space-y-6 bg-black h-screen">
      {filteredOrders && filteredOrders?.length > 0 ? (
        <div>
          <h2 className="text-3xl text-white font-bold sm:mt-0 mt-14">
            Ordered Uniforms
          </h2>

          <div className="flex justify-end mb-6">
            <input
              type="text"
              placeholder="Search by School Name"
              value={searchQuery}
              onChange={handleSearchChange}
              className="max-w-1/6 bg-gray-800 border border-gray-300 rounded-md p-3 "
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
            {filteredOrders?.map((order, i) => {
              const uniform = uniforms?.find(
                (u) => u.id.toString() === order.uId
              );

              return (
                <Link
                  href={`/admin/orders/${order.id}`}
                  key={i}
                  className="bg-gray-800 rounded-lg shadow-xl p-4 hover:shadow-lg transition transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={uniform?.materialImage || "/default-image.png"}
                      alt={uniform?.materialName || "N/A"}
                      width={60}
                      height={60}
                      className="h-16 w-16 object-cover  mr-4"
                    />
                    <div className="text-white">
                      <h3 className="text-xl font-semibold">
                        {uniform?.materialName || "N/A"}
                      </h3>
                      <p className="text-gray-500">{order.material}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 py-1">
                    School: {order.schoolName}
                  </p>
                  <p className="text-sm text-gray-400">
                    Ordered Date:{" "}
                    {order?.orderDate &&
                      format(new Date(order?.orderDate), "dd-MM-yyyy")}
                  </p>
                  <p className="text-sm text-gray-400">
                    Member: {order.assignedMemberId}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-300">Sizes:</h4>
                    <ul className="text-sm text-gray-400">
                      {Object.keys(order.sizes).map((size) => (
                        <li key={size}>
                          {size}: {order.sizes[size]}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    Status: {order.status}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-gray-200">No Orders, </div>
      )}
    </div>
  );
};

export default OrderedList;
