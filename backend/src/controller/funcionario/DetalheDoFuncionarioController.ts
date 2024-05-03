import { Request, Response } from "express";
import DetalheDoFuncionarioServer from "../../server/funcionario/DetalheDofuncionarioServer";


async function DetalheDoFuncionarioController(req: Request, res: Response){

    const id_funcionario = req.query.id_funcionario as string;

    const detalhe = await DetalheDoFuncionarioServer(id_funcionario);

    return res.json(detalhe);

}

export default DetalheDoFuncionarioController;