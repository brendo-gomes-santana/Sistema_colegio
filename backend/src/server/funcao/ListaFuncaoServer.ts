import prisma from "../../prisma";


async function ListaFuncaoServer() {
    try{
        const lista = await prisma.funcao.findMany({
            orderBy: {
                nome: "asc"
            }
        });
    
        return lista;
    }catch(err){
        console.log(err);
        throw new Error('Algo deu errado')
    }
}

export default ListaFuncaoServer;