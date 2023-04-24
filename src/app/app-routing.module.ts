import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjoutUtilisateurComponent} from "./ajout-utilisateur/ajout-utilisateur.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [{ path: 'ajout-utilisateur', component: AjoutUtilisateurComponent },{path: 'liste-utilisateur', component: UsersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule {

}
