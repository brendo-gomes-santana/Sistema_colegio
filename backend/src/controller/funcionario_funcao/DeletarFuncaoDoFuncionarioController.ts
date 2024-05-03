import { Request, Response } from "express";

import { PropsCadastrarFuncionarioFuncao } from "./CadastrarFuncionarioNaSuaFuncaoController";

async function DeletarFuncaoDoFuncionario(req: Request, res: Response){

    const { id_usuario, id_funcoes } = req.body as PropsCadastrarFuncionarioFuncao;
}

export default DeletarFuncaoDoFuncionario;