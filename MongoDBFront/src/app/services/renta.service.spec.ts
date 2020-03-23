import { TestBed } from '@angular/core/testing';

import { RentaService } from './renta.service';

describe('RentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentaService = TestBed.get(RentaService);
    expect(service).toBeTruthy();
  });
});
