import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  getById: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const category = await ctx.prisma.category.findUnique({
        where: {
          slug: input.slug,
        },
      });
      const subcategories = await ctx.prisma.subCategory.findMany({
        where: {
          categoryId: category?.id,
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
