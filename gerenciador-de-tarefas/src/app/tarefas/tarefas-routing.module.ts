import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { EditarTarefasComponent } from './editar';
import { CadastrarTarefaComponent } from './cadastrar';



export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },

  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },

  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  },

  {
    path: 'tarefas/editar/:id',
    component: EditarTarefasComponent
  }



]