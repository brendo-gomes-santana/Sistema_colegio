import prisma from "../../prisma";



async function listaTurmasServer(id_funcionario?: string){

    if(id_funcionario){
        const funcionario = await prisma.funcionario.findUnique({
            where: {
                id: id_funcionario,
            }
        })

        if(!funcionario){
            throw new Error("Não existe esse usuário ou não possui o cargo de professor")
        }
    }

    const lista = await prisma.turma.findMany({
        where: {
            id_funcionario: id_funcionario
        },
        orderBy: {
            nome: "asc"
        }
    })

    return lista;
    
}

export default listaTurmasServer;