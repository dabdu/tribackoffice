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

export default function Reservations() {
  const [loading, setLoading] = useState(false);
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getReservations = async () => {
      const res = await api.get(`reservations`, {
        headers: header(),
      });
      const data = await res.data;
      console.log(data);
      if (data.length > 0) {
        setReservations(data);
      }
      setLoading(false);
    };

    getReservations();
  }, []);
  return (
    <div>
      <div className="text-xl pt-1">Reservations({reservations?.length})</div>
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
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Restaurant
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Persons
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Check IN Date
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Check IN Time
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
                {reservations.length &&
                  reservations.map((item) => (
                    <tr
                      key={item?._id}
                      className="bg-white border-b border-b-blue-400 dark:bg-gray-800 dark:border-gray-700 pt-8  hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                      onClick={() =>
                        navigate(`/reservation-details/${item?._id}`)
                      }
                    >
                      <TableData>{item?.userId?.name}</TableData>
                      <TableData>
                        {item?.restaurantId?.restaurantName}
                      </TableData>
                      <TableData>{item?.reservePersons}</TableData>
                      <TableData>
                        {getWordMonthDate(item?.checkInDate)}
                      </TableData>
                      <TableData>{covertedTime(item?.checkInTime)}</TableData>
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
