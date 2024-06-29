import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVideogameComponent } from './agregar-videogame.component';

describe('AgregarVideogameComponent', () => {
  let component: AgregarVideogameComponent;
  let fixture: ComponentFixture<AgregarVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarVideogameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
