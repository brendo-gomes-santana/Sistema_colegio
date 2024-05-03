import prisma from "../../prisma";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

import dotenv from 'dotenv';
dotenv.config()

import { PropsSessao, PropsReturnoSessao } from "../../controller/funcionario/SessaoFuncionarioController";

async function SessaoFuncionarioServer({ email, senha }: PropsSessao): Promise<PropsReturnoSessao | Error> {

    if (email === '' || senha === '') {
        throw new Error('Preenchar as informações')
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