import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  if (userId) {
    navigate("/");
  }

  return <Outlet />;
};

export default AuthLayout;
