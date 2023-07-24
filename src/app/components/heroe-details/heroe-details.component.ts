import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Heroe from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.component.html',
})
export class HeroeDetailsComponent {

    heroe: Heroe = {} as Heroe;

    constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
        this.activatedRoute.params.subscribe(params => {
            const { id } = params;
            this.heroe = this.heroesService.getHeroe(id);
        });
    }

    getImageSrc(home: string) {
        const completeSrc = 'assets/img/'
        return `${completeSrc}${home.toLowerCase()}.jpg`
    }
}
