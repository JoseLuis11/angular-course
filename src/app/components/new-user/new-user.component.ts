import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
})
export class NewUserComponent {
    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.parent?.params.subscribe(params => console.log('child', params))
    }
}
