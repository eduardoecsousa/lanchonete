import { prisma } from '../../lib/prisma'
import { CreateClientDTO, toPrismaClientCreate, toPrismaClientUpdate } from './client.mapper'



export default class ClientService {
static async createClient(data: CreateClientDTO) {
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
