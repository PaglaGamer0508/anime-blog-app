"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { toast } from "@/hooks/use-toast";
import { BlogPostCreationRequest } from "@/lib/validators/blogPostValidator";
import { useBlogGerneStore } from "@/state/blogGenreStore";
import { useBlogTypeStore } from "@/state/blogTypeStore";
import { usePreviewImageStore } from "@/state/imagePreviewStore";
import { useTitleContentStore } from "@/state/titleContentStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Trash2 } from "lucide-react";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import AddBlogGenre from "./AddBlogGenre";
import BlogGuidelinePopover from "./BlogGuidelinePopover";
import SelectBlogType from "./SelectBlogType";
import UploadDnD from "./UploadDnD";
import { Button } from "./ui/Button";

interface BlogPostEditorProps {
  authorId: string;
}

const BlogPostEditor: React.FC<BlogPostEditorProps> = ({ authorId }) => {
  const { blogType, clearBlogType } = useBlogTypeStore();
  const { genres, clearGenre } = useBlogGerneStore();
  const { title, content, setTitle, setContent, clearData } =
    useTitleContentStore();
  const { imageUrl, removePreviewImage } = usePreviewImageStore();

  //  this function is for cleaning the editor after posting a blog
  const clearAllBlogData = () => {
    clearData();
    removePreviewImage();
    clearBlogType();
    clearGenre();
  };

  const blogData: BlogPostCreationRequest = {
    authorId,
    title,
    content,
    image: imageUrl || "",
    type: blogType,
    genres: genres,
  };

  const handleRemoveClick = () => {
    removePreviewImage();
  };

  const { mutate: postBlog, isLoading } = useMutation({
    mutationFn: async () => {
      const data = await axios.post("/api/blog/create", blogData);
      return data;
    },
    onError: () => {
      return toast({
        title: "Error",
        description: "Error Occured Publishing Blog",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      clearAllBlogData();
      return toast({
        title: "Success",
        description: "Your Blog has been Published",
      });
    },
  });

  const handleSubmitClick = () => {
    if (
      !authorId ||
      !title ||
      title.length < 3 ||
      title.length > 128 ||
      !content ||
      content.length < 30 ||
      !imageUrl ||
      imageUrl === "" ||
      !blogType ||
      !genres
    ) {
      return toast({
        title: "Error",
        description: "Please fill in all required fields before submitting",
        variant: "destructive",
      });
    }
    postBlog();
  };

  return (
    <div className=" w-[98%] sm:w-[90%] md:w-[70%] lg:w-[60] mx-auto my-3">
      <div className="flex flex-col items-center w-full  border-2 border-slate-500 rounded-md my-2">
        {/* Image Section */}
        <div className="flex justify-center bg-slate-900 w-full max-h-[30rem]">
          {imageUrl === null || imageUrl === "" ? (
            <UploadDnD />
          ) : (
            <div className="flex relative w-full min-h-[5rem] sm:min-h-[10rem] max-h-[25rem]">
              <div className="h-full mx-auto">
                <img
                  src={imageUrl}
                  className="max-h-full w-auto overflow-hidden"
                  alt="Selected Image"
                />
              </div>

              <Button
                className="absolute m-3 py-1 px-2"
                variant={"destructive"}
                onClick={handleRemoveClick}>
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {/* This blog options accordion */}
        <Accordion type="multiple" className="w-full bg-slate-700">
          <AccordionItem value="item-1">
            <AccordionTrigger className="mx-12 sm:mx-24 md:mx-36 outline-none">
              Options
            </AccordionTrigger>
            <AccordionContent className="relative">
              <hr className="h-[1px] w-full border-none bg-slate-500" />
              {/* This is a pop over for  */}
              <BlogGuidelinePopover className="absolute top-2 px-3 py-1" />

              {/* Type selection Section */}
              <SelectBlogType />

              <hr className="h-[1px] w-full border-none bg-slate-500" />

              {/* Add Genres section */}
              <AddBlogGenre />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Title section */}
        <div className="bg-slate-700 w-full p-3">
          <TextareaAutosize
            onChange={(e) => setTitle(e.target.value)}
            maxLength={128}
            value={title}
            placeholder="Title"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-3xl sm:text-4xl font-bold focus:outline-none"
          />

          {/* constent section */}
          <TextareaAutosize
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="w-full min-h-[20rem] bg-transparent focus:outline-none appearance-none resize-none text-lg"
            placeholder="Write Content of the Blog post"
          />
        </div>
      </div>
      <div className=" w-full">
        <Button
          isLoading={isLoading}
          onClick={handleSubmitClick}
          variant={"primary"}
          className="w-full">
          <span>Post Blog</span>
        </Button>
      </div>
    </div>
  );
};

export default BlogPostEditor;
