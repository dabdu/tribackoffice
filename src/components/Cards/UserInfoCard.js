import React from "react";

const UserInfoCard = ({ user }) => {
  console.log(user);
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img
          className="h-32 w-full object-cover"
          src={user.profileImg}
          alt="Profile"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-x-0 top-8 flex justify-center">
          <img
            className="h-24 w-24 rounded-full border-4 border-white"
            src={user.profileImg}
            alt="Profile"
          />
        </div>
      </div>
      <div className="px-4 py-3">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {user.name}
        </h2>
        <p className="text-gray-600 text-xs py-1">
          <span className="font-bold mr-1">Email:</span>
          {user.email}
        </p>
        <p className="text-gray-600 text-xs py-1">
          <span className="font-bold mr-1">Phone Number:</span>
          {user.phoneNumber}
        </p>
        <div className="mt-2">
          <span
            className={`px-2 py-1 text-xs rounded-sm ${
              user.userStatus === "active"
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {user.userStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
