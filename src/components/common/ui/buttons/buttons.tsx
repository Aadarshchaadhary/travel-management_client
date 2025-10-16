import React from "react";
import { LiaSignInAltSolid } from "react-icons/lia";

interface IProps {
  label: string;
  type?: "submit" | "reset" | "button";
  icon?: React.ReactNode;
}

const Button: React.FC<IProps> = ({ label, type = "button" }) => {
  return (
    <div className="w-full">
      <button
        type={type}
        className="cursor-pointer text center text-white 
        font-bold tex-lg transition all duration-300 bg-blue-700 hover:bg-blue-700 w-full mt-10 py-3.5"
        rounded-md
      >
        <div>LiaSignInAltSolid size={26}</div>
        <span> {label}</span>
      </button>
    </div>
  );
};

export default Button;
