import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';

// import { UsuarioNewComponent } from './usuario-new.component';
// import { UsuarioEditComponent } from './usuario-edit.component';

import { AuthGuardRouterService } from '../resource/auth-guard-router.service';

const usuarioRoutes: Routes = [
     {
        path: 'usuario',
        component: UsuarioComponent,
        canActivate: [AuthGuardRouterService]
     },/*
   
       path: 'usuario/novo',
       component: UsuarioNewComponent,
       canActivate: [AuthGuardRouterService]
     },
     {
       path: 'usuario/editar',
       component: UsuarioEditComponent,
       canActivate: [AuthGuardRouterService]
     },*/

];

@NgModule({
    imports: [RouterModule.forChild(usuarioRoutes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
