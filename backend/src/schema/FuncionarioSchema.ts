import { z } from "zod";

export const cadastrarFuncionarioSchema = z.object({
    nome_completo: z.string().min(10, 'O nome do funcionario tem que ter no minimo de caracters são 8'),
    email: z.string().email('Coloque um email válido'),
    contato: z.string().min(9, 'O contato pode ter no minimo 9 números').max(11, 'O contato pode ter no maximo 11 números'),
    data_de_nascimento: z.string()
})

export const sessaoFuncionarioSchema = z.object({
    email: z.string().email('Coloque um email válido'),
    senha: z.string().min(1, 'Preenchar o campo senha')
})