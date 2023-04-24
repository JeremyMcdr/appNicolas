import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../services/userData/user-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: any[] = [];
  constructor(private userDataService: UserDataService, private router: Router) { this.loadUsers(); }

  ngOnInit() {
    this.userDataService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(data)
    });
  }

  // Ajoutez cette méthode dans votre composant, par exemple userList.component.ts
  loadUsers() {
    this.userDataService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error:', error);
        // Gérer les erreurs ici (affichage d'un message, etc.)
      }
    );
  }


  onDelete(userId: number) {
    this.userDataService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted:', userId);
        // Rechergement de mes utilisateurs quand la suppresion est faire
        this.loadUsers();

        // Redirigez vers la page souhaitée après la suppression réussie de l'utilisateur

        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error:', error);
        // Gérer les erreurs ici (affichage d'un message, etc.)
      }
    );
  }
}
