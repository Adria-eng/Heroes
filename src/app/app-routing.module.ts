import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import {canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
{path: 'home', component: HomeComponent, ...canActivate(()=>redirectUnauthorizedTo(['/registro']))}, 
{path: 'registro', component: RegistroComponent}, 
{path: 'login', component: LoginComponent},
{path: '**', pathMatch:'full', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
