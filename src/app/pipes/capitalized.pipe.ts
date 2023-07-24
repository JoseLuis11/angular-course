import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {
    value = value.toLocaleLowerCase();
    let names = value.split(' ');

    if(all) {
        names = names.map(name => name[0].toUpperCase() + name.slice(1))
    } else {
        names[0] = names[0][0].toUpperCase() + names[0].slice(1);
    }
    return names.join(' ');
  }

}
