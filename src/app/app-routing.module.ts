import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./componentes/dashboard/dashboard.component";
import { DetalleperfilComponent } from "./componentes/detalleperfil/detalleperfil.component";
import { ListaperfilesComponent } from "./componentes/listaperfiles/listaperfiles.component";
const routes: Routes = [
    {
        path: 'perfiles',
        component: DashboardComponent
    },
    {
        path: 'perfiles/:user',
        component: DetalleperfilComponent
    },
    {
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }