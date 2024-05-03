import { match } from "assert";
import prisma from "../../prisma";


async function ListaDeFuncionarioServer(page: number, ativo: boolean) {

    const limite = 10;

    const countFuncionario = await prisma.funcionario.count({
        where: {
            ativo: ativo
        }
    })

    if(countFuncionario !== 0){

         const TotalDePage = Math.ceil(countFuncionario / limite)

        const lista = await prisma.funcionario.findMany({
            where: {
                ativo: ativo
            },
            orderBy: {
                nome_completo: "asc"
            },
            take: limite,
            skip: Number((page * limite) - limite)
        })

        return {
            total_de_paginas: TotalDePage,
            lista
        };
    
    }else{
        return {
            mensagem: "não possui funcionário"
        }
    }


}

export default ListaDeFuncionarioServer;