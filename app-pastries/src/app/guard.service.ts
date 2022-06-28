import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})

// RESSOURCES

// >> https://www.tektutorialshub.com/angular/angular-canactivate-guard-example/



export class GuardService {

  constructor(private aS: AuthService, private router: Router) {

  }

    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  any | boolean {
    console.log(this.isLoggedIn())
    // this.isLoggedIn()
    // .then(()=> {
      // console.log('is logged');
//
      // return true;
    // })localStorage
    // .catch(()=>{
      // console.log('Promesse canActivate non acceptée')
      // return false;
    // })
    if (localStorage.getItem('isLoggedIn') == "true"){
      return true;
    } else {
      return false;
    }

  }

  public isLoggedIn(): Promise<any> {
    const isLoggedInPromise = new Promise((resolve, reject)=> {
      if (localStorage.getItem('isLoggedIn') == "true"){
        resolve(true);
      } else {
        reject(false);
      }
    })
    return (isLoggedInPromise);
  }



}
