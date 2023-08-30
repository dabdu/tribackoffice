import React from "react";
import { getWordMonthDate } from "../../constants/functions";

const TransactionInfoCard = ({ order }) => {
  return (
    <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-3">
        <p className="py-1 text-gray-600 text-xs">
          <span className="font-bold">Transaction ID:</span>{" "}
          {order.transactionId}
        </p>
        <p className="py-1 text-gray-600 text-xs">
          <span className="font-bold">Transaction Ref:</span>{" "}
          {order.transactionRef}
        </p>
        <p className="py-1 text-gray-600 text-xs">
          <span className="font-bold">Amount:</span> N
          {order.amount.toLocaleString()}
        </p>
        <p className="py-1 text-gray-600 text-xs">
          <span className="font-bold">Delivery Fees:</span> N
          {order.deliveryAddress.deliveryFee.toLocaleString()}
        </p>
        <p className="py-1 text-gray-600 text-xs">
          <span className="font-bold">Total:</span> N
          {(order.deliveryAddress.deliveryFee + order.amount).toLocaleString()}
        </p>
        <p className="py-1 text-gray-600 text-xs">
          <span className="font-bold">Delivery Address:</span>{" "}
          {order.deliveryAddress.description}
        </p>
        <p className="py-1 text-gray-600 text-xs">
          <span className="font-bold">Delivery City:</span>{" "}
          {order.deliveryAddress.deliveryCity}
        </p>
        <p className="py-1 text-gray-600 text-xs">
          <span className="font-bold">Is Paid:</span>{" "}
          {order.isPaid ? "Yes" : "No"}
        </p>
        <p className="py-1 text-gray-600 text-xs">
          <span className="font-bold">Status:</span> {order.status}
        </p>
        {/* <p className="py-1 text-gray-600 text-xs">
          <span className="font-bold">Assigned Rider ID:</span>{" "}
          {order.assignedRiderId}
        </p> */}
        <p className="py-1 text-gray-600 text-xs">
          <span className="font-bold">Order Date:</span>{" "}
          {getWordMonthDate(order?.createdAt)}
        </p>

        <h2 className="text-lg font-semibold text-gray-800">Rider Details</h2>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
