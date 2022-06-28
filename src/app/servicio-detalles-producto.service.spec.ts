import { TestBed } from '@angular/core/testing';

import { ServicioDetallesProductoService } from './servicio-detalles-producto.service';

describe('ServicioDetallesProductoService', () => {
  let service: ServicioDetallesProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDetallesProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
