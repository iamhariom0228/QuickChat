import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {loading ? (
        <span className="loading loading-spinner-small"></span>
      ) : (
        <BiLogOut
          className="text-xl text-white cursor-pointer"
          onClick={logout}
        />
      )}
    </div>
  );
};

export default LogoutButton;
