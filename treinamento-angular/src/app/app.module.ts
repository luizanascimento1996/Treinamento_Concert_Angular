import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './Funcionamento/meu-primeiro-component/meu-primeiro.component';
import { MeuPrimeiroComponentCliComponent } from './Funcionamento/meu-primeiro-component-cli/meu-primeiro-component-cli.component';
import { CursosModule } from './Funcionamento/cursos/cursos.module';
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
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './Diretivas/diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { CursosComponent } from './Servicos/cursos/cursos.component';
import { CriarCursoComponent } from './Servicos/criar-curso/criar-curso.component';
import { CursosService2 } from './Servicos/cursos.service';
import { LogServiceService } from './shared/log-service.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule,
    CommonModule,
  ],
  providers: [CursosService2, LogServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
