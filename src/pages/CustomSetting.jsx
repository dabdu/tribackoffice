import React, { useEffect, useState } from "react";
import { PrimaryBtn } from "../components/Form";
import { Spinner } from "../components/Generic";
import { api, header } from "../constants/lib/axiosInstance";
import { toast } from "react-toastify";

const CustomSetting = () => {
  const [loading, setLoading] = useState(false);
  const [deliveryChargesPerMile, setDeliveryChargesPerMile] = useState(null);
  const getDeliveryCharges = async () => {
    try {
      setLoading(true);
      const res = await api.get(`delivery-charges`, {
        headers: header(),
      });

      const data = await res.data;
      console.log(data);
      setDeliveryChargesPerMile(data.price);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  async function onMountFunction() {
    await getDeliveryCharges();
  }
  useEffect(() => {
    onMountFunction();
  }, []);
  async function onDeliveryChargesPerMile() {
    setLoading(true);
    api
      .put(
        "/delivery-charge",
        { deliveryChargesPerMile },
        {
          headers: header(),
        }
      )
      .then(async (res) => {
        toast.success("Delivery Charges Updated Successfully");
        await getDeliveryCharges();
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
      .finally(() => setLoading(false));
  }

  if (loading) return <Spinner />;
  return (
    <div>
      {/* Delivery Fees */}
      <div className="items-center w-[20%]">
        <label className="font-regular text-lg text-black text-gray-600 pb-1 block">
          Delivery Charges Per Mile
        </label>
        <input
          type="text"
          value={deliveryChargesPerMile}
          onChange={(e) => setDeliveryChargesPerMile(e.target.value)}
          pattern="[0-9]*" // Only accept numbers
          title="Numbers Only" // Show tooltip for invalid input
          required
          className="border rounded-md px-3 py-3 mt-1 mb-5 text-sm w-full"
        />
        <PrimaryBtn text={"Update"} onBtnClick={onDeliveryChargesPerMile} />
      </div>
    </div>
  );
};

export default CustomSetting;
