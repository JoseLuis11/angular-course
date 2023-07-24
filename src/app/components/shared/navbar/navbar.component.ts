import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

    constructor(private router: Router) {

    }

    searchHeroes(searchTerm : string) {
        this.router.navigate(['heroes-results', searchTerm])
    }
}
