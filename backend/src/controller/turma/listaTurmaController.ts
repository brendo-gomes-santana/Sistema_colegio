import { Request, Response } from "express";
import listaTurmasServer from "../../server/turma/listaTurmasServer";


async function listaTurmasController(req: Request, res: Response){

    const id_funcionario = req.query.id_funcionario as string;

    const lista = await listaTurmasServer(id_funcionario);

    return res.json(lista);

}

export default listaTurmasController;