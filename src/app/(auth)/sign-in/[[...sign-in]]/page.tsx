"use client";
import { Form, FormMessage } from "@/components/ui/form";
import { FormField } from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form";
import { z } from "zod";
import axios from "axios";
import { USERS_API_ENDPOINT } from "@/lib/constants";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Singin: React.FC = () => {
  const router = useRouter();
  const [isPostingLoginFormData, setIsPostingLoginFormData] = useState(false);
  const [errorWhileLoggingIn, setErrorWhileLoggingIn] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const loginFormSchema = z.object({
    email: z.string().email().min(1, {
      message: "Email is required.",
    }),
    password: z.string().min(2, {
      message: "Password is required.",
    }),
  });

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmitHandler(values: z.infer<typeof loginFormSchema>) {
    // console.log(values);
    setIsPostingLoginFormData(true);
    try {
      const response = await axios.post(`${USERS_API_ENDPOINT}/login`, values);
      // setIsPostingLoginFormData(false);
      setErrorWhileLoggingIn(false);

      // Store JWT in a secure cookie
      Cookies.set("jwtToken", response.data, {
        secure: true,
        sameSite: "strict",
      });

      // Redirect to dashboard
      router.push("/dashboard");

      console.log(response);
    } catch (error: any) {
      setIsPostingLoginFormData(false);
      setErrorWhileLoggingIn(true);
      if (error.response.status === 401) {
        setLoginErrorMessage("Invalid email or password");
      }

      if (error.response.status === 500) {
        setLoginErrorMessage("Internal Server Error");
      }
    }
  }

  return (
    <div className="max-w-md mx-auto shadow-xl rounded-lg border border-gray-300 p-10 my-10">
      <h1 className="text-2xl font-semibold text-center">Sign In</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitHandler)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" type="email" {...field} />
                  </FormControl>
                  <FormDescription>Enter your email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} type="password" />
                  </FormControl>
                  <FormDescription>Enter your password.</FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div>
            <Button
              disabled={isPostingLoginFormData}
              className="mt-5"
              type="submit"
            >
              {isPostingLoginFormData ? "Logging In..." : "Log In"}
            </Button>
            {errorWhileLoggingIn && (
              <FormMessage>{loginErrorMessage}</FormMessage>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Singin;
