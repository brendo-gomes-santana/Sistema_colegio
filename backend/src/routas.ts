import Router from 'express';

//IMPORTAÇÃO DOS FUNCIONÁRIOS
import CadastrandoFuncionarioController from './controller/funcionario/CadastradoFuncionarioController';
import SessaoFuncionarioController from './controller/funcionario/SessaoFuncionarioController';

//IMPORTAÇÃO DAS FUNÇÕES
import CriarFuncaoController from './controller/funcao/CriarFuncaoController';
import ListaFuncaoController from './controller/funcao/ListaFuncaoController';

const routes = Router()


routes.post('/sessao', SessaoFuncionarioController);

//FUNCIONÁRIO
routes.post('/cadastro/funcionario', CadastrandoFuncionarioController);

//FUNCÃO
routes.post('/cadastra/funcao', CriarFuncaoController);
routes.get('/lista/funcao', ListaFuncaoController);

export default routes;
