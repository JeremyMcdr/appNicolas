import {Component, OnInit} from '@angular/core';
import { UserDataService } from './services/userData/user-data.service';
import {AuthService} from "./services/loginData/auth.service";
import {BehaviorSubject} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAuthenticated = false;
  users: any[] = [];
  constructor(private userDataService: UserDataService, private authService: AuthService) { }

  ngOnInit() {
    this.userDataService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(data)
    });
    this.authService.getIsAuthenticated().subscribe((value) => {
      this.isAuthenticated = value;
    });
  }


}
