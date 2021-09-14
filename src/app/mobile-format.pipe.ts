import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileFormat'
})
export class MobileFormatPipe implements PipeTransform {

  transform(value: string): string {
    const first = value.slice(0,3);
    const second = value.slice(3,7);
    const third = value.slice(7,10);

    return '(' + first + ')-' + second + '-' + third;
  }

}
