import { useEffect, useState } from "react";
import { api, header } from "../constants/lib/axiosInstance";

const useReservationDetails = (id) => {
  const [reservationDetails, setReservationDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const singleReservation = async (id) => {
    try {
      setLoading(true);
      const res = await api.get(`reservation/${id}`, {
        headers: header(),
      });

      const data = await res.data;
      // console.log(data);
      setReservationDetails(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    id && singleReservation(id);
  }, [id]);

  return { reservationDetails };
};

export default useReservationDetails;
