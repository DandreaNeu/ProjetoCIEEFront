import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../models/Filme';

@Injectable()
export class FilmeService {
  baseURL = 'https://localhost:5001/api/filmes'
  constructor(private http: HttpClient) { }

  public getFilmes(): Observable<Filme[]>{
    return this.http.get<Filme[]>(this.baseURL);
  }

  public getFilmesByGenero(genero: string): Observable<Filme[]>{
    return this.http.get<Filme[]>(`${this.baseURL}/${genero}/genero`);
  }

  public getFilmeById(id: number): Observable<Filme[]>{
    return this.http.get<Filme[]>(`${this.baseURL}/${id}`);
  }

  public postFilme(filme: Filme): Observable<Filme>{
   return this.http.post<Filme>(this.baseURL, filme);
  }

  public putFilme(id: number , filme: Filme): Observable<Filme>{
    return this.http.put<Filme>(`${this.baseURL}/${id}`, filme);
  }

  public deleteFilme(id: number ): Observable<string>{
    return this.http.delete<string>(`${this.baseURL}/${id}`);
  }
}
