import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";

function permissao(permissao: string[]){
    return async (req: Request, res: Response, next: NextFunction) => {
        
        const { sub } = req.id_user;

        const [funcionario, usuario_possui_funcao] = await Promise.all([
            prisma.funcionario.findUnique({
                where: {
                    id: sub
                },
                include: {
                    Funcionario_funcao: {
                        select: {
                            funcao: true
                        }
                    }
                }
            }),
            prisma.funcionario_funcao.findMany({
                where: {
                    id_funcionario: sub
                }
            })
        ])

        if(!funcionario){
            return res.status(401).json({
                error: "Usuário não existe"
            })
        }

        if(!usuario_possui_funcao){
            return res.status(401).json({
                error: "usuário não possui as funções"
            })
        }
        
        const funcaoExiste = funcionario.Funcionario_funcao
        .map(funcao => funcao.funcao.nome)
        .some(funcao => permissao.includes(funcao))
        
        if(!funcaoExiste){
            return res.status(401)
            .json({
                error: "Você não tem permissão"
            })
        }
    
        return next()
    }
}

export default permissao;