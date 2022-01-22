import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistalistaComponent } from './vistalista.component';

describe('VistalistaComponent', () => {
  let component: VistalistaComponent;
  let fixture: ComponentFixture<VistalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistalistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
