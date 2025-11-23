import React from "react";
import type { IUser } from "../../@types/auth.types";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../api/auth.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/auth.context";

interface IProps {
  user: IUser;
}

const UserProfile: React.FC<IProps> = ({ user }) => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: (response) => {
      toast.success(response.message || "Successfully loggedout");
      setUser(null);
      navigate("/sign-in");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  if (isPending) {
    return (
      <div className="absolute inset-0 backdrop-blur-2xl flex justify-center items-center">
        <div className="h-14 w-[500px] content-center">
          <p>Loading....</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 min-w-[200px]">
      {/*image  */}
      <div className="h-14 w-14 border-2 border-blue-500 rounded-full p-0.5 overflow-clip">
        <img
          src={user.profile_image?.path ?? "/avatar.jpg"}
          alt="profile image"
          className="h-full w-full rounded-full"
        />
      </div>
      <div>
        <div>
          <p className="text-lg font-semibold text-blue-600">
            {user.first_name + " " + user.last_name}
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              mutate();
            }}
            className="text-[16px] text-red-500 cursor-pointer"
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
