import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../../models/user.model";
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private apiUrl = 'http://macadre.fr:3000/api';
  private apiKey = '6554sdf654sdf';
  private userApi = 7;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders({'x-user-id': this.userApi,'x-api-key': this.apiKey});
    return this.http.get<User[]>(`${this.apiUrl}/users`, {headers});
  }

  addUser(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'testicule'
    });
    console.log(this.http.post<any>(`${this.apiUrl}/users`, user, { headers: headers }))
    return this.http.post<any>(`${this.apiUrl}/users`, user, { headers: headers });
  }

  // Ajoutez cette méthode dans votre user.service.ts
  deleteUser(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'testicule'
    });

    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`, { headers: headers });
  }



}
