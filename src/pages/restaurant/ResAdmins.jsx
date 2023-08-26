import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import PulseLoader from "react-spinners/PulseLoader";
import { api, header } from "../../constants/lib/axiosInstance";
import { getDateFromCreated } from "../../constants/functions";
import { PrimaryBtn } from "../../components/Form";
import { toast } from "react-toastify";
import { Spinner } from "../../components/Generic";
import { TableData } from "../../components/Layouts/Table";

export default function ResAdmins() {
  const [loading, setLoading] = useState(false);
  const [resAdmins, setResAdmins] = useState([]);
  const [approveLoading, setApproveLoading] = useState(false);
  const navigate = useNavigate();
  const getResAdmins = async () => {
    setLoading(true);
    const res = await api.get(`res-admin`, {
      headers: header(),
    });
    const data = await res.data;
    // console.log(data);
    if (data.length > 0) {
      setResAdmins(data);
    }
    setLoading(false);
  };
  useEffect(() => {
    getResAdmins();
  }, []);
  async function onApproveUser(userID) {
    setApproveLoading(true);
    api
      .put(
        "restaurant/approve-admin",
        { userID },
        {
          headers: header(),
        }
      )
      .then(async (res) => {
        toast.success("Restaurant Vendor Approved Successfully");
        await getResAdmins();
        console.log(res.data);
        return res;
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.message === undefined) {
          toast.error(err.response.statusText);
        } else {
          toast.error(err.response.data.message);
        }
      })
      .finally(() => setApproveLoading(false));
  }
  async function onDeactivateUser(userID) {}
  if (approveLoading) {
    return <Spinner />;
  }
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
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Joined Date
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className=" pt-8">
                {resAdmins.length &&
                  resAdmins.map((item) => (
                    <tr
                      className="bg-white border-b border-b-slate-100 dark:bg-gray-800 dark:border-gray-700 pt-8  hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                      // onClick={() => navigate(`/householddetail/${farmer.UID}`)}
                    >
                      <TableData>
                        <img
                          src={item?.profileImg}
                          className="h-[40px] w-[45px] rounded-full"
                        />
                      </TableData>
                      <TableData>{item?.name}</TableData>
                      <TableData>{item?.email}</TableData>
                      <TableData>{item?.phoneNumber}</TableData>
                      <TableData>
                        {getDateFromCreated(item?.createdAt)}
                      </TableData>
                      <TableData>
                        <p
                          className={`${
                            item?.userStatus === "pending"
                              ? "bg-red-700"
                              : "bg-green-700"
                          } px-2 py-1 rounded-md text-white font-medium`}
                        >
                          {item?.userStatus}
                        </p>
                      </TableData>
                      <TableData>
                        {item?.userStatus === "pending" ? (
                          <PrimaryBtn
                            text={"Approve"}
                            color={"bg-green-600"}
                            onBtnClick={() => onApproveUser(item?._id)}
                          />
                        ) : (
                          <PrimaryBtn
                            text={"Deactivate"}
                            color={"bg-red-700"}
                            onBtnClick={() => onDeactivateUser(item?._id)}
                          />
                        )}
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
