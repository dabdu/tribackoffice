import React from "react";
import {
  covertedTime,
  getDateFromCreated,
  getWordMonthDate,
} from "../../constants/functions";

const ReservationInfoCard = ({ reservation }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-3">
        <p className="text-gray-600 py-1 text-xs">
          <span className="font-bold mr-1">Persons:</span>
          {reservation.reservePersons}
        </p>
        <p className="text-gray-600 py-1 text-xs">
          <span className="font-bold mr-1">Check-in Date:</span>{" "}
          {getWordMonthDate(reservation.checkInDate)}
        </p>
        <p className="text-gray-600 py-1 text-xs">
          <span className="font-bold mr-1">Check-in Time:</span>{" "}
          {covertedTime(reservation.checkInTime)}
        </p>
        <p className="text-gray-600 py-1 text-xs">
          <span className="font-bold mr-1">Status:</span>{" "}
          <span className="bg-primary rounded-sm px-2 py-1 text-white text-xs">
            {reservation.status}
          </span>
        </p>
        <p className="text-gray-600 py-1 text-xs">
          <span className="font-bold mr-1">Reseravtion Date:</span>{" "}
          {getDateFromCreated(reservation.createdAt)}
        </p>
      </div>
    </div>
  );
};

export default ReservationInfoCard;
