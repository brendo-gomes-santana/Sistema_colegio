import { Request, Response } from 'express';
import CadastroFuncionarioServer from '../../server/funcionario/CadastroFuncionarioServer';

export interface PropsFuncionario{
    nome_completo: string;
    data_de_nascimento: Date;
    contato: string;
    email: string;
}

export interface RetornoComId extends PropsFuncionario{
    id: string;
    ativo: boolean;
}

async function CadastrandoFuncionarioController(
    req: Request, res: Response
) {

    const { 
        nome_completo,
        data_de_nascimento,
        email,
        contato
     } = req.body as PropsFuncionario;

    const criando = await CadastroFuncionarioServer({
        contato,
        data_de_nascimento,
        email,
        nome_completo
    }) as RetornoComId | Error

   return res.json(criando);

}

export default CadastrandoFuncionarioController;