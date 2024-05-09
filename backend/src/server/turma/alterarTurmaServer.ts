import prisma from "../../prisma";
import { PropsAlterarTurma } from "../../controller/turma/alterarTurmaController";

async function alterarTurmasServer({ 
    id_turma,
    ano,
    id_funcionario,
    nome,
    turno
 }: PropsAlterarTurma){

    const turma = await prisma.turma.findUnique({
        where: {
            id: id_turma
        }
    })

    if(!turma){
        throw new Error("Turma não existe")
    }
    try{

        const alteracao = await prisma.turma.update({
            where: {
                id: id_turma
            },
            data: {
                ano: ano !== null ? ano : undefined,
                id_funcionario: id_funcionario !== '' ? id_funcionario : undefined,
                nome: nome !== '' ? nome : undefined,
                turno: turno !== '' ? turno : undefined 
            }
        })

        return alteracao;

    }catch(err){
        console.log(err);
        throw new Error('Algo deu errado!')
    }


}

export default alterarTurmasServer;