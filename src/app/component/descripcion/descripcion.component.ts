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

  id: any;
  producto: any;
  cantidadRandom: number = Math.floor(Math.random() * 100) + 1;

  imagesProductos = ['reloj', 'tv', 'secador', 'usb', 'bajo', 'auxiliar', 'forro', 'alfombra', 'correa', 'volante', 'discoDuro', 'memoria', 'mouse', 'cornetas', 'tarjeta'].map((n) => `../assets/images/${n}.webp`);

  datosProductos = [
    {
      id: 1,
      titulo: 'Reloj Inteligente Smart Band X9 Sport Fit Cardiaco Calorias',
      precio: 15,
      vendidos: this.cantidadRandom,
      estado: 'Nuevo',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: true,
      imagen: this.imagesProductos[0],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Ultima visita',
      seccion: 'Electronica',
      tipoProducto: 'Reloj inteligente'
    },
    {
      id: 2,
      titulo: 'Televisor Daewoo 58 Uhd Smart 4k Android 9.0 Isdbt',
      precio: 479,
      vendidos: this.cantidadRandom,
      estado: 'Usado',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: false,
      imagen: this.imagesProductos[1],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Ultima visita',
      seccion: 'Electronica',
      tipoProducto: 'Smart TV'
    },
    {
      id: 3,
      titulo: 'Secador De Cabello Infinitipro Conair',
      precio: 41,
      vendidos: this.cantidadRandom,
      estado: 'Usado',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: true,
      imagen: this.imagesProductos[2],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Ultima visita',
      seccion: 'Electronica',
      tipoProducto: 'Secador de cabello'
    },
    {
      id: 4,
      titulo: 'Tarjeta Red Usb Adaptador Micro Wifi 300mb Tp-link Mercusys',
      precio: 20,
      vendidos: this.cantidadRandom,
      estado: 'Nuevo',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: false,
      imagen: this.imagesProductos[3],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Ultima visita',
      seccion: 'Electronica',
      tipoProducto: 'Adaptador red'
    },
    {
      id: 5,
      titulo: 'Bajo 10 Power Bass Doble Bobina 1500w 4 Ohm',
      precio: 99,
      vendidos: this.cantidadRandom,
      estado: 'Nuevo',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: false,
      imagen: this.imagesProductos[4],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Ultima visita',
      seccion: 'Electronica',
      tipoProducto: 'Bajo'
    },
    {
      id: 6,
      titulo: 'Auxiliar De Audio Bluetooth X8 Para Reproductor Carro Fm',
      precio: 7,
      vendidos: this.cantidadRandom,
      estado: 'Usado',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: false,
      imagen: this.imagesProductos[5],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Accesorios de Vehículos',
      seccion: 'Coches',
      tipoProducto: 'Auxiliar Bluetooh'
    },
    {
      id: 7,
      titulo: 'Forro Para Carro Toyota Corolla Aveo Optra Lancer Sedan',
      precio: 60,
      vendidos: this.cantidadRandom,
      estado: 'Nuevo',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: true,
      imagen: this.imagesProductos[6],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Accesorios de Vehículos',
      seccion: 'Coches',
      tipoProducto: 'Forro para carro'
    },
    {
      id: 8,
      titulo: 'Kit Alfombras Tipo Bandeja 4 Piezas Para Carro Oferta',
      precio: 15,
      vendidos: this.cantidadRandom,
      estado: 'Nuevo',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: false,
      imagen: this.imagesProductos[7],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Accesorios de Vehículos',
      seccion: 'Coches',
      tipoProducto: 'Alfombras'
    },
    {
      id: 9,
      titulo: 'Correa Aire Acondicionado Volkswagen Fox Crossfox Spacefox',
      precio: 5,
      vendidos: this.cantidadRandom - 5,
      estado: 'Nuevo',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: true,
      imagen: this.imagesProductos[8],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Accesorios de Vehículos',
      seccion: 'Coches',
      tipoProducto: 'Correa aire acondicionado'
    },
    {
      id: 10,
      titulo: 'Forro De Volante Excelente Calidad Tipo Cuero Somos Tienda!',
      precio: 5,
      vendidos: this.cantidadRandom,
      estado: 'Nuevo',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: false,
      imagen: this.imagesProductos[9],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Accesorios de Vehículos',
      seccion: 'Coches',
      tipoProducto: 'Forro de volante'
    },
    {
      id: 11,
      titulo: 'Disco Duro Solido Addlink S20 120gb Ssd 2.5 Sata 3 6gb/s',
      precio: 25,
      vendidos: this.cantidadRandom,
      estado: 'Nuevo',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: true,
      imagen: this.imagesProductos[10],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Computación',
      seccion: 'PC',
      tipoProducto: 'Discos duros'
    },
    {
      id: 12,
      titulo: 'Memoria 2gb Ddr2 800 Compatible 667 533 Intel Amd Mac Nueva',
      precio: 10,
      vendidos: this.cantidadRandom,
      estado: 'Nuevo',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: false,
      imagen: this.imagesProductos[11],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Computación',
      seccion: 'PC',
      tipoProducto: 'Memoria DDR2'
    },
    {
      id: 13,
      titulo: 'Mouse Optico Usb 1200dpi 3d Cable Laptop Computadora Luz Led',
      precio: 4,
      vendidos: this.cantidadRandom,
      estado: 'Usado',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: true,
      imagen: this.imagesProductos[12],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Computación',
      seccion: 'PC',
      tipoProducto: 'Mouses'
    },
    {
      id: 14,
      titulo: 'Cornetas Speaker Pc Escritorio Computadora Laptop Usb 3w',
      precio: 5,
      vendidos: this.cantidadRandom,
      estado: 'Usado',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: false,
      imagen: this.imagesProductos[13],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Computación',
      seccion: 'PC',
      tipoProducto: 'Cornetas'
    },
    {
      id: 15,
      titulo: 'Tarjeta Madre Arktek H61m Socket 1155 Somos Tienda',
      precio: 85,
      vendidos: this.cantidadRandom,
      estado: 'Nuevo',
      cantidad: this.cantidadRandom - 12,
      tipoEnvio: true,
      imagen: this.imagesProductos[14],
      opiniones: this.cantidadRandom - 5,
      categoria: 'Computación',
      seccion: 'PC',
      tipoProducto: 'Tarjetas madre'
    }
  ]

  constructor(private route: ActivatedRoute, private servicioDetalle: ServicioDetallesProductoService) { }

  ngOnInit(): void {
    // this.getDescripcion();
    this.id = this.route.snapshot.paramMap.get('id');
    this.producto = this.getDescripcion(this.datosProductos);
  }

  getDescripcion(producto: any[]): void {
    // const id = this.route.snapshot.paramMap.get('id');
    for (const p of producto) {
      if (p.id == this.id)
        return p;
    }
  }

}
