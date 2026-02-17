import { Prisma } from "@prisma/client"
import { createClientSchema } from "./client.schema"
import z from "zod"

export type CreateClientDTO = z.infer<typeof createClientSchema>


export function toPrismaClientCreate(
  data: CreateClientDTO
): Prisma.ClientCreateInput {
  return {
    name: data.name,
    phone: data.phone,
    email: data.email ?? undefined,
    cpf: data.cpf ?? undefined,
    address: {
      create: data.address,
    },
  }
}

export function toPrismaClientUpdate(
  data: CreateClientDTO
): Prisma.ClientUpdateInput {
  return {
    name: data.name,
    phone: data.phone,
    email: data.email ?? undefined,
    cpf: data.cpf ?? undefined,
    address: {
      update: data.address,
    },
  }
}
