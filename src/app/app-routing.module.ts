import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuartosComponent } from './pages/quartos/quartos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { HoteisComponent } from './pages/hoteis/hoteis.component';
import { ReservasComponent } from './pages/reservas/reservas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hoteis', component: HoteisComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'quartos', component: QuartosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'funcionarios', component: FuncionariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
