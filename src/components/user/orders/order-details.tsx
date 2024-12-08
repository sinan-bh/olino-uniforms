"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { uniforms } from "@/const/uniform";
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
  uniformColor: string;
}

const OrderDetails = () => {
  const { orderId }: { orderId: string } = useParams();
  const [orders, setOrders] = useState<OrderData[] | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedOrder, setUpdatedOrder] = useState<OrderData | null>(null);

  const order = orders?.find((o) => o.id.toString() === orderId);
  console.log(orders);

  const uniform = uniforms.find((u) => u.id.toString() === order?.uId);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("uniformOrders") || "[]"
    );
    if (savedOrders.length > 0) {
      setOrders(savedOrders);
    }
  }, []);

  useEffect(() => {
    if (order) {
      setUpdatedOrder(order);
    }
  }, [order]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedOrder(order || null);
  };

  const handleSaveClick = () => {
    if (updatedOrder) {
      const updatedOrders = orders?.map((o) =>
        o.id === updatedOrder.id ? updatedOrder : o
      );
      if (updatedOrders) {
        localStorage.setItem("uniformOrders", JSON.stringify(updatedOrders));
        setOrders(updatedOrders);
      }
      setIsEditing(false);
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (updatedOrder) {
      setUpdatedOrder({
        ...updatedOrder,
        status: e.target.value,
      });
    }
  };

  const handleSizeChange = (size: string, count: number) => {
    if (updatedOrder) {
      setUpdatedOrder({
        ...updatedOrder,
        sizes: {
          ...updatedOrder.sizes,
          [size]: count,
        },
      });
    }
  };

  return (
    <div className="p-4 mt-4 max-w-3xl mx-auto  border-blue-600 rounded-sm shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>

      {/* Order Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-lg">Material</h3>
          <div className="flex items-center mb-4">
            <Image
              src={uniform?.materialImage || "/default-image.png"}
              alt={uniform?.materialName || "N/A"}
              width={60}
              height={30}
              className="h-14 object-cover mr-4"
            />
            <span>{uniform?.materialName || "N/A"}</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg">School Name</h3>
          <p>{order?.schoolName}</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">School Address</h3>
          <p>{order?.schoolAddress}</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Assigned Member ID</h3>
          <p>{order?.assignedMemberId}</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Order Date</h3>
          <p>
            {order?.orderDate &&
              new Date(order?.orderDate).toLocaleDateString()}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Status</h3>
          <select
            value={updatedOrder?.status || "pending"}
            onChange={handleStatusChange}
            disabled={!isEditing}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>

      {/* Sizes */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg">Sizes</h3>
        <ul>
          {Object.entries(order?.sizes || {}).map(([size, count]) => (
            <li key={size} className="flex items-center mb-2">
              <div>{size}:</div>
              <div className="flex items-center ml-3">
                {isEditing ? (
                  <input
                    type="number"
                    value={updatedOrder?.sizes[size] || count}
                    onChange={(e) =>
                      handleSizeChange(size, parseInt(e.target.value))
                    }
                    className="w-16 p-2 border border-gray-300 rounded-md"
                  />
                ) : (
                  <span>{count}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Edit and Save Buttons */}
      <div className="mt-6 flex space-x-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveClick}
              className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditClick}
            className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Edit Order
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
