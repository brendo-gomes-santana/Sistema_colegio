import Router from 'express';

//IMPORTAÇÃO DOS FUNCIONÁRIOS
import CadastrandoFuncionarioController from './controller/funcionario/CadastradoFuncionarioController';
import SessaoFuncionarioController from './controller/funcionario/SessaoFuncionarioController';
import ListaDeFuncionarioController from './controller/funcionario/ListaDeFuncionarioControler';
import DetalheDoFuncionarioController from './controller/funcionario/DetalheDoFuncionarioController';
import MinhaInformacoesControler from './controller/funcionario/MinhaInformacoesController';
import DesativarOuAtivarFuncionarioController from './controller/funcionario/DesativarOuAtivarFuncionarioController';
import DeletarFuncionarioController from './controller/funcionario/DeletarFuncionarioController';

//IMPORTAÇÃO DAS FUNÇÕES
import CriarFuncaoController from './controller/funcao/CriarFuncaoController';
import ListaFuncaoController from './controller/funcao/ListaFuncaoController';

//IMPORTAÇÃO FUNÇÃO DO FUNCIONÁRIO
import CadastrarFuncionarioNaSuaFuncaoController from './controller/funcionario_funcao/CadastrarFuncionarioNaSuaFuncaoController';
import DeletarFuncaoDoFuncionarioController from './controller/funcionario_funcao/DeletarFuncaoDoFuncionarioController';

//IMPORTAÇAO DAS DISCIPLINAS
import CadastrarDisciplinaController from './controller/disciplina/cadastrarDisciplinaController';
import listaDisciplinaController from './controller/disciplina/listaDisciplinaController';

import auth from './middleware/auth';
import permissao from './middleware/permissoes';

const routes = Router()

 /*
Administrador
Coordenadora
Secretaria
Professor
 */

routes.post('/sessao', SessaoFuncionarioController);


routes.use(auth);

//FUNCIONÁRIO
routes.post('/cadastro/funcionario', 
    permissao(['Administrador']),
    CadastrandoFuncionarioController);

routes.get('/lista/funcionario', 
    permissao(['Administrador', 'Coordenadora', 'Secretaria']),
    ListaDeFuncionarioController);

routes.get('/detalhes/funcionario', 
    permissao(['Administrador', 'Coordenadora']),
    DetalheDoFuncionarioController);

routes.get('/me', MinhaInformacoesControler);

routes.patch('/ativar_desativar/funcionario', 
    permissao(['Administrador']),
    DesativarOuAtivarFuncionarioController);

routes.delete('/deletar/funcionario', 
    permissao(['Administrador']),
    DeletarFuncionarioController);

//FUNCÃO
routes.post('/cadastra/funcao', 
    permissao(['Administrador']),
    CriarFuncaoController);

routes.get('/lista/funcao', 
    permissao(['Administrador']),
    ListaFuncaoController);

//FUNÇÃO NO FUNCIONÁRIO
routes.post('/cadastrar/funcao/funcionario', 
    permissao(['Administrador']),
    CadastrarFuncionarioNaSuaFuncaoController);
    
routes.delete('/deletar/funcao/funcionario', 
    permissao(['Administrador']),
    DeletarFuncaoDoFuncionarioController);

// DISCIPLINAS
routes.post('/cadastrar/disciplina',
        permissao(['Administrador']),
        CadastrarDisciplinaController);

routes.get('/lista/disciplina', 
    permissao(['Administrador', 'Coordenadora', 'Secretaria']),
    listaDisciplinaController
)
export default routes;
