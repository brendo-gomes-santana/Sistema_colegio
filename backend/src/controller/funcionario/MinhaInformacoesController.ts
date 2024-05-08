import { Request, Response } from "express";
import MinhaInformacoesServer from "../../server/funcionario/MinhaInformacoesServer";

async function MinhaInformacoesControler(req: Request, res: Response){

    const { sub } = req.id_user;
    
    const Infomacoes = await MinhaInformacoesServer(sub);

    return res.json(Infomacoes);

}

export default MinhaInformacoesControler;