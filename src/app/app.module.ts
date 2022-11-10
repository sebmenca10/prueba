import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { DetalleperfilComponent } from './componentes/detalleperfil/detalleperfil.component';
import { GraficfollowComponent } from './componentes/graficfollow/graficfollow.component';
import { ListaperfilesComponent } from './componentes/listaperfiles/listaperfiles.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListaperfilesComponent,
    GraficfollowComponent,
    DetalleperfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
