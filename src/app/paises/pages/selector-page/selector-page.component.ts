import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  miForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
  });

  regiones: string[] = [];
  paises: PaisSmall[] = [];

  constructor(private fb: FormBuilder, private paiseService: PaisesService) {}

  ngOnInit(): void {
    this.regiones = this.paiseService.regiones;

    this.miForm
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => this.miForm.get('pais')?.reset('')),
        switchMap((region) => this.paiseService.getCountriesByRegion(region))
      )
      .subscribe((paises) => {
        this.paises = paises;
      });
  }

  guardar() {
    console.info(this.miForm.value);
  }
}
