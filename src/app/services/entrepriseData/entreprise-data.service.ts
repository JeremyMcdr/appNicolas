import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";
import {Entreprise} from "../../models/entreprise.model";
import {porteEntreprise} from "../../models/porteEntreprise.model";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseDataService {

  private apiUrl = 'http://macadre.fr:3000/api';
  private apiUrlEntreprise = 'http://macadre.fr:3000/api/entreprise';
  private apiKey = '6554sdf654sdf';

  private userApi = 7;
  private _id: any;

  constructor(private http: HttpClient) {
  }

  getEntreprises(): Observable<Entreprise[]> {
    const headers = new HttpHeaders({'x-user-id': this.userApi,'x-api-key': this.apiKey});
    return this.http.get<Entreprise[]>(`${this.apiUrl}/entreprises`, {headers});
  }

  getPorteEntreprises(id: any): Observable<porteEntreprise[]> {
    this._id = id;
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    return this.http.get<porteEntreprise[]>(`${this.apiUrlEntreprise}/${id}/doors`, {headers});
  }
}
