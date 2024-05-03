import { Request, Response } from "express";
import DeletarFuncaoDoFuncionarioServer from "../../server/funcionario_funcao/DeletarFuncaoDoFuncionarioServer";
import { PropsCadastrarFuncionarioFuncao } from "./CadastrarFuncionarioNaSuaFuncaoController";

async function DeletarFuncaoDoFuncionarioController(req: Request, res: Response){

    const { id_usuario, id_funcoes } = req.body as PropsCadastrarFuncionarioFuncao;


    const deletado = await DeletarFuncaoDoFuncionarioServer({
        id_usuario,
        id_funcoes
    })

    return res.json(deletado);
}

export default DeletarFuncaoDoFuncionarioController;