import { useState } from "react";
import { Link } from "react-router";
import Input from "../common/ui/buttons/inputs/input";

const LoginFrom = () => {
  const [formData, detFormData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e: any) => {
    console.log(e);
  };
  return (
    <div className="mt-5 w-full h-full ">
      <form className=" w-full h-full ">
        <div className="w-full h-full flex flex-col gap-5">
          {/* Email input */}
          <Input
            onChange={onChange}
            label="Email"
            id="email"
            placeholder="your@gmail.com"
            type="email"
          />

          {/* Password input */}
          <Input
            onChange={onChange}
            label="Password"
            id="password"
            placeholder="xxxxxxxxxxx"
            type="password"
          />
        </div>

        <div className="w-full">
          <button className=" cursor-pointer text-center text-white font-bold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700 w-full mt-10 py-3.5 rounded-md">
            Sign In
          </button>
        </div>
        <div>
          <p className="text-center mt-2 text-gray-700">
            Don`t have an Account?
            <Link to={"/sign-up"}>
              <span className="cursor-pointer text-blue-600 mx-2  font-semibold">
                sign up
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginFrom;
