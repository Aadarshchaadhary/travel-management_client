const LoginFrom = () => {
  return (
    <div className="mt-5 w-full h-full ">
      <form className=" w-full h-full ">
        <div className="w-full h-full  flex flex-col gap-5.5">
          {/* {email input,password} */}
          <div>
            <div>
              <label
                className="text-[16px] text-grey-600 font-semibold"
                htmlFor="Email"
              >
                Email
              </label>
            </div>
            <input
              className=" mt-1 w-full py-2.5 px-1.5  rounded-md border border-gray-300 placeholder:text-[16px] placeholder:text-gray-900"
              placeholder="Enter your Email"
              id="Email"
            />
          </div>
          <div>
            <div>
              <label
                className="text-[16px] text-grey-600 font-semibold"
                htmlFor="Email"
              >
                password
              </label>
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
        </div>
        <div className="w-full">
          <button className=" cursor-pointer text-center text-white font-bold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700 w-full mt-10 py-3.5 rounded-md">
            Sign In
          </button>
        </div>
        <div>
          <p className="text-center mt-2 text-gray-700">
            Don`t have an Account?
            <span className="cursor-pointer text-blue-600 mx-2  font-semibold">
              sign up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginFrom;
