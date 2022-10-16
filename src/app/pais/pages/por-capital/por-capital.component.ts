import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(texto: string) {

    this.hayError = false;
    this.termino = texto;

    this.paisService.buscarCapital(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises;
      },
      error: (err) => {
        console.error("Error");
        console.info(err);
        this.hayError = true;
      }
    })
  }
}
