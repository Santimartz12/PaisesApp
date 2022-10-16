import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `
    .bandera__pais{
      width:40px
    }
    `
  ]
})


export class PaisTablaComponent {

  @Input() paisList: Country[] = []; 

}
