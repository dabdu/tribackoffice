import React from "react";
import { useParams } from "react-router";
import useReservationDetails from "../../hooks/useReservationDetails";
import {
  ReservationInfoCard,
  RestaurantInfoCard,
  UserInfoCard,
} from "../../components/Cards";
import { Spinner } from "../../components/Generic";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const ReservationDetails = () => {
  const { id } = useParams();
  const { loading, reservationDetails } = useReservationDetails(id);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="mt-4">
        <div className="flex items-center mb-5">
          <Link
            className="flex items-center cursor-pointer mr-4"
            to={`/reservations`}
          >
            <AiOutlineLeft color={"black"} size={25} />
            <p className="text-primary">Back</p>
          </Link>
          <h1 className="text-lg font-semibold ">Reservation Details</h1>
        </div>
      </div>
      {reservationDetails && (
        <div className="grid grid-cols-3 gap-4 p-4">
          {/* Reservation Details */}
          <div>
            <h1 className="font-bold text-lg my-2">Reservation</h1>
            <ReservationInfoCard reservation={reservationDetails} />
          </div>
          {/* User Details */}
          <div>
            <h1 className="font-bold text-lg my-2">Customer</h1>
            <UserInfoCard user={reservationDetails?.userId} />
          </div>
          {/* Restaurant Details */}
          <div>
            <h1 className="font-bold text-lg my-2">Restaurant</h1>
            <RestaurantInfoCard restaurant={reservationDetails?.restaurantId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationDetails;
