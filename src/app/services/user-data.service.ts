import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../user.model";
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private apiUrl = 'http://localhost:3000/api';
  private apiKey = 'testicule';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
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
