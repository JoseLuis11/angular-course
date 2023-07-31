import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

    isAuthenticated = false;

    constructor(public auth: AuthService) {}

    ngOnInit(): void {
        this.auth.isAuthenticated$.subscribe(isAuthenticated => {
            this.isAuthenticated = isAuthenticated;
        })
    }
    
}
