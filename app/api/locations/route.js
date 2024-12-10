import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const data = await db.travel.findMany({
      where: {},
    });

    if (data) {

        // console.log(data)
      return NextResponse.json(data);
    }
  } catch (err) {
    return NextResponse.json(
      {
        message: err.message,
      },
      {
        status: 500,
      }
    );
  }
}
