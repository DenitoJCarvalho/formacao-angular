import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { EditarTarefasComponent } from './editar';
import { CadastrarTarefaComponent } from './cadastrar';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    EditarTarefasComponent,
    CadastrarTarefaComponent,
    TarefaConcluidaDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
