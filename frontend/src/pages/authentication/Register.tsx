import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppLogo from "@/components/AppLogo";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[75%] max-w-[20rem]">
        <div className="flex flex-col items-center border-2 py-5 mt-10">
          <div className="flex flex-col items-center w-[75%] gap-3">
            <AppLogo />
            <p className="text-center text-sm text-slate-500 font-semibold">
              Sign up to see photos and videos from your friends.
            </p>
            <Button className="rounded-md bg-sky-600 text-white w-full mt-2 py-2 font-semibold gap-2">
              <IconBrandGoogleFilled />
              <p>Log in with Google</p>
            </Button>
            <div className="flex justify-between w-full items-center my-3">
              <hr className="border-t-2 w-full inline" />
              <div className="mx-5 text-sm font-semibold text-slate-500">
                OR
              </div>
              <hr className="border-t-2 w-full inline" />
            </div>
            <form className="flex flex-col items-center gap-2 text-sm w-full">
              <Input type="text" placeholder="Email" />
              <Input type="text" placeholder="Full Name" />
              <Input type="text" placeholder="Username" />
              <Input type="password" placeholder="Password" />
              <Button className="rounded-md bg-sky-500 text-white w-full mt-2 py-2 font-semibold">
                Sign up
              </Button>
            </form>
          </div>
        </div>
        <div className="flex justify-center gap-1 text-sm border-2 mt-3 py-5">
          <p>Have an account?</p>
          <Link
            to="/login"
            className="text-sky-500 font-semibold cursor-pointer"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
