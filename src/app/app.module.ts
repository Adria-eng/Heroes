import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


//importar servicios
import { HeroesService } from './services/heroes.service';
<<<<<<< HEAD
import { HeroeComponent } from './components/heroe/heroe.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { RegistroComponent } from './components/registro/registro.component';

=======
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
>>>>>>> 9d7a6b6884e1f16705b3ee67eef5b7d8b5a9791b

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
<<<<<<< HEAD
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    
    FiltroPipe,
   RegistroComponent,
      
=======
    RegistroComponent,
    LoginComponent
>>>>>>> 9d7a6b6884e1f16705b3ee67eef5b7d8b5a9791b
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
