import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>Css works</p>
  `,
  styles: [`
    p 
      color: red
      font-size: 20px
  `]
})
export class CssComponent {
}
