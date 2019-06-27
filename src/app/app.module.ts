import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjetComponent } from './projet/projet.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'accueil',
    component: AcceuilComponent
  },

  {
    path: 'projet',
    component: ProjetComponent
  },

  {
    path: '',
    redirectTo: '/acceuil',
    pathMatch: 'full'
  },


]


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    NavbarComponent,
    FooterComponent,
    ProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
