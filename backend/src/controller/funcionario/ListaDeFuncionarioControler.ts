import { Request, Response } from "express";
import ListaDeFuncionarioServer from "../../server/funcionario/ListaDeFuncionarioServer";

async function ListaDeFuncionarioController(req: Request, res: Response) {

    const { page = 1 } = req.query as any;
    const { ativo = true } = req.query as any

    const ativoBoolean =  ativo === "true";
    const lista = await ListaDeFuncionarioServer(page, ativoBoolean);

    return res.json(lista)

}


export default ListaDeFuncionarioController;