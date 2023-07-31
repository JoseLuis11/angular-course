import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
})
export class ClassesComponent {
    alert = 'alert-danger'

    properties = {
        danger: false
    }

    isLoading = false;

    executeProcess() {
        this.isLoading = true;

        setTimeout(()=> this.isLoading = false, 3000)
    }
}
