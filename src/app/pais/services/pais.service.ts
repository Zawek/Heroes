import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  get httpParams() {
     return new HttpParams().set('fields', 'capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url)
    .pipe(
      tap(console.log)
    );
    // return this.http.get(url)
              // .pipe(
              //   catchError(err => of([]))
              // );
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }

  buscarRegion( region: string): Observable<Country[]> {
    const url = `https://restcountries.com/v2/regionalbloc/${region}`;

    // return this.http.get<Country[]>(url, {params: this.httpParams})
    return this.http.get<Country[]>(url)
      .pipe(
        tap(console.log)
      );
  }

}
