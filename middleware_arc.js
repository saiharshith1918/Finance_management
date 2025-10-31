import arcjet, { createMiddleware, detectBot, shield } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc.
        "GO_HTTP", // For Inngest
      ],
    }),
  ],
});

export default createMiddleware(aj);

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // apply to all pages except static assets
    "/(api|trpc)(.*)",
  ],
};
