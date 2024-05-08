import { Request, Response } from "express";
import DesativarOuAtivarFuncionarioServer from "../../server/funcionario/DesativaOuAtivarFuncionarioServer";

async function DesativarOuAtivarFuncionarioController(
    req: Request, res: Response
){

    const id_funcionario = req.query.id_funcionario as string;

    const funcionario = await DesativarOuAtivarFuncionarioServer(id_funcionario);

    return res.json(funcionario);


}

export default DesativarOuAtivarFuncionarioController;