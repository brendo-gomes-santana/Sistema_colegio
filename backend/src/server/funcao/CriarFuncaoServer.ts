import { PropsRetornoFuncao } from "../../controller/funcao/CriarFuncaoController";
import prisma from "../../prisma";


async function CriarFuncaoServer(nome: string):Promise<PropsRetornoFuncao | Error>{
    if(nome === ""){
        throw new Error("coloque o nome da Funcao")
    }

    if(await prisma.funcao.findFirst({
        where: {
            nome
        }
    })){
        throw new Error("Funcao já existe")
    }

    try{

        const funcao = await prisma.funcao.create({
            data: {
                nome
            }
        })

        return funcao;

    }catch(err){
        console.log(err);
        throw new Error('Algo deu errado')
    }
}

export default CriarFuncaoServer;