import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// all request login and signup aii kane asbe
export const { POST, GET } = toNextJsHandler(auth);