import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `
    .list-group-item-action{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(texto: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = texto;

    this.paisService.buscarPais(this.termino).subscribe({
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

  sugerencias(termino: string){
    this.mostrarSugerencias = true;
    this.hayError = false;

    if( termino.length <= 0){this.mostrarSugerencias = false; return}

    this.termino = termino;


    this.paisService.buscarPais(termino)
    .subscribe({
      next: resp => this.paisesSugeridos = resp.splice(0,4),
      error: err => this.paisesSugeridos = []
    })

  }

  buscarSugerido( termino: string){
    this.buscar(termino);
  }

}