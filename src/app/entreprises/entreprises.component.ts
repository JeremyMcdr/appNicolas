import {Component, OnInit} from '@angular/core';
import {EntrepriseDataService} from "../services/entrepriseData/entreprise-data.service";
import {Router} from "@angular/router";
import {UserDataService} from "../services/userData/user-data.service";

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.css']
})
export class EntreprisesComponent implements OnInit{
  entreprises: any[] = [];


  porteEntreprise: any[] = [];
  private _idFomr: number | undefined;
  constructor(private entrepriseDataService: EntrepriseDataService, private router: Router) { this.loadEntreprises()}

  public isCharged = false
  ngOnInit() {
    this.entrepriseDataService.getEntreprises().subscribe((data: any) => {
      this.entreprises = data;
      console.log(data)
    });
  }

  // Ajoutez cette méthode dans votre composant, par exemple userList.component.ts
  loadEntreprises() {
    this.entrepriseDataService.getEntreprises().subscribe(
      (users) => {
        this.entreprises = users;
        this.isCharged = true
      },
      (error) => {
        console.error('Error:', error);
        // Gérer les erreurs ici (affichage d'un message, etc.)
      }
    );
  }

  loadporteEntreprises(idFomr: number) {
    this._idFomr = idFomr;
    this.entrepriseDataService.getPorteEntreprises(idFomr).subscribe(
      (porteEntreprises) => {
        this.porteEntreprise = porteEntreprises;
      },
      (error) => {
        console.error('Error:', error);
        // Gérer les erreurs ici (affichage d'un message, etc.)
      }
    );
  }

  startingControle(id: any)
  {
    //Charger la page control de la porte
    console.log(id)
    this.router.navigate(['/verification-porte'], { queryParams: { data: id },});
  }
}
