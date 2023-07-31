import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => console.log('padre', params))
    }
}
