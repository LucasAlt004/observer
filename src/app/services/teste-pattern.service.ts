import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestePatternService {

  constructor() {}

  observable = new Observable<number>((observer) => {
    let count = 1;
    const intervalId = setInterval(() => {
      observer.next(count);
      count++;
      if (count > 5) {
        observer.complete();
        clearInterval(intervalId);
      }
    }, 1000);
  });
}
