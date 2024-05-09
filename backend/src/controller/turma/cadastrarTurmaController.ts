import { Request, Response } from "express";
import cadastrarTurmaServer from "../../server/turma/cadastrarTurmaServer";

export interface PropsCadastrarTurma{
    nome: string,
    turno: string,
    ano: number,
    id_disciplina: string,
    id_funcionario: string
}

async function cadastrarTurmaController(req: Request, res: Response){

    const {
        nome,
        turno,
        ano,
        id_disciplina,
        id_funcionario
    } = req.body as PropsCadastrarTurma;

    const cadastrado = await cadastrarTurmaServer({
        nome,
        turno,
        ano,
        id_disciplina,
        id_funcionario
    })


    return res.json(cadastrado);
}

export default cadastrarTurmaController;