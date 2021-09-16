import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {

  public message = "";

  // convenience getter for easy access to form fields



  constructor(
    private userService:UserService,
    private router:Router,
    private route: ActivatedRoute
    ){}  

  ngOnInit(): void {
 
  }

  onLogin(login:NgForm){
if(login.invalid){
return
}

    this.userService.getUserByCredentials(JSON.stringify(login.))
    .subscribe((response)=>{
      localStorage.setItem('user',JSON.stringify(response));
     const returnUrl = this.route.snapshot.queryParams['returnUrl']||'/';
     this.router.navigateByUrl(returnUrl);
    },(error)=>{
      console.log(error.message);
    })} 
}
