import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
    name: string = 'Capitán America';
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    name2 = 'JoSé LuIS CaSTro'

    PI = Math.PI;
    percentage = 0.234;

    salary = 1234.5

    date = new Date()


    videoUrl = 'https://www.youtube.com/embed/CWE0_DutDWA';

    promise = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('the data arrived')
        }, 4500)
    })

    i18n = 'es-MX';

    heroe = {
        name: 'Logan',
        key: 'Wolverine',
        edad: 500,
        address: {
            street: 'First',
            number: 20
        }
    }
}
