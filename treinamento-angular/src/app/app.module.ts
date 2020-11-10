import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro-component/meu-primeiro.component';
import { MeuPrimeiroComponentCliComponent } from './meu-primeiro-component-cli/meu-primeiro-component-cli.component';

@NgModule({
  declarations: [AppComponent, MeuPrimeiroComponent, MeuPrimeiroComponentCliComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
