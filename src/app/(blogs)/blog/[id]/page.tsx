import BlogPage from "@/components/BlogPage";
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

  const { genres } = blog;

  return (
    <div className="lg:flex gap-4 max-w-[1400px] py-4 px-2 md:px-6 mx-auto">
      <BlogPage blog={blog} className="lg:w-[70%]" />

      <div className="bg-red-500 lg:w-[30%]">{/* <RecommendedBlogs /> */}</div>
    </div>
  );
};

export default page;
