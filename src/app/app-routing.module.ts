import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  { path: '', component: StartComponent, children: [
    { path: 'inicio', component: InicioComponent, data:{page: 'inicio'} },
    { path: 'servicios', component: ServiciosComponent, data:{page: 'servicios'} },
    { path: 'contacto', component: ContactoComponent, data:{page: 'contacto'}},
  ] },
  { path: ':page', component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
