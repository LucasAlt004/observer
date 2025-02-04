import { Component, OnInit } from '@angular/core';
import { TestePatternService } from '../../services/teste-pattern.service';

@Component({
  selector: 'app-teste',
  imports: [],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css',
})
export class TesteComponent implements OnInit {
  constructor(private testeService: TestePatternService) {}

  ngOnInit(): void {
    /* this.testeService.observable.subscribe({
      next: (value) => console.log('Valor emitido:', value),
      error: (err) => console.error('Erro:', err),
      complete: () => console.log('Sequência completa!'),
    }); */

    this.testeService.subjectTeste.subscribe({
      next: (value) => console.log('Assinante 2 (teste) recebeu: ', value),
      error: (erro) =>
        console.error('Assinante 2 (teste) deu erro: ', erro),
      complete: () => console.log('Assinante 2 (teste): Concluído'),
    });
  }
}
