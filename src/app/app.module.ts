import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { QuartosComponent } from './pages/quartos/quartos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HoteisComponent } from './pages/hoteis/hoteis.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReservasComponent } from './pages/reservas/reservas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuartosComponent,
    ClientesComponent,
    FuncionariosComponent,
    HoteisComponent,
    AddModalComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule   ,
    MatDialogModule,
    MatSnackBarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
