import { Component } from '@angular/core';
import {UserDataService} from "../services/userData/user-data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})
export class AjoutUtilisateurComponent {
  constructor(private userService: UserDataService, private router: Router) { }

  onSubmit(userForm: any) {
    const timeZone = 'Europe/Paris';
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('fr-FR', {
      timeZone: timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const formattedDate = formatter.format(now);

    const newUser = {
      ...userForm.value,
      createdAt: formattedDate,
    };
    console.log(formattedDate)
    this.userService.addUser(userForm.value).subscribe(
      (newUser) => {
        console.log('User created:', newUser);
        // Gérer la création réussie de l'utilisateur ici (redirection, affichage d'un message, etc.)
        this.router.navigate(['/users']);
      },
      (error) => {
        console.error('Error:', error);
        // Gérer les erreurs ici (affichage d'un message, etc.)
      }
    );
    userForm.value.firstName = null;
  }
}
