import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  // ********* PAGINATION **********
  // page number
  const { searchParams } = new URL(req.url);
  const pageQueryParam = searchParams.get("page");
  const page = pageQueryParam ? Number.parseInt(pageQueryParam) : 1;

  // page size
  const pageSizeQueryParam = searchParams.get("pageSize");
  const pageSize = pageSizeQueryParam ? Number.parseInt(pageSizeQueryParam) : 1;

  const startIndex = (page - 1) * pageSize;

  try {
    const blogs = await db.post.findMany({
      select: {
        id: true,
        image: true,
        title: true,
        type: true,
        Author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        Views: true,
        createdAt: true,
        genres: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: startIndex,
      take: pageSize,
    });

    // Get the total number of pages
    const totalBlogs = await db.post.count();
    const totalPages = Math.ceil(totalBlogs / pageSize);

    return NextResponse.json({ blogs, totalPages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
};
