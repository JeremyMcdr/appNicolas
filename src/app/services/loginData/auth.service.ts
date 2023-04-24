import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() {}

  login(username: string, password: string) {
    // Remplacez cette partie par une vérification réelle des identifiants de connexion
    // en envoyant une requête à votre serveur/API pour vérifier les identifiants
    if (username === 'test' && password === 'test') {
      this.isAuthenticated.next(true);
      return of(true);
    } else {
      return throwError('Invalid credentials');
    }
  }

  logout() {
    this.isAuthenticated.next(false);
  }

  getIsAuthenticated() {
    return this.isAuthenticated.asObservable();
  }
}
