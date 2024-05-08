import prisma from "../../prisma";


async function MinhaInformacoesServer(id_user: string){

    const Informacoes = await prisma.funcionario.findUnique({
        where: {
            id: id_user
        },
        select:{
            id: true,
            nome_completo: true,
            email: true,
            contato: true,
            data_de_nascimento: true,
            ativo: true,
            turmas: true,
        }
    })

    if(!Informacoes){
        throw new Error('Usuário não existe');
    }

    return Informacoes;

}

export default MinhaInformacoesServer;