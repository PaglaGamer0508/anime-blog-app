"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadDropzone } from "@uploadthing/react";

import { OurFileRouter } from "@/app/api/uploadthing/core";
import { usePreviewImageStore } from "@/state/imagePreviewStore";
import { toast } from "@/hooks/use-toast";

const UploadDnD = () => {
  const setImagePreview = usePreviewImageStore(
    (state) => state.setImagePreview
  );

  return (
    <main className="flex h-full flex-col items-center justify-start">
      <UploadDropzone<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res) {
            const imageUrl = res[0].url;
            setImagePreview(imageUrl);
            console.log(imageUrl);
          }
        }}
        onUploadError={(error: Error) => {
          toast({
            title: "Eroor",
            description: error.message,
            variant: "destructive",
          });
        }}
      />
    </main>
  );
};

export default UploadDnD;
