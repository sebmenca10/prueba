import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficfollowComponent } from './graficfollow.component';

describe('GraficfollowComponent', () => {
  let component: GraficfollowComponent;
  let fixture: ComponentFixture<GraficfollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficfollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficfollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
