import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais! : Country[];

  constructor( 
    private ActivateRoute : ActivatedRoute,
    private paisService: PaisService,
    ) { }

  ngOnInit(): void {

    this.ActivateRoute.params.pipe(
      switchMap(({id}) => {
        return this.paisService.verPais(id);
      }),
      tap( console.log )
    ).subscribe(resp => { this.pais = resp })


    //Esta es la forma complicada de hacerlo:
    
    // this.ActivateRoute.params.subscribe( ({id}) => {
    //   console.log(id);

    //   this.paisService.verPais(id).subscribe(
    //     pais=>{
    //       console.log(pais)
    //     }
    //   )
    // })
  }
}