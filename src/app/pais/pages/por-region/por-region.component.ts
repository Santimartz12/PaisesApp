import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[
    `
    button{
      margin: 5px;
    }
    `
  ]
})
export class PorRegionComponent{

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"]
  regionActiva: string = ""
  paises: Country[] = [];
  estaCargando: boolean = false;

  constructor(private paisServices: PaisService) { }

  estiloCSS(region : string) : string{
    return (this.regionActiva === region) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion( region: string ){

    if(this.regionActiva == region){ return }

    this.paises = [];
    this.estaCargando = true;
    this.regionActiva = region;

    this.paisServices.buscarPorRegion(this.regionActiva).subscribe({
      next: (paises) => {
        this.paises = paises;
        this.estaCargando = false;
      },
      error: (err) => {
        console.error("Error");
        console.info(err);
      }
    })
  }

  

}
