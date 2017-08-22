import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [
        
    ],
    declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
    providers: [AlunosService,
                AlunosDeactivateGuard, AlunoDetalheResolver],
})

export class AlunosModule {}