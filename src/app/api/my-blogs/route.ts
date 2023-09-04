import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const session = await getAuthSession(); // Await the promise to resolve

    if (session && session.user) {
      const blogs = await db.post.findMany({
        where: {
          AuthorId: session.user.id,
        },
      });

      return blogs;
    } else {
      return new NextResponse("You are not signed in", { status: 403 });
    }
  } catch (error) {
    return new Response(
      `Could not get all the blogs at this time. Please try later, error: ${error}`,
      {
        status: 500,
      }
    );
  }
};
