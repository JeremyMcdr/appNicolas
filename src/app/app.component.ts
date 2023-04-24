import {Component, OnInit} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserDataService } from './services/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: any[] = [];
  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(data)
    });
  }

}
