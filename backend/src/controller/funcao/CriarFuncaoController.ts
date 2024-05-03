import { Request, Response } from "express";
import CriarFuncaoServer from "../../server/funcao/CriarFuncaoServer";

export interface PropsRetornoFuncao{
    id: string,
    nome: string
}

async function CriarFuncaoController(req: Request, res: Response){

    const nome = req.body.nome as string;

    const funcao = await CriarFuncaoServer(nome);

    return res.json(funcao);

}

export default CriarFuncaoController;