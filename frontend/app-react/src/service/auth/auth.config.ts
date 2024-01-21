import { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";

export const authConfig = {
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
  providers: [
    credentials({
      authorize: (credentials) => {
        return {
          id: 1,
          name: "John Doe",
          email: "TEST",
        };
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
} as NextAuthConfig;
