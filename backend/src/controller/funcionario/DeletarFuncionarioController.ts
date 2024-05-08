import { Request, Response } from "express";
import DeletarFuncionarioServer from "../../server/funcionario/DeletarFuncionarioServer";


async function DeletarFuncionarioController(req: Request, res: Response){

    const id_funcionario = req.query.id_funcionario as string;

    const deletado = await DeletarFuncionarioServer(id_funcionario);

    return res.json(deletado);

}

export default DeletarFuncionarioController