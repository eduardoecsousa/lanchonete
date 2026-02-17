import { z } from "zod"

export const addressSchema = z.object({
  road: z.string().min(1, "Rua é obrigatória"),
  number: z.string().min(1, "Número é obrigatório"),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
  city: z.string().nullable().optional(),
})

export const createClientSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(8, "Telefone inválido"),
  email: z.string().email("Email inválido").nullable().optional(),
  cpf: z.string().nullable().optional(),
  address: addressSchema,
})
