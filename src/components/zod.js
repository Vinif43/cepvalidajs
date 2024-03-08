import z from 'zod'

export const cepSchema = z.object({
  cep: z.string().min(8).max(9),
  rua: z.string().min(1),
  numero: z.string().min(1),
  bairro: z.string().min(1),
  cidade: z.string().min(1),
  estado: z.string().min(1),
})
