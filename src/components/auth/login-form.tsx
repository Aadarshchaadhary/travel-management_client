import { Link, useNavigate } from "react-router";
import Input from "../common/ui/inputs/input";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../common/ui/buttons/buttons";
import { LiaSignInAltSolid } from "react-icons/lia";

import { loginSchema } from "../../schema/auth.schema";
import { LoginUser } from "../../api/auth.api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { ILogin } from "../../@types/auth.types";
import { useAuth } from "../../context/auth.context";

const LoginForm = () => {
  const Navigate = useNavigate();
  const { setUser } = useAuth();

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

  //  using mutation hook
  const { mutate } = useMutation({
    mutationFn: LoginUser,
    onSuccess: (Response) => {
      console.log(Response);
      // ! on success naviagte to home page
      toast.success(Response?.message || "Login Successfull", { icon: "👍🏼" });
      setUser(Response.data);
      Navigate("/", {
        replace: true,
      });
    },

    onError: (error) => {
      console.log(error);
      toast.error(error?.message || " Something went wrong", {
        icon: "❌🤨☹️",
      });
    },
  });

  const onSubmit = (data: ILogin) => {
    mutate(data);
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
