import Button from "@/components/Button";
import { useAuth } from "react-oidc-context";

function SignIn() {
  const auth = useAuth();

  const handleSignIn = () => {
    auth.signinRedirect();
  };

  return (
    <div className="flex-grow flex flex-col justify-center items-center ">
      <h2 className="font-semibold text-3xl">
        Please log in or create an account to work
      </h2>
      <Button
        className="bg-[#2A254B] rounded px-10 py-2  uppercase font-medium text-white mx-auto mt-8"
        onClick={handleSignIn}
      >
        Log In
      </Button>
    </div>
  );
}

export default SignIn;
