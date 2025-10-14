import { Link } from "react-router";
import Input from "../common/ui/buttons/inputs/input";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  console.log(errors);

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const onChange = (e: any) => {
  //   console.log(e.target.value, e.target.name);

  //   setFormData((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // };

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
  };

  return (
    <div className="mt-5 w-full h-full ">
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full h-full ">
        <div className="w-full h-full flex flex-col gap-5">
          {/* Email input */}
          <Input
            name={"email"}
            register={register}
            label="Email"
            id="email"
            placeholder="your@gmail.com"
            type="email"
          />

          {/* Password input */}
          <Input
            name={"password"}
            register={register}
            label="Password"
            id="password"
            placeholder="xxxxxxxxxxx"
            type="password"
          />
        </div>

        <div className="w-full">
          <button
            type="submit"
            className=" cursor-pointer text-center text-white font-bold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700 w-full mt-10 py-3.5 rounded-md"
          >
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
