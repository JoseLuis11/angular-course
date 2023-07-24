import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Heroe from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-results',
  templateUrl: './heroes-results.component.html'
})
export class HeroesResultsComponent implements OnInit {

    heroes: Heroe[] = [];
    searchTerm = '';

    constructor(private activedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {}

    ngOnInit(): void {
        this.activedRoute.params.subscribe(params => {
            const { searchTerm } = params;
            this.searchTerm = searchTerm;
            this.heroes = this.heroesService.searchHeroes(searchTerm)
        })
    }

    seeHeroe(idx: number) {
        this.router.navigate(['/heroes', idx])
    }

}
