import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //Injectacos el router en el constructor
  constructor(private router: Router) { }

  login() {
    //llamamos la ruta home
    this.router.navigate(['/home']);
  }
}
