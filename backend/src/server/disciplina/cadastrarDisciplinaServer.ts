import prisma from "../../prisma";

async function CadastrarDisciplinaServer(nome:string){

    if(nome === ''){
        throw new Error('Preenchar o campo')
    };

    const disciplina = await prisma.disciplinas.findFirst({
        where:{
            nome
        }
    })

    if(disciplina){
        throw new Error("Disciplina já cadastrada")
    }

    const cadastrada = await prisma.disciplinas.create({
        data:{
            nome
        }
    })

    return cadastrada;
};

export default CadastrarDisciplinaServer;