import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  constructor(private router:Router,
              private authService:AuthService) { }

  login() {
    //Ir al backens
    //Un usuario
    //Navegar a la pantalla de heroes
    this.authService.login()
      .subscribe(auth => {
        console.log(auth);
        if(auth.id){
          this.router.navigate(['./heroes']);
        }
      })
  }


}
