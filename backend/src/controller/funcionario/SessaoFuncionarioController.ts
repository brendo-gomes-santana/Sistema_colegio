import { Request, Response } from 'express';
import SessaoFuncionarioServer from '../../server/funcionario/SessaoFuncionarioServer';
import { TypeSessaoFuncionario } from '../../server/funcionario/SessaoFuncionarioServer';

async function SessaoFuncionarioController(req: Request, res: Response) {

    const { email, senha } = req.body as TypeSessaoFuncionario;
    
    const sessao = await SessaoFuncionarioServer({email, senha})

    return res.json(sessao);
}


export default SessaoFuncionarioController;