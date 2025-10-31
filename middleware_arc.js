// middleware_arcjet.js
import arcjet, { createMiddleware, detectBot, shield } from "@arcjet/next";
import { NextResponse } from "next/server";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({ mode: "LIVE", allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"] }),
  ],
});

export default createMiddleware(aj);

export const config = {
  matcher: ["/api/(.*)"], // Only protect APIs
};
