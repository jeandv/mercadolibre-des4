import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ServicioDetallesProductoService } from 'src/app/servicio-detalles-producto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  @Input() busqueda: string = '';

  imagesBanner = ['banner1', 'banner2', 'banner3', 'banner4', 'banner5'].map((n) => `../assets/images/${n}.webp`);
  imagesProductos = ['reloj', 'tv', 'secador', 'usb', 'bajo', 'auxiliar', 'forro', 'alfombra', 'correa', 'volante', 'discoDuro', 'memoria', 'mouse', 'cornetas', 'tarjeta'].map((n) => `../assets/images/${n}.webp`);

  datosProductos =
    {
      ultimaVisita: [
        {
          id: 1,
          titulo: 'Reloj Inteligente Smart Band X9 Sport Fit Cardiaco Calorias',
          precio: 15,
          tipoEnvio: true,
          imagen: this.imagesProductos[0]
        },
        {
          id: 2,
          titulo: 'Televisor Daewoo 58 Uhd Smart 4k Android 9.0 Isdbt',
          precio: 479,
          tipoEnvio: false,
          imagen: this.imagesProductos[1]
        },
        {
          id: 3,
          titulo: 'Secador De Cabello Infinitipro Conair',
          precio: 41,
          tipoEnvio: true,
          imagen: this.imagesProductos[2]
        },
        {
          id: 4,
          titulo: 'Tarjeta Red Usb Adaptador Micro Wifi 300mb Tp-link Mercusys',
          precio: 20,
          tipoEnvio: false,
          imagen: this.imagesProductos[3]
        },
        {
          id: 5,
          titulo: 'Bajo 10 Power Bass Doble Bobina 1500w 4 Ohm',
          precio: 99,
          tipoEnvio: false,
          imagen: this.imagesProductos[4]
        }
      ],
      relacionVehiculos: [
        {
          id: 6,
          titulo: 'Auxiliar De Audio Bluetooth X8 Para Reproductor Carro Fm',
          precio: 7,
          tipoEnvio: false,
          imagen: this.imagesProductos[5]
        },
        {
          id: 7,
          titulo: 'Forro Para Carro Toyota Corolla Aveo Optra Lancer Sedan',
          precio: 60,
          tipoEnvio: true,
          imagen: this.imagesProductos[6]
        },
        {
          id: 8,
          titulo: 'Kit Alfombras Tipo Bandeja 4 Piezas Para Carro Oferta',
          precio: 15,
          tipoEnvio: false,
          imagen: this.imagesProductos[7]
        },
        {
          id: 9,
          titulo: 'Correa Aire Acondicionado Volkswagen Fox Crossfox Spacefox',
          precio: 5,
          tipoEnvio: true,
          imagen: this.imagesProductos[8]
        },
        {
          id: 10,
          titulo: 'Forro De Volante Excelente Calidad Tipo Cuero Somos Tienda!',
          precio: 5,
          tipoEnvio: false,
          imagen: this.imagesProductos[9]
        }
      ],
      relacionComputacion: [
        {
          id: 11,
          titulo: 'Disco Duro Solido Addlink S20 120gb Ssd 2.5 Sata 3 6gb/s',
          precio: 25,
          tipoEnvio: true,
          imagen: this.imagesProductos[10]
        },
        {
          id: 12,
          titulo: 'Memoria 2gb Ddr2 800 Compatible 667 533 Intel Amd Mac Nueva',
          precio: 10,
          tipoEnvio: false,
          imagen: this.imagesProductos[11]
        },
        {
          id: 13,
          titulo: 'Mouse Optico Usb 1200dpi 3d Cable Laptop Computadora Luz Led',
          precio: 4,
          tipoEnvio: true,
          imagen: this.imagesProductos[12]
        },
        {
          id: 14,
          titulo: 'Cornetas Speaker Pc Escritorio Computadora Laptop Usb 3w',
          precio: 5,
          tipoEnvio: false,
          imagen: this.imagesProductos[13]
        },
        {
          id: 15,
          titulo: 'Tarjeta Madre Arktek H61m Socket 1155 Somos Tienda',
          precio: 85,
          tipoEnvio: true,
          imagen: this.imagesProductos[14]
        }
      ],
    };

  public datosSelec: Array<any> = [];

  // tituloSelec: string = '';

  mostrarDetalle(id: number, titulo: string, precio: number, tipoEnvio: boolean, imagen: string) {

    // this.datosSelec =
    //   [
    //     {
    //       idSelect: id,
    //       tituloSelec: titulo,
    //       precioSelec: precio,
    //       tipoEnvioSelec: tipoEnvio,
    //       imagenSelect: imagen
    //     }
    //   ]

    this.datosSelec =
      [
        id,
        titulo,
        precio,
        tipoEnvio,
        imagen
      ]



    this.servicioDetalle.disparadorDetalle.emit({
      datos: this.datosSelec,

    });

  }

  constructor(config: NgbCarouselConfig, private servicioDetalle: ServicioDetallesProductoService) {
    config.interval = 4000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

}
