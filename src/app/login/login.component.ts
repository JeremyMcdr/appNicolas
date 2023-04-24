import { Component } from '@angular/core';
import {AuthService} from "../services/loginData/auth.service";
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: any;
  password: any;
  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      (isAuthenticated: any) => {
        if (isAuthenticated) {
          // Naviguez vers la route souhaitée après l'authentification réussie
          console.log("Tu es authentifié !")
          this.router.navigate(['/users']);
        } else {
          // Gérez les erreurs d'authentification, par exemple, affichez un message d'erreur
          console.log("Echec authentification")
        }
      },
    );
  }
}
