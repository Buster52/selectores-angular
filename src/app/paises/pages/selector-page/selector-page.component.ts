import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  miForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
  });

  regiones: string[] = [];

  constructor(private fb: FormBuilder, private paiseService: PaisesService) {}

  ngOnInit(): void {
    this.regiones = this.paiseService.regiones;
  }

  guardar() {
    console.info(this.miForm.value);
  }
}
