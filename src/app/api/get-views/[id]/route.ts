import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface BlogParams {
  id: string;
}

export const GET = async (req: Request, { params }: { params: BlogParams }) => {
  try {
    const { id } = params;
    const ViewCounts = await db.view.count({
      where: {
        postId: id,
      },
    });

    return NextResponse.json(
      { message: "get Like count Successful!", ViewCounts },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Error geting post likes",
      status: 500,
      error,
    });
  } finally {
    db.$disconnect();
  }
};
