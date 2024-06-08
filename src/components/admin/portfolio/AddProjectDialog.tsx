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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { PROJECTS_API_ENDPOINT } from "@/lib/constants";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { AiOutlineLoading } from "react-icons/ai";
import { Checkbox } from "@/components/ui/checkbox";
import { RootState } from "@/redux/store";
import { ProjectSchema } from "@/lib/schemas";

const ProjectFormSchema = z.object({
  projectId: z.string(),
  projectPosition: z.number(),
  projectName: z
    .string()
    .min(2, { message: "Project name should be atleast 2 characters long" })
    .max(255, { message: "Project name should be atmost 255 characters long" })
    .transform((data) => data.trim()),
  projectDescription: z
    .string()
    .min(2, {
      message: "Project description should be atleast 2 characters long",
    })
    .max(255, {
      message: "Project description should be atmost 255 characters long",
    })
    .transform((data) => data.trim()),
  projectLiveLink: z.string().url(),
  frontendCodeLink: z.string().url(),
  backendCodeLink: z.string().url(),
  technologies: z.array(z.string()),
  projectImage: typeof window !== "undefined" ? z.instanceof(File) : z.any(),
  projectMockupImage:
    typeof window !== "undefined" ? z.instanceof(File) : z.any(),
});

type Project = z.infer<typeof ProjectFormSchema>;

export function AddProjectDialog({
  setProjects,
}: {
  setProjects: React.Dispatch<
    React.SetStateAction<z.infer<typeof ProjectSchema>[]>
  >;
}) {
  const user = useSelector((state: RootState) => state.user);
  const technologies = useSelector((state: RootState) => state.technologies);

  const [postingCreateProjectForm, setPostingCreateProjectForm] =
    useState(false);
  const [errorpostingCreateProjectForm, setErrorpostingCreateProjectForm] =
    useState(false);
  const [errorMesssage, setErrorMessage] = useState("");

  const [projectImagePreview, setProjectImagePreview] = useState<string | null>(
    null
  );
  const [selectedProjectImage, setSelectedProjectImage] = useState<File | null>(
    null
  );
  const [projectMockupImagePreview, setProjectMockupImagePreview] = useState<
    string | null
  >(null);
  const [selectedProjectMockupImage, setSelectedProjectMockupImage] =
    useState<File | null>(null);

  const closeAddProjectDialogRef = useRef<HTMLButtonElement>(null);
  async function handleCreateProject(newProject: Project) {
    console.log("new project = ", newProject);
    //insert list of technologies onto newProject form data
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
      newProject.technologies.push(techId);
    });

    const formData = new FormData();
    formData.append("projectImage", selectedProjectImage as File);
    formData.append("projectMockupImage", selectedProjectMockupImage as File);
    formData.append("projectName", newProject.projectName);
    formData.append("projectDescription", newProject.projectDescription);
    formData.append("projectLiveLink", newProject.projectLiveLink);
    formData.append("frontendCodeLink", newProject.frontendCodeLink);
    formData.append("backendCodeLink", newProject.backendCodeLink);
    formData.append("projectPosition", newProject.projectPosition.toString());
    formData.append("technologies", JSON.stringify(newProject.technologies));

    setPostingCreateProjectForm(true);
    try {
      const response = await axios.post(`${PROJECTS_API_ENDPOINT}`, formData, {
        headers: {
          Authorization: `Bearer ${user.jwtToken}`,
          contentType: "multipart/form-data",
        },
      });
      console.log("create proejct response = ", response.data);
      setProjects((prevTechnologies) => [...prevTechnologies, response.data]);
      setPostingCreateProjectForm(false);
      setErrorpostingCreateProjectForm(false);
      // form.reset();

      // // close the dialog
      // closeAddProjectDialogRef.current?.click();
    } catch (error) {
      console.error("error in adding technology ", error);
      setErrorpostingCreateProjectForm(true);
      setErrorMessage("Error in adding technology");
      setPostingCreateProjectForm(false);
    }
  }

  const form = useForm<Project>({
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: {
      backendCodeLink: "",
      frontendCodeLink: "",
      projectDescription: "",
      projectId: "",
      projectName: "",
      projectLiveLink: "",
      projectPosition: 0,
      technologies: [],
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
          Add Project
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-4xl">
        <Form {...form}>
          <form className="" onSubmit={form.handleSubmit(handleCreateProject)}>
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

            <div className="grid grid-cols-4 gap-5">
              <FormField
                control={form.control}
                name="projectImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        name="projectImage"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            setSelectedProjectImage(file);
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            field.onChange(file); // Update the form field with the selected file
                            // Optionally, set state for preview or direct upload

                            reader.onload = () => {
                              setProjectImagePreview(reader.result as string);
                            };
                          }
                        }}
                        // The `multiple` attribute is omitted, defaulting to false, to restrict to a single file upload
                      />
                    </FormControl>
                    <FormDescription>
                      Upload an image for your project.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {projectImagePreview && (
                <div className="flex items-center justify-center">
                  <img
                    src={projectImagePreview}
                    alt="Project Image Preview"
                    className="w-32 h-32 object-cover"
                  />
                </div>
              )}

              <FormField
                control={form.control}
                name="projectMockupImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Mockup Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        name="projectMockupImage"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            setSelectedProjectMockupImage(file);
                            field.onChange(file); // Update the form field with the selected file
                            // Optionally, set state for preview or direct upload
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = () => {
                              setProjectMockupImagePreview(
                                reader.result as string
                              );
                            };
                          }
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Upload a mockup image for your project.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {projectMockupImagePreview && (
                <div className="flex items-center justify-center">
                  <img
                    src={projectMockupImagePreview}
                    alt="Project Mockup Image Preview"
                    className="w-32 h-32 object-cover"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-5">
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
            </div>

            <FormLabel>Technologies Used</FormLabel>
            <div className="grid grid-cols-6 gap-2">
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
