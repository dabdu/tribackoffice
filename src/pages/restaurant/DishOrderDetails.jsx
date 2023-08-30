import React from "react";
import { useParams } from "react-router";
import {
  RestaurantInfoCard,
  TransactionInfoCard,
  UserInfoCard,
} from "../../components/Cards";
import { Spinner } from "../../components/Generic";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import useOrderDetails from "../../hooks/useOrderDetails";
import { TableData } from "../../components/Layouts/Table";

const DishOrderDetails = () => {
  const { id } = useParams();
  const { loading, orderDetails } = useOrderDetails(id);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="mt-4">
        <div className="flex items-center mb-5">
          <Link
            className="flex items-center cursor-pointer mr-4"
            to={`/dish-orders`}
          >
            <AiOutlineLeft color={"black"} size={25} />
            <p className="text-primary">Back</p>
          </Link>
          <h1 className="text-lg font-semibold ">Order Details</h1>
        </div>
      </div>
      {orderDetails && (
        <>
          <div className="grid grid-cols-3 gap-4 p-4">
            {/* Reservation Details */}
            <div>
              <h1 className="font-bold text-lg my-2">Order</h1>
              <TransactionInfoCard order={orderDetails} />
            </div>
            {/* User Details */}
            <div>
              <h1 className="font-bold text-lg my-2">Customer</h1>
              <UserInfoCard user={orderDetails?.userId} />
            </div>
            {/* Restaurant Details */}
            <div>
              <h1 className="font-bold text-lg my-2">Restaurant</h1>
              <RestaurantInfoCard restaurant={orderDetails?.restaurantId} />
            </div>
          </div>
          <table
            className={` w-full  text-sm text-left text-gray-500 dark:text-gray-400`}
          >
            <thead className="text-xs sticky top-0 right-0 left-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Photo
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className=" pt-8">
              {orderDetails?.orderedItems?.length &&
                orderDetails?.orderedItems?.map((item) => (
                  <tr
                    className="bg-white border-b border-b-blue-400 dark:bg-gray-800 dark:border-gray-700 pt-8  hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                    // onClick={() => navigate(`/householddetail/${farmer.UID}`)}
                  >
                    <TableData>
                      <img
                        src={item?.menuImg}
                        className="h-[60px] w-[80px] rounded-lg"
                      />
                    </TableData>
                    <TableData>{item?.menuName}</TableData>
                    <TableData>
                      <p className="">N{item?.price?.toLocaleString()}</p>
                    </TableData>
                    <TableData>{`${item?.qty}`}</TableData>
                    <TableData>
                      {(item?.price * item?.qty).toLocaleString()}
                    </TableData>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default DishOrderDetails;
