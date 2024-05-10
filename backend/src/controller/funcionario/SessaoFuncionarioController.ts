import { Request, Response } from 'express';
import SessaoFuncionarioServer from '../../server/funcionario/SessaoFuncionarioServer';
export interface PropsSessao{
    email: string,
    senha: string,
}

export interface PropsReturnoSessao{

    id: string,
    email: string,
    nome_completo: string,
    contato: string,
    data_de_nascimento: Date,
    token: string

}

async function SessaoFuncionarioController(req: Request, res: Response) {

    const { email, senha } = req.body as PropsSessao;
    
    const sessao = await SessaoFuncionarioServer({email, senha})

    return res.json(sessao);
}


export default SessaoFuncionarioController;