import { Request, Response } from "express";
import ListaFuncaoServer from "../../server/funcao/ListaFuncaoServer";


async function ListaFuncaoController(req: Request, res: Response){
    

    const lista = await ListaFuncaoServer();


    return res.json(lista);

}

export default ListaFuncaoController;