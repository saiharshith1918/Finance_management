import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Run Clerk middleware for all pages except static files and Next internals
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
