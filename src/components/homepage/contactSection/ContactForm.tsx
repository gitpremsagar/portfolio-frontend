"use client";
import axios from "axios";
import { MESSAGES_API_ENDPOINT } from "@/lib/constants";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  const { toast } = useToast();
  const contactFormSchema = z.object({
    senderName: z
      .string()
      .min(2, { message: "Name should be atleast 2 characters long" }),
    senderEmail: z.string().email(),
    senderContactNumber: z.string().optional(),
    message: z
      .string()
      .min(10, { message: "Message should be atleast 10 characters long" }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      senderName: "",
      senderEmail: "",
      senderContactNumber: "",
      message: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    try {
      const response = await axios.post(MESSAGES_API_ENDPOINT, data);
      console.log(response);
      //   alert("Message Sent Successfully!");
      toast({
        title: "Hey!",
        description: "Message Sent Successfully!",
      });
    } catch (error) {
      console.error("Error in sending message ", error);
      alert("Error in sending message");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="senderName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="your name" {...field} />
              </FormControl>
              <FormDescription>Prem will know who you are.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="senderEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="your email" {...field} />
              </FormControl>
              <FormDescription>Prem will reply to this email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="senderContactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Contact Number</FormLabel>
              <FormControl>
                <Input placeholder="your contact number" {...field} />
              </FormControl>
              <FormDescription>
                Prem will call you on this number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  rows={10}
                  placeholder="your message"
                  {...field}
                />
              </FormControl>
              <FormDescription>Prem will read this message.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
