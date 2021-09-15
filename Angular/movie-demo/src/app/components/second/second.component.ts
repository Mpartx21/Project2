import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  public message = "";

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onLogin(email:any,password:any){
    this.userService.getUserByCredentials(email,password)
    .subscribe((response)=>{
      localStorage.setItem('user',JSON.stringify(response));
      this.message = 'Login successfully';
    },(error)=>{
      console.log(error.message);
    })} 
}
