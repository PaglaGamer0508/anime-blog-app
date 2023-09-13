import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Function to shuffle an array randomly
const shuffleArray = (array: Array<any>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const GET = async (req: Request) => {
  try {
    const allBlogs = await db.post.findMany();
    const shuffledBlogs = shuffleArray(allBlogs);
    const suggestedBlogs = shuffledBlogs.slice(0, 10);

    return NextResponse.json({ blogs: suggestedBlogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
};
