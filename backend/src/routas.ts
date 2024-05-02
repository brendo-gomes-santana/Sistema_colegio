import Router from 'express';

import CadastrandoFuncionarioController from './controller/funcionario/CadastradoFuncionarioController';
const routes = Router()


routes.post('/cadastro/funcionario', CadastrandoFuncionarioController);


export default routes;
