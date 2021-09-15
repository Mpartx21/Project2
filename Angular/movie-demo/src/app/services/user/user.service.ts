import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = '';

  constructor(private http:HttpClient) { }


  public saveUser(user:User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/users`);
  }


}
