import { db } from "@/lib/db";
import { BlogPostValidator } from "@/lib/validators/blogPostValidator";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { authorId, title, content, type, genres, image } =
      BlogPostValidator.parse(body);

    const newGenre = JSON.stringify(genres);

    const userExists = await db.user.findFirst({
      where: {
        id: authorId,
      },
    });

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
        genres: newGenre,
      },
    });

    revalidatePath("/all-blogs");
    return new Response("Posted Blog successfully", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid POST data request passed", {
        status: 422,
      });
    }

    return new NextResponse(
      `Could not post blog at this time. Please try later, error: ${error}`,
      {
        status: 500,
      }
    );
  } finally {
    await db.$disconnect();
  }
};
