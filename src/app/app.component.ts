import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
    name: string = 'Capitán America';
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    PI = Math.PI;
    percentage = 0.234;
}
