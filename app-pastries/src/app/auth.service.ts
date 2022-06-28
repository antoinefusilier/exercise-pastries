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

  auth(email: string, password: string): boolean | any{

    // let user = this.userToken.find(userToken => userToken.email == email)
    // // let user_token: string = user.token
    // // console.log(token);
    // // let user: Observable<User>;
    // let confirmAuth: boolean;
    // console.log('user interne find =' + user);
    // if (user){
    //   let user_db: Observable<User>;

    //   user_db = this.http.get<User>(`${this.userUrl}/${user.token}`);
    //   // user_db.password === password
    //   console.log('User in database = ', user_db )

    //   if (password === '1234'){
    //     confirmAuth = true;
    //   } else {
    //     confirmAuth = false;
    //   }
    // } else {
    //   confirmAuth = false;
    // }


    // return confirmAuth;
  }
  login(email: string, password: string): Promise<any> {

    const isPromise = new Promise<any>((resolve, reject) => {

      // Getting user token by the form Email (input)
      let user = this.userToken.find(userToken => userToken.email == email)
      console.log('User in app =',user);

      // If user find ;
      if (user) {
        let user_db: Observable<User>;

        // Getting user by token in database
        user_db = this.http.get<User>(`${this.userUrl}/${user.token}`);
        // Console confirm
        user_db.subscribe(x => console.log('User in database = ', x));

        user_db.subscribe(x => {
        // If password is password input
          if ( x.password === password){
            resolve("Accept password");
          } else {
            reject("Reject password");
          }
        })
      } else {
        // If no user fund with email input
        reject("No user")
      }
    });
    // callback of the primise
    return (isPromise);
  }
}
