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
import { ProjectSchema, TechnologySchema } from "@/lib/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  PROJECTS_API_ENDPOINT,
  TECHNOLOGIES_API_ENDPOINT,
} from "@/lib/constants";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { userSchema } from "@/lib/schemas";
import { AiOutlineLoading } from "react-icons/ai";
import { Checkbox } from "@/components/ui/checkbox";

type ProjectType = z.infer<typeof ProjectSchema>;
type TechnologyType = z.infer<typeof TechnologySchema>;

export function AddProjectDialog({
  setProjects,
}: {
  setProjects: React.Dispatch<React.SetStateAction<ProjectType[]>>;
}) {
  type UserType = z.infer<typeof userSchema>;
  interface UserState {
    user: UserType;
  }
  const user = useSelector((state: UserState) => state.user);

  // technologies
  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);
  const [loadingTechnology, setLoadingTechnology] = useState<boolean>(true);
  const [errorTechnology, setErrorTechnology] = useState<string | null>(null);

  // fetch technologies
  useEffect(() => {
    async function fetchTechnologies() {
      try {
        const response = await axios.get(TECHNOLOGIES_API_ENDPOINT);
        console.log("fetched technologies = ", response.data);
        setTechnologies(response.data);
        setLoadingTechnology(false);
        setErrorTechnology(null);
      } catch (error) {
        console.error("error in fetching technologies ", error);
        setLoadingTechnology(false);
        setErrorTechnology("Error in fetching technologies");
      }
    }
    fetchTechnologies();
  }, []);

  const [postingCreateProjectForm, setPostingCreateProjectForm] =
    useState(false);
  const [errorpostingCreateProjectForm, setErrorpostingCreateProjectForm] =
    useState(false);
  const [errorMesssage, setErrorMessage] = useState("");

  const closeAddProjectDialogRef = useRef<HTMLButtonElement>(null);
  async function handleCreateTechnology(newTechnology: ProjectType) {
    //insert list of technologies onto newTechnology form data
    const technologyCheckboxes = document.querySelectorAll(
      "input[name='techList']"
    );

    let techList: string[] = [];
    //loop through all the checkboxes and get the checked ones
    technologyCheckboxes?.forEach((item: any) => {
      if (item.checked) {
        techList.push(item.value);
      }
    });

    techList.forEach((techId) => {
      newTechnology.technologies.push({
        technologyId: techId,
        technologyName: "",
        technologyDescription: "",
      });
    });

    console.log("newTechnology = ", newTechnology);
    // return;
    setPostingCreateProjectForm(true);
    try {
      const response = await axios.post(
        `${PROJECTS_API_ENDPOINT}`,
        newTechnology,
        {
          headers: {
            Authorization: `Bearer ${user.jwtToken}`,
          },
        }
      );
      console.log("create proejct response = ", response.data);
      setProjects((prevTechnologies) => [...prevTechnologies, response.data]);
      setPostingCreateProjectForm(false);
      setErrorpostingCreateProjectForm(false);
      form.reset();

      // close the dialog
      closeAddProjectDialogRef.current?.click();
    } catch (error) {
      console.error("error in adding technology ", error);
      setErrorpostingCreateProjectForm(true);
      setErrorMessage("Error in adding technology");
      setPostingCreateProjectForm(false);
    }
  }

  const form = useForm<ProjectType>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      backendCodeLink: "",
      frontendCodeLink: "",
      projectDescription: "",
      projectId: "",
      projectName: "",
      projectLiveLink: "",
      projectImageLink: "",
      projectMockupImageLink: "",
      projectPosition: 0,
      technologies: [],
    },
  });

  return (
    <Dialog>
      {loadingTechnology ? (
        <p>Loading Technologies...</p>
      ) : errorTechnology ? (
        <p>{errorTechnology}</p>
      ) : (
        <DialogTrigger asChild>
          <button
            onClick={() => {
              form.reset();
            }}
            className="min-h-[130px] h-full w-full border border-1 border-gray-300 rounded-lg bg-gray-200 hover:bg-gray-300 p-2 text-gray-800 shadow-lg transition-colors duration-300 ease-in-out"
          >
            Add Project
          </button>
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-2xl">
        <Form {...form}>
          <form
            className=""
            onSubmit={form.handleSubmit(handleCreateTechnology)}
          >
            <DialogHeader>
              <DialogTitle>Add</DialogTitle>
              <DialogDescription>
                Add a new project to the portfolio.
              </DialogDescription>
            </DialogHeader>

            <div className="sr-only">
              <FormField
                control={form.control}
                name="projectId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technology ID</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter project ID"
                        type="text"
                        {...field}
                        readOnly
                        disabled
                      />
                    </FormControl>
                    <FormDescription>
                      This ID will be used to identify the project.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Project Name"
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
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Project Descriotion"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the description of the project
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectLiveLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Live Link</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Project Live Link"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the live link of the project
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="projectImageLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Image Link</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Project Image Link"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the image link of the project
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectMockupImageLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Mockup Image Link</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Project Mockup Image Link"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the mockup image link of the project
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="backendCodeLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Backend Code Link</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Backend Code Link"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the backend code link of the project
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="frontendCodeLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frontend Code Link</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Frontend Code Link"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the frontend code link of the project
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="projectPosition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Position</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Project Position"
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)} // Convert string to number here
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the position of the project
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormLabel>Technologies Used</FormLabel>
            <div className="grid grid-cols-3 gap-2">
              {technologies.length === 0 && (
                <p className="text-red-600">No technologies found</p>
              )}
              {technologies.map((technology) => (
                <div key={technology.technologyId} className="mt-2">
                  <Checkbox
                    id={`tech-${technology.technologyId}`}
                    name="techList"
                    value={technology.technologyId}
                    className="mr-2"
                  />
                  <label htmlFor={`tech-${technology.technologyId}`}>
                    {technology.technologyName}
                  </label>
                </div>
              ))}
            </div>
            <DialogFooter className="sm:justify-start mt-3">
              {errorpostingCreateProjectForm && (
                <p className="text-red-600">{errorMesssage}</p>
              )}
              <Button
                type="submit"
                className="px-3"
                disabled={postingCreateProjectForm}
              >
                {postingCreateProjectForm ? (
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
                  ref={closeAddProjectDialogRef}
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
