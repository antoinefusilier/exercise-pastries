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
            this.setSession();
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

  setSession(){
    let token_session = this.generateTokenAccess(15);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('token_session', token_session);
    console.log('Variable isLoggedIn Boolean :',localStorage.getItem('isLoggedIn'))
    console.log('Token of session :',localStorage.getItem('token_session'))

  }



  generateTokenAccess(length:number){
    var chain = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&<>*-";
    var password = "";
    var lgt = length;

    // Condition afin de définir un password de 10 caratère si le paramètre de la fonction randomPassword()n'a pas été défini
    if (!lgt) {
      lgt = 10;
    }

    for (let i = 0; i < lgt; i++) {

      // Ou charAt returne le caractère de la position demandé par le paramètre
      // Ou Math.floor() renverra un entier, permet de controler et éviter les nombre décimaux
      // Ou Math.random() renverra un nombre entier de façon "random" compris entre 0 et le * max(défini ci-dessous)
      // Ou chain.length défini le Max du Math.random
      password = password.concat(chain.charAt(Math.floor(Math.random() * chain.length)));

    }
    return password;
  }


}


