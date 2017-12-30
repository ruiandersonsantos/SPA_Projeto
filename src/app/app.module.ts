/* Bibliotecas do Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Modulos de funcionalidades */
import { AppRoutingModule } from './app-routing.module';
import { EmpresaRoutingModule } from './empresa/empresa-routing.module';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';

/* Componentes */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

/* Serviços */
import { GlobalService } from './resource/global.service';
import { LoginService } from './resource/login.service';
import { LocalstorageService } from './resource/localstorage.service';
import { JwtTokenService } from './resource/jwt-token.service';
import { AuthGuardRouterService } from './resource/auth-guard-router.service';
import {BuilderRequestService} from './resource/builder-request.service';

/** Modulos */
import {MenuModule} from './menu/menu.module';
import {PainelModule} from './painel/painel.module';
import {EmpresaModule} from './empresa/empresa.module';
import {UsuarioModule} from './usuario/usuario.module';




@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        LogoutComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        EmpresaRoutingModule,
        UsuarioRoutingModule,
        HttpModule,
        EmpresaModule,
        PainelModule,
        MenuModule,
        UsuarioModule

    ],

    providers: [

        GlobalService,
        LoginService,
        LocalstorageService,
        JwtTokenService,
        AuthGuardRouterService,
        BuilderRequestService,


    ],
    bootstrap: [AppComponent]
})
export class AppModule { }