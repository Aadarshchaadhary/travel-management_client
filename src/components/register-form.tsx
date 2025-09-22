import { LuAsterisk } from "react-icons/lu";

const RegisterFrom = () => {
  return (
    <div className="mt-5 w-full h-full ">
      <form className=" w-full h-full ">
        <div className="w-full h-full  flex flex-col gap-5.5">
          <div className="grid grid-cols-2  gap-3">
            {/* {First name} */}
            <div>
              <div className="flex">
                <label
                  className="text-[16px] text-grey-600 font-semibold"
                  htmlFor="First_name"
                >
                  First Name
                </label>
                <LuAsterisk className=" text-red-500" />
              </div>
              <input
                className=" mt-1 w-full py-2.5 px-1.5  rounded-md border border-gray-300 placeholder:text-[16px] placeholder:text-gray-900"
                placeholder="Enter you Name"
                id="First_name"
              />
            </div>
            {/* Last_name */}
            <div>
              <div className="flex">
                <label
                  className="text-[16px] text-grey-600 font-semibold"
                  htmlFor="Last_name"
                >
                  Last Name
                </label>
                <LuAsterisk className=" text-red-500" />
              </div>
              <input
                className=" mt-1 w-full py-2.5 px-1.5  rounded-md border border-gray-300 placeholder:text-[16px] placeholder:text-gray-900"
                placeholder="Enter you Name"
                id="last_name"
              />
            </div>
          </div>
          {/* {email input,password} */}
          <div>
            <div className="flex">
              <label
                className="text-[16px] text-grey-600 font-semibold"
                htmlFor="Email"
              >
                Email
              </label>
              <LuAsterisk className=" text-red-500" />
            </div>
            <input
              className=" mt-1 w-full py-2.5 px-1.5  rounded-md border border-gray-300 placeholder:text-[16px] placeholder:text-gray-900"
              placeholder="Enter your Email"
              id="Email"
            />
          </div>
          <div>
            <div className="flex">
              <label
                className="text-[16px] text-grey-600 font-semibold"
                htmlFor="Email"
              >
                password
              </label>
              <LuAsterisk className=" text-red-500" />
            </div>
            <input
              className=" mt-1 w-full py-2.5 px-1.5  
              rounded-md 
              border border-gray-300 
              placeholder:text-[16px]
               placeholder:text-gray-900"
              placeholder="Enter your password"
              type="password"
              id="password"
            />
          </div>
          {/* confirm password */}
          <div>
            <div className="flex">
              <label
                className="text-[16px] text-grey-600 font-semibold"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <LuAsterisk className=" text-red-500" />
            </div>
            <input
              className=" mt-1 w-full py-2.5 px-1.5  
              rounded-md 
              border border-gray-300 
              placeholder:text-[16px]
               placeholder:text-gray-900"
              placeholder="Enter your password"
              type="password"
              id=" confirm_password"
            />
          </div>
        </div>
        {/* PHONE NUMBER */}
        <div className="mt-5">
          <div>
            <label
              className="text-[16px] text-grey-600 font-semibold"
              htmlFor="Phone"
            >
              Phone Number
            </label>
          </div>
          <input
            className=" mt-1 w-full py-2.5 px-1.5  rounded-md border border-gray-300 placeholder:text-[16px] placeholder:text-gray-900"
            placeholder="Enter you Number"
            id="Phone"
          />
        </div>
        <div className="w-full">
          <button className=" cursor-pointer text-center text-white font-bold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700 w-full mt-10 py-3.5 rounded-md">
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-center mt-2 text-gray-700">
            Already have an Account?
            <span className="cursor-pointer text-blue-600 mx-2  font-semibold">
              sign In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
export default RegisterFrom;
