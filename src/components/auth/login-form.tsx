import { Link } from "react-router";
import Input from "../common/ui/inputs/input";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../common/ui/buttons/buttons";
import { LiaSignInAltSolid } from "react-icons/lia";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
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

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
  };

  return (
    <div className="mt-5 w-full h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
        <div className="w-full h-full flex flex-col gap-5">
          {/* Email input */}
          <Input
            error={errors?.email?.message}
            name="email"
            register={register}
            label="Email"
            id="email"
            placeholder="your@gmail.com"
            type="email"
          />

          {/* Password input */}
          <Input
            error={errors?.password?.message}
            name="password"
            register={register}
            label="Password"
            id="password"
            placeholder="xxxxxxxxxxx"
            type="password"
          />
        </div>

        {/* Sign in button */}
        <div className="w-full mt-4">
          <Button
            label="Sign In"
            type="submit"
            icon={<LiaSignInAltSolid size={18} />}
          />
        </div>

        {/* Sign up link */}
        <div>
          <p className="text-center mt-2 text-gray-700">
            Don’t have an account?
            <Link to="/sign-up">
              <span className="cursor-pointer text-blue-600 mx-2 font-semibold">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
