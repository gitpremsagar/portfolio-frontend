import { Button } from "@/components/ui/button";
import Link from "next/link";
const SignUpSuccessful: React.FC = () => {
  return (
    <div>
      <h1>Sign Up Successful</h1>
      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
    </div>
  );
};

export default SignUpSuccessful;
