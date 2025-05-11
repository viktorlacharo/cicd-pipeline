import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getAll: baseProcedure.query(async () => {
    return {
      greeting: "Hello from tRPC!",
    };
  }),
});
export type CategoriesRouter = typeof categoriesRouter;
