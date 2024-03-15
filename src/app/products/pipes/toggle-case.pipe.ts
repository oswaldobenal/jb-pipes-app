import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'togglePipe',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
