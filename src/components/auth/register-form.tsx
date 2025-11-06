/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router";
import Input from "../common/ui/inputs/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";

import { registerSchema } from "../../schema/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../api/auth.api";
import toast from "react-hot-toast";
import type { IRegister } from "../../@types/auth.types";

const RegisterForm = () => {
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      confirm_password: "",
      phone: "",
    },
    resolver: yupResolver(registerSchema),
  });

  //  using mutation hook
  const { mutate } = useMutation({
    mutationFn: registerUser,
    onSuccess: (Response) => {
      console.log(Response);
      toast.success(Response?.message || "Account Registered", { icon: "👍🏼" });
      Navigate("/sign-in", {
        replace: true,
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error?.message || " Something went wrong", { icon: "🤨☹️" });
    },
  });

  const onSubmit = (data: IRegister) => {
    mutate(data);
  };

  return (
    <div className="mt-6 w-full h-full">
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
        <div className="w-full h-full flex flex-col gap-8">
          {/* first & last name */}
          <div className="grid grid-cols-2 gap-3">
            {/* first Name */}

            <Input
              required
              name="first_name"
              error={errors?.first_name?.message}
              register={register}
              label="First Name"
              id="first_name"
              placeholder="John"
            />
            {/* last Name */}
            <Input
              required
              label="Last Name"
              id="last_name"
              error={errors?.last_name?.message}
              register={register}
              name="last_name"
              placeholder="Doe"
            />
          </div>

          {/* email input */}
          <Input
            required
            name="email"
            error={errors?.email?.message}
            register={register}
            label="Email"
            id="email"
            placeholder="johndoe@gmail.com"
            type="email"
          />

          {/* password input */}
          <Input
            required
            name="password"
            error={errors?.password?.message}
            register={register}
            label="Password"
            id="password"
            placeholder="xxxxxxxxxxx"
            type="password"
          />

          {/* confirm password input */}
          <Input
            required
            name="confirm_password"
            error={errors?.confirm_password?.message}
            register={register}
            label="Retype Password"
            id="confirm_password"
            placeholder="xxxxxxxxxxx"
            type="password"
          />

          {/* phone */}
          <Input
            name="phone"
            error={errors?.phone?.message}
            register={register}
            label="Phone Number"
            id="phone"
            placeholder="9800000000"
            type="text"
          />
        </div>

        <div className="w-full flex justify-center items-center">
          <button className="w-full cursor-pointer text-center text-white font-bold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700  mt-10 py-3.5 rounded-md">
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-center mt-2 text-gray-700">
            Already have an Account?
            <Link to={"/sign-in"}>
              <span className="cursor-pointer text-blue-600 mx-2 font-semibold">
                Sign In
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
