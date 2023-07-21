import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
{path: 'home', component: HomeComponent}, {path: 'about', component: AboutComponent}, {path: 'heroes', component: HeroesComponent}, {path: 'heroe/:id', component: HeroeComponent},{path:'registro', component: RegistroComponent}, {path: '**', pathMatch:'full', redirectTo: 'home'},
=======

import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import {canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
{path: 'home', component: HomeComponent, ...canActivate(()=>redirectUnauthorizedTo(['/registro']))}, 
{path: 'registro', component: RegistroComponent}, 
{path: 'login', component: LoginComponent},
{path: '**', pathMatch:'full', redirectTo: 'home'}

>>>>>>> 9d7a6b6884e1f16705b3ee67eef5b7d8b5a9791b

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
