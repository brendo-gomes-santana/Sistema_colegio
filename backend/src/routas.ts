import Router from 'express';

//IMPORTAÇÃO DOS FUNCIONÁRIOS
import CadastrandoFuncionarioController from './controller/funcionario/CadastradoFuncionarioController';
import SessaoFuncionarioController from './controller/funcionario/SessaoFuncionarioController';
import ListaDeFuncionarioController from './controller/funcionario/ListaDeFuncionarioControler';
import DetalheDoFuncionarioController from './controller/funcionario/DetalheDoFuncionarioController';

//IMPORTAÇÃO DAS FUNÇÕES
import CriarFuncaoController from './controller/funcao/CriarFuncaoController';
import ListaFuncaoController from './controller/funcao/ListaFuncaoController';

//IMPORTAÇÃO FUNÇÃO NO FUNCIONÁRIO
import CadastrarFuncionarioNaSuaFuncaoController from './controller/funcionario_funcao/CadastrarFuncionarioNaSuaFuncaoController';
import DeletarFuncaoDoFuncionarioController from './controller/funcionario_funcao/DeletarFuncaoDoFuncionarioController';


import auth from './middleware/auth';
import permissao from './middleware/permissoes';
const routes = Router()


routes.post('/sessao', SessaoFuncionarioController);

routes.use(auth)
//FUNCIONÁRIO
routes.post('/cadastro/funcionario', CadastrandoFuncionarioController);
routes.get('/lista/funcionario', ListaDeFuncionarioController);
routes.get('/detalhes/funcionario', DetalheDoFuncionarioController);

//FUNCÃO
routes.post('/cadastra/funcao', CriarFuncaoController);
routes.get('/lista/funcao', 
    permissao(['Secretaria']),
    ListaFuncaoController);

//FUNÇÃO NO FUNCIONÁRIO
routes.post('/cadastrar/funcao/funcionario', CadastrarFuncionarioNaSuaFuncaoController);
routes.delete('/deletar/funcao/funcionario', DeletarFuncaoDoFuncionarioController);

export default routes;
