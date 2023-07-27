import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validateImageUrl'
})
export class ValidateImageUrlPipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return 'assets/img/no-image.jpeg'
    }
    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/no-image.jpeg'
    }
  }

}
