import { useClerk } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { signOut } = useClerk();
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => signOut(() => navigate("/login"))}>Logout</Button>
    </div>
  );
};

export default Logout;
