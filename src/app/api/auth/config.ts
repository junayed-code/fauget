import User from "@/models/user";
import { connectDB } from "@/services/mongoose";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { type: "text" },
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials, _req) {
        await connectDB();
        const user = await User.findOne({ email: credentials?.email });
        if (!user) return null;

        const isValidPassword = await user?.comparePassword(
          credentials?.password,
        );
        if (!isValidPassword) return null;

        return { id: user._id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/?modal=signin",
    error: "/",
  },
  callbacks: {
    redirect({ url }) {
      return url;
    },
  },
};
