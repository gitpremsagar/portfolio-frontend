"use client";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { USERS_API_ENDPOINT } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

const formSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // specify the field that the error message is attached to
    message: "Passwords must match.",
  });

const SignupPage: React.FC = () => {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null); //TODO: Handle error propoerly
  const [isPostingSignUpForm, setIsPostingSignUpForm] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmitHandler(values: z.infer<typeof formSchema>) {
    setIsPostingSignUpForm(true);
    try {
      const response = await axios.post(USERS_API_ENDPOINT, values);
      if (response.status === 201) {
        console.log(response.data);
        // Redirect to the sign-up successful page.
        router.push("sign-up/successful");
      }
    } catch (error) {
      setError((error as any).response.data);
      setIsPostingSignUpForm(false);
      console.error(error);
    }
  }

  return (
    <div className="max-w-md mx-auto shadow-xl rounded-lg border border-gray-300 p-10 my-10">
      <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormDescription>Your first name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormDescription>Your last name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirme Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Re-enter your password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Re-enter your password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPostingSignUpForm} type="submit">
            {isPostingSignUpForm ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignupPage;
