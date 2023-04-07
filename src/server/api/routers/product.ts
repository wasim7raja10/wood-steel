import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),
  getProductById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.product.findUnique({
        where: { id: input.id },
  })}),
  getProductBySubcategoryId: publicProcedure
    .input(
      z.object({
        SubcategoryId: z.string(),
      })
    )
    .query(({ ctx, input }) =>{
     return ctx.prisma.product
        .findMany({
          where: {
            subCategoryId: input.SubcategoryId,
          },
        take: 12,
        });
})})

  