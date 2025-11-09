import React from "react";
import type { IUser } from "../../@types/auth.types";

interface Iprops {
  user: IUser;
}

const UserProfile: React.FC<Iprops> = ({ user }) => {
  return (
    <div className="flex items-center gap-2 min-w-[200px]">
      {/* image */}
      <div className="h-14 w-14 border-2 border-b-blue-500 rounded-full p-0.5 overflow-clip">
        <img
          src={user.profile_image?.path ?? "/images.png"}
          alt="profile image"
          className="h-full w-full rounded-full"
        />
      </div>
      <div>
        <div>
          <p className="text-lg font-semibold text-blue-600 ">
            {user.first_name + " " + user.last_name}
          </p>
        </div>
        <div>
          <p className="text-[16px] text-red-500">LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
