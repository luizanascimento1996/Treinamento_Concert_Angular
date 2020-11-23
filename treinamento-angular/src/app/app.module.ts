import { AuthGuard } from './Rotas/guard/auth.guard';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './Funcionamento/meu-primeiro-component/meu-primeiro.component';
import { MeuPrimeiroComponentCliComponent } from './Funcionamento/meu-primeiro-component-cli/meu-primeiro-component-cli.component';
import { DataBindingComponent } from './Funcionamento/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './Funcionamento/input-property/input-property.component';
import { OutputPropertyComponent } from './Funcionamento/output-property/output-property.component';
import { CicloComponent } from './Funcionamento/ciclo/ciclo.component';
import { DiretivaIfComponent } from './Diretivas/diretiva-if/diretiva-if.component';
import { DiretivaSwitchComponent } from './Diretivas/diretiva-switch/diretiva-switch.component';
import { DiretivaForComponent } from './Diretivas/diretiva-for/diretiva-for.component';
import { DiretivaNgclassComponent } from './Diretivas/diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './Diretivas/diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './Funcionamento/operador-elvis/operador-elvis.component';
import { ExemploNgcontentComponent } from './Funcionamento/exemplo-ngcontent/exemplo-ngcontent.component';
import { DiretivasCustomizadasComponent } from './Diretivas/diretivas-customizadas/diretivas-customizadas.component';

import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { LogServiceService } from './shared/log-service.service';

import { CursosComponent } from './Servicos/cursos/cursos.component';
import { CriarCursoComponent } from './Servicos/criar-curso/criar-curso.component';
import { CursosService2 } from './Servicos/cursos.service';

import { ExemplosPipesComponent } from './Pipes/exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './Pipes/camel-case.pipe';
import { SettingsService } from './Pipes/settings.service';
import { FiltroArrayPipe } from './Pipes/filtro-array.pipe';

import { HomeComponent } from './Rotas/home/home.component';
import { LoginComponent } from './Rotas/login/login.component';
import { AuthService } from './Rotas/login/auth.service';

import { RotasCursosModule } from './Rotas/rotas-cursos/rotas-cursos.module';
import { CursosModule } from './Funcionamento/cursos/cursos.module';
import { AlunoModule } from './RotasFilhas/alunos.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RotasCursoGuardGuard } from './Rotas/guard/rotas-curso-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiroComponentCliComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaIfComponent,
    DiretivaSwitchComponent,
    DiretivaForComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgcontentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    CursosComponent,
    CriarCursoComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    RotasCursosModule,
    MatSidenavModule,
    MatListModule,
    AlunoModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    CursosService2,
    LogServiceService,
    /*{ provide: LOCALE_ID, useValue: 'en-US' },*/
    SettingsService,
    AuthService,
    AuthGuard,
    RotasCursoGuardGuard,
    { provide: LOCALE_ID, useValue: 'en-US', deps: [SettingsService] },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
