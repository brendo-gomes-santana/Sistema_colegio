import prisma from "../../prisma";
import { PropsCadastramatricularAluno } from "../../controller/aluno/cadastrarAlunoController";

async function cadastrarAlunoServer({ 
    data_de_nascimento,
    nome_completo,
    nome_mae_completo,
    nome_pai_completo,
    numero_de_matricula,
    cep,
    enderenco
 }: PropsCadastramatricularAluno){

    if(nome_completo === "" || !data_de_nascimento || numero_de_matricula === ""){
        throw new Error("Preenchar os campos!")
    }

    const aluno = await prisma.aluno.findUnique({
        where: {
            matricula: numero_de_matricula
        }
    })

    if(aluno){
        throw new Error("aluno já existe")
    }

    try{

        const cadastrado = await prisma.aluno.create({
            data: {
                data_de_nascimento,
                nome_completo,
                nome_mae_completo,
                nome_pai_completo,
                matricula: numero_de_matricula,
                cep,
                endereco: enderenco
            }
        })

        return cadastrado;

    }catch(err){
        console.log(err);
        throw new Error('Algo deu errado')
    }
}

export default cadastrarAlunoServer;