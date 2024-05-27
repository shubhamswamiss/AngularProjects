import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToInr'
})
export class UsdToInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const x:number[] = args;
    console.log(x);
    return  value * x[0] * x[1];
  }

}
