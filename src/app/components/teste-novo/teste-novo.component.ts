import { Component } from '@angular/core';
import { TestePatternService } from '../../services/teste-pattern.service';

@Component({
  selector: 'app-teste-novo',
  imports: [],
  templateUrl: './teste-novo.component.html',
  styleUrl: './teste-novo.component.css',
})
export class TesteNovoComponent {
  constructor(private testeService: TestePatternService) {}

  ngOnInit(): void {
    this.testeService.subjectTeste.subscribe({
      next: (value) => console.log('Assinante 1 (teste-novo) recebeu: ', value),
      error: (erro) =>
        console.error('Assinante 1 (teste-novo) deu erro: ', erro),
      complete: () => console.log('Assinante 1 (teste-novo): Concluído'),
    });
  }
}
