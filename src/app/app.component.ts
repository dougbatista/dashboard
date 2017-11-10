import { Component } from '@angular/core';
import { AuthService } from '../services/services.auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _authService: AuthService, private router: Router){}

  logout() {
    this._authService.logout();
    this.router.navigate(['/login']);
  }
}
