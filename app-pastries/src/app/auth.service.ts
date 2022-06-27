import { Injectable } from '@angular/core';
import { USER_TOKEN, UserToken } from './users-token';
import { environment as env } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './users-token';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userUrl = env.userUrl;

  private userToken: UserToken[] = USER_TOKEN;

  constructor(private http: HttpClient) { }

  auth(email: string, password: string): boolean {

    let user = this.userToken.find(userToken => userToken.email == email)
    // let user_token: string = user.token
    // console.log(token);
    // let user: Observable<User>;
    let confirmAuth: boolean;

    if (user){
      let user_db: Observable<User>;

      user_db = this.http.get<User>(`${this.userUrl}/${user.token}`);
      // user_db.password === password
      if (password === '1234'){
        confirmAuth = true;
      } else {
        confirmAuth = false;
      }
    } else {
      confirmAuth = false;
    }


    return confirmAuth;
  }


}
