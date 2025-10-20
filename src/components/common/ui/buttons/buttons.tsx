import React from "react";
import { GiClick } from "react-icons/gi";

interface IProps {
  label: string;
  type?: "submit" | "reset" | "button";
  icon?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
  label,
  type = "button",
  icon = <GiClick size={26} />,
}) => {
  return (
    <div className="w-full">
      <button
        type={type}
        className="cursor-pointer text-center text-white font-bold text-lg transition-all
               duration-300 bg-blue-600 hover:bg-blue-700 w-full mt-10 py-3.5 rounded-md flex items-center justify-center gap-2"
      >
        {icon && <div>{icon}</div>}
        <span> {label}</span>
      </button>
    </div>
  );
};

export default Button;
