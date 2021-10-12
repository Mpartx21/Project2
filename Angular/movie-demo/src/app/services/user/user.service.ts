import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = 'http://localhost:8080';


  constructor(private http:HttpClient) {

  }

  public getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/users`);
  }

  public saveUser(userData: any): Observable<any>{
    console.log(userData);
    return this.http.post(`${this.apiServerUrl}/users`, userData);
  }

  public getUserById(Id:any): Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/users/${Id}`);
  }

  public deleteUser(Id:any): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/users/${Id}`);
  }

  public updateUserWithId(Id:any,user:User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/user/${Id}`,user);
  }

  // Gets a 500 error in the web browser
  public getUserByCredentials(userData: any): Observable<any>{
    console.log(userData);
    return this.http.get(`${this.apiServerUrl}/users`, userData);
  }

  // public getUserByCredentials(email:string,password:string): Observable<User>{
  //   return this.http.get<User>(`${this.apiServerUrl}/users/${email}/${password}`)
  // }
}
