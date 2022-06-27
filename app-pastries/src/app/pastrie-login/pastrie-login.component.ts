import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../pastrie'
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-pastrie-login',
  templateUrl: './pastrie-login.component.html',
  styleUrls: ['./pastrie-login.component.scss']
})
export class PastrieLoginComponent implements OnInit {

  modelUser :User = new User('','', '');

  constructor(private aS: AuthService) {

  }

  ngOnInit(): void {
  }

  // récupération des données du formulaire
  onSubmit(form: NgForm): void {
    console.log(form);
    console.log(this.modelUser)
  }

  login(){

  }

}
