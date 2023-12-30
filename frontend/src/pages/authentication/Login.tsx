import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input as Inputs } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import AppLogo from "@/utils/AppLogo";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "@/config/firebase";
import { useToast } from "@/components/ui/use-toast";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        toast({
          variant: "success",
          title: "Success!",
          description: "Logged in successfully. Redirecting...",
        });
        console.log(userCredentials);
        navigate("/");
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh Oh!",
          description: "Something went wrong. Check your credentials.",
        });
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[75%] max-w-[20rem]">
        <div className="flex flex-col items-center  border-2 py-5 mt-10">
          <div className="flex flex-col items-center w-[75%]">
            <AppLogo />
            <form
              className="flex flex-col items-center gap-2 text-sm w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Inputs
                // className="border p-2 rounded-sm w-full"
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <Inputs
                // className="border p-2 rounded-sm w-full"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
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
            <div className="flex flex-col gap-4 items-center">
              <Link to="#" className="flex gap-2">
                <IconBrandGoogleFilled />
                <p>Log in with Google</p>
              </Link>
              <Link to="#" className="text-xs">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-1 text-sm border-2 mt-3 py-5">
          <p>Don't have an account?</p>
          <Link
            to="/register"
            className="text-sky-500 font-semibold cursor-pointer"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
