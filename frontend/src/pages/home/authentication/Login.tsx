import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[75%] max-w-[20rem]">
        <div className="flex flex-col items-center  border-2 py-5 mt-10">
          <div className="flex flex-col items-center w-[75%]">
            <h1 className="uppercase tracking-[0.2em] font-bold text-2xl m-8">
              voxels
            </h1>
            <form className="flex flex-col items-center gap-2 text-sm w-full">
              <input
                className="border p-2 rounded-sm w-full"
                type="text"
                placeholder="Email"
              />
              <input
                className="border p-2 rounded-sm w-full"
                type="password"
                placeholder="Password"
              />
              <button className="rounded-md bg-sky-500 text-white w-full mt-2 py-2 font-semibold">
                Log in
              </button>
            </form>
            <div className="flex justify-between w-full items-center my-3">
              <hr className="border-t-2 w-full inline" />
              <div className="mx-5 text-sm font-semibold text-slate-600">
                OR
              </div>
              <hr className="border-t-2 w-full inline" />
            </div>
            <div className="flex justify-center">
              {/* <a href="#" className="flex gap-2">
                <IconBrandGoogleFilled />
                <p>Log in with Google</p>
              </a> */}
              <Link to="/register" className="flex gap-2">
                <IconBrandGoogleFilled />
                <p>Log in with Google</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-2 mt-3 py-5">
          <p className="text-sm text-slate-600 text-center">
            Don't have an account?{" "}
            <span className="text-sky-500 font-semibold cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
