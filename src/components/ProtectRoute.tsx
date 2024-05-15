"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";
import Cookies from "js-cookie";
import { verifyAndDecodeToken } from "@/lib/utils";
import { z } from "zod";
import { userSchema } from "@/lib/schemas";

const ProtectRoute: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  async function updateStoreWithUserDetails(jwtToken: string) {
    const decodedToken = await verifyAndDecodeToken(jwtToken);
    // console.log("decodedToken = ", decodedToken);

    type UserType = z.infer<typeof userSchema>;

    if (decodedToken) {
      const user: UserType = {
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        email: decodedToken.email,
        userId: decodedToken.userId,
        userRoll: decodedToken.userRoll,
        jwtToken: jwtToken,
      };
      dispatch(setUser(user));
    }
  }

  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");
    console.log("jwtToken in cookie = ", jwtToken);
    if (jwtToken) {
      updateStoreWithUserDetails(jwtToken);
    } else {
      //TODO: Uncomment this line when you are ready to protect the route
      // console.log("No JWT token found in cookie");
      // router.push("/sign-in");
    }
  }, []);

  return <div></div>;
};

export default ProtectRoute;
