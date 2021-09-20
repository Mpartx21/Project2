import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() userData = {
    firstName: '',
    lastName: '',
    userEmail: '',
    userName: '',
    password: '',
    userId: NaN,
    userFavoriteMovies:undefined
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registeredUser(): void {
    this.userService.saveUser(this.userData).subscribe((result) => {
      alert("lets see what happens");

    })
  }

}
