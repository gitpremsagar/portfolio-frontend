import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";
import { USERS_API_ENDPOINT } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function verifyAndDecodeToken(token: string) {
  try {
    const response = await axios.post(`${USERS_API_ENDPOINT}/decode-token`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response.data;
  } catch (error: any) {
    console.log("error verifying token = ", error);
    return null;
  }
}

