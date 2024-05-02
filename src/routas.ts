import Router from 'express';

import CadastrandoFuncionarioController from './controller/funcionario/CadastradoFuncionarioController';
const routes = Router()


routes.get('/cadastro/funcionario', CadastrandoFuncionarioController);


export default routes;
