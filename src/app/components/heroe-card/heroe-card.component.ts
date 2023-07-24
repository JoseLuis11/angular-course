import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import Heroe from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.sass']
})
export class HeroeCardComponent {
    
    @Input()
    heroe: Heroe = {} as Heroe;
    
    @Input()
    id: number | undefined = 0;

    @Output()
    selectedHeroe: EventEmitter<number>;

    constructor () {
        this.selectedHeroe = new EventEmitter();
    }

    seeHeroe() {
        this.selectedHeroe.emit(this.id)
    }
}
