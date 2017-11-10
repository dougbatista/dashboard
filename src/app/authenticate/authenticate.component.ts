import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/services.auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit  {

  cd_restaurante;
  senha;
 
 
  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit() {
    this._authService.logout();    
  }

  login() {

    let credentials = {
      cd_restaurante: this.cd_restaurante,
      senha: this.senha
    }

    this._authService.auth(credentials).then((res) => {
      if(res) {
        this.router.navigate(['/']);
      }else {
        console.log('Senha ou login incorreto');
      }
    });
  }

}
