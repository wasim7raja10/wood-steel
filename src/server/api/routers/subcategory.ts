import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const subcategoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.subCategory.findMany();
  })})
