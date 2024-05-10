import { Request, Response } from "express";
import cadastrarAlunoServer from "../../server/aluno/cadastrarAlunoServer";

export interface PropsCadastramatricularAluno{
    numero_de_matricula: string,
    nome_completo: string,
    nome_pai_completo?: string,
    nome_mae_completo?: string,
    data_de_nascimento: Date,
    cep: string,
    enderenco: string
}
async function cadastrarAlunoController(req: Request, res: Response){

    const { 
        data_de_nascimento,
        nome_completo,
        nome_mae_completo,
        nome_pai_completo,
        numero_de_matricula,
        cep,
        enderenco
     } = req.body as PropsCadastramatricularAluno

     const cadastrado = await cadastrarAlunoServer({ 
        data_de_nascimento,
        nome_completo,
        nome_mae_completo,
        nome_pai_completo,
        numero_de_matricula,
        cep,
        enderenco
     })

     return res.json(cadastrado);
}

export default cadastrarAlunoController;