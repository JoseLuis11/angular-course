import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.sass']
})
export class BodyComponent {

    phrase = {
        message: 'Un gran poder requiere una gran responsabilidad',
        author: 'Ben Parker'
    }

    isPhraseShowing = true;

    characters = ['Spiderman', 'Venom', 'Mary Jane']

    togglePhrase() {
        this.isPhraseShowing = !this.isPhraseShowing;
    }

}