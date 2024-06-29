import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVideogameComponent } from './listar-videogame.component';

describe('ListarVideogameComponent', () => {
  let component: ListarVideogameComponent;
  let fixture: ComponentFixture<ListarVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarVideogameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
