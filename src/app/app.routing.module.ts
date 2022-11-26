import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MeuPerfilComponent } from './pages/meu-perfil/meu-perfil.component';
import { Error404Component } from './project/components/error-404/error-404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: {title: 'Blog | Login'} },
  { path: 'home', component: HomeComponent, data: {title: 'Blog | Home'} },
  { path: 'meu-perfil', component: MeuPerfilComponent, data: {title: 'Blog | Meu perfil'} },

  // Novas rotas devem ser adicionadas acima deste comentário...
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: Error404Component, data: {title: 'Página não encontrada'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
