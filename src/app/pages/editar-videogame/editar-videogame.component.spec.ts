import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVideogameComponent } from './editar-videogame.component';

describe('EditarVideogameComponent', () => {
  let component: EditarVideogameComponent;
  let fixture: ComponentFixture<EditarVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarVideogameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
