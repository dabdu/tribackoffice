import { useEffect, useState } from "react";
import { api, header } from "../constants/lib/axiosInstance";

const useOrderDetails = (id) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const singleOrder = async (id) => {
    try {
      setLoading(true);
      const res = await api.get(`order/${id}`, {
        headers: header(),
      });

      const data = await res.data;
      // console.log(data);
      setOrderDetails(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    id && singleOrder(id);
  }, [id]);

  return { orderDetails };
};

export default useOrderDetails;
