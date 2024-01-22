import NextAuth, { NextAuthOptions } from "next-auth";
import GoogoleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const AuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, request) {
        // check if credentials contains the required information
        if (!credentials?.email || !credentials.password) return null;
        // check if the user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (!user) return null;
        // check if password match
        const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword!);
        return passwordsMatch ? user : null
      },
    }),
    GoogoleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};
const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
