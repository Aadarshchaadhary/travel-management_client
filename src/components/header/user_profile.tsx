import React from "react";

const UserProfile = () => {
  return (
    <div className="flex items-center gap-2 min-w-[200px]">
      {/* image */}
      <div className="h-14 w-14 border-2 border-b-blue-500 rounded-full p-0.5 overflow-clip">
        <img
          src="/images.png"
          alt="profile image"
          className="h-full w-full rounded-full"
        />
      </div>
      <div>
        <div>
          <p className="text-lg font-semibold text-blue-600 ">Aadarsh chy</p>
        </div>
        <div>
          <p className="text-[16px] text-red-500">LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
