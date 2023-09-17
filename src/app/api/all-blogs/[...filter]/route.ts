import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface FilterParams {
  params: { filter: [FilterBlogType, string] };
}

export const GET = async (req: Request, { params }: FilterParams) => {
  // API filter
  const { filter } = params;
  let filterType = filter[0];
  let filterGenre = filter[1];
  console.log(filter)

  try {
    const where: {
      type?: BlogType;
      genres?: {
        contains?: string;
      };
    } = {};

    // Check if filterType is not "ALL"
    if (filterType !== "ALL") {
      where.type = filterType;
    }

    // Check if filterGenre is not "ALL"
    if (filterGenre !== "ALL") {
      where.genres = {
        contains: filterGenre,
      };
    }

    const blogs = await db.post.findMany({
      select: {
        id: true,
        image: true,
        title: true,
        type: true,
        Author: true,
        Views: true,
        createdAt: true,
        genres: true,
      },
      where,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
};
