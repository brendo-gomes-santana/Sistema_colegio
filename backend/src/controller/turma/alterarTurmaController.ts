import { Request, Response } from "express";
import alterarTurmasServer from "../../server/turma/alterarTurmaServer";

export interface PropsAlterarTurma{
    id_turma: string,
    nome?: string,
    id_funcionario?: string,
    turno?: string,
    ano?: number
}

async function alterarTurmaController(req: Request, res: Response){

    const { 
        id_turma,
        ano,
        id_funcionario,
        nome,
        turno
     } = req.body as PropsAlterarTurma;


     const alteracao = await alterarTurmasServer({ 
        id_turma,
        ano,
        id_funcionario,
        nome,
        turno
     })

    return res.json(alteracao)
}

export default alterarTurmaController;