import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany();
  }),
  getSubCategories: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        subcategories: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
  }),
});
