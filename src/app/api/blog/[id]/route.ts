import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface BlogParams {
  id: string;
}

export const GET = async (req: Request, { params }: { params: BlogParams }) => {
  const { id } = params;

  try {
    const blog = await db.post.findFirst({
      where: {
        id,
      },
      include: {
        Author: true,
        Likes: true,
        Views: true,
      },
    });

    if (!blog) {
      return NextResponse.json(
        {
          message: "Expected Blog Not Found",
        },
        { status: 206 }
      );
    }

    return NextResponse.json(
      { message: "Blog found Successful!", blog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Error fetching blog",
      status: 500,
      error,
    });
  }
};
