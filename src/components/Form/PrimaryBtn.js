import React from "react";

const PrimaryBtn = ({ color, text, onBtnClick, width }) => {
  return (
    <button
      // type="submit"
      onClick={onBtnClick}
      className={`${color ? color : "bg-primary"} ${
        width ? "w-[" + width + "px]" : "w-full"
      } transition cursor-pointer duration-200  focus:ring-opacity-50 text-white py-2 px-2 rounded-lg text-xs shadow-sm hover:shadow-md font-semibold text-center inline-block`}
    >
      <div>
        <span className="inline-block text-center">{text}</span>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg> */}
      </div>
    </button>
  );
};

export default PrimaryBtn;
