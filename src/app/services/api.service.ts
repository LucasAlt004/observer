import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';
  private httpOptionsDefault = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<{ id: number; name: string; email: string }[]> {
    // tipar o retorno

    return this.http.get<{ id: number; name: string; email: string }[]>(
      `${this.apiUrl}/users`
    );
  }

  public sendUser(user: { name: string; email: string }): Observable<unknown> {
    return this.http.post<unknown>(`${this.apiUrl}/users`, {...user});
    // sem os ...
   /*  {
      user: {
        name: 'sadas',
        email: 'asdas',
      }
    } */

    // com os ...
    /* {
      name: 'asdasd',
      email: 'adasd'
    } */
  }
}
