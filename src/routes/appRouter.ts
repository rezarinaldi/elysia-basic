import Elysia from "elysia";

export const appRouter = new Elysia({prefix: "/api/v1"})
.get("/", () => "Hello Elysia")
.get("/users", () => "Users Data")
.get("/books", () => "Books Data")