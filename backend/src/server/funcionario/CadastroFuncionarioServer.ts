import prisma from '../../prisma';
import { hash } from 'bcryptjs';

require('dotenv').config();

import { PropsFuncionario, RetornoComId } from '../../controller/funcionario/CadastradoFuncionarioController';

async function CadastroFuncionarioServer({
    nome_completo,
    email,
    data_de_nascimento,
    contato
}:PropsFuncionario): Promise<RetornoComId | Error> {

    if(nome_completo === '' || email === '' || !data_de_nascimento || !contato){
        throw new Error('Preenchar as informações')
    }

    if(await prisma.funcionario.findFirst({
        where: {
            email
        }
    })){
        throw new Error('Funcionário já possui cadastro!')
    }
    
    try{
        const criado = await prisma.funcionario.create({
            data: {
                nome_completo,
                email,
                contato,
                data_de_nascimento,
                senha: await hash(process.env.SENHA as string, 10)
            },
            select: {
                id: true,
                nome_completo: true,
                email: true,
                contato: true,
                data_de_nascimento: true,
                ativo: true
            }
        })

      return criado;

    }catch(err){
        console.log(err);
        throw new Error('Algo deu errado na operação')
    }
}

export default CadastroFuncionarioServer;