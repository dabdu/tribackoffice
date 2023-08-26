import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import PulseLoader from "react-spinners/PulseLoader";
import { api, header } from "../../constants/lib/axiosInstance";
import { getDateFromCreated } from "../../constants/functions";
import { TableData } from "../../components/Layouts/Table";

export default function Restaurants() {
  const [loading, setLoading] = useState(false);
  const [resAdmins, setResAdmins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getResAdmins = async () => {
      const res = await api.get(`restaurants`, {
        headers: header(),
      });
      const data = await res.data;
      console.log(data);
      if (data.length > 0) {
        setResAdmins(data);
      }
      setLoading(false);
    };

    getResAdmins();
  }, []);
  return (
    <div>
      <div className="text-xl pt-1">Restaurant Admins({resAdmins?.length})</div>
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
                    Photo
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    City
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    State
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Opening Days
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Joined Date
                  </th>
                </tr>
              </thead>
              <tbody className=" pt-8">
                {resAdmins.length &&
                  resAdmins.map((item) => (
                    <tr
                      className="bg-white border-b border-b-blue-400 dark:bg-gray-800 dark:border-gray-700 pt-8  hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                      // onClick={() => navigate(`/householddetail/${farmer.UID}`)}
                    >
                      <TableData>
                        <img
                          src={item?.fImg}
                          className="h-[60px] w-[80px] rounded-lg"
                        />
                      </TableData>
                      <TableData>{item?.restaurantName}</TableData>
                      <TableData>{item?.address}</TableData>
                      <TableData>{`${item?.town}`}</TableData>
                      <TableData>{`${item?.state}`}</TableData>
                      <TableData>{`${item.openDaysStart} - ${item.openDaysEnd}`}</TableData>
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
