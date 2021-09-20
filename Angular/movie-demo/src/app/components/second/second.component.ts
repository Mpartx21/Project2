import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {
  email!: string;
  password!: string;

  public message = "";

  // convenience getter for easy access to form fields



  constructor(
    private userService:UserService,
    private router:Router,
    private route: ActivatedRoute
    ){}  

  ngOnInit(): void {
 
  }

  onLogin(){


    this.userService.getUserByCredentials(this.email,this.password )
    .subscribe((response)=>{
      localStorage.setItem('user',JSON.stringify(response));
     this.router.navigate(['/']);
    },(error)=>{
      console.log(error.message);
    })} }


