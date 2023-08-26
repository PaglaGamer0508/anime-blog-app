"use client";

import React, { useEffect, useState } from "react";
import UploadDnD from "./UploadDnD";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "./ui/Button";
import { Trash2 } from "lucide-react";
import { usePreviewImageStore } from "@/state/imagePreviewStore";
import SelectBlogType from "./SelectBlogType";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { useBlogTypeStore } from "@/state/blogTypeStore";

interface BlogPostEditorProps {
  authorId: string;
}

const BlogPostEditor: React.FC<BlogPostEditorProps> = ({ authorId }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const blogType = useBlogTypeStore((state) => state.blogType);

  const imagePreviewUrl = usePreviewImageStore((state) => state.imageUrl);
  const removePreviewImage = usePreviewImageStore(
    (state) => state.removePreviewImage
  );

  useEffect(() => {
    setImageUrl(imagePreviewUrl);
  }, [imagePreviewUrl]);

  const handleRemoveClick = () => {
    if (imagePreviewUrl) {
      removePreviewImage();
    } else {
      console.log("There is no imageUrl");
    }
  };

  return (
    <div className="flex flex-col items-center w-[98%] sm:w-[90%] md:w-[70%] lg:w-[60] mx-auto border-2 border-slate-500 rounded-md my-4">
      {/* Image Section */}
      <div className="flex justify-center bg-slate-900 w-full max-h-[30rem]">
        {imageUrl === null || imageUrl === "" ? (
          <UploadDnD />
        ) : (
          <div className="flex relative w-full h-[25rem]">
            <div className="h-full mx-auto">
              <img
                src={imageUrl}
                className="h-full w-auto overflow-hidden"
                alt=""
              />
            </div>
            <Button
              className="absolute m-3"
              variant={"destructive"}
              onClick={handleRemoveClick}>
              <Trash2 />
            </Button>
          </div>
        )}
      </div>

      {/* Type selection Section */}
      <Accordion type="multiple" className="w-full bg-slate-700">
        <AccordionItem value="item-1">
          <AccordionTrigger className="mx-12 sm:mx-24 md:mx-36 outline-none">
            Options
          </AccordionTrigger>
          <AccordionContent>
            <hr className="h-[1px] w-full border-none bg-slate-500" />
            <SelectBlogType />
            <hr className="h-[1px] w-full border-none bg-slate-500" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Add Genres section */}

      {/* Title section */}
      <div className="bg-slate-700 w-full p-3">
        <TextareaAutosize
          onChange={(e) => setTitle(e.target.value)}
          maxLength={128}
          value={title}
          placeholder="Title"
          className="w-full resize-none appearance-none overflow-hidden bg-transparent text-4xl font-bold focus:outline-none"
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
  );
};

export default BlogPostEditor;
