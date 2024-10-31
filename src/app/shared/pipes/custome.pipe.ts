import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custome',
  standalone: true
})
export class CustomePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
