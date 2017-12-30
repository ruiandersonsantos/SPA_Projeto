import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa.component';

import { EmpresaNewComponent } from './empresa-new.component';
import { EmpresaEditComponent } from './empresa-edit.component';

import { AuthGuardRouterService } from '../resource/auth-guard-router.service';

const empresaRoutes: Routes = [
  {
    path: 'empresa',
    component: EmpresaComponent,
    canActivate: [AuthGuardRouterService]
  },
 {
    path: 'empresa/novo',
    component: EmpresaNewComponent,
    canActivate: [AuthGuardRouterService]
  },
  {
    path: 'empresa/editar',
    component: EmpresaEditComponent,
    canActivate: [AuthGuardRouterService]
  },

];

@NgModule({
  imports: [RouterModule.forChild(empresaRoutes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
