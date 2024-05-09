import { Request, Response } from "express";
import listaDisciplinaServer from "../../server/disciplina/listaDisciplinaServer";

async function listaDisciplinaController(req: Request, res: Response){

    const lista = await listaDisciplinaServer();

    return res.json(lista);
}

export default listaDisciplinaController