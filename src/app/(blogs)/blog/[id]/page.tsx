import BlogPage from "@/components/BlogPage";
import SuggestedBlogSection from "@/components/SuggestedBlogSection";
import { getBlog } from "@/lib/getBlog";
import { Metadata } from "next";
import React from "react";

interface pageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const blog = await getBlog(id);
  const { title, content, image } = blog;

  return {
    title: title,
    description: content,
    openGraph: {
      images: image,
    },
  };
}

const page: React.FC<pageProps> = async ({ params }) => {
  const { id } = params;
  const blog = await getBlog(id);

  return (
    <div className="lg:flex gap-4 max-w-[1400px] py-4 px-2 md:px-6 mx-auto">
      <BlogPage blog={blog} className="lg:w-[70%]" />

      <div className="lg:w-[30%]">
        <div className="mb-3">
          <h1 className="text-slate-300 text-center text-lg font-semibold my-1">
            Suggested Blogs
          </h1>
          <hr className="bg-slate-400 h-[2px] border-none" />
        </div>
        <SuggestedBlogSection />
      </div>
    </div>
  );
};

export default page;
