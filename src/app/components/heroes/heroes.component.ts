import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

import Heroe from '../../interfaces/heroe.interface'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

    heroes: Heroe[] = [];
    
    constructor (private heroesService: HeroesService ) {

    }

    ngOnInit(): void {
        this.heroes = this.heroesService.getHeroes();
        console.log(this.heroes);
        
    }
}
