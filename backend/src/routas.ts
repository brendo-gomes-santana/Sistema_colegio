import Router from 'express';

import CadastrandoFuncionarioController from './controller/funcionario/CadastradoFuncionarioController';
import SessaoFuncionarioController from './controller/funcionario/SessaoFuncionarioController';
const routes = Router()


routes.post('/sessao', SessaoFuncionarioController);
routes.post('/cadastro/funcionario', CadastrandoFuncionarioController);


export default routes;
