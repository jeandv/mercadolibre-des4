import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioDetallesProductoService } from 'src/app/servicio-detalles-producto.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  // descripcion: Descripcion

  constructor(private route: ActivatedRoute, private servicioDetalle: ServicioDetallesProductoService) { }

  // public ded: Array<any> = [];

  // detallesProductoSeleccionado: any[] = [];

  // detallesProductoSeleccionado =
  //   [
  //     this.ded[0].datos[0].tituloSelec,
  //     2
  //   ]

  // idSeleccionado: number = 0;
  // tituloSeleccionado: string = '';
  // precioSeleccionado: number = 0;
  // tipoEnvioSeleccionado: boolean = false;
  // imagenSeleccionado: string = '';


  ngOnInit(): void {
    this.getDescripcion();



    // this.servicioDetalle.disparadorDetalle.subscribe(datos => {

    //   this.detallesProductoSeleccionado.push(datos);

    // this.tituloSeleccionado = this.detallesProductoSeleccionado[0].datos[1];

    // this.tituloSeleccionado = this.detallesProductoSeleccionado[0].datos[1];

    // this.detallesProductoSeleccionado =
    //   [
    //     this.ded[0].datos[0].tituloSelec,
    //     2
    //   ]

    // console.log(datos)

    // console.log(this.detallesProductoSeleccionado[0].datos[1]);

    // console.log(this.ded[0].datos[0].tituloSelec)
    // });

    // this.tituloSeleccionado = this.detallesProductoSeleccionado[0].datos[1];

    // }
  }


  getDescripcion(): void {
    const id = this.route.snapshot.paramMap.get('id');
  }

}
