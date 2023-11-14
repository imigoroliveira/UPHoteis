import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuartosComponent } from './pages/quartos/quartos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quartos', component: QuartosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'funcionarios', component: FuncionariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
