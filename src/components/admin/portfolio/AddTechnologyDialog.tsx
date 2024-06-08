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
import { TechnologySchema } from "@/lib/types/technology.type";
import { TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { TECHNOLOGIES_API_ENDPOINT } from "@/lib/constants";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { userSchema } from "@/lib/schemas";
import { AiOutlineLoading } from "react-icons/ai";

type technologyType = z.infer<typeof TechnologySchema>;

export function AddTechnologyDialog({
  setTechnologies,
}: {
  setTechnologies: React.Dispatch<React.SetStateAction<technologyType[]>>;
}) {
  type UserType = z.infer<typeof userSchema>;
  interface UserState {
    user: UserType;
  }
  const user = useSelector((state: UserState) => state.user);

  const [postingTechCreateForm, setPostingTechCreateForm] = useState(false);
  const [errorPostingTechCreateForm, setErrorPostingTechCreateForm] =
    useState(false);
  const [errorMesssage, setErrorMessage] = useState("");

  const closeAddTechDialogRef = useRef<HTMLButtonElement>(null);
  async function handleCreateTechnology(newTechnology: technologyType) {
    setPostingTechCreateForm(true);
    try {
      const response = await axios.post(
        `${TECHNOLOGIES_API_ENDPOINT}`,
        newTechnology,
        {
          headers: {
            Authorization: `Bearer ${user.jwtToken}`,
          },
        }
      );
      setTechnologies((prevTechnologies) => [
        ...prevTechnologies,
        response.data,
      ]);
      setPostingTechCreateForm(false);
      setErrorPostingTechCreateForm(false);
      form.reset();

      // close the dialog
      closeAddTechDialogRef.current?.click();
    } catch (error) {
      console.error("error in adding technology ", error);
      setErrorPostingTechCreateForm(true);
      setErrorMessage("Error in adding technology");
      setPostingTechCreateForm(false);
    }
  }

  const form = useForm<technologyType>({
    resolver: zodResolver(TechnologySchema),
    defaultValues: {
      technologyId: "",
      technologyName: "",
      technologyDescription: "",
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          onClick={() => {
            form.reset();
          }}
          className="min-h-[130px] h-full w-full border border-1 border-gray-300 rounded-lg bg-gray-200 hover:bg-gray-300 p-2 text-gray-800 shadow-lg transition-colors duration-300 ease-in-out"
        >
          Add Technology
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <Form {...form}>
          <form
            className=""
            onSubmit={form.handleSubmit(handleCreateTechnology)}
          >
            <DialogHeader>
              <DialogTitle>Add</DialogTitle>
              <DialogDescription>
                Add a new technology to the portfolio.
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
              {errorPostingTechCreateForm && (
                <p className="text-red-600">{errorMesssage}</p>
              )}
              <Button
                type="submit"
                className="px-3"
                disabled={postingTechCreateForm}
              >
                {postingTechCreateForm ? (
                  <>
                    <AiOutlineLoading className="animate-spin" /> Adding
                  </>
                ) : (
                  "Add"
                )}
              </Button>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  ref={closeAddTechDialogRef}
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
