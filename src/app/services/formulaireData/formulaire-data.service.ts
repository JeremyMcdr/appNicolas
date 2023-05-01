import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";
import {Formulaire} from "../../models/formulaire.model";

@Injectable({
  providedIn: 'root'
})


export class FormulaireDataService {
  private apiKey = 'testicule';
  private apiUrl = 'http://macadre.fr:3000/api';
  constructor(private http: HttpClient) {
  }
  getFormulaire(): Observable<Formulaire[]> {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<Formulaire[]>(`${this.apiUrl}/formulaires`, {headers});
  }

  getDispositifArret(id: any) : Observable<Formulaire[]>
  {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<Formulaire[]>(`${this.apiUrl}/dispositifArret/${id}`, {headers});
  }
  getDispositifSecurite(id: any) : Observable<Formulaire[]>
  {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<Formulaire[]>(`${this.apiUrl}/dispositifSecurite/${id}`, {headers});
  }
  getEquipementElectrique(id: any) : Observable<Formulaire[]>
  {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<Formulaire[]>(`${this.apiUrl}/equipementElectrique/${id}`, {headers});
  }
  getManoeuvreDepannage(id: any) : Observable<Formulaire[]>
  {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<Formulaire[]>(`${this.apiUrl}/manoeuvreDepannage/${id}`, {headers});
  }
  getManoeuvreSecours(id: any) : Observable<Formulaire[]>
  {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<Formulaire[]>(`${this.apiUrl}/manoeuvreSecours/${id}`, {headers});
  }
  getMecanisme(id: any) : Observable<Formulaire[]>
  {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<Formulaire[]>(`${this.apiUrl}/mecanisme/${id}`, {headers});
  }
  getOrgane(id: any) : Observable<Formulaire[]>
  {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<Formulaire[]>(`${this.apiUrl}/organe/${id}`, {headers});
  }
  getSignalisation(id: any) : Observable<Formulaire[]>
  {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<Formulaire[]>(`${this.apiUrl}/signalisation/${id}`, {headers});
  }
  getStructure(id: any) : Observable<Formulaire[]>
  {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<Formulaire[]>(`${this.apiUrl}/structure/${id}`, {headers});
  }
  getTablier(id: any) : Observable<Formulaire[]>
  {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<Formulaire[]>(`${this.apiUrl}/tablier/${id}`, {headers});
  }


  /*getFormulaireEntreprises(id: any): Observable<porteEntreprise[]> {
    this._id = id;
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<porteEntreprise[]>(`${this.apiUrlEntreprise}/${id}/doors`, {headers});
  }*/
}
