"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";
import { z } from "zod";
import { userSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";

const SignOutPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const signOutUser = () => {
    Cookies.remove("jwtToken");
    type UserType = z.infer<typeof userSchema>;
    const user: UserType = {
      firstName: "",
      lastName: "",
      email: "",
      userId: "",
      userRoll: "",
      jwtToken: "",
    };
    dispatch(setUser(user));
    router.push("/");
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-center items-center h-screen">
        <Button
          onClick={signOutUser}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default SignOutPage;
