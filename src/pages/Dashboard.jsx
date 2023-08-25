import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const { authUser } = useAuthContext();

  const items = [
    {
      name: "Users",
      number: authUser?.totalUser,
      path: "",
    },
    {
      name: "Customers",
      number: authUser?.totalCustomers,
      path: "",
    },
    {
      name: "Vendors",
      number: authUser?.totalVendors,
      path: "",
    },
    {
      name: "Restaurant Owners",
      number: authUser?.totalRestautrantVendors,
      path: "",
    },
    {
      name: "Hotel Owners",
      number: authUser?.totalHotelVendors,
      path: "",
    },
    {
      name: "Taxi Drivers",
      number: authUser?.totalTaxiVendors,
      path: "",
    },
    {
      name: "Car Rentors",
      number: authUser?.totalCarVendors,
      path: "",
    },
    {
      name: "Admins",
      number: 1,
      path: "/",
    },
  ];

  return (
    <div>
      {/* Stats */}
      {authUser && (
        <div className="mt-8">
          <div className="flex flex-row items-center my-4">
            <FaUsers className="text-3xl  text-primary  " />
            <h1 className="text-4xl font-semibold ml-4">Users</h1>
          </div>
          <div className="grid lg:grid-cols-4 lg:grid-rows-1  xs:grid-cols-2 xs:grid-rows-2   gap-4">
            {items.map((item, index) => (
              <Link to={`/`} key={index}>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <div>
                    <p className="mb-2 text-sm font-regular text-gray-600 dark:text-gray-400">
                      {item.name}
                    </p>
                    <p className="text-3xl text-gray-700 dark:text-gray-200 text-primary font-bold">
                      {item?.number?.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
