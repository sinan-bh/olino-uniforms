"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { User, users } from "@/const/data-set";

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
}

const OrderDetails = () => {
  const { orderId }: { orderId: string } = useParams();
  const [order, setOrder] = useState<OrderData | undefined>(undefined);
  const [status, setStatus] = useState<string>("");
  const [member, setMember] = useState<User | undefined>(undefined);

  useEffect(() => {
    // Fetch order data from localStorage
    const orders = JSON.parse(localStorage.getItem("uniformOrders") || "[]");
    const currentOrder = orders.find(
      (order: OrderData) => order.id === parseInt(orderId)
    );
    setOrder(currentOrder);
    setStatus(currentOrder?.status);

    // Find associated member
    const memberData = users.find(
      (user) => user.memberId === currentOrder?.assignedMemberId
    );
    setMember(memberData);
  }, [orderId]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
    if (order) {
      // Update the status in localStorage
      const updatedOrders = JSON.parse(
        localStorage.getItem("uniformOrders") || "[]"
      ).map((o: OrderData) =>
        o.id === order.id ? { ...o, status: e.target.value } : o
      );
      localStorage.setItem("uniformOrders", JSON.stringify(updatedOrders));
    }
  };

  if (!order) {
    return (
      <div className="text-center text-gray-300">Loading order details...</div>
    );
  }

  return (
    <div className="p-6 space-y-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Order Details</h1>
      {member && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold">Assigned Member</h2>
          <div className="flex items-center space-x-4">
            {/* <Image
              src={member.profileImage || ""}
              alt={member.name || ""}
              width={80}
              height={80}
              className="rounded-full"
            /> */}
            <div className="w-24 h-24 font-bold text-4xl flex justify-center items-center bg-gray-500 text-black rounded-full overflow-hidden border-2 border-gray-500">
              {member?.name[0]}
            </div>
            <div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p>Email: {member.email}</p>
              <p>Role: {member.role}</p>
              <p>
                Join Date:{" "}
                {member.joinDate &&
                  format(new Date(member.joinDate), "dd-MM-yyyy")}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        {/* <h2 className="text-2xl font-semibold">Order ID: {order.id}</h2> */}
        <p>School Name: {order.schoolName}</p>
        <p>School Address: {order.schoolAddress}</p>
        <p>Material: {order.material}</p>
        <div>
          <h4 className="font-semibold">Sizes Ordered:</h4>
          <ul className="list-disc list-inside">
            {Object.keys(order.sizes).map((size) => (
              <li key={size}>
                {size}: {order.sizes[size]}
              </li>
            ))}
          </ul>
        </div>
        <p>
          Ordered Date:{" "}
          {order?.orderDate && format(new Date(order?.orderDate), "dd-MM-yyyy")}
        </p>
        <div>
          <label className="font-semibold">Status: </label>
          <select
            value={status}
            onChange={handleStatusChange}
            className="bg-gray-700 p-2 rounded-md"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
