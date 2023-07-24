import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, enabled: boolean = false): string {
    if(enabled) {
        //return new Array(value.length).fill('●').join('')
        return '●'.repeat(value.length);
    }
    return value;
  }

}
