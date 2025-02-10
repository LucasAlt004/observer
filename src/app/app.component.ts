import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestePatternService } from './services/teste-pattern.service';
import { TesteComponent } from './components/teste/teste.component';
import { TesteNovoComponent } from './components/teste-novo/teste-novo.component';
import { MovieService } from './services/movie.service';
import { CommonModule, JsonPipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'aula003';
  movies = [];
  emailModel: string = '';
  nameModel: string = '';
  meuFormulario: FormGroup;
  formInvalido: boolean = false;

  constructor(
    private testeService: TestePatternService,
    private movieService: MovieService,
    private apiService: ApiService
  ) {
    this.meuFormulario = new FormGroup({
      name: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe({
      next: (values) => console.log(values),
    });

    this.apiService.sendUser({ name: 'JONAS', email: 'judson@lontano.jonas' }).subscribe({
      next: (val) => console.log(val)
    })
    console.log(this.meuFormulario.get('name')?.invalid);
    /*  this.meuFormulario.get('name')?.valueChanges.subscribe({
      next: (val) => {
        if (this.meuFormulario.get('name')?.errors) {
          console.log(this.meuFormulario.get('name')?.errors);
          this.formInvalido = true;
        } else {
          this.formInvalido = false;
        }
      },
    }); */
  }

  onSubmit() {
    console.log(' campo', this.meuFormulario.get('name'));
    console.log(this.meuFormulario);
  }

  alteraValorSubject(): void {
    let value = 10;

    const intervalId = setInterval(() => {
      this.testeService.subjectTeste.next(value);

      value += 10;

      if (value >= 50) {
        this.testeService.subjectTeste.complete();
        clearInterval(intervalId);
      }
    }, 5000);
  }
}
