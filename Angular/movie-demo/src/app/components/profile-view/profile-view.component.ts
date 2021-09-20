import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/services/data/data.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user
  }

  // gets user info
  getUser(): void {
    this.userService.getUsers().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
      return this.user;
    })
  }



}
