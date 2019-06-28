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
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const appRoutes: Routes = [
  {
    path: '',
    component: AcceuilComponent
  },
  {
    path: 'projet',
    component: ProjetComponent
  },
  {
    path: 'acceuil',
    component: AcceuilComponent
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
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
