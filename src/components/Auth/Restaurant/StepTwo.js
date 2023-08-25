import React, { useState } from "react";
import { states } from "../../../constants/lib/statesandlga";
import { InputField } from "../../Form";
import { toast } from "react-toastify";

const StepTwo = ({ formData, handleChange, setFormData, onActiveStepOne }) => {
  const [filteredLga, setFilteredLga] = useState([]);
  const { gender, State, town, address, zipCode } = formData;

  // const inputClass =
  //   "text-sm bg-gray-50 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  const labelClass = "block text-gray-700 mb-2 text-xs";
  const inputClass =
    "block text-xs py-3 px-2 rounded-sm w-full shadow-xs border border-gray";
  const handleChangeState = (itemValue) => {
    const filteredCity = states.find((item) => item.state === itemValue);
    const newFilteredCity = filteredCity === undefined ? "" : filteredCity.lgas;
    setFormData((prev) => ({
      ...prev,
      State: itemValue,
    }));
    setFilteredLga(newFilteredCity);
    return newFilteredCity;
  };
  async function onHandleSubmit() {
    if (gender === "" || State === "" || town === "" || address === "") {
      toast.error("Fill the required fields");
    } else {
      console.log(formData);
    }
  }
  return (
    <div>
      <div className="my-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* Gender */}
          <div className="p-2">
            <label className={labelClass}>Gender</label>
            <select
              value={gender}
              id="gender"
              name="gender"
              onChange={handleChange}
              className={inputClass}
            >
              <option value={""}>-- Gender --</option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </select>
          </div>
          {/* State */}
          <div className="p-2">
            <div>
              <label className={labelClass}>State</label>

              <select
                onChange={(e) => handleChangeState(e.target.value)}
                value={State}
                className={inputClass}
              >
                <option selected value="">
                  --
                </option>
                {states.map((opts) => (
                  <option value={opts.state}>{opts.state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* LGA */}
          <div className="p-2">
            <label className={labelClass}>City</label>

            <select
              value={town}
              id="town"
              name="town"
              onChange={handleChange}
              className={inputClass}
            >
              <option selected value="">
                City
              </option>
              {filteredLga.length &&
                filteredLga.map((opts) => <option value={opts}>{opts}</option>)}
            </select>
          </div>
          <InputField
            title={"Zip Code (Optional)"}
            placeholder={"Zip Code: 902101"}
            nameID={"zipCode"}
            value={zipCode}
            onHandleChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1">
          <InputField
            title={"Residential Address"}
            placeholder={"Residential Address"}
            nameID={"address"}
            value={address}
            onHandleChange={handleChange}
          />
        </div>
        <div className="flex flex-row justify-between items-end my-5">
          <button
            className="border border-primary px-8 py-3 bg-white text-primary rounded-lg"
            onClick={() => onActiveStepOne()}
          >
            Previous
          </button>
          <button
            className="bg-primary px-8 py-3 text-white rounded-lg"
            onClick={() => onHandleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
