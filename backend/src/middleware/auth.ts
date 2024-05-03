import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

require("dotenv").config();

interface InforUser{
    sub: string,
    permissoes?: string[],
}

async function auth(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).json({
            error: "Token não informado"
        })
    }

    const [_, token] = authToken.split(' ');

    try{

        const cecoded = verify(token, process.env.JWT as string) as InforUser;

        const User = {
            sub: cecoded.sub,
            permissoes: cecoded.permissoes
        }

        req.id_user = User as InforUser;

        return next();

    }catch(err){
        console.log(err)
        return res.status(401).json({
            error: "Algo deu errado com seu token"
        })
    }
}

export default auth;