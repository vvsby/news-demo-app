import { Component, OnInit } from '@angular/core';
import * as Classes from '../../classes/classes';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Classes.User;

  constructor(
    public http: HttpClient,
    public authService: AuthService,
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }
  getUserInfo() {
    this.http.get('assets/userInfo.json').subscribe((userList: Classes.User[]) => {
      userList.forEach(user => {
        if (user.username === this.authService.username) {
          this.user = new Classes.User(user);
        }
      });
    });
  }
}
