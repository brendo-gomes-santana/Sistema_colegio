import { Request, Response } from 'express';
import CadastroFuncionarioServer, {TypeCadastrarFuncionario} from '../../server/funcionario/CadastroFuncionarioServer';


async function CadastrandoFuncionarioController(
    req: Request, res: Response
) {

    const { 
        nome_completo,
        data_de_nascimento,
        email,
        contato
     } = req.body as TypeCadastrarFuncionario;

    const criando = await CadastroFuncionarioServer({
        contato,
        data_de_nascimento,
        email,
        nome_completo
    });

   return res.json(criando);

}

export default CadastrandoFuncionarioController;