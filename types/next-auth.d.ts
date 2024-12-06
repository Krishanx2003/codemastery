import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extending the User object in Session
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string | null;
    } & DefaultSession["user"];
  }
}

// Extending the JWT object
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
  }
}
