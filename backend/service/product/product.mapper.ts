import z from "zod";
import { createProductSchema } from "./product.schema";
import { Prisma } from "@prisma/client";

export type CreateProductDTO = z.infer<typeof createProductSchema>

export function toPrismaProductCreate(
  data: CreateProductDTO
): Prisma.ProductCreateInput {
  return {
    name: data.name,
    price: data.price,
  }
}

export function toPrismaProductUpdate(
  data: CreateProductDTO
): Prisma.ProductUpdateInput {
  return {
    name: data.name,
    price: data.price,
  }
}