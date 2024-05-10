import { z } from "zod";

export const cadastrarFuncionarioSchema = z.object({
    nome_completo: z.string().min(10),
    email: z.string().email(),
    contato: z.string().min(8).max(10),
    data_de_nascimento: z.date()
})

export const sessaoFuncionarioSchema = z.object({
    email: z.string().email('Coloque um email válido'),
    senha: z.string().min(1, 'Preenchar o campo senha')
})