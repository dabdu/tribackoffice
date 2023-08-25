import React from "react";
import { InputField } from "../../Form";
import { toast } from "react-toastify";

const StepOne = ({ formData, setFormData, handleChange, onActiveStepTwo }) => {
  const { firstName, lastName, email, phoneNumber } = formData;
  function onHandleNext() {
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
      onActiveStepTwo();
    }
  }
  return (
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
        {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <InputField
            title={"Password"}
            placeholder={"Password"}
            nameID={"password"}
            value={password}
            onHandleChange={handleChange}
            type={"password"}
          />
          <InputField
            title={"Confirm Password"}
            placeholder={"Confirm Password"}
            nameID={"confirmPassword"}
            value={confirmPassword}
            onHandleChange={handleChange}
            type={"password"}
          />
        </div> */}
      </div>
      <div className="flex flex-row justify-end items-end my-5">
        <button
          className="bg-primary px-8 py-3 text-white rounded-lg"
          onClick={() => onHandleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
