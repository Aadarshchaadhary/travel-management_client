import RegisterFrom from "../../components/auth/register-form";

const RegisterPage = () => {
  return (
    <main className="h-full w-full flex items-center justify-center">
      <div className=" border border-grey-400 rounded-lg   min-w-[600px] py-5 px-6 bg-white">
        <div>
          <h1 className="mx-auto text-center font-bold text-3xl text-blue-700">
            Sign Up
          </h1>
          <p className="text-center mt-1 text-[16px] text-gray-600">
            Create new Account
          </p>
        </div>
        {/* {login forom} */}
        <RegisterFrom />
      </div>
    </main>
  );
};
export default RegisterPage;
