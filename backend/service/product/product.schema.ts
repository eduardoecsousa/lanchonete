import z from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  price: z.number().positive("Preço deve ser um número positivo"),
})