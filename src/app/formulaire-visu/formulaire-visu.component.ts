import { Component, OnInit } from '@angular/core';
import {FormulaireDataService} from "../services/formulaireData/formulaire-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulaire-visu',
  templateUrl: './formulaire-visu.component.html',
  styleUrls: ['./formulaire-visu.component.css']
})
export class FormulaireVisuComponent implements OnInit{


  formulaires: any[] = [];
  dispositifArret: any[] = [];
  dispositifSecurite: any[] = [];
  equipementElectrique: any[] = [];
  manoeuvreDepannage: any[] = [];
  manoeuvreSecours: any[] = [];
  mecanisme: any[] = [];
  organe: any[] = [];
  signalisation: any[] = [];
  structureF: any[] = [];
  tablier: any[] = [];

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
    this.formulaireDataService.getDispositifArret(1).subscribe(
      (formulaireData)=>{
        this.dispositifArret = formulaireData
        console.log(this.dispositifArret)
      }
    )
  }
}
