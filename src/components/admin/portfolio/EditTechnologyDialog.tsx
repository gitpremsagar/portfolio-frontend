"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { TechonologySchema } from "@/lib/schemas";
import { TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { TECHNOLOGIES_API_ENDPOINT } from "@/lib/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { userSchema } from "@/lib/schemas";

type technologyType = z.infer<typeof TechonologySchema>;

export function EditTechnologyDialog({
  technology,
  setTechnologies,
}: {
  technology: technologyType;
  setTechnologies: React.Dispatch<React.SetStateAction<technologyType[]>>;
}) {
  type UserType = z.infer<typeof userSchema>;
  interface UserState {
    user: UserType;
  }
  const user = useSelector((state: UserState) => state.user);

  const [postingTechUpdateForm, setPostingTechUpdateForm] = useState(false);
  const [errorPostingTechUpdateForm, setErrorPostingTechUpdateForm] =
    useState(false);
  const [errorMesssage, setErrorMessage] = useState("");
  async function handleUpdateTechnology(updatedTechnology: technologyType) {
    setPostingTechUpdateForm(true);
    try {
      await axios.put(
        `${TECHNOLOGIES_API_ENDPOINT}/${updatedTechnology.technologyId}`,
        updatedTechnology,
        {
          headers: {
            Authorization: `Bearer ${user.jwtToken}`,
          },
        }
      );
      setTechnologies((prevTechnologies) =>
        prevTechnologies.map((technology) =>
          technology.technologyId === updatedTechnology.technologyId
            ? updatedTechnology
            : technology
        )
      );
      setPostingTechUpdateForm(false);
      setErrorPostingTechUpdateForm(false);
    } catch (error) {
      console.error("error in updating technology ", error);
      setErrorPostingTechUpdateForm(true);
      setErrorMessage("Error in updating technology");
      setPostingTechUpdateForm(false);
    }
  }

  const form = useForm<technologyType>({
    resolver: zodResolver(TechonologySchema),
    defaultValues: technology,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <Form {...form}>
          <form
            className=""
            onSubmit={form.handleSubmit(handleUpdateTechnology)}
          >
            <DialogHeader>
              <DialogTitle>Edit</DialogTitle>
              <DialogDescription>
                {technology.technologyDescription}
              </DialogDescription>
            </DialogHeader>

            <div className="sr-only">
              <FormField
                control={form.control}
                name="technologyId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technology ID</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter technology ID"
                        type="text"
                        {...field}
                        readOnly
                        disabled
                      />
                    </FormControl>
                    <FormDescription>
                      This ID will be used to identify the technology.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="technologyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technology Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter technology Name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This name will be displayed on projects.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="technologyDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technology Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter technology Descriotion"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the description of the technology
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="sm:justify-start mt-3">
              {errorPostingTechUpdateForm && (
                <p className="text-red-600">{errorMesssage}</p>
              )}
              <Button
                type="submit"
                className="px-3"
                disabled={postingTechUpdateForm}
              >
                {postingTechUpdateForm ? "Updating..." : "Update"}
              </Button>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
