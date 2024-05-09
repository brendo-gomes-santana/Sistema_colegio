import prisma from "../../prisma";
import { PropsCadastrarTurma } from "../../controller/turmas/CadastrarTurmaController";

async function cadastrarTurmaServer({
    nome,
    turno,
    ano,
    id_disciplina,
    id_funcionario
}:PropsCadastrarTurma){
    
    if(nome === '' || turno === '' || ano === null || id_disciplina === '' || id_funcionario === ''){
        throw new Error('Preenchar os campos')
    }

    const [funcionario, disciplina] = await Promise.all([
        await prisma.funcionario.findUnique({
            where: {
                id: id_funcionario,
                Funcionario_funcao: {
                    some: {
                        funcao: {
                            nome: 'Professor'
                        }
                    }
                }
            }
        }),
        await prisma.disciplinas.findUnique({
            where: {
                id: id_disciplina
            }
        })
    ])

    if(!funcionario){
        throw new Error('funcionário nao existe ou não possui o cargo de professor.')
    }

    if(!disciplina){
        throw new Error('Disciplina, nao existe!')
    }


    const cadastrado = await prisma.turma.create({
        data: {
            nome,
            turno,
            ano,
            id_disciplina,
            id_funcionario
        }
    })
    return cadastrado;
}

export default cadastrarTurmaServer;