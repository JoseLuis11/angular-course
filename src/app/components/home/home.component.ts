import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(private http: HttpClient) {
        console.log('ola');
        
        this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(data => console.log(data))
    }


}
