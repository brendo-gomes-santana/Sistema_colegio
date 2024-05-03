import { Request, Response } from "express";

export interface PropsCadastrarTurma {
    nome: string,
    turno: string,
    ano: number,
    id_disciplina: string,
    id_funcionario: string,
}

async function CadastrarturmaController(req: Request, res: Response){



}

export default CadastrarturmaController;