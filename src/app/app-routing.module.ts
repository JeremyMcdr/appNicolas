import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjoutUtilisateurComponent} from "./ajout-utilisateur/ajout-utilisateur.component";
import {UsersComponent} from "./users/users.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./services/loginData/auth.guard";
import {DefaultComponent} from "./default/default.component";
import {AppComponent} from "./app.component";
import {EntreprisesComponent} from "./entreprises/entreprises.component";
import {VerificationPorteComponent} from "./verification-porte/verification-porte.component";
import {FormulaireVisuComponent} from "./formulaire-visu/formulaire-visu.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'default', component: DefaultComponent, canActivate: [AuthGuard] },
  { path: 'ajout-user', component: AjoutUtilisateurComponent, canActivate: [AuthGuard] },
  { path: 'main', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'entreprises', component: EntreprisesComponent, canActivate: [AuthGuard] },
  { path: 'verification-porte', component: VerificationPorteComponent, canActivate: [AuthGuard] },
  { path: 'affichageTruc', component: FormulaireVisuComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
