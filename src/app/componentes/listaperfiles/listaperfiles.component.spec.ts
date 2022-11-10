import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaperfilesComponent } from './listaperfiles.component';

describe('ListaperfilesComponent', () => {
  let component: ListaperfilesComponent;
  let fixture: ComponentFixture<ListaperfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaperfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaperfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
