import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  constructor(private auth: AuthenticationService) { }
    handleLogin(emailIn: string, passIn: string): void {
        console.log('Logging in');
        this.auth.login(emailIn, passIn);
    }
  ngOnInit(): void{

  }
}
