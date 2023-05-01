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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import { FormulaireVisuComponent } from './formulaire-visu/formulaire-visu.component';

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
    FormulaireVisuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
