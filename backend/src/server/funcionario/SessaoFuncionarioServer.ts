import prisma from "../../prisma";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { z } from "zod";
import { sessaoFuncionarioSchema } from "../../schema/FuncionarioSchema";

import dotenv from 'dotenv';
dotenv.config()

export type SessaoFuncionario = z.infer<typeof sessaoFuncionarioSchema>

async function SessaoFuncionarioServer({ email, senha }: SessaoFuncionario){

    const validacao = sessaoFuncionarioSchema.safeParse({email, senha})

    if(!validacao.success){
        throw new Error(validacao.error.issues[0].message);
    }
    
    const funcionario = await prisma.funcionario.findFirst({
        where: {
            email: email,
            ativo: true
        },
        include: {
            Funcionario_funcao: {
                select: {
                    id_funcao: true
                }
            }
        }
    })

    if (!funcionario) {
        throw new Error("usuário não existe");
    }


    if (!await compare(senha, funcionario.senha)) {
        throw new Error("Senha incorrenta")
    }


    const token = sign(
        {
            permissoes: funcionario.Funcionario_funcao.map(permissao => { return permissao.id_funcao})
        },
        process.env.JWT as string,
        {
            subject: funcionario.id,
            expiresIn: '30d'
        }
    )
    

    return {
        id: funcionario.id as string,
        nome_completo: funcionario.nome_completo as string,
        email: funcionario.email as string,
        contato: funcionario.contato as string,
        data_de_nascimento: funcionario.data_de_nascimento as Date,
        token
    }
}

export default SessaoFuncionarioServer;