import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string = '', firstDigits = 4, lastDigits = 4): string {
    if (value) {
      value = value.toString();
      const lastPoint = value.length - lastDigits;
      const firstPart = value.substring(0, firstDigits);
      const middlePart = value.substring(firstDigits, lastPoint);
      const lastPart = value.substring(lastPoint);
      return `${firstPart} ${middlePart.replace(/\d/g, 'X')} ${lastPart}`;
    }
    return value;
  }

}
