import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private _regiones: string[] = [
    'Africa',
    'America',
    'Asia',
    'Europa',
    'Oceania',
  ];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor() {}
}
