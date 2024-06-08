"use client";

import axios from "axios";
import { useEffect } from "react";
import { TECHNOLOGIES_API_ENDPOINT } from "@/lib/constants";
import { useDispatch } from "react-redux";
import { setTechnologies } from "@/redux/technologiesSlice";

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useDispatch();
  // fetch technologies
  useEffect(() => {
    async function fetchTechnologies() {
      try {
        const { data } = await axios.get(TECHNOLOGIES_API_ENDPOINT);
        dispatch(setTechnologies(data));
        // console.log("Fetched technologies", data);
      } catch (error) {
        console.error("Failed to fetch technologies", error);
      }
    }
    fetchTechnologies();
  }, []);
  return <>{children}</>;
}
