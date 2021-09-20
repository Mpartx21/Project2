import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    password: ''
  };

  constructor(
    private userService: UserService, 
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  registeredUser(): void {
    this.userService.saveUser(this.userData).subscribe((result) => {
     console.log(this.userData);
    })
  }

}
