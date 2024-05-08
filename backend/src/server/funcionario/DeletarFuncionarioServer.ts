import prisma from "../../prisma";


async function DeletarFuncionarioServer(id_funcionario: string){
    if(!id_funcionario){
        throw new Error('Usuário não informado')
    }  


    const funcionario = await prisma.funcionario.findUnique({
        where: {
            id: id_funcionario
        }
    })

    if(!funcionario){
        throw new Error('Usuário não existe!')
    }

    try{
        Promise.all([
            await prisma.turma.deleteMany({
                where: {
                    id_funcionario: id_funcionario
                }
            }),
            await prisma.funcionario_funcao.deleteMany({
                where: {
                    id_funcionario: id_funcionario
                }
            })
        ]);
        await prisma.funcionario.delete({
            where: {
                id: id_funcionario
            }
        });

        return {
            mensagem: 'Informações do usuário deletado com sucesso!!'
        }

    }catch(err){
        console.log(err);
        throw new Error('Algo deu errado!')
    }
}

export default DeletarFuncionarioServer;