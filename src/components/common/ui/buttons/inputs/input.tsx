/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { LuAsterisk } from "react-icons/lu";

interface IProps {
  label: string;
  id: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "date";
  onChange?: (e: any) => void;
}

const Input: React.FC<IProps> = ({
  id,
  label,
  type = "text",
  placeholder = "Enter something ",
  onChange,
}) => {
  return (
    <div>
      <div className="flex">
        <label className="text-[16px] text-gray-700 font-semibold" htmlFor={id}>
          {label}
        </label>
        <LuAsterisk className="text-red-500" />
      </div>
      <input
        className="focus:outline-blue-500 mt-1 w-full py-3 px-2 border  rounded-md border-gray-300 text-[16px] placeholder:text-[16px] placeholder:text-gray-400"
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        id={id}
      />
    </div>
  );
};

export default Input;
