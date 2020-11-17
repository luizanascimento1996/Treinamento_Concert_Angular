import { TestBed } from '@angular/core/testing';

import { RotasCursoSService } from './rotas-curso-s.service';

describe('RotasCursoSService', () => {
  let service: RotasCursoSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotasCursoSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
