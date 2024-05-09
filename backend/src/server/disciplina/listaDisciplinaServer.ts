import prisma from "../../prisma";

async function listaDisciplinaServer(){

    const lista = await prisma.disciplinas.findMany({
        orderBy: {
            nome:  "asc"
        }
    });

    return lista;
}

export default listaDisciplinaServer