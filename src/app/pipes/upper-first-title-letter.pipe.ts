import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirstTitleLetter'
})
export class UpperFirstTitleLetterPipe implements PipeTransform {

  transform(value: string): string {
    let charArray = value.split(' ');
    
    charArray.forEach((word, index) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();

      charArray[index] = firstLetter + rest;
    });
    
    return charArray.join(' ');
  }
}