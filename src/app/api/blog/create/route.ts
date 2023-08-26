import { db } from "@/lib/db";
import { BlogPostValidator } from "@/lib/validators/blogPost";
import { NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { authorId, title, content, type, genres, image } =
      BlogPostValidator.parse(body);

    const userExists = await db.user.findFirst({
      where: {
        id: authorId,
      },
    });
    console.log(userExists);
    console.log(body);

    if (!userExists) {
      return new NextResponse("Login to Post", { status: 400 });
    }

    await db.post.create({
      data: {
        AuthorId: authorId,
        title,
        content,
        image,
        type,
        genres,
      },
    });

    return new Response("Posted Blog successfully", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid POST data request passed", { status: 422 });
    }

    return new Response(
      `Could not post blog at this time. Please try later: ${error}`,
      {
        status: 500,
      }
    );
  }
};
