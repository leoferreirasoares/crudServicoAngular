import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabelaServicosComponent } from './tabela-servicos/tabela-servicos.component';
import { FormServicosComponent } from './form-servicos/form-servicos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const rotas: Routes = [
  { path: 'tabela', component: TabelaServicosComponent },
  { path: 'novo', component: FormServicosComponent},
  { path: 'edit/:id', component: FormServicosComponent},
  { path: '', redirectTo: '/tabela', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
