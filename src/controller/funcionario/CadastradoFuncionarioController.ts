import { Request, Response } from 'express';

async function CadastrandoFuncionarioController(
    req: Request, res: Response
) {

   return res.json({ok: true})

}

export default CadastrandoFuncionarioController;