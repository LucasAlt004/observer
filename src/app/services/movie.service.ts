import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3/movie';

  private defaultHeaders = {
    Authorization: 'Bearer ' + environment.apiKey,
  };

  constructor(private http: HttpClient) {}

  public getPopularMovies(
    language: string,
    page: number
  ): Observable<{ results: [] }> {
    // tipar o retorno

    const params = new HttpParams(); // query params
    params.set('language', language);
    params.set('page', page);

    return this.http.get<{ results: [] }>(`${this.apiUrl}/popular`, {
      params: params,
      headers: this.defaultHeaders,
    });
  }

  public getNowPlayingMovies(): Observable<unknown> {
    return this.http.get(`${this.apiUrl}/....`)
  }
}
