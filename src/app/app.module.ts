import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormServicosComponent } from './form-servicos/form-servicos.component';
import { TabelaServicosComponent } from './tabela-servicos/tabela-servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormServicosComponent,
    TabelaServicosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
