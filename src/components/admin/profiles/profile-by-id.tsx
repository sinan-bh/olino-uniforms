"use client";

import React, { useEffect, useState } from "react";
import { users } from "@/const/data-set";
import { useParams } from "next/navigation";

interface OrderData {
  id: number;
  uId: string;
  material: string;
  schoolName: string;
  schoolAddress: string;
  assignedMemberId: string;
  status: string;
  sizes: { [key: string]: number };
  orderDate: string | null;
  image: string;
}

const Profile: React.FC = () => {
  const { profileId }: { profileId: string } = useParams();
  const user = users.find((u) => u.memberId === profileId);
  const [orders, setOrders] = useState<OrderData[] | undefined>(undefined);

  useEffect(() => {
    const fetchOrders = () => {
      const ordersDetails = JSON.parse(
        localStorage.getItem("uniformOrders") || "[]"
      );
      const currentOrders = ordersDetails.filter(
        (order: OrderData) => order.assignedMemberId === profileId
      );
      setOrders(currentOrders);
    };
    fetchOrders();
  }, [profileId]);

  return (
    <div className="text-white flex justify-center items-center">
      <div className="max-auto max-w-5xl bg-gray-800 container rounded-xl p-6">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <div>
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-400">{user?.email}</p>
            <p className="text-gray-400">
              <strong>Joined:</strong> {user?.joinDate}
            </p>
            <p className="text-gray-400">
              <strong>Role:</strong> {user?.role}
            </p>
          </div>
          <div className="w-24 h-24 font-bold text-4xl flex justify-center items-center bg-gray-500 text-black rounded-full overflow-hidden border-2 border-gray-500">
            {user?.name[0]}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Work Details</h2>
          {orders?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-gray-700 p-4 rounded-lg shadow-lg"
                >
                  <h3 className="mt-2 text-lg font-bold">{order.schoolName}</h3>
                  <p className="text-gray-400">{order.schoolAddress}</p>
                  <p className="text-gray-400">
                    <strong>Status:</strong> {order.status}
                  </p>
                  <p className="text-gray-400">
                    <strong>Order Date:</strong> {order.orderDate || "N/A"}
                  </p>
                  <p className="text-gray-400">
                    <strong>Sizes:</strong>{" "}
                    {Object.entries(order.sizes)
                      .map(([size, qty]) => `${size}: ${qty}`)
                      .join(", ")}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No orders assigned to this member.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
