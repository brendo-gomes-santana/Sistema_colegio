import { Request, Response } from 'express';


export interface PropsCadastrarFuncionarioFuncao{
    id_usuario: string,
    id_funcoes: string[];
}

async function CadastrarFuncionarioNaSuaFuncaoController(
    req: Request, res: Response
){


    const { id_usuario, id_funcoes } = req.body as PropsCadastrarFuncionarioFuncao;



}

export default CadastrarFuncionarioNaSuaFuncaoController;