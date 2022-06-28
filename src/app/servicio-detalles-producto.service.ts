import { Injectable, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class ServicioDetallesProductoService {

  @Output() disparadorDetalle: EventEmitter<any> = new EventEmitter()

  constructor() { }
}
