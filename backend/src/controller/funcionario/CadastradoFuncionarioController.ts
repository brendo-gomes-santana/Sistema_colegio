import { Request, Response } from 'express';

interface PropsFuncionario{
    nome_completo: string;
    data_de_nascimento: Date;
    contato: number;
    email: string;
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

     

   return res.json({ok: true})

}

export default CadastrandoFuncionarioController;