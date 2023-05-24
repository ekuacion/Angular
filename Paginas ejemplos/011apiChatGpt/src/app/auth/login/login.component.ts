import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  protected login() {
    console.log("login");
    
    this.authService.login(this.username, this.password).subscribe( data =>{        
      console.log(data);

      
    })
  }
}
