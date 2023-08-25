import React, { useState } from "react";
import { logo } from "../../constants/imports";
import { InputField } from "../../components/Form";
import { toast } from "react-toastify";
import { Spinner } from "../../components/Generic";
import axios from "axios";
import { userURL } from "../../constants/URLS";

export const RestaurantVendorRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const { firstName, lastName, email, phoneNumber } = formData;

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  async function onSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phoneNumber === ""
    ) {
      toast.error("All Fields Must be Filled");
    } else if (!emailRegex.test(email)) {
      toast.error("Please Enter a valid Email");
    } else {
      setLoading(true);
      axios
        .post(`${userURL}/user/restaurant`, formData)
        .then(() => {
          setLoading(false);
          toast.success(
            "Registration Successful, Check your Email for further Instructions"
          );
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
          });
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error?.response?.data?.message);
        });
    }
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-row items-center justify-center pt-28 mb-20">
      <div className="lg:w-[50%] md:w-[80%] sm:w-[310px] bg-white shadow-lg rounded-lg px-5">
        {/* Heading */}
        <div className="w-full flex flex-col items-center justify-center">
          <img src={logo} className="h-[50px] w-[50px] -mt-5" />
          <h1 style={{ color: "#002D3C" }} className=" text-xl font-bold">
            Triluxy
          </h1>
        </div>
        <h1 className="text-lg text-primary font-medium text-center">
          Restaurant Vendor Registration
        </h1>
        <h1 className="text-center text-md font-medium text-slate-700">
          Personal Information
        </h1>
        {/* Form Content */}
        <div>
          <div className="my-8">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <InputField
                title={"First Name"}
                placeholder={"First Name"}
                nameID={"firstName"}
                value={firstName?.trimEnd()}
                onHandleChange={handleChange}
              />
              <InputField
                title={"Last Name"}
                placeholder={"Last Name"}
                nameID={"lastName"}
                value={lastName?.trimEnd()}
                onHandleChange={handleChange}
              />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <InputField
                title={"Email Address"}
                placeholder={"Enter Email Address"}
                nameID={"email"}
                value={email?.trimEnd()}
                onHandleChange={handleChange}
                type={"email"}
              />
              <InputField
                title={"Phone Number"}
                placeholder={"Enter with country Code: 2347094757584"}
                nameID={"phoneNumber"}
                value={phoneNumber?.trimEnd()}
                onHandleChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-row justify-end items-end my-5">
            <button
              className="w-full bg-primary px-8 py-3 text-white rounded-lg"
              onClick={() => onSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
