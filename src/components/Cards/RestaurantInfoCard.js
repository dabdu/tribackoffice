import React from "react";

const RestaurantInfoCard = ({ restaurant }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="h-32 w-full object-cover"
        src={restaurant.fImg}
        alt="Restaurant"
      />
      <div className="px-4 py-3">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {restaurant.restaurantName}
        </h2>
        <p className="text-gray-600 py- text-xs">
          <span className="font-bold mr-1">Address:</span>
          {restaurant.address}, {restaurant.town}, {restaurant.state}
        </p>
        <p className="text-gray-600 py-1 text-xs">
          <span className="font-bold mr-1">Opening Days:</span>
          Open: {restaurant.openDaysStart} - {restaurant.openDaysEnd}
        </p>
      </div>
    </div>
  );
};

export default RestaurantInfoCard;
