import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleperfilComponent } from './detalleperfil.component';

describe('DetalleperfilComponent', () => {
  let component: DetalleperfilComponent;
  let fixture: ComponentFixture<DetalleperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
