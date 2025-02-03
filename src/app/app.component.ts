import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestePatternService } from './services/teste-pattern.service';
import { TesteComponent } from "./components/teste/teste.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TesteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'aula003';

  constructor(private testeService: TestePatternService) {}

  ngOnInit(): void {
    this.testeService.observable.subscribe({
      next: (value) => console.log('Valor emitido:', value),
      error: (err) => console.error('Erro:', err),
      complete: () => console.log('Sequência completa!'),
    });
  }
}
