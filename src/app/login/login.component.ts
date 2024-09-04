import { Component } from '@angular/core';
import { Atm } from '../model/Atm';
import { AtmService } from '../atm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  atm = new Atm('', '', new Date(), '', '');
  loginStatus: string = '';
  http: any;
  

  constructor(private atmService: AtmService, private router: Router) { }

  login() {
    console.log(JSON.stringify(this.atm));
    this.atmService.validateLogin(this.atm).subscribe(
      data => {
        if (data) {
          this.loginStatus = 'Login successful!';
          this.router.navigate(['/withdraw']); 
        } else {
          this.loginStatus = 'Invalid card number or pin.';
        }
      },
      error => {
        console.error('Error during login', error);
        this.loginStatus = 'An error occurred during login.';
      }
    );
  }
}
