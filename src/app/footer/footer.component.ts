import {Component, OnInit} from '@angular/core';
import {FormulaireDataService} from "../services/formulaireData/formulaire-data.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  formulaires: any[] = [];
  private _idFomr: number | undefined;
  constructor(
    private formulaireDataService: FormulaireDataService,
    private router: Router
  )

  { this.loadFormulaire()}

  ngOnInit() {
    this.formulaireDataService.getFormulaire().subscribe((data: any) => {
      this.formulaires = data;
      console.log(data)
    });


  }
  loadFormulaire() {
    this.formulaireDataService.getFormulaire().subscribe(
      (users) => {
        this.formulaires = users;
      },
      (error) => {
        console.error('Error:', error);
        // Gérer les erreurs ici (affichage d'un message, etc.)
      }
    );


  }
}
