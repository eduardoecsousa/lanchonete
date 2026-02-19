import { prisma } from "../../lib/prisma";
import { CreateProductDTO, toPrismaProductUpdate } from "./product.mapper";
import { createProductSchema } from "./product.schema";

export default class ProductService {
  static async createProduct(data: CreateProductDTO) {
    const dataVerify = createProductSchema.parse(data)
    return await prisma.product.create({
      data,
    });
  }

  static async update(
    id: number,
    data: CreateProductDTO
  ) {
    const product = await prisma.product.findUnique({
      where: { id }
    })

    if (!product) { return null }

    return prisma.product.update({
      where: { id },
      data: toPrismaProductUpdate(data),
    })
  }

  static async list() {
    return prisma.product.findMany()
  }

}