import prisma from "../../prisma";


async function DetalheDoFuncionarioServer(id_funcionario: string) {

    if (id_funcionario === '') {
        throw new Error("Informe o id do funcionário")
    }


    const DetalheDoFuncionario = await prisma.funcionario.findUnique({
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

    if (!DetalheDoFuncionario) {
        throw new Error("Usuário não existe")
    }

    const funcoes = DetalheDoFuncionario.Funcionario_funcao.map(funcoes => {
        return {
            id: funcoes.funcao.id,
            nome: funcoes.funcao.nome
        }
    })

    return {
        id: DetalheDoFuncionario.id,
        nome_completo: DetalheDoFuncionario.nome_completo,
        contato: DetalheDoFuncionario.contato,
        nascimento: DetalheDoFuncionario.data_de_nascimento,
        email: DetalheDoFuncionario.email,
        ativo: DetalheDoFuncionario.ativo,
        funcoes
    };

}

export default DetalheDoFuncionarioServer;