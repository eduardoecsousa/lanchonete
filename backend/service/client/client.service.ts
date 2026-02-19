import { prisma } from '../../lib/prisma'
import { createProductSchema } from '../product/product.schema';
import { CreateClientDTO, toPrismaClientCreate, toPrismaClientUpdate } from './client.mapper'



export default class ClientService {
static async createClient(data: CreateClientDTO) {
  const dataVerify = createProductSchema.parse(data)
  return prisma.client.create({
    data: toPrismaClientCreate(data),
    include: {
      address: true,
    },
  });
}


  static async update(
    id: number,
    data: CreateClientDTO
  ) {
    const dataVerify = createProductSchema.parse(data)
    return prisma.client.update({
      where: { id },
      data: toPrismaClientUpdate(data),
    })
  }


  static async list() {
    return prisma.client.findMany({
      include: {
        address: true,
      },
    })
  }

}
