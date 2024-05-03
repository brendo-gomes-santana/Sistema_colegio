import { Request, Response } from 'express';
import CadastrarFuncionarioNaSuaFuncaoServer from '../../server/funcionario_funcao/CadastrarFuncionarioNaSuaFuncaoServer';

export interface PropsCadastrarFuncionarioFuncao{
    id_usuario: string,
    id_funcoes: string[];
}

async function CadastrarFuncionarioNaSuaFuncaoController(
    req: Request, res: Response
){


    const { id_usuario, id_funcoes } = req.body as PropsCadastrarFuncionarioFuncao;

    const cadastrado = await CadastrarFuncionarioNaSuaFuncaoServer({
        id_usuario,
        id_funcoes
    })

    return res.json(cadastrado);

}

export default CadastrarFuncionarioNaSuaFuncaoController;