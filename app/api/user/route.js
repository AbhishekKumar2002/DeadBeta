import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { z } from "zod";

export async function POST(req) {
  const formSchema = z.object({
    username: z.string().regex(/^[a-zA-Z0-9_.]{3,}$/, {
      message:
        "Username must be at least 3 characters and can only contain alphabets, numbers, underscore, and dot.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    name: z.string().min(3, {
      message: "Name must be at least 3 characters.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    gender: z.string().min(0, {
      message: "",
    }),
  });

  try {
    const body = await req.json();
    console.log(body);
    const { username, email, password, name, gender } = formSchema.parse(body);

    const exuserbyemail = await db.users.findUnique({
      where: { email: email },
    });
    if (exuserbyemail) {
      return NextResponse.json(
        { user: null, message: "Email already exists" },
        { status: 409 }
      );
    }

    const exuserbyun = await db.users.findUnique({
      where: { username: username },
    });
    if (exuserbyun) {
      return NextResponse.json(
        { user: null, message: "User already exists" },
        { status: 409 }
      );
    }

    const haspass = await hash(password, 10);

    const newUser = await db.users.create({
      data: {
        username,
        email,
        password: haspass,
        name,
        gender,
      },
    });
     
    return NextResponse.json(
      { user: newUser, message: "Registration Successful" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Registration UnSuccessful" },
      { status: 420 }
    );
  }
}
