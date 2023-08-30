import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import PulseLoader from "react-spinners/PulseLoader";
import { api, header } from "../../constants/lib/axiosInstance";
import {
  covertedTime,
  getDateFromCreated,
  getWordMonthDate,
} from "../../constants/functions";
import { TableData } from "../../components/Layouts/Table";

export default function DishesOrders() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getOrders = async () => {
      const res = await api.get(`dish-orders`, {
        headers: header(),
      });
      const data = await res.data;
      console.log(data);
      if (data.length > 0) {
        setOrders(data);
      }
      setLoading(false);
    };

    getOrders();
  }, []);
  return (
    <div>
      <div className="text-xl pt-1">Dish Orders({orders?.length})</div>
      <div className="bg-white mt-4 p-6">
        <div
          className={` relative scroll-div overflow-scroll mt-4 shadow-md  w-100% sm:rounded-lg`}
        >
          {loading ? (
            <div className=" m-12  justify-items-center justify-center">
              {" "}
              <PulseLoader
                className=" m-12 justify-center"
                color={"#309CFF"}
                loading={loading}
                // cssOverride={override}
                size={14}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <table
              className={` w-full  text-sm text-left text-gray-500 dark:text-gray-400`}
            >
              <thead className="text-xs sticky top-0 right-0 left-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Ordered Items
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Restaurant
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Delivery Fees
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Delivery Address
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Payment Mode
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Transaction ID
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className=" pt-8">
                {orders.length &&
                  orders.map((item) => (
                    <tr
                      key={item?._id}
                      className="bg-white border-b border-b-blue-400 dark:bg-gray-800 dark:border-gray-700 pt-8  hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                      onClick={() => navigate(`/order/${item?._id}`)}
                    >
                      <TableData>{item?.orderedItems?.length}</TableData>
                      <TableData>{item?.userId?.name}</TableData>
                      <TableData>
                        {item?.restaurantId?.restaurantName}
                      </TableData>
                      <TableData>N{item?.amount?.toLocaleString()}</TableData>
                      <TableData>
                        N{item?.deliveryAddress?.deliveryFee?.toLocaleString()}
                      </TableData>
                      <TableData>
                        {item?.deliveryAddress?.description}
                      </TableData>
                      <TableData>{item?.paymentMode}</TableData>
                      <TableData>{item?.transactionId}</TableData>
                      <TableData>
                        <p className="bg-primary rounded-sm px-2 py-1 text-white">{`${item?.status}`}</p>
                      </TableData>
                      <TableData>
                        {getDateFromCreated(item?.createdAt)}
                      </TableData>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
