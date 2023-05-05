import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import UserDetailsForms from "./UserDetailsForm/UserDetailsForm";

const UserDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="container mx-auto px-3 sm:px-5">
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/279ZRRB/about-banner.jpg)`,
        }}
        className="h-[50vh] flex justify-center items-center bg-[#000000] bg-opacity-[0.5] bg-blend-multiply bg-cover bg-center"
      >
        <h2 className="font-extrabold text-[32px] text-[#FACC15]">
          User Details
        </h2>
      </div>
      <div className="py-16 sm:py-24">
        <div className="text-right border-r-4 border-[#1d4ed8] pr-3 mb-16">
          <h2 className="font-bold text-2xl sm:text-4xl">My Profile</h2>
          <p className="font-medium text-lg mt-2 text-[#1d4ed8]">
            From Our Kitchen to Yours
          </p>
        </div>
        <div className="">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="p-5 object-cover rounded-[50%]">
              {user.photoURL ? (
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-[200px] h-[200px] sm:h-[250px] sm:w-[250px] rounded-[50%] object-cover"
                />
              ) : (
                <FaUserCircle
                  className="text-[200px] sm:text-[250px]"
                  title={user?.displayName || "Anonymous User"}
                />
              )}
            </figure>
            <div className="card-body lg:flex-row justify-between items-center gap-6">
              <div className="">
                <div>
                  <h3>Name</h3>
                  <h2 className="card-title">{user?.displayName}</h2>
                </div>
                <div>
                  <h3>Email Address</h3>
                  <h2 className="card-title">{user?.email}</h2>
                </div>
              </div>
              <div className=" mx-auto w-full max-w-xs"></div>
              <div className="card-actions justify-center">
                <UserDetailsForms></UserDetailsForms>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
