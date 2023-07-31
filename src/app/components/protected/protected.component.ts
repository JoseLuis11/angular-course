import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular'
@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.sass']
})
export class ProtectedComponent {

    constructor(public auth: AuthService) {}


}
