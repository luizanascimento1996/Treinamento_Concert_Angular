import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotasCursosComponent } from './rotas-cursos.component';

describe('RotasCursosComponent', () => {
  let component: RotasCursosComponent;
  let fixture: ComponentFixture<RotasCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotasCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotasCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
