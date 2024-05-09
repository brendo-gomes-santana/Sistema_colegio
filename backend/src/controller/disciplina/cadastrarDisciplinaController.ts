import { Request, Response } from "express";
import CadastrarDisciplinaServer from "../../server/disciplina/cadastrarDisciplinaServer";

export interface PropsCadastrarDisciplina{
    id: string;
    nome: string
}

async function CadastrarDisciplinaController(req: Request, res: Response){


    const nome = req.body.nome as string;
    const cadastrado = await CadastrarDisciplinaServer(nome);

    return res.json(cadastrado);
};

export default CadastrarDisciplinaController;