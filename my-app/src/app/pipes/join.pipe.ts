import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    name: 'join'
})

export class JoinPipe implements PipeTransform {
 transform(arr: Array<any>, start: number, end: number, args?: any, ): string {
        let res = '';
        arr = arr.slice(start-1, end-1);
        res = arr.join(' and ');
        return res;
 }
}