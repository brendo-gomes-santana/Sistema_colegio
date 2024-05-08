import prisma from "../../prisma";


async function DesativarOuAtivarFuncionarioServer(id_funcionario: string){

    if(id_funcionario === ''){
        throw new Error('Informe o funcionario');
    }

    const funcionario = await prisma.funcionario.findUnique({
        where: {
            id: id_funcionario
        }
    })

    if(!funcionario){
        throw new Error("Funcionário não existe!")
    }

    const alterando = await prisma.funcionario.update({
        where: {
            id: id_funcionario
        },
        data: {
            ativo: !funcionario.ativo
        },
        select:{
           id: true,
           nome_completo: true,
           data_de_nascimento: true,
           contato: true,
           ativo: true, 
        }
    })

    return alterando;
}

export default DesativarOuAtivarFuncionarioServer