import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import Input from "../common/ui/inputs/input";
import Button from "../common/ui/buttons/buttons";

import { LiaSignInAltSolid } from "react-icons/lia";
import toast from "react-hot-toast";

import { loginSchema } from "../../schema/auth.schema";
import { loginUser as LoginUser } from "../../api/auth.api";
import { useAuth } from "../../context/auth.context";

import type { ILogin } from "../../@types/auth.types";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  // ⛳ Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  // 🚀 Login mutation
  const { mutate } = useMutation({
    mutationFn: LoginUser,

    onSuccess: (response) => {
      toast.success(response?.message || "Login Successful", { icon: "👍🏼" });

      // Save user to context
      setUser(response.data.user);

      // Redirect to homepage
      navigate("/", { replace: true });
    },

    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong", {
        icon: "❌🤨",
      });
    },
  });

  // 🔥 Form submission handler
  const onSubmit = (data: ILogin) => {
    mutate(data);
  };

  return (
    <div className="mt-5 w-full h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
        {/* Form Fields */}
        <div className="flex flex-col gap-5 w-full h-full">
          <Input
            error={errors?.email?.message}
            name="email"
            register={register}
            label="Email"
            id="email"
            placeholder="your@gmail.com"
            type="email"
          />

          <Input
            error={errors?.password?.message}
            name="password"
            register={register}
            label="Password"
            id="password"
            placeholder="********"
            type="password"
          />
        </div>

        {/* Submit Button */}
        <div className="w-full mt-4">
          <Button
            label="Sign In"
            type="submit"
            icon={<LiaSignInAltSolid size={18} />}
          />
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-2 text-gray-700">
          Don`t have an account?
          <Link to="/sign-up">
            <span className="cursor-pointer text-blue-600 mx-2 font-semibold">
              Sign Up
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
