import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
user: any = {};
movies: any = [];
favorites: any = [];

  constructor(private UserService: UserService ) { }

  ngOnInit(): void {
  }

  getUserById(): void {
    this.UserService.getUserById().subscribe((resp: any) => {
      this.user = resp;
      this.
    })
  }

}
