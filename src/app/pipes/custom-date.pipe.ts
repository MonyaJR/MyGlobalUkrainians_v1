import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, locale?: any, format?: any): any {
    let date = new Date(value);
    let result;

    switch (format) {
      case 'full':
        result = date.toLocaleString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
        break;
      default:
        result = date.toLocaleString(locale);
        break;
    }

    return result;
  }

}
