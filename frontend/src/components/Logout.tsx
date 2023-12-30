import { Button } from "@/components/ui/button";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import { toast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const onClick = () => {
    signOut(auth)
      .then(() => {
        toast({
          variant: "success",
          title: "Success!",
          description: "Logged out successfully.",
        });
        navigate("/login");
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh Oh!",
          description: "Something went wrong. Try again.",
        });
        console.log(error);
      });
  };

  return (
    <div>
      <Button onClick={onClick}>Logout</Button>
    </div>
  );
};

export default Logout;
