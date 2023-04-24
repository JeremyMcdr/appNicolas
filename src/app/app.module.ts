import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AjoutUtilisateurComponent } from './ajout-utilisateur/ajout-utilisateur.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { VerificationPorteComponent } from './verification-porte/verification-porte.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AjoutUtilisateurComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DefaultComponent,
    EntreprisesComponent,
    VerificationPorteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
