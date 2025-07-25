import { Elysia, t } from "elysia";

export const appRouter = new Elysia({ prefix: "/api/v1" })
  .get("/", () => "Hello Elysia")
  .onBeforeHandle((headers) => {
    console.log("onBeforeHandle hook!");
  })
  .onAfterHandle(() => {
    console.log("onAfterHandle hook!");
  })
  .get(
    "/users",
    () => {
      console.log("/users");

      return { message: "Users Data" };
    },
    {
      beforeHandle: () => {
        console.log("onBeforeHandle Local Hook!");
      },
    }
  );
