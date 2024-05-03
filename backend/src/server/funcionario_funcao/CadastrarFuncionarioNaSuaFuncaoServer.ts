import prisma from "../../prisma";
import { PropsCadastrarFuncionarioFuncao } from "../../controller/funcionario_funcao/CadastrarFuncionarioNaSuaFuncaoController";


async function CadastrarFuncionarioNaSuaFuncaoServer({
    id_usuario,
    id_funcoes
}: PropsCadastrarFuncionarioFuncao){

    if(id_usuario === "" || id_funcoes.length === 0){
        throw new Error('Selecione o funcionário e coloque a função')
    }

    const [funcionario, funcao, possui] = await Promise.all([
        prisma.funcionario.findUnique({
            where: {
                id: id_usuario
            }
        }),
        prisma.funcao.findMany({
            where: {
                id: {
                    in: id_funcoes
                }
            }
        }),
        prisma.funcionario_funcao.findMany({
            where: {
                id_funcionario: id_usuario,
                id_funcao: {
                    in: id_funcoes
                }
            }
        })
    ])

    if(possui.length > 0){
        throw new Error('usuário já possui essa(s) permissão(ões).')
    }
    if(!funcionario){
        throw new Error('Funcionário não encontrado.')
    }

    const idsEncontrados = funcao.map(funcao => funcao.id);
    const todosOsIdsEncontrados = id_funcoes.every(id => idsEncontrados.includes(id));

    if(!todosOsIdsEncontrados){
        throw new Error('Alguma(s) pemissão(ões) não ecnontrada(s).');
    }

    try{
        await prisma.funcionario_funcao.createMany({
            data: id_funcoes.map(funcao => ({
                id_funcionario: id_usuario,
                id_funcao: funcao
            }))
        })

    
        return {
            message: 'Funções Cadastrada no usuário'
        }
        
    }catch(err){
        console.log(err);
        throw new Error('Algo deu errado')
    }
}

export default CadastrarFuncionarioNaSuaFuncaoServer;