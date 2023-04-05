import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  getById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      const category = ctx.prisma.category.findUnique({
        where: {
          id: input.id,
        },
      });
      const subcategories = ctx.prisma.subCategory.findMany({
        where: {
          categoryId: input.id,
        },
      });
      return {
        category,
        subcategories,
      };
    }),
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
