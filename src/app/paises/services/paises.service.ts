import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private _baseUrl: string = 'https://restcountries.com/v2';
  private _regiones: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) {}

  getCountriesByRegion(region: string) {
    const url: string = `${this._baseUrl}/region/${region}?fields=alpha3Code,name`;
    return this.http.get<PaisSmall[]>(url);
  }
}
