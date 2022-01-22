import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacuadriculaComponent } from './vistacuadricula.component';

describe('VistacuadriculaComponent', () => {
  let component: VistacuadriculaComponent;
  let fixture: ComponentFixture<VistacuadriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistacuadriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistacuadriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
