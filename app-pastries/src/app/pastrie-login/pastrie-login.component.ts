import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../pastrie'
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from '@angular/router';
@Component({
  selector: 'app-pastrie-login',
  templateUrl: './pastrie-login.component.html',
  styleUrls: ['./pastrie-login.component.scss']
})
export class PastrieLoginComponent implements OnInit {

  modelUser :User = new User('','', '');

  constructor(
    private aS: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      aS.auth(this.modelUser.email, this.modelUser.password)
  }

  ngOnInit(): void {
  }

  // récupération des données du formulaire
  onSubmit(form: NgForm): void {
    console.log(form);
    console.log(this.modelUser)
    this.connection(form);
  }

  async connection(form: NgForm){
    await this.aS.login(this.modelUser.email, this.modelUser.password)
    .then(()=> {
      // If the primise is kept going to the Dashboard by Angular Routing
      this.router.navigate(['/admin/pastrie']);
    })
    // Else reset the formulary
    .catch(() => {
      form.reset()
    })
  }

}
