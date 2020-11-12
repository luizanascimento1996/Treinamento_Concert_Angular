import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro-component/meu-primeiro.component';
import { MeuPrimeiroComponentCliComponent } from './meu-primeiro-component-cli/meu-primeiro-component-cli.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiroComponentCliComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CursosModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
