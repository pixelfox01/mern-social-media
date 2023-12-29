import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppLogo from "@/utils/AppLogo";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[75%] max-w-[20rem]">
        <div className="flex flex-col items-center  border-2 py-5 mt-10">
          <div className="flex flex-col items-center w-[75%]">
            <AppLogo />
            <form className="flex flex-col items-center gap-2 text-sm w-full">
              <Input
                // className="border p-2 rounded-sm w-full"
                type="text"
                placeholder="Email"
              />
              <Input
                // className="border p-2 rounded-sm w-full"
                type="password"
                placeholder="Password"
              />
              <Button className="rounded-md bg-sky-500 text-white w-full mt-2 py-2 font-semibold">
                Log in
              </Button>
            </form>
            <div className="flex justify-between w-full items-center my-3">
              <hr className="border-t-2 w-full inline" />
              <div className="mx-5 text-sm font-semibold text-slate-600">
                OR
              </div>
              <hr className="border-t-2 w-full inline" />
            </div>
            <div className="flex justify-center">
              <Link to="#" className="flex gap-2">
                <IconBrandGoogleFilled />
                <p>Log in with Google</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-2 mt-3 py-5">
          <p className="text-sm text-slate-600 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-sky-500 font-semibold cursor-pointer"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
