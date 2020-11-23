import { TestBed } from '@angular/core/testing';

import { RotasCursoGuardGuard } from './rotas-curso-guard.guard';

describe('RotasCursoGuardGuard', () => {
  let guard: RotasCursoGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RotasCursoGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
