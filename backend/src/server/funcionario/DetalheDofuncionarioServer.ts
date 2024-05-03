import prisma from "../../prisma";


async function DetalheDoFuncionarioServer(id_funcionario: string) {

    if (id_funcionario === '') {
        throw new Error("Informe o id do funcionário")
    }


    const funcionario = await prisma.funcionario.findUnique({
        where: {
            id: id_funcionario
        },
        include: {
            Funcionario_funcao: {
                select: {
                    funcao: true
                }
            },
            turmas: true
        }
    })

    if (!funcionario) {
        throw new Error("Usuário não existe")
    }

    const funcoes = funcionario.Funcionario_funcao.map(funcoes => {
        return {
            id: funcoes.funcao.id,
            nome: funcoes.funcao.nome
        }
    })

    return {
        id: funcionario.id,
        nome_completo: funcionario.nome_completo,
        contato: funcionario.contato,
        nascimento: funcionario.data_de_nascimento,
        email: funcionario.email,
        ativo: funcionario.ativo,
        funcoes
    };

}

export default DetalheDoFuncionarioServer;