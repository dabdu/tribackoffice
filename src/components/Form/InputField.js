import React from "react";

const InputField = ({
  title,
  placeholder,
  type,
  nameID,
  value,
  onHandleChange,
  maxLength,
}) => {
  return (
    <div>
      <label className="block text-xs my-2">{title}</label>
      <input
        type={type ? type : "text"}
        id={nameID}
        name={nameID}
        value={value}
        placeholder={placeholder}
        // (e) => onHandleChange(nameID, e.target.value)
        onChange={onHandleChange}
        className=" block text-xs py-3 px-4 rounded-sm w-full shadow-xs border border-gray"
        maxLength={maxLength ? maxLength : ""}
      />
    </div>
  );
};

export default InputField;
