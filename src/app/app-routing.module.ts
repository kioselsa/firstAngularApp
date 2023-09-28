import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importa el módulo que contiene LoginComponent
import { LoginComponent } from './auth/login/login.component';
// Importamos el componente Home que a su ves sera el contenedor padre de los componentes menu, contenido y footer
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta principal que muestra LoginComponent
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
