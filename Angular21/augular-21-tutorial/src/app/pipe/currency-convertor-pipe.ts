import { Pipe, PipeTransform } from '@angular/core';

//ng generate pipe pipe/currencyConvertor

@Pipe({
  name: 'currencyConvertor',
})
export class CurrencyConvertorPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    console.log(args);
    if(args.length>0){
      let [data] = args
      return value*data;
    }else{
      return value;
    }
  }

  // transform(value: string): string {
  //   return value.split('').reverse().join('');
  // }
}
