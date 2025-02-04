import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestePatternService {
  subjectTeste = new Subject<number>();

  constructor() {}

  observable = new Observable<number>((observer) => {
    let count = 1;
    const intervalId = setInterval(() => {
      observer.next(count);
    /*   if (count == 4) {
        observer.error('Alguma coisa deu errada -> Batatinha');
      } */
      count++;
      if (count > 5) {
        observer.complete();
        clearInterval(intervalId);
      }
    }, 1000);
  });
}
