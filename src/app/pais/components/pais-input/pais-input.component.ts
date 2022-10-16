import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit{

  @Input() placeholder: string = "";


  @Output() onEnviar  : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer : Subject<string> = new Subject();


  termino: string = "";

  ngOnInit(){
    this.debouncer.pipe(
      debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    });
  }

  teclaPresionada(){
    
    this.debouncer.next( this.termino );

  }

  buscar(){
    this.onEnviar.emit( this.termino );
  }

}
