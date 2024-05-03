import prisma from "../../prisma";


async function ListaFuncaoServer() {
    
    const lista = await prisma.funcao.findMany({
        orderBy: {
            nome: "asc"
        }
    });

    return lista;

}

export default ListaFuncaoServer;