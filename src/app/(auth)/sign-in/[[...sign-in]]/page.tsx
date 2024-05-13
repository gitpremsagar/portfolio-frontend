"use client";
import { Form } from "@/components/ui/form";
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

const Singin: React.FC = () => {
  const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmitHandler(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  // log form
  // console.log("form", form);

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
                </FormItem>
              );
            }}
          />
          <Button className="mt-5" type="submit">
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Singin;
