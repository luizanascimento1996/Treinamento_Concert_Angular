import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroComponentCliComponent } from './meu-primeiro-component-cli.component';

describe('MeuPrimeiroComponentCliComponent', () => {
  let component: MeuPrimeiroComponentCliComponent;
  let fixture: ComponentFixture<MeuPrimeiroComponentCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroComponentCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiroComponentCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
