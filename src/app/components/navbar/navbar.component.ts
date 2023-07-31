import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

    isAuthenticatedChecked = false;

    constructor(public auth: AuthService) {}

    isAuthenticated() {
        return this.auth.isAuthenticated$.subscribe(isAuthenticated => {
            this.isAuthenticatedChecked = true
        })
    }

    
}
