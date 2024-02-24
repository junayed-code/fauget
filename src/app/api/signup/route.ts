import User from "@/models/user";
import { connectDB } from "@/services/mongoose";
import type { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password } = await req.json();

    await connectDB();
    const user = await User.create({ name, email, password });

    return Response.json(
      { status: "success", data: { user } },
      { status: 201 },
    );
  } catch (error: any) {
    let message = error.message;

    if (error.code === 11000) {
      message = "This email is already registered.";
    }

    return Response.json({ status: "fail", message }, { status: 400 });
  }
};
